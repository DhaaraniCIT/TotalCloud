
var value, count1=0,count2=0;
var aTags= document.getElementsByTagName('a'); // Creates an array containing all *A tags*.
function init() { // Called after DOM Content is loaded or after window.load
for (var i = 0; i < aTags.length; i++) {
aTags[i].onclick = function () {
value = this.innerText;
 console.log("A Tag Value1: ", value);}; // displays the value of a specific A tag in the console.
}
}
document.addEventListener("DOMContentLoaded", init, false);

$(document).ready(function() {
$('#btn-add').click(function(){
  count1++;
  if($.trim($("#select-from").html())==''){
    alert("The list is empty , You can't remove items any more");
  }
  if(value == "Elizabeth Fisher")
  {
    $("#select-to").prepend('<a href="#" class="list-group-item" id="1"><img src="img/Ellipse 1.png" alt="">Elizabeth Fisher</a>');
    $("#1").remove();
  }
  else if(value == "Andreea Lucas"){
    $("#select-to").prepend('<a href="#" class="list-group-item" id="2"><img src="img/Ellipse 1-1.png" alt="">Andreea Lucas</a>');
    $("#2").remove();
  }
  else if (value == "Jonathann Carpenter") {
    $("#select-to").prepend('<a href="#" class="list-group-item" id="3"><img src="img/Ellipse 1-2.png" alt="">Jonathann Carpenter</a>');
    $("#3").remove();
  }
  else if (value == "Kelly Young") {
    $("#select-to").prepend('<a href="#" class="list-group-item" id="4"><img src="img/Ellipse 1-3.png" alt="">Kelly Young</a>');
    $("#4").remove();
  }
  else if (value == "Doris Patel") {
    $("#select-to").prepend('<a href="#" class="list-group-item" id="5"><img src="img/Ellipse 1-4.png" alt="">Doris Patel</a>');
    $("#5").remove();
  }
  else if (value == "Harry Palmer") {
    $("#select-to").prepend('<a href="#" class="list-group-item" id="6"><img src="img/Ellipse 1-5.png" alt="">Harry Palmer</a>');
    $("#6").remove();
  }
  else if(value == "Jonathan Gibson"){
    $("#select-to").prepend('<a href="#" class="list-group-item" id="7"><img src="img/Ellipse 1.png" alt="">Jonathan Gibson</a>');
    $("#7").remove();
  }
  else {

  }

});
var str;
$("#select-to").click(function () {
var rem= $(this).text();
str = rem.split(" ",1);
   console.log(str);
});
$('#btn-remove').click(function(){

  count2++;

  if($.trim($("#select-to").html())==''){
  alert("The list is empty , You can't remove items");
  }
  if(str == "Elizabeth")
  {$("a").remove("#1");
    $("#select-from").prepend('<a href="#" class="list-group-item" id="1"><img src="img/Ellipse 1.png" alt="">Elizabeth Fisher</a>');

  }
  else if(str == "Andreea"){
    $("a").remove("#2");
    $("#select-from").prepend('<a href="#" class="list-group-item" id="2"><img src="img/Ellipse 1-1.png" alt="">Andreea Lucas</a>');

  }
  else if (str == "Jonathann ") {
      $("a").remove("#3");
    $("#select-from").prepend('<a href="#" class="list-group-item" id="3"><img src="img/Ellipse 1-2.png" alt="">Jonathann Carpenter</a>');

  }
  else if (str == "Kelly") {
    $("a").remove("#4");
    $("#select-from").prepend('<a href="#" class="list-group-item" id="4"><img src="img/Ellipse 1-3.png" alt="">Kelly Young</a>');

  }
  else if (str == "Doris") {
    $("a").remove("#5");
    $("#select-from").prepend('<a href="#" class="list-group-item" id="5"><img src="img/Ellipse 1-4.png" alt="">Doris Patel</a>');

  }
  else if (str == "Harry") {
    $("a").remove("#6");
    $("#select-from").prepend('<a href="#" class="list-group-item" id="6"><img src="img/Ellipse 1-5.png" alt="">Harry Palmer</a>');

  }
  else if(str == "Jonathan"){
      $("a").remove("#7");
    $("#select-from").prepend('<a href="#" class="list-group-item" id="7"><img src="img/Ellipse 1.png" alt="">Jonathan Gibson</a>');

  }
  else {

  }

});

});
