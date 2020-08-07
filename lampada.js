
var lampada = document.getElementById('lampada');


function isLampBroken (){
    return lampada.src.indexOf ('quebrada') >-1
}
function alterarEstado(){
    if(!isLampBroken()){
        if(lampada.classList.contains("apagada")){
            lampada.classList.add("ligada");
            lampada.classList.remove("apagada");
            lampada.src = "./img/desligada.jpg";

        }

        else{   
            if(lampada.classList.contains("ligada")) {
                lampada.classList.add("apagada");
                lampada.classList.remove("ligada");
                lampada.src = "./img/ligada.jpg";
               }   
            } 
        } 
    }

function lampOn(){
    if(!isLampBroken()){
        lampada.src="./img/ligada.jpg";
    }
    
}

function lampOff(){
    if(!isLampBroken()){
        lampada.src="./img/desligada.jpg";
    }
}

function lampBroken(){
    
    lampada.src="./img/quebrada.jpg";
}
   
lampada.addEventListener("mouseover", lampOn);
lampada.addEventListener("mouseleave", lampOff);
lampada.addEventListener("dblclick", lampBroken);

    