document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download');
    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'documents/ICSAMY2024-template.tex'; // Adjust the path as needed
        link.download = 'ICSAMY2024-template.tex'; // Optional: specify the filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
