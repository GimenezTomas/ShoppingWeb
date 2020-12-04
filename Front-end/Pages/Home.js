
class Restaurante {
    constructor(nombre, id, categorias, img){
        this.nombre = nombre
        this.id = id
        this.categorias = categorias
        this.img = img
    }
}
/*Funciones buscar*/
function buscarPorCategoria(nombre){
    let restaurantesCat= []

    for(restaurante in restaurantes){
        for(categoria in restaurante.categorias){
            if(categoria == nombre){
                restaurantesCat.push(restaurante)
            }
        }
    }

    return restaurantesCat
}

function buscarPorNombre(nombre){
    let restaurantesNombre= []

    /*for(restaurante in restaurantes){
        if(restaurante[0])
    }*/

    return restaurantesCat
}

/*Search bar*/
function barChange(id, idClose){
    let bar = document.getElementById(id)
    if(bar.value.length <= 0){
        document.getElementById(idClose).style.display="none"
    }else{
        document.getElementById(idClose).style.display="block"
    }
}

function openSearchBar(id, widthMax){
    let progressBar = document.getElementById(id) 

    if(progressBar.style.display == 'none'){
        let width = 1;
        progressBar.style.display = "block"
        let progress
        if(innerWidth>650){
            progress = setInterval(frame, 10);
        }else{
            progress = setInterval(frame, 7);
        }
        function frame(){
            if(width>=widthMax){
                clearInterval(progress);
            }
            else{
                width++;
                progressBar.style.width = width + '%';
            }
        }
    }else{
        closeSearchBar(id, widthMax)
    }
}

function closeSearchBar(id, width){
    let progressBar = document.getElementById(id) 
    console.log(id)
    //let width = progressBar.style.width;

    let progress = setInterval(frame, 10);

    function frame(){
        if(width<=0){
            clearInterval(progress);
            progressBar.style.display = "none"
            if(id=="izqModalCont"){
                document.getElementById('containerIzqModal').style.display="none"
            }
        }
        else{
            width--;
            progressBar.style.width = width + '%';
        }
    }
}

/*modal-izq*/
function llamarModal(id){
    var modal = document.getElementById(id);

    modal.style.display = "block";
    let width = 0
    if(innerWidth < 651){
        width = 60
    }else if(innerWidth>951){
        width = 25
    }else{
        width = 45
    }
    
    if(openSearchBar('izqModalCont', width)){
        modal.style.display = 'none'
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
/*ini*/
function mailVerification(idFormulario, viaMail){
            let form = document.getElementById(idFormulario)
            
            for(let i=0; i<form.childNodes.length; i++){
                if(form.childNodes[i].tagName=="DIV"){
                    for(let j = 0; j<form.childNodes[i].childNodes.length; j++){
                        if (form.childNodes[i].childNodes[j].id!="mailArea" && form.childNodes[i].childNodes[j].id!=null && form.childNodes[i].childNodes[j].id!=undefined){
                            try {  
                                if(viaMail){
                                    document.getElementById(form.childNodes[i].childNodes[j].id).style.display="none"
                                }
                                else{
                                    document.getElementById(form.childNodes[i].childNodes[j].id).style.display="flex"
                                }
                            } catch (error) {
                                
                            }
                        }
                        else if(form.childNodes[i].childNodes[j].id=="mailArea"){
                            for(let l = 0; l < form.childNodes[i].childNodes[j].childNodes.length; l++){
                                if(form.childNodes[i].childNodes[j].childNodes[l].tagName=="H1"){//fijarse de que sea una lista y que cuando toco se desplieguen los metodos, creo que es mas comodo
                                    if(viaMail){
                                        form.childNodes[i].childNodes[j].childNodes[l].innerHTML="Cambiar metodo"
                                        form.childNodes[i].childNodes[j].onmousedown = function(){mailVerification("iniciarSesionCont",false)}
                                    }
                                    else{
                                        form.childNodes[i].childNodes[j].childNodes[l].innerHTML="Verificar con mail"
                                        form.childNodes[i].childNodes[j].onmousedown = function(){mailVerification("iniciarSesionCont",true)}
                                    }
                                    break
                                }
                            }
                        }
                    }
                }
            }
            if(viaMail){
                document.getElementById("iniciarSesionForm").style.display="block"    
            }
            else{
                document.getElementById("iniciarSesionForm").style.display="none"
            }
        }

        function checkFormIniciarSesion(){//completar
            let email = document.getElementById("iniEmail")
            let password = document.getElementById("iniPassword")
            
            if(password.value.length<6){
                password.classList.add('is-invalid')
            }
            else{
                password.classList.remove('is-invalid')
            }
            if(email.value.length<1){
                email.classList.add('is-invalid')
            }
            else{
                email.classList.remove('is-invalid')
            }
        }
