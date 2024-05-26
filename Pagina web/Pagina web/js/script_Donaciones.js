function showDonationForm(){
    const wrapper = document.querySelector('#form');

    wrapper.classList.remove('disabled')

    const close = document.querySelector('#close');

    close.classList.remove('disabled')

    const chart = document.querySelector('#chart-container');

    chart.classList.add('disabled')

    const title = document.querySelector('#title');

    title.classList.add('disabled')
}

function closeDonationForm(){
    const wrapper = document.querySelector('#form')
    wrapper.classList.add('disabled')

    const close = document.querySelector('#close');

    close.classList.add('disabled')

    const chart = document.querySelector('#chart-container');

    chart.classList.remove('disabled')

    const title = document.querySelector('#title');

    title.classList.remove('disabled')
}

var options = {
    chart: {
        type: 'bar',
    },
    series: [{
        name: 'donaciones',
        data: [30000, 40000, 35000, 50000, 49000, 60000, 70000, 91000, 125000]
    }],
    xaxis: {
        categories: ["ENERO", "FEBRERO", "ABRIL", "MAYO", "JUNIO", "AGOSTO", "SEPTIEMBRE", "NOVIEMBRE", "DICIEMBRE"]
    },
    annotations: {
        title: {
            text: 'Donaciones Mensuales',
            align: 'center',
            offsetY: 10,
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#333'
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
