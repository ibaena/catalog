if(Meteor.isClient){
  Accounts.onLogin(function(){
      FlowRouter.go('catalog-book');
  });

  Accounts.onLogout(function(){
      FlowRouter.go('home');
  });
}

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('catalog-book');
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/catalog-book', {
  name: 'catalog-book',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main:'Catalogs'});
  }
});

FlowRouter.route('/item/:id', {
  name: 'catalog-item',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main:'CatalogSingle'});
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main:'Menu'});
  }
});

FlowRouter.route('/my-list', {
  name: 'my-list',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main:'MyList'});
  }
});
