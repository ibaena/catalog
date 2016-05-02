Template.Menu.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe("catalogs");
  });
});

Template.Menu.helpers({
  catalogs: ()=> {
    return Catalogs.find({inMenu: true});
  }
});
