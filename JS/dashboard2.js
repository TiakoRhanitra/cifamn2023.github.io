// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['corechart', 'controls']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard2);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it..
function drawDashboard2() {
// Create our data table.
var data2 = google.visualization.arrayToDataTable([
      ['Mois', 'Mali'],
      ['Mars' , 5],
      ['Avril', 7],
      ['Decembre', 8]
   ]);
   
// Create a dashboard.
var dashboard2 = new google.visualization.Dashboard(
      document.getElementById('dashboard2_div'));
   
// Create a range slider, passing some options
var dash1RangeSlider = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'containerId': 'filter2_div',
      'options': {
         'filterColumnLabel': 'Mali',
      }
   });
   
// Create a pie chart, passing some options
var pieChart2 = new google.visualization.ChartWrapper({
      'chartType': 'BarChart',
      'containerId': 'chart2_div',
      'options': {
         'width': 400,
         'height': 300,
         'pieSliceText': 'value',
         'legend': 'left'
      }
   });
   
// Establish dependencies, declaring that 'filter' drives 'pieChart',
// so that the pie chart will only display entries that are let through
// given the chosen slider range.
dashboard2.bind(dash1RangeSlider, pieChart2);
   
// Draw the dashboard.
dashboard2.draw(data2);
}
   