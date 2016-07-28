/* Server */

Meteor.publish('theUsers', function () {
  return Users.find({});
});

Meteor.startup(function () {
  
});

Accounts.onCreateUser(function(user) {
  user.gamesPlayed = 0;
  return user;
});
