function coletar(){
  let cor = document.getElementById('colorPicker').value;
  
  let valor = document.querySelector('input[name="local"]:checked').value;
  if (valor!==null){
    
    switch (valor){
      case "titulo":
        document.getElementById('cabecalho').style.color= cor;
        break;
      case "fundo":
        document.getElementById('corpo').style.backgroundColor= cor;
        break;
      default:
      break;
    }
  }
}
function limpar(){
  document.getElementById('cabecalho').style.color= "black";
  document.getElementById('corpo').style.backgroundColor= "white";
  document.getElementById('colorPicker').value = "#000"
}
