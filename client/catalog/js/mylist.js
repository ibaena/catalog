Template.MyList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe("catalogs");
  });
});

Template.MyList.helpers({
  mycatalog: ()=> {
    return Catalogs.find({inMenu: true});
  }
});
