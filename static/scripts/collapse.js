function showCurrent(){
    //only current page (if it exists) should be opened
    var file = window.location.pathname.split("/").pop().replace(/\.html/, '');
    console.log('file: ',file);
    document.querySelectorAll("nav > ul > li > a").forEach(function(parent) {
        var href = parent.attributes.href.value.replace(/\.html/, '');
        console.log('href: ',href);
        if (file === href) {
            parent.parentNode.querySelectorAll("ul li").forEach(function(elem) {
                elem.style.display = "block";
            });
        }
    });
}
function hideAllButCurrent(){
    //by default all submenut items are hidden
    //but we need to rehide them for search
    document.querySelectorAll("nav > ul > li > ul li").forEach(function(parent) {
        parent.style.display = "none";
    });
    
    showCurrent();
}

hideAllButCurrent();