function coletar(){
  let cor = document.getElementById('colorPicker').value;
  let valor;
  
  try{
    valor = document.querySelector('input[name="local"]:checked').value;
  }
  catch (ex) {    
    valor = null
  }

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
  }else{
    alert("Escolha uma das opções acima.")
  }
}
function limpar(){
  document.getElementById('cabecalho').style.color= "black";
  document.getElementById('corpo').style.backgroundColor= "white";
  document.getElementById('colorPicker').value = "#000"

  var ele = document.getElementsByName("local");
   for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
}
