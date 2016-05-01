Meteor.subscribe("catalogs");


Template.Catalogs.helpers({
  catalogs: ()=> {
    return Catalogs.find({});
  }
});
