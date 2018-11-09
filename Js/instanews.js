
$(function() {
 


var data =  [
  "Sections...",
  "home",
  "opinion",
  "world",
  "national",
  "politics",
  "upshot",
  "nyregion",
  "business",
  "technology",
  "science",
  "health",
  "sports",
  "arts",
  "books",
  "movies",
  "theater",
  "sundayreview",
  "fashion",
  "tmagazine",
  "food",
  "travel",
  "magazine",
  "realestate",
  "automobiles",
  "obituaries",
  "insider"
];
$.each(data, function (key, value) {


$("select").append("<option value=\""+value+"\">"+value+"</option>");

}); // it shows the initial menu








//This is the button that has to be activated in order to update news.
$("select").change(function () {
  var section = $("select").val()

 
 
  
  
  var url = "https://api.nytimes.com/svc/topstories/v2/"+section+".json";
  url += '?' + $.param({
    'api-key': "90a077fb52414546bcc9e4944c36b24d"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).always(function () {

    if($(".nyc").width()===275){
      $(".initial").fadeOut(1500).fadeIn(1500);
      $(".container").fadeIn(5000);
    } else {
      $(".container").fadeOut(1500).fadeIn(1500);}
    
    $(".loader").fadeIn(1500).fadeOut(1500);
    

    })
   
  .done(function (data) {
    
    setTimeout(function(){ 
        $(".fullBody").html("");
    $(".initial").css({"height":"150px","margin":"30px 0px"});  
    $(".initial>div>img").css({"width":"100px"}); 
    
    let source = data.results 
    let count = 0 

    $.each(source, function (key, value) {
    //for each news it will create a new container. 

      if (value.multimedia[4]&&count<12) {
        count++ 
        imagenes = value.multimedia[4].url; 
        let newClass = "newsBody" + count; 
        $(".fullBody").append("<a href=\"" + value.short_url + "\" target=\"_blank\"><div class=\"newsBody " + newClass + "\"><li><div class=\"phantom\"><p>" + value.abstract + "</p></li></div></div></a>");
        newClass = ".newsBody" + count;
        $(newClass).css({ "background-image": "url(\"" + imagenes + "\")", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "center" });
        
          
      }
    });
  }, 1500
  );
}).fail(function(data){
  alert("Try again");
});
});

});
