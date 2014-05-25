require 'firebase'

module Agents
  class FirebaseAgent < Agent
    cannot_create_events!

    default_schedule "never"

    description <<-MD
      A FirebaseAgent receives events from other agents (or runs periodically), merges those events with the contents of `payload`, and sends the results as POST (or GET) requests to a specified url.

      Note: Only `POST` requests are handled at this time.

      The `base_uri` field must specify where you would like to send requests. You can get the link from your [FireBase application Dashboard](https://www.firebase.com/account) Please include the URI scheme (`http` or `https`).

      The `folder` field represent the folder in which your documents will be created on firebase

      The `headers` field is optional.  When present, it should be a hash of headers to send with the request.
    MD

    event_description "Does not produce events."

    def default_options
      {
        'base_uri' => "https://you-generated-app-unique-name.firebaseio.com/",
        'expected_receive_period_in_days' => 1,
        'method' => 'post',
        'folder' => 'test',
        'payload' => {
          'key' => 'value'
        },
        'headers' => {}
      }
    end

    def working?
      last_receive_at && last_receive_at > options['expected_receive_period_in_days'].to_i.days.ago && !recent_error_logs?
    end

    def method
      (options['method'].presence || 'post').to_s.downcase
    end

    def headers
      options['headers'].presence || {}
    end

    def folder
      (options['folder'].presence || 'demo').to_s.downcase
    end

    def validate_options
      unless options['base_uri'].present? && options['expected_receive_period_in_days'].present?
        errors.add(:base, "base_uri and expected_receive_period_in_days are required fields")
      end

      if options['payload'].present? && !options['payload'].is_a?(Hash)
        errors.add(:base, "if provided, payload must be a hash")
      end

      if options['folder'].present? && !options['string'].is_a?(String)
        errors.add(:base, "if provided, folder must be a string")
      end

      unless %w[post get].include?(method)
        errors.add(:base, "method must be 'post' or 'get'")
      end

      unless headers.is_a?(Hash)
        errors.add(:base, "if provided, headers must be a hash")
      end
    end

    def receive(incoming_events)
      incoming_events.each do |event|
        handle (options['payload'].presence || {}).merge(event.payload)
      end
    end

    def check
      handle options['payload'].presence || {}
    end

    def generate_uri(params = nil)
      uri = URI options[:base_uri]
      uri.query = URI.encode_www_form(Hash[URI.decode_www_form(uri.query || '')].merge(params)) if params
      uri
    end

    private

    def handle(data)
      if method == 'post'
        post_data(data)
      # elsif method == 'get'
      #   get_data(data)
      else
        error "Invalid method '#{method}'"
      end
    end

    def post_data(data)
      firebase = Firebase::Client.new(generate_uri)
      response = firebase.push("todos", data)
    end

    # def get_data(data)
    #
    # end
  end
end
