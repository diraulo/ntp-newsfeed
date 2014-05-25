var registerPage = function() {

  this.clickRegisterButton = function(){
    return element(by.css("btn btn-lg btn-success"));
  };
};
module.exports = new registerPage();
