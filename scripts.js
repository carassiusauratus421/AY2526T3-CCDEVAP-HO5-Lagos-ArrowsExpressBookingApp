var chart1 = new Chart(document.getElementById('bar').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Bookings This Month',
                data: [12,19,3,5,2,3],
                backgroundColor: [
                    'rgba(255,0,0,1)',
                    'rgb(255, 174, 0)',
                    'rgb(255, 230, 0)',
                    'rgb(94, 255, 0)',
                    'rgb(0, 110, 255)',
                    'rgb(204, 0, 255)'
                ],
                borderColor: [
                    'rgba(255,0,0,1)',
                    'rgb(255, 174, 0)',
                    'rgb(255, 230, 0)',
                    'rgb(94, 255, 0)',
                    'rgb(0, 110, 255)',
                    'rgb(204, 0, 255)'
                ],
                borderWidth: 1
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            },
        }
    },
);

const lineSmoothing = 0.2;
var chart2 = new Chart(document.getElementById('line').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Line 1',
                    data: [12, 19, 3, 5],
                    borderColor: 'red',
                    borderWidth: 2,
                    tension: lineSmoothing
                },
                {
                    label: 'Line 2',
                    data: [5, 10, 8, 15],
                    borderColor: 'orange',
                    borderWidth: 2,
                    tension: lineSmoothing
                },
                {
                    label: 'Line 3',
                    data: [8, 4, 13, 6],
                    borderColor: 'yellow',
                    borderWidth: 2,
                    tension: lineSmoothing
                },
                {
                    label: 'Line 4',
                    data: [4, 2, 10, 3],
                    borderColor: 'green',
                    borderWidth: 2,
                    tension: lineSmoothing
                },
                {
                    label: 'Line 5',
                    data: [5, 4, 3, 6],
                    borderColor: 'blue',
                    borderWidth: 2,
                    tension: lineSmoothing
                }
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    },
);

var chart3 = new Chart(document.getElementById('doughnut').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Faculty','Students','Researchers','School Administrators','University Fellows','Employees'],
            datasets: [{
                label: 'Passengers',
                data: [12, 19, 8, 5, 3, 10],

                backgroundColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgb(255, 174, 0)',
                    'rgb(255, 230, 0)',
                    'rgb(94, 255, 0)',
                    'rgb(0, 110, 255)',
                    'rgb(204, 0, 255)'
                ],

                borderWidth: 1
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    },
)