
# InstaNews Project

Create a web page using the API provided by [The New York Times](http://developer.nytimes.com/). 
The main idea is that everytime a news is added to the NYT it will be appeared on this page, using the API, It will display only 12 stories per section and also it will only display news with photos. If the news doesnt have an image It wont be shown. 

For creating this project I used the following:

* HTML
* CSS
* [sass](http://sass-lang.com/)
* JavaScript
* JQuery
* *Json
* Extension of third parts. 
  * [Flickity](https://flickity.metafizzy.co) 
  * [Font Awesome](https://fontawesome.com/)
  * [JQuery](https://jquery.com/)
  * [select2](https://select2.org/)
  * Fonts
* Github
* Gulp
* Terminal for commiting Git Bash

## HTML
Created using sections, Following two basic premises: 
* Windows everywhere
* Mobil desing first

#### Windows everywhere
* Header : It will contain the main Image, and the select. Using Jquerry I added the options for this select.
* Container: On this section will appear the news.


#### Mobil desing first
I start the project thinking that the best practice is building my webpage writing my code thinking on mobile, and then using MQuerries I shall be able to display my webpage in other devices. 

#### Links
Also in HTML is the perfect place for posting the links to connect my CSS and third parts developments. 

**_At the end I used an especial validator for searching any mistake commited [validator](https://validator.w3.org/nu/#textarea)_**



## CSS and SASS 
_Main.sass is the principal sass file.
* An external Source was used for reseting the original rules created by default. 
* Created following the same sections displayed on HTML (also including commentaries per section, easy to read.)
* For showing my CSS rules I used a SASS preprocesor which (and combined with gulp) let us to use variables, mixings and other super powerfull tools for writing css.

* _mixins_and_variable_  In this file I have created the sizes of my Mquerries, and also some variables that let me write a cleaner code. 
* @include will show the Mquerries, and some group of rules for not repeting code. 
* Variables will be shown with a presign of dollar $. 

**_At the end I used an especial validator for searching any mistake commited [validator](https://jigsaw.w3.org/css-validator/validator)_**




## Jquerry - JavaScript
* Download Jquerry.
* Created a file on my project 
* connected to HTML at the bottom of my file. 


1) I have created a function that add the option to the select element using an created array
```
$.each(data, function (key, value) {
$("select").append("<option value=\""+value+"\">"+value+"</option>");
}); // it shows the initial menu
```
2.Every time the select change his value it will trigger a function, that will use the actual value of the select element: 

```
$("select").change(function () {
  var section = $("select").val();
```
And this value will be passed to the URL that the NYT provided us in order to call the JSON object.
```
  var url = "https://api.nytimes.com/svc/topstories/v2/"+section+".json";
```
With the data that we collected, Our project will create a new element per each property on the data. ** maxim 12 elements per section**. 
```
 if (value.multimedia[4]&&count<12) {
 ```
 At the end it will create the element with his unics properties and also it will assing a new class per every item. 
 
```
$(".fullBody").append("<a href=\"" + value.short_url + "\" target=\"_blank\"><div class=\"newsBody " + newClass + "\"><li><div class=\"phantom\"><p>" + value.abstract + "</p></li></div></div></a>");
newClass = ".newsBody" + count;
$(newClass).css({ "background-image": "url(\"" + imagenes + "\")", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "center" });
        
```
The idea for creating a new class per item was that we need no add a background-img to every one, and the only way to do this is creating a specific class. **this code can be written in a clear way calling a function that have the style**

## gulp 

gulp has help us to save a lot of time, cause it has automatized several process. In order to add this helpfull tool working we had to install every component like : 

* terser = require("gulp-terser"),
* rename = require("gulp-rename"),
* eslint = require('gulp-eslint'),
* prettyError = require("gulp-prettyerror"),
* sass = require("gulp-sass"),
* autoprefixer = require("gulp-autoprefixer"),
* cssnano = require("gulp-cssnano"),
* rename = require("gulp-rename"),
* browserSync = require('browser-sync').create();

## select2 
In order to complete the strech goals I have installed the select2 plugin.

