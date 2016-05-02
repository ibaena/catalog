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

Template.Catalogs.events({
  'click .new-recipe': () =>{
    Session.set('NewItem', true);
  }
});
