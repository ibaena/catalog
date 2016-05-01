//Meteor.subscribe("catalogs");

Template.CatalogSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
    var id = FlowRouter.getParam('id');
    self.subscribe("singleCatalog", id);
  });
});

Template.CatalogSingle.helpers({
  catalogs: ()=> {
    var id = FlowRouter.getParam('id');
    return Catalogs.findOne({_id:id});
  }
});
