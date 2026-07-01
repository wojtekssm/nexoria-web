var i = 0;

var boxes = document.querySelectorAll(".atractions-details");
console.log(boxes.length);

function atraction_scroll_right(){
    i++;
    if(i > (boxes.length-1)){
        i = 0;
    }
    const nextElement = document.getElementById("attraction"+String(i));
    nextElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    console.log(i);
}
function atraction_scroll_left(){
    i--;
    if(i<0){
        i = (boxes.length-1);
    }
    const prevElement = document.getElementById("attraction"+String(i));
    prevElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}