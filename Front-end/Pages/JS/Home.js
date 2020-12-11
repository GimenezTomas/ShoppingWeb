
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


function searchBar(id, widthMax){
    if(innerWidth<651){
        document.getElementById('modalBuscador').style.display = 'block'
    }else{
        openSearchBar(id, widthMax)
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
            progress = setInterval(frame, 2);
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
    let time = 10

    if(id=="fc"){
        time = 2
    }

    let progress = setInterval(frame, time);

    function frame(){
        if(width<=0){
            clearInterval(progress);
            progressBar.style.display = "none"
            if(id=="izqModalCont"){
                document.getElementById('containerIzqModal').style.display="none"
            }else if(id=="fc"){
                document.getElementById('factura').style.display="none"
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
function hidePassword(id, idHide, idEye){
    if (document.getElementById(id).type == 'text'){
        document.getElementById(id).type = 'password'
        document.getElementById(id).style.letterSpacing = '0.25rem'
        document.getElementById(idEye).style.display="none"
        document.getElementById(idHide).style.display="block"
    }else{
        document.getElementById(id).style.letterSpacing = '0'
        document.getElementById(id).type = 'text'
        document.getElementById(idEye).style.display="block"
        document.getElementById(idHide).style.display="none"
    }
}

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
/*Factura - Bag*/
actualizarPrecioTotal('platos', 'precio', 'botonPedir')

function activarDisplayFactura(id, display){
    if(display){
        document.getElementById(id).style.display="block"
    }
    else{
        document.getElementById(id).style.display="none"
    }
}
function botonEliminar(id,display){
    if(display){
        document.getElementById(id).style.display="block"
    }
    else{
        document.getElementById(id).style.display="none"
    }
}

function eliminarPlato(idEliminar){
    let plato = document.getElementById(idEliminar)
    plato.parentNode.removeChild(plato)
    actualizarPrecioTotal('platos', 'precio', 'botonPedir')
}

function vaciarCanasta(id){
    let platos = document.getElementById(id)
    for(let plato = 0;  plato<platos.childNodes.length; plato++){
        platos.removeChild(platos.childNodes[plato])
        plato--
    }
    actualizarPrecioTotal('platos', 'precio', 'botonPedir')
}

function actualizarPrecioTotal(idPlatos, classNamePrecio, clasePedir){
    let platos = document.getElementById(idPlatos)
    let precio = 0 
    for(let plato = 0;  plato<platos.childNodes.length; plato++){
        if(platos.childNodes[plato].childNodes.length>0){
            for(let x = 0; x < platos.childNodes[plato].childNodes.length; x++){
                if(platos.childNodes[plato].childNodes[x].tagName=="DIV"){
                    for(let w=0; w<platos.childNodes[plato].childNodes[x].childNodes.length; w++){
                        if(platos.childNodes[plato].childNodes[x].childNodes[w].className == classNamePrecio){
                            precio = precio + Number(platos.childNodes[plato].childNodes[x].childNodes[w].innerHTML)
                            break
                        }
                    }
                }
            }
        }
    }
    document.getElementById(clasePedir).innerHTML = "Pedir ($"+precio+")"
    if(precio==0){
        canastaVacia()
    }
}

function canastaVacia(){
    document.getElementById("pedidos").style.display="none"
    document.getElementById("carritoVacio").style.display="flex"
        
}
/*modal vaciar canasta*/
function vaciarCanastaModal(){
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = [document.getElementsByClassName("closer")[0], document.getElementsByClassName("closer")[2]];

    // When the user clicks the button, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span[0].onclick = function() {
    modal.style.display = "none";
    }

    span[1].onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function llamarFactura(id){
    var modal = document.getElementById(id);

    modal.style.display = "block";
    let width = 0
    if(innerWidth < 651){
        width = 100
    }else if(innerWidth>951){
        width = 100
    }else{
        width = 70
    }
    
    if(openSearchBar('fc', width)){
        modal.style.display = 'none'
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/*carrousel*/

activarCarrousel();
function activarCarrousel(){
    $("#cr").append("<div id='rey'></div>");
    $("#rey").append("<img id='atras' src='../Images/flechaIzq.png'>");
    $("#rey").append("<img id='adelante' src='../Images/flechaDer.png'>");

    var imagen = 1;
    cambioPuntos();
    $("#adelante").click(function ManualAdelante(){
        cambioPuntos();
        $("#imagen" + imagen).css("display","none");
        clearInterval(interval);
        interval=setInterval(ManualAdelante, 3000);
        if(imagen==4){
            imagen=1;
        }
        else{
            imagen=imagen+1;
        }
        cambioPuntos();
        $("#imagen" + imagen).fadeIn(1000);
        $("#imagen" + imagen).css("display","block");
    });

    $("#atras").click(function ManualAtras(){
        clearInterval(interval);
        interval=setInterval(CambioAutomatico, 3000);
        $("#imagen" + imagen).css("display","none");
        if(imagen==1){
            imagen=4;
        }
        else{
            imagen=imagen-1;
        }
        cambioPuntos();
        $("#imagen" + imagen).fadeIn(1000);
        $("#imagen" + imagen).css("display","block");
    });

    function CambioAutomatico(){
        $("#imagen" + imagen).css("display","none");
        if(imagen==4){
            imagen=1;
        }
        else{
            imagen=imagen+1;
        }
        cambioPuntos();
        $("#imagen" + imagen).fadeIn(1000);
        $("#imagen" + imagen).css("display","block");
    }
    var interval=setInterval(CambioAutomatico, 3000);

    function cambioPuntos(){
        var i;
        var puntos = document.getElementsByClassName("dot");
        for (i = 0; i < puntos.length; i++) {
            puntos[i].className = puntos[i].className.replace(" active", "");
        }
        puntos[imagen-1].className += " active";
    }

    $("#p1").click(function LlamarPunto(){
        clearInterval(interval);
        interval=setInterval(CambioAutomatico, 3000);
        $("#imagen" + imagen).css("display","none");
        imagen = 1;
        cambioPuntos();
        $("#imagen" + imagen).fadeIn(1000);
        $("#imagen" + imagen).css("display","block");
    });

    $("#p2").click(function LlamarPunto(){
        clearInterval(interval);
        interval=setInterval(CambioAutomatico, 3000);
        $("#imagen" + imagen).css("display","none");
        imagen = 2;
        cambioPuntos();
        $("#imagen" + imagen).fadeIn(1000);
        $("#imagen" + imagen).css("display","block");
    });

    $("#p3").click(function LlamarPunto(){
        clearInterval(interval);
        interval=setInterval(CambioAutomatico, 3000);
        $("#imagen" + imagen).css("display","none");
        imagen = 3;
        cambioPuntos();
        $("#imagen" + imagen).fadeIn(1000);
        $("#imagen" + imagen).css("display","block");
    });

    $("#p4").click(function LlamarPunto(){
        clearInterval(interval);
        interval=setInterval(CambioAutomatico, 3000);
        $("#imagen" + imagen).css("display","none");
        imagen = 4;
        cambioPuntos();
        $("#imagen" + imagen).fadeIn(1000);
        $("#imagen" + imagen).css("display","block");
    });
}
