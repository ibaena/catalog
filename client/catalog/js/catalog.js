//Meteor.subscribe("catalogs");

Template.Catalogs.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe("catalogs");
  });
});

Template.Catalogs.helpers({
  catalogs: ()=> {
    return Catalogs.find({});
  }
});
