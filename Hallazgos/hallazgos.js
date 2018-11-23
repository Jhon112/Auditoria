$(document).ready(function () {
    // initializePeoplePicker('userPickerAprobadorAdicional');
    getPlanAuditoria();
});

// Initialize Date Picker
function initPicker() {
    $('.datepicker').datepicker();
}

// Alerts that will show up when clicking the Add button on the form
function alertaValidacionCampos() {
    swal(
        'Hay campos vacíos!',
        'Recuerda llenar todos los campos requeridos(*) del formulario!',
        'warning'
    );
}
function alertaSuccess() {
    swal(
        'Guardado!',
        'Bien Hecho',
        'success'
    );
}

// Initialize People Picker 
// function initializePeoplePicker(peoplePickerElementId) {

//     // Create a schema to store picker properties, and set the properties.
//     var schema = {};
//     schema['PrincipalAccountType'] = 'User,DL,SecGroup,SPGroup';
//     schema['SearchPrincipalSource'] = 15;
//     schema['ResolvePrincipalSource'] = 15;
//     schema['AllowMultipleValues'] = false;
//     schema['MaximumEntitySuggestions'] = 50;
//     schema['Width'] = '280px';

//     // Render and initialize the picker. 
//     // Pass the ID of the DOM element that contains the picker, an array of initial
//     // PickerEntity objects to set the picker value, and a schema that defines
//     // picker properties.
//     this.SPClientPeoplePicker_InitStandaloneControlWrapper(peoplePickerElementId, null, schema);
// }

// Get all the plans from the list
function getPlanAuditoria() {
    var url = "https://canacol.sharepoint.com/sites/Intranet/Admin/_api/web/lists/getbytitle('PlanAuditoria')/items?$select=ID,Title&$orderby=Title desc&$top=4999";
    $.ajax({
        url: url,
        method: "GET",
        headers: {
            "Accept": "application/json; odata=verbose"
        },
        success: function (data) {
            $.each(data.d.results, function (index, element) { 
                $('#planAuditoria').append(new Option(element.Title, element.ID));
            });
        },
        error: function (error) {
        console.log(JSON.stringify(error));
        }
    });
}