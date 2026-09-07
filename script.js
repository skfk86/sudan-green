const menuBtn = document.getElementById("menuBtn")
const menuList = document.getElementById("menuList")

menuBtn.addEventListener("click",function (event){
    event.stopPropagation()
    menuList.classList.toggle("show")
})

window.addEventListener("click", function (){
    if(menuList.classList.contains("show")){
        menuList.classList.remove("show")
    }
})
let frute = ["apple","apple","apple","apple"]
for (const [i , p] of frute.entries()) {
    console.log(p , i)
}