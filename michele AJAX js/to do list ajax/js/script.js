
const registroForm = document.getElementById('registroForm');
const actividadInput = document.getElementById('actividadInput');
const fechaInput = document.getElementById('fechaInput');
const registroList = document.getElementById('registroList');

registroForm.addEventListener('submit', agregarRegistro);

function agregarRegistro(event) {
  event.preventDefault();

  const actividad = actividadInput.value;
  const fecha = fechaInput.value;

  function agregarDatos(datos) {
    $.ajax({
      url: "http://localhost/to-do_list",
      method: "POST",
      data: datos,
      success: function(response) {
        console.log(response);
        
      },
      error: function(error) {
        console.log(error);
        
      }
    });
    function modificarDatos(id, nuevosDatos) {
      $.ajax({
        url: "http://localhost/to-do_list" + id,
        method: "PUT",
        data: nuevosDatos,
        success: function(response) {
          console.log(response);
          
        },
        error: function(error) {
          console.log(error);
          
        }
      });
    }
  }

  const registroItem = document.createElement('div');
  registroItem.innerHTML = `<strong>${actividad}</strong> - ${fecha}`;

  registroList.appendChild(registroItem);

  actividadInput.value = '';
  fechaInput.value = '';
}

function eliminarRegistro(id) {
  
  $.ajax({
    url: "http://localhost/to-do_list" + id,
    method: "DELETE",
    success: function(response) {
      console.log(response);
    },
    error: function(error) {
      console.log(error);
    }
  });

  const registroItem = document.getElementById("registroItem-" + id);
  registroItem.remove();
}