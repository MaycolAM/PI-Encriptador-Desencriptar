const botonEncriptar = () => {
    let agregarClass = document.getElementsByClassName("imagen-persona")[0];
    
    agregarClass.style.display = "none";

    let encriptarDatos = document.getElementById("primer-Textarea").value;
    let encriptado = [];

    if (encriptarDatos == "") {
        
    }
    else {

        for (let i = 0; i < encriptarDatos.length; i++) {

            if (encriptarDatos[i] == "a") {

                encriptado[i] = "enter"
                
            }
            else if (encriptarDatos[i] == "e") {
                
                encriptado[i] = "imes"
                
            }
            else if (encriptarDatos[i] == "i") {
                
                encriptado[i] = "ai"
                
            }
            else if (encriptarDatos[i] == "o") {
                
                encriptado[i] = "ober"
                
            }
            else if (encriptarDatos[i] == "u") {
                
                encriptado[i] = "ufat" 
            
            }
            else {
                
                encriptado.push(encriptarDatos[i])
                
            }
        }
        let datoCopiado = "";
        for (let i = 0; i < encriptado.length; i++) {
        
            datoCopiado += encriptado[i];
            
        }

        document.getElementById("segundo-Textarea").value = datoCopiado;
        document.getElementById("primer-Textarea").value = "";

    }
}

const botonDesencriptar = () => {
  let desencriptarDatos = document.getElementById("primer-Textarea").value;
  
  let caracterA = desencriptarDatos.replace(/enter/g,"a")
  let caracterE = caracterA.replace(/imes/g,"e")
  let caracterI = caracterE.replace(/ai/g,"i")
  let caracterO = caracterI.replace(/ober/g,"o")
  let caracterU = caracterO.replace(/ufat/g,"u")

  document.getElementById("segundo-Textarea").value = caracterU;
  document.getElementById("primer-Textarea").value = "";
}

const botonCopiar = () => {
    let textareaDatos = document.getElementById("segundo-Textarea").value;

    navigator.clipboard.writeText(textareaDatos);
    document.getElementById("segundo-Textarea").value = "";
}

document.getElementById("Encriptar").addEventListener("click",botonEncriptar);
document.getElementById("Desencriptar").addEventListener("click",botonDesencriptar);
document.getElementById("Copiar").addEventListener("click",botonCopiar);