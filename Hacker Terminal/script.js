let cont = document.querySelector(".container")

let a = document.createElement("div")
a.insertAdjacentText("BeforeEnd", "Initializing Hacking")

let b = document.createElement("div")
b.insertAdjacentText("BeforeEnd", "Reading files")

let c = document.createElement("div")
c.insertAdjacentText("BeforeEnd", "Copying password")

let d = document.createElement("div")
d.insertAdjacentText("BeforeEnd", "Sending files to server")

let e = document.createElement("div")
e.insertAdjacentText("BeforeEnd", "Cleaning up")

let arr = [a, b, c, d, e]

let i = 0;
function add(){
    if(i < 5){
        cont.append(arr[i])
        i++
    }else{
        clearInterval(myInterval)
    }
}
myInterval = setInterval(add, 3000)

// for (let i = 0; i < arr.length; i++) {
//     setTimeout(() =>{
//         cont.append(arr[i])
//     }, 3000)
// }