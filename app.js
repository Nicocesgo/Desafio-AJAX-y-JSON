$(document).ready(function() {

  var cors = 'https://cors-anywhere.herokuapp.com/';
  var url = 'https://api.darksky.net/forecast/';
  var key = '106514dac128151267c91a2f003ef707';
  var coords = {
    scl: '-33.4488897,-70.6692655',
    vlp: '-33.0458456,-71.6196749',
    ccp: '-36.8270169,-73.0503189',
    pta: '-53.1625446,-70.9077850'
  };

  var queryParams = ['exclude=[minutely,hourly,dayly,alerts,flags]','lang=es','units=auto']

  $('#select').on('change', function() {
    $.ajax({
      url: cors + url + key + '/' + coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
      method: 'GET'
    }).then(function(data) {
      console.log(data);
      $('#resumen').text(parseInt(data.currently.temperature)+'º ' + data.currently.summary)
    });
  });
});
