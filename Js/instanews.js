
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

  //Make dissapear the first menu

  
  $(".loader").fadeIn(1500).fadeOut(1500);
 
  
  var url = "https://api.nytimes.com/svc/topstories/v2/"+section+".json";
  url += '?' + $.param({
    'api-key': "90a077fb52414546bcc9e4944c36b24d"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).always(function () {
   
    

    })
   
  .done(function (data) {
    $(".container").fadeOut(1).fadeIn(4000);
    
    //$(".container").css("display","grid");
    $(".fullBody").html("")
    $(".initial").css({"height":"150px","margin":"30px 0px"});  
    $(".initial>div>img").css({"width":"100px"}); 
    var datas = data.results //this is my main source of info
    var count = 0 // its a counter created in order to build new class.
   
    $.each(datas, function (key, value) {
    //for each news it will create a new container. 

      if (value.multimedia[4]&&count<12) { // if the news doesnt have image it wont display.
        count++ //every time the counter starts again it will add 1 to my var
        imagenes = value.multimedia[4].url; //Just a shortcut for my images
        var newClass = "newsBody" + count; // this will create a new class for each contenedor
        $(".fullBody").append("<a href=\"" + value.short_url + "\" target=\"_blank\"><div class=\"newsBody " + newClass + "\"><li><div class=\"phantom\"><p>" + value.abstract + "</p></li></div></div></a>");
        newClass = ".newsBody" + count; //adding var as a selector is not neccesary to add more quotations
        $(newClass).css({ "background-image": "url(\"" + imagenes + "\")", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "center" });
        
          
        
      }
    });
  }).fail(function(data){
  alert("Try again champ!");
});
});
