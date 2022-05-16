$(document).ready(
        function () {
            $("#inputMail").blur(function () {
                var userinput = $(this).val();
                var pattern = /^\b[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}\b$/i

                if (!pattern.test(userinput)) {
                    alert('No es un e-mail válido')
                }
            });
            $("#inputNombre").blur(function () {
                var userinput = $(this).val();
                var pattern = /^\b[a-z]\b$/i

                if (!pattern.test(userinput)) {
                    alert('Nombre solo debe contener letras')
                }

                $("#inputApellido").blur(function () {
                    var userinput = $(this).val();
                    var pattern = /^\b[a-z]\b$/i

                    if (!pattern.test(userinput)) {
                        alert('Apellido solo debe contener letras')
                    }
                });

                $("#inputTelefono").blur(function () {
                    var userinput = $(this).val();
                    var pattern = /^\b[0-9]{11}\b$/i
    
                    if (!pattern.test(userinput)) {
                        alert('Numero de telefono debe contener 11 caracteres')
                    }
                });

                $("#inputCelular").blur(function () {
                    var userinput = $(this).val();
                    var pattern = /^\b[0-9]{11}\b$/i
    
                    if (!pattern.test(userinput)) {
                        alert('Numero de celular debe contener 11 caracteres')
                    }
                });

                $("#btnEnvio").click(function () {
                    var a = $("#inputMail").val();
                    var b = $("#inputNombre").val();
                    var c = $("#inputApellido").val();
                    var d = $("inputTelefono").val();
                    var e = $("inputCelular").val();

                    console.log(e)

                    if (a === undefined) {
                        alert("Email vacio");
                    }
                    if (b === undefined) {
                        alert("Nombre vacio");
                    }
                    if (c === undefined) {
                        alert("Apellido vacio");
                    }
                    if (d === undefined){
                        alert("Formato incorrecto")
                    }
                    if (e == undefined){
                        alert("Formato Incorrecto")
                    }
                })
            });
        }
);