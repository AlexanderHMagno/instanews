
$(function() {
 


let data =  [
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

$.each(data, (key, value) => {
$("select").append("<option value=\""+value+"\">"+value+"</option>");
}); // it shows the initial menu

arrow = $('.arrow');
arrow.on("click" , () =>  {arrow.fadeOut("fast");
});




//This is the button that has to be activated in order to update news.
$("select").change(() => {

  
  let section = $("select").val();
$(".arrow").show();
 
 
  
  
  let url = "https://api.nytimes.com/svc/topstories/v2/"+section+".json";
  url += '?' + $.param({
    'api-key': "RfuE6YzG7PkssPfAnk877s3ZPIARUsm5"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).always(() => {

    if($(".nyc").width()===275){
      $(".initial").fadeOut(1500).fadeIn(1500);
      $(".container").fadeIn(5000);
      $(".loader").fadeIn(2000).fadeOut(3000);
    } else {
      $(".container").fadeOut(1500).fadeIn(1500);
      $(".loader").fadeIn(1500).fadeOut(1500);}
    
    
    

    })
   
  .done(data => {
    
    setTimeout(() => { 
        $(".fullBody").html("");
    $(".initial").css({"height":"150px","margin":"30px 0px"});  
    $(".initial>div>img").css({"width":"100px"}); 
    
    let source = data.results 
    let count = 0 
    $.each(source, (key, value)=> {
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
}).fail(data => alert("Try again"));
});

});
