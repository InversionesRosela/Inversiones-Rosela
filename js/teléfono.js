const inputTelefono = document.getElementById('txtTelefono');

    inputTelefono.addEventListener('input', function (event) {
        const telefonoSoloNumeros = event.target.value.replace(/\D/g, '');

        let telefonoFormateado = '';
        if (telefonoSoloNumeros.length > 0) {
            telefonoFormateado = '(' + telefonoSoloNumeros.substring(0, 3) + ') ';
            if (telefonoSoloNumeros.length > 3) {
                telefonoFormateado += telefonoSoloNumeros.substring(3, 7) + '-' + telefonoSoloNumeros.substring(7, 11);
            } else {
                telefonoFormateado += telefonoSoloNumeros.substring(3);
            }
        }
        
        event.target.value = telefonoFormateado;
    });