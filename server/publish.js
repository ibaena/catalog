Meteor.publish('catalogs', function(){
  return Catalogs.find({author: this.userId});
});
