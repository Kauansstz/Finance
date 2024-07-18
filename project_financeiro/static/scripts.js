function view_data(){
var divElement = document.getElementById('viz1721157520959');
var vizElement = divElement.getElementsByTagName('object')[0];
if (divElement.offsetWidth > 800) {
    vizElement.style.minWidth = '920px';
    vizElement.style.maxWidth = '1520px';
    vizElement.style.width = '100%';
    vizElement.style.minHeight = '987px';
    vizElement.style.maxHeight = '1587px';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
}
else if (divElement.offsetWidth > 500) {
    vizElement.style.minWidth = '920px';
    vizElement.style.maxWidth = '1520px';
    vizElement.style.width = '100%';
    vizElement.style.minHeight = '987px';
    vizElement.style.maxHeight = '1587px';
    vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
}
else {
    vizElement.style.width = '100%';
    vizElement.style.height = '927px';
}
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore.display(scriptElement, vizElement);
}