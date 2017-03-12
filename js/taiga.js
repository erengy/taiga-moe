$("#features-link").click(function() {
  $('#main-tab a[href="#features"]').tab('show')
});

$("#screenshots-link").click(function() {
  $('#main-tab a[href="#screenshots"]').tab('show')
});

$("#support-link").click(function() {
  $('#main-tab a[href="#support"]').tab('show')
});

$(document).ready(function(){
  $('a[href="' + window.location.hash + '"]').click()
});

/*
var download_version = $('#download-version');
var url = 'data/taiga.json';
$.getJSON(url, function(data) {
  download_version.html('v' + data['version']);
});
*/