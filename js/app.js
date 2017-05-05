$(document).foundation();

today=new Date();
var dd=today.getDate();
var mm=today.getMonth()+1;
var yyyy=today.getFullYear();
if(dd<10){
  dd='0'+dd;
}
if(mm<10){
  mm='0'+mm;
}
var today=yyyy+'/'+mm+'/'+dd;
document.getElementById('date').innerHTML=today;

$(document).ready(function() {

    $("a[href='#home']").on('click', function(event) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
})
