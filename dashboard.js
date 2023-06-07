google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
    var spreadsheetId = '1rtgNYNUGE2f1ELYXrUexRL1z3q6jtSTcVxdZ9ORTYGI';
    var range = 'Sheet1!A1:C13';

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    var data = response.getDataTable();
    drawCharts(data);
}

function drawCharts(data) {
    var options = {
        title: 'Penjualan crackers di Boston dan penjualan Cookies di Los Angeles.',
        width: 400,
        height: 300
    };

    var chart1 = new google.visualization.ColumnChart(document.getElementById('chart1'));
    chart1.draw(data, options);

    var chart2 = new google.visualization.PieChart(document.getElementById('chart2'));
    chart2.draw(data, options);

    var chart3 = new google.visualization.LineChart(document.getElementById('chart3'));
    chart3.draw(data, options);

    var chart4 = new google.visualization.BubbleChart(document.getElementById('chart4'));
    chart4.draw(data, options);
    // Tambahkan jenis grafik lain dan elemen div untuk grafik lainnya
}