# firebase_agent

A FirebaseAgent receives events from other agents (or runs periodically), merges those events with the contents of `payload`, and sends the results as POST (or GET) requests to a specified url.

Note: Only `POST` requests are handled at this time.

The `base_uri` field must specify where you would like to send requests. You can get the link from your [FireBase application Dashboard](https://www.firebase.com/account) Please include the URI scheme (`http` or `https`).

The `folder` field represent the folder in which your documents will be created on firebase

The `headers` field is optional.  When present, it should be a hash of headers to send with the request.


## Installation

This needs to be added to app/models/agents in [Huginn's Rails app](https://github.com/cantino/huginn). Once deployed the agent will apear on list of all available agents.

