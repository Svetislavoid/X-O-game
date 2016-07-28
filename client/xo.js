/* Client */

Meteor.subscribe('theUsers');

Template.body.helpers({
  users: function() {
    return Users.find();
  }
});

Template.body.events({

});

Template.stats.helpers({
  gamesPlayed: function() {
    return Users.findOne({_id: Meteor.userId()}).profile.gamesPlayed;
  },
  gamesWon: function() {
    return Users.findOne({_id: Meteor.userId()}).profile.gamesWon;
  },
  gamesWonAsX: function() {
    return Users.findOne({_id: Meteor.userId()}).profile.gamesWonAsX;
  },
  gamesWonAsO: function() {
    return Users.findOne({_id: Meteor.userId()}).profile.gamesWonAsO;
  },
  gamesLost: function() {
    return Users.findOne({_id: Meteor.userId()}).profile.gamesLost;
  },
  gamesLostAsX: function() {
    return Users.findOne({_id: Meteor.userId()}).profile.gamesLostAsX;
  },
  gamesLostAsO: function() {
    return Users.findOne({_id: Meteor.userId()}).profile.gamesLostAsO;
  },
  gamesDraw: function() {
    return Users.findOne({_id: Meteor.userId()}).profile.gamesDraw;
  },
  games: function() {
    return Users.findOne({_id: Meteor.userId()}).gamesPlayed;
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});