window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  var form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var html = '';
    var output = document.querySelector('#output');

    var formData = new FormData(form);
    var forecastId = formData.get('forecast');

    fetch('http://localhost:5000/forecast/' + forecastId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        console.log(data.title);
        html += '<div>' + data.title + '</div>';
        html += '<div>' + data.forecasts[0].date + '</div>';
        html += '<div>' + data.forecasts[0].telop + '</div>';
        output.innerHTML = html;
      });
  });
});
