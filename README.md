# 💪 Actívate Fácil

Aplicación web sencilla y accesible pensada para apoyar a personas de la **tercera edad** y a sus cuidadores.  
La herramienta combina recordatorios de **actividad física** y **medicación**, con una interfaz amigable y fácil de usar.

---

## 🚀 Funcionalidades

- 🏃 **Actividad física:** sugiere ejercicios suaves y frases motivacionales.  
- 💊 **Recordatorio de medicamentos:** permite agregar medicamentos con hora inicial y frecuencia en horas.  
- ⏰ **Avisos automáticos:** revisa cada minuto si es hora de tomar un medicamento.  
- ❌ **Eliminación controlada:** al borrar un medicamento, el cuidador debe indicar el motivo (ej. error de hora, terminó el tratamiento, etc.).  
- 📱 **Diseño responsive:** funciona en computadores, tablets y celulares.  

---

## 👥 Guía para cuidadores

La siguiente sección explica **cómo un cuidador puede usar la aplicación con un adulto mayor** de manera segura:

### 🏃 Actividad Física
- Presionar el botón **“Nueva Actividad”** para mostrar una actividad física aleatoria.  
- Leer junto con el adulto mayor la actividad y la frase motivacional que aparece.

### 💊 Recordatorio de Medicamentos

#### Agregar un medicamento
1. Escribir el **nombre del medicamento**.  
2. Seleccionar la **hora** de la primera toma.  
3. Indicar la **frecuencia** en horas.  
4. Presionar **Agregar**.  

#### Ver medicamentos
- Todos los medicamentos agregados se muestran en la lista de la sección.  

#### Eliminar un medicamento
1. Presionar el botón ❌ junto al medicamento que se desea eliminar.  
2. Seleccionar el **motivo** de eliminación en el modal que aparece.  
3. Confirmar.  
4. La app mostrará un mensaje indicando cuál medicamento fue eliminado y el motivo.

### ⏰ Recordatorios automáticos
- La app revisa la hora cada minuto y muestra avisos cuando es hora de tomar un medicamento.  
- El mensaje incluye el nombre del medicamento y una frase motivacional.

### ✅ Buenas prácticas del cuidador
- Leer y mostrar las actividades y recordatorios al adulto mayor.  
- No modificar configuraciones ni perfiles.  
- Mantener el navegador abierto para que los recordatorios se muestren correctamente.  

---

## 🛠️ Tecnologías utilizadas

- **HTML5** para la estructura.  
- **CSS3** (responsive + animaciones).  
- **JavaScript** para la lógica de recordatorios y actividades.  
- **LocalStorage** para guardar los datos sin necesidad de servidor o base de datos.  

---

## 📂 Estructura del proyecto

```bash
Activate-facil/
│
├── index.html # Página principal
├── style.css # Estilos de la aplicación
├── app.js # Lógica en JavaScript
└── README.md # Este documento
```

---

## ⚡ Instalación local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Juanes114/Activate-facil.git
   ``` 
2. Entrar en la carpeta

    ```bash
    cd Activate-facil
    ```

3. Abrir el archivo index.html en tu navegador (doble clic o abrir con Chrome/Edge/Firefox).

---

## 🌍 Despliegue en GitHub Pages

1. Ve a tu repositorio en GitHub.

2. Entra en Settings > Pages.

3. En la sección Build and deployment:

    - Source → selecciona [Deploy from a branch].

    - Branch → selecciona *main* y carpeta */root*.

    - Guarda.

4. Tu aplicación estará disponible en:

    https://github.com/Juanes114/Activate-facil.git

---

## 👥 Público objetivo

- La aplicación está diseñada principalmente para:

- Personas de la tercera edad que requieren recordatorios sencillos.

- Cuidadores que ayudan a gestionar la actividad física y la medicación.


📌 Autor

Nombre: Juan Esteban Marulanda Zapata

Materia: Sistemas Inteligentes

Año: 2025