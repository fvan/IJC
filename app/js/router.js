routes = [];
(function() {
  function add(location, display, html, controller){
  routes.push({location: location,  display: display, html:html + ".html", controller: controller});
  }
  add("/home", "Home", "home");
  add("/about_us", "About Us", "aboutus");
  add("/services", "Services", "services");
  add("/corporate_lunches", "Corporate Lunches", "corporatelunches");
  add("/cottage_coolers", "Cottage Coolers", "cottagecoolers");
  add("/gallery", "Gallery", "gallery", "GalleryController");
  add("/contact", "Contact", "contactus");
})();
angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({enabled:false});

  routes.forEach(function(route){  
    $routeProvider.when(route.location, {
      templateUrl: route.html,
      controller: route.controller,
    });
  });

  $routeProvider.otherwise({ redirectTo: '/home' });

});

angular.module("app").run(function($rootScope, $location) {
   $rootScope.$on('$routeChangeSuccess', function(ev,data) {   
      if(data.$$route && data.$$route.originalPath) {
        var routeIndex = routes.findIndex(function(route){return route.location === data.$$route.originalPath;});
        var route = routes[routeIndex];
        $rootScope.currentNav = route;
        routes.currentNav = route;
      }
   });

   $rootScope.routes= routes;

   $rootScope.changeRoute = function (route) {
          $location.path(route.location);
   };
});