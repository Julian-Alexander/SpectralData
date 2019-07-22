window.onload = function() {
  var dataPoints = [];
  var chart = new CanvasJS.Chart('chartContainer', {
    theme: 'light2',
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: 'Fatty Acids'
    },
    axisY: {
      valueFormatString: ' '
    },
    data: [
      {
        yValueFormatString: '#,###,###.##',
        type: 'line',
        dataPoints: dataPoints
      }
    ]
  });

  function getData(data) {
    for (var i = 0; i < data.length; i++) {
      dataPoints.push({
        x: data[i].x,
        y: data[i].y
      });
    }
    chart.render();
  }
  $.getJSON('http://localhost:3333/spectrum/fattyacids', getData);
};
