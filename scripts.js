const lineSmoothing = 0.2;

let chart1 = new Chart(document.getElementById('bar').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                data: [12,19,3,5,2,3],
                backgroundColor: 'rgba(214, 52, 52, 0.9)',
                borderColor: 'rgba(214, 52, 52,1)',
                borderWidth: 2
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

let chart2 = new Chart(document.getElementById('line').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Line 1',
                    fill: true,
                    data: [12, 19, 3, 5],
                    backgroundColor: 'rgba(214, 52, 52,0.05)',
                    borderColor: 'rgba(214, 52, 52,1)',
                    borderWidth: 3,
                    tension: lineSmoothing
                },
                {
                    label: 'Line 2',
                    fill: true,
                    data: [5, 10, 8, 15],
                    backgroundColor: 'rgba(221, 145, 40, 0.05)',
                    borderColor: 'rgba(221, 145, 40,1)',
                    borderWidth: 3,
                    tension: lineSmoothing
                },
                {
                    label: 'Line 3',
                    fill: true,
                    data: [8, 4, 13, 6],
                    backgroundColor: 'rgba(63, 129, 184, 0.05)',
                    borderColor: 'rgb(63, 129, 184)',
                    borderWidth: 3,
                    tension: lineSmoothing
                },
                {
                    label: 'Line 4',
                    fill: true,
                    data: [4, 2, 10, 3],
                    backgroundColor: 'rgba(114, 173, 75, 0.05)',
                    borderColor: 'rgb(114, 173, 75)',
                    borderWidth: 3,
                    tension: lineSmoothing
                },
                {
                    label: 'Line 5',
                    data: [5, 4, 3, 6],
                    backgroundColor: 'rgba(89, 167, 255, 0.05)',
                    borderColor: 'rgba(89, 167, 255,1)',
                    borderWidth: 3,
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

let chart3 = new Chart(document.getElementById('doughnut').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Faculty','Students','Researchers','School Administrators','University Fellows','Employees'],
            datasets: [{
                label: 'Passengers',
                data: [5, 32, 1, 0, 2, 0],

                backgroundColor: [
                    'rgba(214, 52, 52, 1)',
                    'rgba(221, 145, 40,1)',
                    'rgb(114, 173, 75)',
                    'rgba(89, 167, 255,1)',
                    'rgb(181, 86, 236)',
                    'rgb(82, 79, 238)'
                ],

                borderWidth: 1
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    },
)