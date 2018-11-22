$(document).ready(function () {
    initPicker();
    initializePeoplePicker('userPickerAprobadorAdicional');
});

function initPicker() {
    $('.datepicker').datepicker();
}

function AlertaValidacionCampos() {
    swal(
        'Hay campos vacíos!',
        'Recuerda llenar todos los campos requeridos(*) del formulario!',
        'warning'
    )
}
function AlertaAvance() {
    swal(
        'Avance mayor a 100!',
        'Recuerda que el avance no puede ser mayor a 100',
        'warning'
    )
}
function AlertaSuccess() {
    swal(
        'Guardado!',
        'Bien Hecho',
        'success'
    )
}