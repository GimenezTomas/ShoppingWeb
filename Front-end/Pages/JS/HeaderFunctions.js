/*list modal-izq*/
function llamarModal(id){
    var modal = document.getElementById(id);

    modal.style.display = "block";
    let width = 0
    if(innerWidth < 651){
        width = 75
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
            llamarModal('containerIzqModal')
        }
    }
 }  
 /*modal ini*/
 function passwordModal(offsetTop){
    document.getElementById('passwordModalC').style.top = offsetTop - 30
    document.getElementById('passwordModal').style.display = "block";       

    window.onclick = function(event) {
        if (event.target == document.getElementById('passwordModal')) {
            document.getElementById('passwordModal').style.display = "none";
        }
    }

    setTimeout(function () {document.getElementById('passwordModal').style.display = 'none'}, 3000)
}

function modalIniClose(){
    document.getElementById('iniContNew').style.display = 'none'
    document.getElementById('iniCont2').style.display = 'none'
    document.getElementById('iniciarSesionModal').style.display = 'none'
    document.getElementById('iniciarSesionCont').style.display = 'block'
}
function back()
{
    let now = 'bodyRegister2'
    let last = 'bodyRegister1'
    if(document.getElementById(now).style.display != 'none'){
        document.getElementById(now).style.display='none'
        document.getElementById(last).style.display='block'

    }else{
        document.getElementById('containerFormulario').style.display='block'
        document.getElementById(now).style.display='none'
        document.getElementById('headerFormModal').innerHTML='INICIAR SESION' 
        document.getElementById('right-close').style.display='block' 
        document.getElementById('right-back').style.display='none' 
        document.getElementById('registerF').style.display='none' 
    } 
}
function loginWPP(){
    document.getElementById('iniciarSesionCont').style.display = 'none'
    document.getElementById('iniContWPP').style.display = 'block'
}

function globalCheck(...inputs){
    let optional = false
    for(let i=0; i<inputs.length; i++){
        let input=inputs[i]
        if(input == 'optional'){
            optional = true
        }else if((document.getElementById(input).value == "" && !optional) || document.getElementById(input).className.includes("is-invalid")){
            document.getElementById(input).scrollIntoView()
            return false
        }
    }
    return true
}

function checkForm(type, id){//completar
    let email = document.getElementById(id)
    formConditions(email, type)
    if(email.value == ''){
        email.classList.remove('is-invalid')
    }
}

function formConditions(element, type){
    let ok = false
    switch(type){
        case 'email':   
            if(element.value.length > 5){
                let arroba = false
                let extension = false

                for(let i=0; i<element.value.length; i++){
                    if(element.value[i] == '@' && element.value[i-3] != null && element.value.charCodeAt(i+1) > 64 && element.value.charCodeAt(i+1) < 123){
                        arroba = true
                    }else if(element.value[i] == '.' && arroba && element.value[i+1] != null){
                        extension = true
                    }
                }

                if(arroba && extension){
                    ok = true
                }
            }
            if(ok){
                element.classList.remove('is-invalid')
            }else{
                element.classList.add('is-invalid')
            }
            break
        case "password":
            if(element.value.length>8){
                let upperCase = false
                let lowerCase = false
                let number = false

                for(let i = 0; i<element.value.length; i++ ){
                    if(element.value.charCodeAt(i) > 64 && element.value.charCodeAt(i) < 91 ){
                        upperCase = true
                    }else if(element.value.charCodeAt(i) < 123 && element.value.charCodeAt(i) > 96 ){
                        lowerCase = true
                    }else if(element.value.charCodeAt(i) > 47 && element.value.charCodeAt(i) < 58 ){
                        number = true
                    }
                }
                
                if(lowerCase && upperCase && number){
                    ok = true
                }
            }
            if(ok){
                element.classList.remove('is-invalid')
            }else{
                element.classList.add('is-invalid')
            }
            break 
        case "password2":
            if(element.value == document.getElementById('passwordRegister').value){
                element.classList.remove('is-invalid')
            }else if(element.value != ''){
                element.classList.add('is-invalid')
            }
            break
        case "name":
            if(element.value.length>1){
                for(let i=0; i<element.value.length; i++){
                    if((element.value.charCodeAt(i) < 65 || (element.value.charCodeAt(i) > 90 && element.value.charCodeAt(i) < 95)) || element.value.charCodeAt(i) > 122){
                        element.classList.add('is-invalid')
                        ok = true
                        break
                    }
                }
            }else{
                ok = true
            }
            if(!ok){
                element.classList.remove('is-invalid')
            }
            break
        case "phone":
            if(element.value.length>8 && element.value.length<12){
                element.classList.remove('is-invalid')
            }else{
                element.classList.add('is-invalid')
            }
            break
        case "code":
            if(element.value.length!=6){
                element.classList.add('is-invalid')
            }else{
                element.classList.remove('is-invalid')
            }
    }
}

function toVerify(){
    if(globalCheck('emailRegister', 'nameRegister', 'lastnameRegister', 'passwordRegister', 'password2Register', 'optional','celRegister', 'addressRegister')){
        document.getElementById('bodyRegister1').style.display='none'
        document.getElementById('bodyRegister2').style.display='block'
    }
    document.getElementById('emailVerRegi').innerHTML = document.getElementById('emailRegister').value
}

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

function newPassword(...inputs){
    for(let i=0; i<inputs.length; i++){
        let input=inputs[i]
        if(document.getElementById(input).value != "" && !document.getElementById(input).className.includes("is-invalid")){
            document.getElementById('h1NewPass').innerHTML += " "+document.getElementById(input).value
            document.getElementById('iniContNew').style.display = 'none'
            document.getElementById('iniCont2').style.display = 'block'
            return 0
        }
    }
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
    //let width = progressBar.style.width;
    let time = 10

    if(id=="fc"){
        time = 2
    }else if('izqModalCont' == id){
        time = 3
    }else if(id.substr(0, 12) == 'bottomBorder'){
        time = 2
        for(let i=0 ; i<document.getElementsByClassName('b123').length; i++){
            if(document.getElementsByClassName('b123')[i].id != id){
                document.getElementsByClassName('b123')[i].style.display = 'none'
            }
        }
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