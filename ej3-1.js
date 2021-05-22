LoadLDocA("ej3-1.xml", "xml")
function gestionarFicheroXML(xmltree){
    let capa = document.querySelector(".arbolXML")
    let tags = xmltree.querySelectorAll("tag")
    alert("cambio de estilo")
    for(let i=0; i<tags.length; i++){
        if(i==0){
            capa.innerHTML += "<p class='red'>" + tags[i].textContent + "</p>"
        } else if (i==1){
            capa.innerHTML += "<p class='orange'>" + tags[i].textContent + "</p>"
        } else if (i==2){
            capa.innerHTML += "<p class='yellow'>" + tags[i].textContent + "</p>"
        } else if (i==3){
            capa.innerHTML += "<p class='green'>" + tags[i].textContent + "</p>"
        } else if (i==4){
            capa.innerHTML += "<p class='blue'>" + tags[i].textContent + "</p>"
        } else {
            capa.innerHTML += "<p>" + tags[i].textContent + "</p>"
        }
    }
}