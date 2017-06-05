var funcionAEjecutar = function () {
  navigator.geolocation.getCurrentPosition(mostrarMiUbicacion);
}

var mostrarMiUbicacion = function (position) {
  var misCoordenadas = {
 		lat: position.coords.latitude,
 		lng: position.coords.longitude
 	};
  mostrarmeEnElMapa(misCoordenadas);
}

var mostrarmeEnElMapa = function (misCoordenadas) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: misCoordenadas
    });
    var marker = new google.maps.Marker({
          position: misCoordenadas,
          map: map
        });
  }

$(document).ready(funcionAEjecutar);
