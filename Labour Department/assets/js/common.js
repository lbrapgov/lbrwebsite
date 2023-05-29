$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });



  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }