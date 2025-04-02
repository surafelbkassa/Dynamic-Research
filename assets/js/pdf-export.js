document.addEventListener('DOMContentLoaded', () => {
    const exportButton = document.getElementById('export-button');
    const exportOptions = document.getElementById('export-options');

    exportOptions.addEventListener('click', (e) => {
        const format = e.target.getAttribute('data-format');
        if (format === 'pdf') {
            const spinner = document.createElement('div');
            spinner.className = 'spinner';
            document.body.appendChild(spinner);

            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            doc.text('Research Summary', 10, 10);
            doc.text('Key Metrics:', 10, 20);
            // Add more content dynamically...
            doc.save('research-summary.pdf');

            document.body.removeChild(spinner);
        }
    });
});
