$('.dropdown-toggle').on('click', function() {
  console.log('Dropdown toggle clicked');
  $(this).next('.dropdown-menu').toggle();
});