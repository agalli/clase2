var pages=null;
var currentPage="Page1";

loadPages=function(){
    pages={
        Page1:document.getElementById("Page1"),
        Page2:document.getElementById("Page2")
    }
}
document.addEventListener('DOMContentLoaded', function(){
    loadPages();
    FastClick.attach(document.body);
}, false);

var isOpenedMenu=false;

/*var pagina1=document.getElementById("Page-1");
var pagina2=document.getElementById("Page-2");*/



function menuButtonClick(){
    if(isOpenedMenu){
        isOpenedMenu=false;
        pages[currentPage].className="body transition center";
    }else{
        pages[currentPage].className="body transition right";
        isOpenedMenu=true;
    }
}
function menu(selectedPage){
    pages[currentPage].className="hide";
    pages[selectedPage].className="body right";
    setTimeout(function(){
       pages[selectedPage].className="body visible transition center";
        currentPage=selectedPage;
        isOpenedMenu=false;
    },0);
}