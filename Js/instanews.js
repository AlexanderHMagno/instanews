
$(".dropdown-content").on("click", function(){

  $(".initial").fadeOut(3000);
  $('header').fadeIn(3000);
  $('header').css("display","flex");
  
 

});


//This is the button that has to be activated in order to update news.
$("button").on("click", function () {
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  url += '?' + $.param({
    'api-key': "90a077fb52414546bcc9e4944c36b24d"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done(function (data) {

    var datas = data.results //this is my main source of info
    var count = 0 // its a counter created in order to build new class.

    $.each(datas, function (key, value) {
    //for each news it will create a new container. 

      if (value.multimedia[4]) { // if the news doesnt have image it wont display.
        count++ //every time the counter starts again it will add 1 to my var
        imagenes = value.multimedia[4].url; //Just a shortcut for my images
        var newClass = "newsBody" + count; // this will create a new class for each contenedor
        $(".fullBody").append("<a href=\"" + value.short_url + "\" target=\"_blank\"><div class=\"newsBody " + newClass + "\"><li><div class=\"phantom\"><p>" + value.abstract + "</p></li></div></div></a>");
        newClass = ".newsBody" + count; //adding var as a selector is not neccesary to add more quotations
        $(newClass).css({ "background-image": "url(\"" + imagenes + "\")", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "center" });


      }
    });
  });
});
