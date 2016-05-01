Meteor.publish('catalogs', function(){
  return Catalogs.find({author: this.userId});
});
Meteor.publish('singleCatalog', function(id){
  check(id, String);
  return Catalogs.find({_id: id});
});
