// let palabra = document.getElementById("transicion-lineal")
// let coords = palabra.getBoundingClientRect()
// console.log(coords.left);
// if(coords.left==-32){
//     let palabra2=palabra.cloneNode(true)
//     document.body.append(palabra2)
// }

var e2 = document.querySelector("#transicion-lineal");
var btn = document.querySelector("#btn")

let pr= new Promise((resolve,reject)=>{
    setTimeout(resolve,3000)
})

btn.addEventListener("click", async function(){
    let body=document.body
    ancho_body=body.offsetWidth
    ancho=e2.offsetWidth;
    console.log("Ancho elemento",ancho)
    // texto de 55 caracteres y de largo 25px
    console.log("Ancho body",ancho_body)

    e2.id="transicion-linealend"

    
    
});

e2.addEventListener("transitionend",()=>{
    e2.id="transicion-lineal"
    console.log("left partida ",document.body.offsetWidth+e2.offsetWidth)
    
    
    setTimeout(()=>{
        e2.id="transicion-linealend"
    },200)

},true)