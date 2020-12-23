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