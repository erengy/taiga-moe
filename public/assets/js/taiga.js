$(document).ready(function(){
  if (window.location.hash) {
    $('a[data-toggle="tab"][href="' + window.location.hash + '"]').click();
  }
});
