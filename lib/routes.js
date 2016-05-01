FlowRouter.route('/', {
  name: 'home',
  action(){
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/catalog-book', {
  name: 'catalog-book',
  action(){
    BlazeLayout.render('MainLayout', {main:'Catalogs'});
  }
});
