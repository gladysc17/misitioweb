$(document).ready(function(){
  //codigo Js que usa jquery
  configurarInicio();
  $('.myicono').click(function(e){
      $('#navbar ul').toggleClass('lista-sm');
  })

  // metodo para identificar la pagina que esta activa del sitio web
  function configurarInicio(){
    var urlPath = window.location.pathname;
    console.log(urlPath);
    $('nav a').each(function(){
      var href = $(this).attr('href');
      console.log(href);
      var indice = urlPath.length - href.length;
      console.log(indice);
      console.log(urlPath.substring(indice));
      if (urlPath.substring(indice) === href) {
      console.log('match');
      $(this).closest('li').addClass('active');
      }
    })
  }

})
