// Fondo de Sección Dinámico

let portraitBackground = document.getElementById("portrait");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let turn = 1;
let time1 = 5000; 
let time2 = 1000; 
let scale = 1.8;


button1.style.opacity = "1";  
button1.style.transform = 'translate(0,0)';
setInterval(function() { 
    changeButton(button1,button2,button3,turn,time2);
    portraitBackground.style.transition = 'all ' + time2/500 + 's';  
    turn = changeImagePos(portraitBackground,turn,scale);
}, time1); 

 // Cambia la posición de la imagen

function changeImagePos(item1,t,scl) {
     let transl = 50 * (1 - (1/scl)); 
    if (t==1) { 
        item1.style.transform = 'scale(' + scl + ') translate(' + transl + '%,' + transl + '%)';
        t=2; 
    } else if(t==2) {  
        item1.style.transform = 'scale(' + scl + ') translate(-' + transl + '%,-' + transl + '%)';
        t=3; 
    } else if(t==3) {  
        item1.style.transform = 'scale(1) translate(0,0)';
        t=1; 
    }; 
    return t;
};


// setInterval(function() { 
//     changeButton(button1,button2,button3,2*turn);
// }, time); 


function changeButton(item1,item2,item3,t,time) {  
    if (t==1) { 
        swapButton(item1,item2,time);
    } else if(t==2) { 
        swapButton(item2,item3,time); 
    } else if(t==3) { 
        swapButton(item3,item1,time); 
    }; 
};


function swapButton(item1,item2,time){
    item1.style.opacity = "0";  
    item1.style.transform = 'translate(-40px,0)';
    setTimeout(function() {
        item1.style.display = "none";
        item2.style.display = "block"; 
        item2.style.transition = 'all ' + time/1000 + 's';  
        setTimeout(function() {
            item2.style.opacity = "1";  
            item2.style.transform = 'translate(0,0)';
        },time/40);  
    },time);     
};