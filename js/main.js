// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})
// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');
if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}
toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})
sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');
imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})
// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');
allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})
window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})
// PROGRESSBAR
const allProgress = document.querySelectorAll('main .card .progress');
allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})
//DASHBOARD
// document.addEventListener("DOMContentLoaded", function () {
// 	this.onclick.mostrarDashboardAgregar();
// 	this.onclick.mostrarDashboardEditar();
// 	this.onclick.mostrarDashboardEliminar();
// 	this.onclick.mostrarDashboardBuscar();
// 	this.onclick.agregarActivo();
// 	this.onclick.editarActivo();
// 	this.onclick.eliminarActivo();
// 	this.onclick.buscarActivo();

// });
function mostrarDashboardAgregar() {
	const dashboardAgregar = document.getElementById('dashboardAgregar');
	const dashboardEditar = document.getElementById('dashboardEditar');
	const dashboardEliminar = document.getElementById('dashboardEliminar');
	const dashboardBuscar = document.getElementById('dashboardBuscar');	
	dashboardAgregar.style.display = 'block';
	dashboardEditar.style.display = 'none';
	dashboardEliminar.style.display = 'none';
	dashboardBuscar.style.display = 'none';
}
function mostrarDashboardEditar() {
	const dashboardAgregar = document.getElementById('dashboardAgregar');
	const dashboardEditar = document.getElementById('dashboardEditar');
	const dashboardEliminar = document.getElementById('dashboardEliminar');
	const dashboardBuscar = document.getElementById('dashboardBuscar');
	dashboardEditar.style.display = 'block';
	dashboardAgregar.style.display = 'none';
	dashboardEliminar.style.display = 'none';
	dashboardBuscar.style.display = 'none';
}
function mostrarDashboardEliminar() {
	const dashboardAgregar = document.getElementById('dashboardAgregar');
	const dashboardEditar = document.getElementById('dashboardEditar');
	const dashboardEliminar = document.getElementById('dashboardEliminar');
	const dashboardBuscar = document.getElementById('dashboardBuscar');
	dashboardEliminar.style.display = 'block';
	dashboardEditar.style.display = 'none';
	dashboardAgregar.style.display = 'none';
	dashboardBuscar.style.display = 'none';
}
function mostrarDashboardBuscar() {
	const dashboardAgregar = document.getElementById('dashboardAgregar');
	const dashboardEditar = document.getElementById('dashboardEditar');
	const dashboardEliminar = document.getElementById('dashboardEliminar');
	const dashboardBuscar = document.getElementById('dashboardBuscar');
	dashboardBuscar.style.display = 'block';
	dashboardEditar.style.display = 'none';
	dashboardEliminar.style.display = 'none';
	dashboardAgregar.style.display = 'none';
}
function agregarActivo(){
	const nombreCategoria = document.getElementById('nombreCategoria').value;
	const activo = {
		
		nombreCategoria,
		
	};
	const urlServidor = 'http://localhost:3000/categoriaActivo';

// Configuración de la solicitud POST
const opciones = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(activo),
};

// Realizar la solicitud POST al servidor JSON
fetch(urlServidor, opciones)
  .then(response => response.json())
  .then(data => {
    alert('Tarea agregada:', data);
  })
  .catch(error => {
    console.error('Error al agregar la tarea:', error);
  });
}
//_____________________________________________
function editarActivo() {
	const idActivo = document.getElementById('idBusquedaEditar').value;

	// Verificar si el ID es válido antes de continuar
	if (!idActivo) {
		alert('Por favor, ingrese un ID de activo válido.');
		return;
	}

	// Obtener los nuevos valores para editar el activo
	const nuevoNombreActivo = document.getElementById('nuevoNombreActivo').value;
	

	const urlServidor = `http://localhost:3000/categoriaActivo/${idActivo}`;

  // Configuración de la solicitud PUT o PATCH
  const opciones = {
    method: 'PATCH', // Puedes cambiar a 'PUT' si quieres reemplazar todos los campos
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombreCategoria: nuevoNombreActivo,
      
    }),
  };

  // Realizar la solicitud PUT o PATCH al servidor JSON
  fetch(urlServidor, opciones)
    .then(response => response.json())
    .then(data2 => {
      alert('Activo editado:', data2);
    })
    .catch(error => {
      console.error('Error al editar el activo:', error);
    });
}
//__________________________________________________
function eliminarActivo() {
	const idCategoria = document.getElementById('idBusquedaEliminar').value;
	const urlServidor = `http://localhost:3000/categoriaActivo/${idCategoria}`;
  
	// Configuración de la solicitud DELETE
	const opciones = {
	  method: 'DELETE',
	};
  
	// Realizar la solicitud DELETE al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => {
		if (response.ok) {
		  alert(`Activo con ID ${idCategoria} eliminado exitosamente.`);
		} else {
		  console.error('Error al eliminar el activo.');
		}
	  })
	  .catch(error => {
		console.error('Error al realizar la solicitud DELETE:', error);
	  });
  }
//____________________________________________________

function buscarActivo() {
	const idActivo1 = document.getElementById('idBusqueda').value;
	const tareasPendientes = document.getElementById('data');
	const urlServidor = `http://localhost:3000/categoriaActivo/${idActivo1}`;
	const li = document.createElement("li");
	
  
	// Realizar la solicitud GET al servidor JSON
	fetch(urlServidor)
	  .then(response => {
		if (response.ok) {
		  return response.json();
		} else {
		  throw new Error('No se encontró la categoria.');
		}
	  })
	  .then(data => {
		console.log('Activo encontrado:', data);
		const contenedorTarea = document.createElement('div');
		contenedorTarea.id = 'content';
		tareasPendientes.innerHTML = JSON.stringify(data);
		// Puedes realizar acciones con el activo encontrado
	  })
	  .catch(error => {
		console.error('Error al buscar la categoria por ID:', error);
	  });
	  
  }

