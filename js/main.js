// Lightbox
lightbox.option({
  'wrapAround': true,
  'disableScrolling': true,
  'showImageNumberLabel': false,
  'maxWidth': 889,
  'positionFromTop': 80
})

// Search
$('#search').on('keyup', function() {
  const $search_input = $(this).val().toLowerCase();

  $('a[data-title]').each(function() {
    const $caption = $(this).attr('data-title').toLowerCase();
    if ($caption.includes($search_input)) {
      $(this).parent().fadeIn();
    } else {
      $(this).parent().fadeOut();
    }
  })
});
