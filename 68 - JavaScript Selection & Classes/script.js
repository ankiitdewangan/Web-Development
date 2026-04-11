console.log("Ankit");

// let boxes = document.getElementsByClassName("box")

// console.log(boxes);

// boxes[1].style.backgroundColor = "yello"

// document.getElementById("yellow").style.backgroundColor = "yellow"

// document.querySelector(".box").style.backgroundColor = "red"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
})