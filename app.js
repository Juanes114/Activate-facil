// Lista de actividades físicas
const actividades = [
  "Caminar 5 minutos",
  "Mover los tobillos sentado",
  "Estiramiento de brazos",
  "Girar el cuello suavemente",
  "Respiración profunda 2 minutos",
  "Levantarse y sentarse en la silla 5 veces"
];

// Lista de frases motivacionales
const motivaciones = [
  "¡Muy bien! Cada paso cuenta 👏",
  "Excelente, sigue cuidando tu salud 💙",
  "¡Eres un ejemplo de constancia! 🌟",
  "Recuerda: moverse es vivir 🚶‍♂️",
  "¡Eso es! Pequeños esfuerzos, grandes resultados 💪"
];

// Referencias de Actividad
const actividadTexto = document.getElementById("actividadTexto");
const btnActividad = document.getElementById("btnActividad");
const mensajeActividad = document.getElementById("mensajeActividad");

// Referencias de Medicamentos
const formMedicamento = document.getElementById("formMedicamento");
const listaMedicamentos = document.getElementById("listaMedicamentos");
const mensajeMedicamento = document.getElementById("mensajeMedicamento");

// Modal
const modal = document.getElementById("modalEliminar");
const opcionesMotivo = document.getElementById("opcionesMotivo");
const cancelarEliminar = document.getElementById("cancelarEliminar");
let indiceAEliminar = null;

// Motivos de eliminación
const motivos = [
  "Error al escribir el nombre",
  "Hora incorrecta",
  "Ya terminé el tratamiento",
  "Otro motivo"
];

// Mostrar actividad aleatoria
btnActividad.addEventListener("click", () => {
  const actividad = actividades[Math.floor(Math.random() * actividades.length)];
  actividadTexto.textContent = actividad;

  const motivacion = motivaciones[Math.floor(Math.random() * motivaciones.length)];
  mensajeActividad.textContent = motivacion;
});

// Guardar medicamentos en localStorage
formMedicamento.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombreMedicamento").value;
  const hora = document.getElementById("horaMedicamento").value;
  const frecuencia = parseInt(document.getElementById("frecuenciaMedicamento").value);

  const datos = JSON.parse(localStorage.getItem("medicamentos")) || [];
  datos.push({ nombre, hora, frecuencia });
  localStorage.setItem("medicamentos", JSON.stringify(datos));

  formMedicamento.reset();
  cargarMedicamentos();
});

// Cargar lista de medicamentos
function cargarMedicamentos() {
  const datos = JSON.parse(localStorage.getItem("medicamentos")) || [];
  listaMedicamentos.innerHTML = "";
  datos.forEach((med, i) => {
    const li = document.createElement("li");
    li.textContent = `${med.nombre} - inicia ${med.hora}, cada ${med.frecuencia}h `;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.classList.add("btnEliminar");

    btnEliminar.addEventListener("click", () => {
      indiceAEliminar = i;
      mostrarModal();
    });

    li.appendChild(btnEliminar);
    listaMedicamentos.appendChild(li);
  });
}

// Mostrar modal
function mostrarModal() {
  opcionesMotivo.innerHTML = "";
  motivos.forEach(m => {
    const btn = document.createElement("button");
    btn.textContent = m;
    btn.classList.add("motivo");
    btn.addEventListener("click", () => {
      confirmarEliminacion(m);
    });
    opcionesMotivo.appendChild(btn);
  });
  modal.style.display = "block";
}

// Cerrar modal
cancelarEliminar.addEventListener("click", () => {
  modal.style.display = "none";
  indiceAEliminar = null;
});

// Confirmar eliminación
function confirmarEliminacion(motivo) {
  const datos = JSON.parse(localStorage.getItem("medicamentos")) || [];
  if (indiceAEliminar !== null) {
    const eliminado = datos.splice(indiceAEliminar, 1);
    localStorage.setItem("medicamentos", JSON.stringify(datos));
    cargarMedicamentos();
    mensajeMedicamento.textContent = `❌ "${eliminado[0].nombre}" eliminado. Motivo: ${motivo}`;
  }
  modal.style.display = "none";
  indiceAEliminar = null;
}

// Revisar medicamentos cada minuto
setInterval(() => {
  const ahora = new Date();
  const horaActual = ahora.toTimeString().slice(0, 5); // HH:MM
  const datos = JSON.parse(localStorage.getItem("medicamentos")) || [];

  datos.forEach(med => {
    const [h, m] = med.hora.split(":").map(Number);
    let proxima = new Date();
    proxima.setHours(h, m, 0, 0);

    while (proxima.toTimeString().slice(0, 5) <= horaActual) {
      if (proxima.toTimeString().slice(0, 5) === horaActual) {
        const motivacion = motivaciones[Math.floor(Math.random() * motivaciones.length)];
        mensajeMedicamento.textContent = `⏰ ¡Hora de tomar ${med.nombre}! ${motivacion}`;
      }
      proxima.setHours(proxima.getHours() + med.frecuencia);
    }
  });
}, 60000);

// Inicializar
cargarMedicamentos();
