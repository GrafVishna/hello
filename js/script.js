let hover = document.getElementsByClassName('content');
for (let i=0; i<hover.length; i++) {
    hover[i].innerHTML = hover[i].innerHTML.replace(/(.)/g, '<span>$1</span>');
}