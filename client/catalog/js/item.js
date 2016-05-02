Template.Item.onCreated(function(){
  this.editMode = new ReactiveVar();
  this.editMode.set(false);
});

Template.Item.helpers({
  updateCatalogId: function(){
    return this._id;
  },
  editMode: function(){
    return Template.instance().editMode.get();
  }
});

Template.Item.events({
  'click .toggle-menu': function(){
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash': function (){
    Meteor.call('deleteCatalog', this._id);
  },
  'click .fa-pencil': function(event, template){
    template.editMode.set(!template.editMode.get());
  }
});
