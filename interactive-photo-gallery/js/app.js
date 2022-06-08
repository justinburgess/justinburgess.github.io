// Search listener

document.getElementById('search').addEventListener('keyup', search_pictures);

// Lightbox listener
window.addEventListener('load', function() {
    baguetteBox.run('.gallery', {
    buttons:true,
  })
});
