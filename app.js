const boton = document.getElementById("btn");

boton.addEventListener("click", () => {  
    let comments = document.getElementById("comment").value;
    document.getElementById("comment").value = "";
    const cont = document.getElementById("cont");
    const newComments = document.createElement("div");
    
    
   
    const contenedorElemento = document.createElement("p");
    let textNewComment = document.createTextNode(comments);
    contenedorElemento.appendChild(textNewComment);
    
    
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);
})
  
    