function addFavicon(url) {
    var link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = url;
    document.head.appendChild(link);
}

// Call the function with the URL of your favicon
addFavicon('Images/icsamylogo.png');