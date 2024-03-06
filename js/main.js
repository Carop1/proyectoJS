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
function mostrarDashboardAgregar() {
	const dashboardAgregar = document.getElementById('dashboardAgregar');
	dashboardAgregar.style.display = 'block';
	dashboardEditar.style.display = 'none';
	dashboardEliminar.style.display = 'none';
	dashboardBuscar.style.display = 'none';
}
function mostrarDashboardEditar() {
	const dashboardEditar = document.getElementById('dashboardEditar');
	dashboardEditar.style.display = 'block';
	dashboardAgregar.style.display = 'none';
	dashboardEliminar.style.display = 'none';
	dashboardBuscar.style.display = 'none';
}
function mostrarDashboardEliminar() {
	const dashboardEliminar = document.getElementById('dashboardEliminar');
	dashboardEliminar.style.display = 'block';
	dashboardEditar.style.display = 'none';
	dashboardAgregar.style.display = 'none';
	dashboardBuscar.style.display = 'none';
}
function mostrarDashboardBuscar() {
	const dashboardBuscar = document.getElementById('dashboardBuscar');
	dashboardBuscar.style.display = 'block';
	dashboardEditar.style.display = 'none';
	dashboardEliminar.style.display = 'none';
	dashboardAgregar.style.display = 'none';
}
function agregarActivo(){
	const nombreActivo = document.getElementById('nombreActivo').value;
	const fechaCompra = document.getElementById('fechaCompra').value;
	const valorUnitario = document.getElementById('valorUnitario').value;
	const tipoActivo = document.getElementById('tipoActivo').value;

	const activo = {
		nombreActivo,
		fechaCompra,
		valorUnitario,
		tipoActivo,
	};
	const urlServidor = 'http://localhost:3000/activos';

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
    console.log('Tarea agregada:', data);
  })
  .catch(error => {
    console.error('Error al agregar la tarea:', error);
  });
}