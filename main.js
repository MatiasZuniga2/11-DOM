console.log ('DOM tutorial')

// seleccionar titulo
let title2 = document.getElementById('title'); //forma antigua
const title = document.querySelector("#title"); //formar moderna


title.addEventListener("click" , () =>{


    console.log("click en el titulo");

title.innerHTML = "Manipualcion del DOM, Modelo del documento";
/* title.style.color = "grey";
title.style.fontsize = "5rem";/*  */ 

title.classList.toggle("big__title")




})




const addText = document.querySelector("#agregartexto");
const textConteiner = document.toggle("#container")

addText.addEventListener("click", ()=> {


    textConteiner.innerHTML = "<h2>Nuevo parrafo agregado usando JS</h2>";



});













