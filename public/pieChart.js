var PieChart = function() {
  var container = document.querySelector('#pie-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: "Pokemon types I've Caught"
    },
    series: [{
      name: "Type",
      data: [{
        name: "Fire",
        y: 42,
        color: "tomato",
        sliced: true
      },
      {
        name: "Water",
        y: 27,
        color: "steelBlue",
        sliced: true
      },
      {
        name: "quiche",
        y: 1,
        color: "yellow",
        sliced: true
      }

      ]
    }]
  });

}