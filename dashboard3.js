// Load the Visualization API and the controls package.
google.charts.load('current', {'packages':['geochart'],});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawDashboard3);

// Callback that creates and populates a data table,
// instantiates a dashboard, a range slider and a pie chart,
// passes in the data and draws it..
function drawDashboard3() {
// Create our data table.
var data3= google.visualization.arrayToDataTable([
   ['City',   'Effectifs_Etudiants'],
   ['Madagascar',      27],
   ['Mali',     13],
   ['Nigeria',    95],
   ['Egypt',     9]
 ]);

 var options = {
   region: '002',
   colorAxis: {colors: ['#9370DB', '#663399']}
 };

 var chart3 = new google.visualization.GeoChart(document.getElementById('chart3_div'));
 chart3.draw(data3, options);
}

   