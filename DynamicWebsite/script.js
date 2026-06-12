let n = 1
let s = ""
let t = "Hello"
let i = "thumbnail.jpeg"
let channel ="CodeWithHarry"
let views = 5000000;
let time = "1 month ago"
let duration = "10:05"

function createInfo(){
    let newviews = ""

    if(views<1000){
        newviews = views
    }else if(views>=1000 && views<1000000){
        newviews = (views/1000) + "K"
    }else if(views>=1000000 && views<1000000000){
        newviews = (views/1000000) + "M"
    }else if(views>=1000000000 && views<1000000000000){
        newviews = (views/1000000000) + "B"
    }
    else{
        newviews = (views/1000000000000) + "T"
    }

    s = `${channel} . ${newviews} views . ${time}`
}
function createCard(){
    createInfo()
    
    let cont = document.querySelector(".container")

    let e = document.createElement("div");
    e.classList.add("card")

    let num = document.createElement("div")
    num.classList.add("num")
    num.insertAdjacentText("BeforeEnd", n)

    let divimg = document.createElement("div")
    divimg.classList.add("image")

    let img = document.createElement("img")
    img.setAttribute("src", i)
    let dura = document.createElement("div")
    dura.classList.add("duration")
    dura.insertAdjacentText("afterbegin", duration)

    divimg.append(img)
    divimg.insertAdjacentElement("beforeend", dura)

    let info = document.createElement("div")
    info.classList.add("info")

    let title = document.createElement("div")
    title.classList.add("title")
    title.insertAdjacentText("BeforeEnd", t)

    let stats = document.createElement("div")
    stats.classList.add("stats")
    stats.insertAdjacentText("BeforeEnd", s)

    info.append(title)
    info.append(stats)

    e.insertAdjacentElement("BeforeEnd", num)
    e.insertAdjacentElement("BeforeEnd", divimg)
    e.insertAdjacentElement("BeforeEnd", info)
    cont.append(e)
    n++;
}