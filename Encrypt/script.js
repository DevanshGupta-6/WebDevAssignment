let org = document.getElementById("org");
let orgnl = document.getElementById("originalText")
let trnslt = document.getElementById("encryptedText")
let trns = document.getElementById("trns");
function gugugaga(){
    let k = org.value
    let l = trns.value;
    let s = ""
    let p = ""
    for(let i = 0; i<k.length; i++){
        s = s + char2quad(k.charAt(i));
    }
    
    orgnl.innerHTML = s;
    for(let i = 4; i<=l.length; i+=4){
            let m = l.substring(i - 4, i);
            p = p + quad2char(Number(m));
    }

    trnslt.innerHTML = p.toString();
}

function char2quad(k){
        let f = k.charCodeAt(0)
        let quad = "";
        while(f>0){
            let d = f%4;
            quad = d.toString().concat(quad);
            f = Math.floor(f/4);
        }
        let len = quad.length;
        switch(len){
            case 3:
                quad = "0".concat(quad);
                break;
            case 2:
                quad = "00".concat(quad);
                break;
            case 1:
                quad = "000".concat(quad);
                break;
        }
        return quad;
        
}

function quad2char(x){
    let c = 0;
    let i = 0;
    while(x>0){
        let d = x%10;
        c+= d*Math.pow(4,i);
        i++;
        x = Math.floor(x/10);
    }
    return String.fromCharCode(c);
}