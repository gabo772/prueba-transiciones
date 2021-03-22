
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
    let headerScroll
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
    }else{
        headerScroll=document.querySelector(".header-scroll")
        headerScroll.removeAttribute("hidden")
        headerScroll.className="header-scrollend"
        console.log("asdads");
    }
}
