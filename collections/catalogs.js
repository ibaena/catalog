Catalogs = new Mongo.Collection('catalogs');

//RULES - PERMISSIONS
Catalogs.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  }
});

Specs = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  }
});


//SCHEMA
CatalogSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  specs: {
    type: [Specs]
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Meteor.methods({
    toggleMenuItem: function(id, currentState){
      Catalogs.update(id,{
        $set:{
          inMenu: !currentState
        }
      });
    }
});

Catalogs.attachSchema(CatalogSchema);
