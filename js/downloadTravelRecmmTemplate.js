document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download');
    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'documents/travelling allowancerecommendation ICSAMY2024.pdf'; // Adjust the path as needed
        link.download = 'travelling allowancerecommendation ICSAMY2024.pdf'; // Optional: specify the filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
