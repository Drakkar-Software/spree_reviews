//= require jquery.rating
//= require spree/frontend

// Navigating to a page with ratings via TurboLinks shows the radio buttons
Spree.ready(function () {
  $('input[type=radio].star').rating();
});
