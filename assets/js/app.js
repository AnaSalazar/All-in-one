var funcionAEjecutar = function () {
  obtenerMiUbicacion();
  $(".ubicacionRestaurante").click(cambiarUbicacion);
}

var obtenerMiUbicacion = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPosicionActual);
  } else {
    alert("Geolocalización no es soportado en tu navegador");
  }
}

var mostrarPosicionActual = function (posicion) {
  var misCoordenadas = {
 		lat: posicion.coords.latitude,
 		lng: posicion.coords.longitude
 	};
  mostrarmeEnElMapa(misCoordenadas);
}

var mostrarmeEnElMapa = function (misCoordenadas) {
  var map = new google.maps.Map($('.map')[0], {
    zoom: 15,
    center: misCoordenadas
    });
    var marker = new google.maps.Marker({
          position: misCoordenadas,
          map: map
        });
}

var cambiarUbicacion = function () {
  var latitud = $(this).data("latitud");
  var longitud = $(this).data("longitud");
console.log(latitud,longitud)
  var coordenadasRestaurante = {
    lat: latitud,
    lng: longitud
  };
  mostrarmeEnElMapa(coordenadasRestaurante);
}

$(document).ready(funcionAEjecutar);
