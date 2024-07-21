document.addEventListener('DOMContentLoaded', function() {
    var expandButton = document.getElementById('expand');
    var mainDiv = document.getElementById('maindiv');

    expandButton.addEventListener('click', function() {
        mainDiv.classList.toggle('expanded');
    });
});
