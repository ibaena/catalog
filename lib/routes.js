FlowRouter.route('/', {
  name: 'home',
  action(){
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
  name: 'catalog-book',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main:'CatalogSingle'});
  }
});
