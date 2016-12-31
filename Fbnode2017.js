var login = require("facebook-chat-api");
login({email: "Your-Username", password: "Your-Password"}, function callback (err, api) {
	var expire = api.expire
  if(err) return console.error(err);

  api.getFriendsList(function(err, data) {
    if(err) return console.error(err);
    for(var i =0 ; i<=data.length ; i++){
    console.log(data[i].userID);
    var id = ""+data[i].userID;
    var msg = {body: "Maybe this New Year is going to be the one that fulfills all your dreams and so start it with a joyful and a vibrant soul! Here’s wishing you a prosperous new year!"};
    api.sendMessage(msg,id);

    }
  });
});