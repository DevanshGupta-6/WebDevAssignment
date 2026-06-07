let cont = document.body.children[0]
let random = 0;
let background = ["aqua", "lime", "yellow", "blue", "red"]


for(let i = 0; i<5; i++){
    let temp = "";
    random = parseInt(Math.random() * (5 - i))
    cont.children[i].style.backgroundColor = background[random];
    delete background[random];
    for(let j = 0; j<(5 - i); j++){
        if(background[j] == undefined){
            temp = background[4 - i];
            background[4 - i] = background[j];
            background[j] = temp;
        }
    }
    background.pop();
}
