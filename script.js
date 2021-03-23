
var flag = true

window.addEventListener("scroll",()=>{
    let y = window.scrollY
    console.log(y);
    if(flag && y>=270){
        myFunc(y)
        flag=false
    }
    if(!flag && y<270){
        flag=true
        myFunc(y)
    }
})

const myFunc=(scrollY)=>{
    let headerScroll,navScroll
    if(scrollY<270 ){
        if(document.querySelector(".header-scroll")){
            headerScroll=document.querySelector(".header-scroll")
            headerScroll.setAttribute("hidden",true)
        }
        if(document.querySelector(".header-scrollend")){
            headerScroll=document.querySelector(".header-scrollend")
            headerScroll.className="header-scroll"
            headerScroll.setAttribute("hidden",true)
        }
        if(document.querySelector(".nav-scrollend")){
            navScroll=document.querySelector(".nav-scrollend")
            navScroll.remove()
        }
    }else{
        headerScroll=document.querySelector(".header-scroll")
        headerScroll.removeAttribute("hidden")
        headerScroll.className="header-scrollend"
        console.log("asdads");

        
        navScroll=document.querySelector(".nav").cloneNode(true)
        document.querySelector(".container").insertBefore(navScroll,document.querySelector(".body"))
        navScroll.className="nav-scroll"
        console.log(navScroll);
        navScroll.className="nav-scrollend"
    }
}
