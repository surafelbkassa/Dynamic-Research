document.addEventListener('DOMContentLoaded', () => {
    const fundingCtx = document.getElementById('funding-chart').getContext('2d');
    const categoriesCtx = document.getElementById('categories-chart').getContext('2d');

    new Chart(fundingCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Funding Trends',
                data: [100, 200, 150, 300, 250],
                borderColor: 'blue',
                fill: false
            }]
        }
    });

    new Chart(categoriesCtx, {
        type: 'bar',
        data: {
            labels: ['AI', 'Biotech', 'Physics', 'Chemistry'],
            datasets: [
                {
                    label: '2022',
                    data: [40, 30, 20, 10],
                    backgroundColor: 'rgba(59, 130, 246, 0.8)'
                },
                {
                    label: '2023',
                    data: [50, 35, 25, 15],
                    backgroundColor: 'rgba(16, 185, 129, 0.8)'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            }
        }
    });
});
