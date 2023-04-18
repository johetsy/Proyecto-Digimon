$(document).ready(function () {
    
    
    $( "#byName" ).click(function() {
        location.reload()
    })
    
    //limpiar el campo de la tabla antes de mostrar un nuevo evento
    $('#digimon-name').click(function() {
        let clean=''
        document.getElementById("table_body").innerHTML=clean
    })

    //Obtener todos los Digimon y mostrar la lista completa
    $( "#list" ).click(function() {
        $.getJSON('https://digimon-api.vercel.app/api/digimon')
        .done(function(json) {
            let tableData=""
            json.map((values) => {
                tableData+=`<tr>
                <td>${values.name}</td>
                <td>${values.level}</td>
                <td><img src=${values.img}></td>
                </tr>`;
            });
            document.getElementById("table_body").innerHTML=tableData;
        })
        .fail(function() {
        alert('Ha ocurrido un error al obtener los datos');
        });
    }); 

    // Obtener el Digimon por nombre 
    $( "#search" ).click(function(e) {
        e.preventDefault();
        let digimonName = $('#digimon-name').val();
        $.getJSON(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
        .done(function(data) {
            let tableData2=""
            data.map((values) => {
                tableData2+=`<tr>
                <td>${values.name}</td>
                <td>${values.level}</td>
                <td><img src=${values.img}></td>
                </tr>`;    
            });
            document.getElementById("table_body").innerHTML=tableData2;
        })
        .fail(function() {
            let message ='El Digimon buscado no existe'
            tableData3=`<h3>${message}</h3>`
            document.getElementById("table_body").innerHTML=tableData3
        });
    });
});
