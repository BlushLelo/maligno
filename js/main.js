function doIt() {
  var nome = document.getElementById("nome").value;
  var ra = document.getElementById("ra").value;

 if (nome !== "" && ra !== "") {
   var container = document.getElementById("container")
   var inputTextNome = document.createElement("input")
   inputTextNome.value = nome;
   var inputTextRa = document.createElement("input")
   inputTextRa.value = ra;
   var button = document.createElement("button");
   var img = document.createElement("IMG");
   img.setAttribute("src", "img/editar.png");
   img.setAttribute("class", "myImg");
   button.appendChild(img);
   container.appendChild(inputTextNome);
   container.appendChild(inputTextRa);
   container.appendChild(button);
   document.getElementById("nome").value = "";
   document.getElementById("ra").value = "";

 }
}
