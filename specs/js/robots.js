$(document).ready(function(){ 
    
  $('a.cagFx').each(function(i){ 
    var spanCont = $(this).html();
    $(this).prepend('<span>'+spanCont+'</span>')
           .append('<span>'+spanCont+'</span>');
  }); 
  
});