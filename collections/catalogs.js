Catalogs = new Meteor.Collection('catalogs');

//RULES - PERMISSIONS
Catalogs.allow({
  insert: function(userId, doc){
    return !!userId;
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

Catalogs.attachSchema(CatalogSchema);
