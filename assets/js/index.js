$(document).ready(function () {
    $("#text1").mouseenter(function () {
        $("#text2").show();
    });

    $("#text1").mouseout(function () {
        $("#text2").hide();
    });

    $("#caja2").click(function () {
        $("img").css("width", "100%");
    });
    
    $("#caja2").mouseout(function () {
        $("img").css("width", "20%");
    });

    $("#caja3").dblclick(function () {
        $("#caja3").css("fontSize", "200%");
    })
})


// function mostrarMensaje(){
    // document.getElementById('text2').style.display = "block";
// }

// function ocultarMensaje(){
//     document.getElementById('text2').style.display = "none";
// }

// function agrandarImagen(){    
//     document.getElementById('img').style.width = "100%";
// }

// function normalizarImagen(){
//     document.getElementById('img').style.width = "20%";
// }

// function agrandarLetra(){
//     document.getElementById('caja3').style.fontSize = "200%";
// }