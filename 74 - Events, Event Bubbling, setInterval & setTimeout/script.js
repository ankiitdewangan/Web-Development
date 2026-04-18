let button = document.getElementById("btn")
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = 
    "<b> Yayy you were clicked. </b> Enjoy your Click"
})

button.addEventListener("contextmenu", ()=>{
   alert("Dont Hack us by Right Clicking")
})

document.addEventListener("keydown", (e)=>{
   console.log(e);
   
 })