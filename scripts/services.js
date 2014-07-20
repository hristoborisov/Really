angular.module("Really.services", [])
.factory("ChatService", function() {
    var ref = new Firebase("https://really.firebaseio.com/chat");
    return {
      getMessages: function() {
        var messages = [];
        ref.on("child_added", function(snapshot) {
          messages.push(snapshot.val());
        });
        return messages;
      },
      addMessage: function(message) {
        ref.push(message);
      }
    }
  })
.factory("AuthService", function(){
    var reallyRef = new Firebase("https://really.firebaseio.com");
    var auth = new FirebaseSimpleLogin(reallyRef, function(error,user){
      if(error){
        console.log(error);
      }
    });

    return {
      createUser: function(email, password){
        auth.createUser(email, password, function(error, user) {
          if (error) {
            console.log(error);
          }
        });
      },
      loginUser: function(email, password){
        auth.login('password',{
                          email: email, 
                          password: password});
      } 
    }
});