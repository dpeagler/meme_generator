
const form = document.getElementById('memeForm');
const memeContainer = document.getElementById('memeContainer');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // to avoid default form submission

    // Built-in HTML5 validation will prevent empty submits
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const imageUrl = document.getElementById('imageUrl').value;
    const topText = document.getElementById('topText').value;
    const bottomText = document.getElementById('bottomText').value;

    // Create meme div
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

    // Image element
    const img = document.createElement('img');
    img.src = imageUrl;
    memeDiv.appendChild(img);

    // Top text
    const topDiv = document.createElement('div');
    topDiv.classList.add('meme-text', 'top');
    topDiv.innerText = topText;
    memeDiv.appendChild(topDiv);

    // Bottom text
    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('meme-text', 'bottom');
    bottomDiv.innerText = bottomText;
    memeDiv.appendChild(bottomDiv);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "x";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        memeDiv.remove();
    });
    memeDiv.appendChild(deleteBtn);

    // Append meme to container
    memeContainer.appendChild(memeDiv);

    // Reset form
    form.reset();
});