function createSpeakerInfo(id, name, institution, location, imageUrl, websiteUrl) {
    var speakerRow = document.getElementById('speakerRow');

    // Create speaker container
    var divCol = document.createElement('div');
    divCol.className = 'col-lg-3 col-md-6 mb-4'; // Adjusted column size for smaller screens

    // Create speaker card
    var card = document.createElement('div');
    card.className = 'card h-100';

    // Create image container
    var imageContainer = document.createElement('div');
    imageContainer.className = 'speaker-image-container';

    // Create image element
    var img = document.createElement('img');
    img.src = imageUrl;
    img.alt = name;
    img.className = 'card-img-top speaker-image';

    // Set image style to fit within container while maintaining aspect ratio
    img.style.width = '100%';
    img.style.height = '350px'; // Fixed height to maintain consistency
    img.style.objectFit = 'cover'; // Ensure the image covers the entire container

    // Create card body
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create speaker details
    var h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.textContent = name;

    var p1 = document.createElement('p');
    p1.className = 'card-text';
    p1.textContent = institution;

    var p2 = document.createElement('p');
    p2.className = 'card-text';
    p2.textContent = location;

    // Create link
    var link = document.createElement('a');
    link.href = websiteUrl;
    link.textContent = 'Visit Website';
    link.className = 'btn btn-primary';
    link.target = '_blank'; // Open the link in a new tab

    // Append elements
    imageContainer.appendChild(img);
    card.appendChild(imageContainer);
    card.appendChild(cardBody);
    cardBody.appendChild(h5);
    cardBody.appendChild(p1);
    cardBody.appendChild(p2);
    cardBody.appendChild(link);
    divCol.appendChild(card);
    speakerRow.appendChild(divCol);
}
