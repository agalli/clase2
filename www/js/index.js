var isOpenedMenu=false;

var pagina1=document.getElementById("Page-1");
var pagina2=document.getElementById("Page-2");

var currentPage="Page-1";

function menuButtonClick(){
    if(isOpenedMenu){
        isOpenedMenu=false;
        pagina1.className="body transition center";
    }else{
        pagina1.className="body transition right";
        isOpenedMenu=true;
    }
}
function menu(pagina){
    if(pagina==="Page-1"){
        pagina1.className="body visible transition center";
        pagina2.className="hide";
        isOpenedMenu=false;
    }else{
        pagina2.className="body visible transition center";
        pagina1.className="hide";
        isOpenedMenu=false;
    }
    
}