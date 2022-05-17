$(document).ready(
    function () {
        var bPreguntar = true;
        window.onbeforeunload = preguntarAntesDeSalir;
        function preguntarAntesDeSalir() {
            if (bPreguntar)
                return "validacion"
        }
        /* Definicion de clases JQuery */
        $('.solo-string').keyup(function () {
            this.value = (this.value + '').replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
        });

        $('.solo-numero').keyup(function () {
            this.value = (this.value + '').replace(/[^0-9]/g, '');
        });
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
        });

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

        $.get("https://apis.digital.gob.cl/dpa/regiones", function (data) {
            $.each(data, function (i, item) {
                $("#optionRegion").append(
                    '<option value="' + item.codigo + '">' + item.nombre + '</option>'
                )
            });
        });

        $("#optionRegion").blur(function () {
            var userinput = $(this).val();

            if (userinput == "Seleccione") {
                alert('Seleccione una Región porfavor.')
            } else {
                $.get("https://apis.digital.gob.cl/dpa/regiones/" + userinput + "/comunas", function (data) {
                    $("#optionComuna").empty();
                    $.each(data, function (i, item) {
                        $("#optionComuna").append(
                            '<option value="' + item.codigo + '">' + item.nombre + '</option>'
                        )
                    });
                });
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
            if (d === undefined) {
                alert("Formato incorrecto")
            }
            if (e == undefined) {
                alert("Formato Incorrecto")
            }
        });
    }
);
