$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
  });




function googleTranslateElementInit() {
new google.translate.TranslateElement({
pageLanguage: 'en',
autoDisplay: 'true',
includedLanguages:'en,te,hi', 
layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
}, 'google_translate_element');

}

