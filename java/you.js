// Clave de la API de YouTube. Reemplaza con tu propia clave de API.
const API_KEY = 'AIzaSyCbA0yIe7-hzaiv7lvvOUkRSomBZdeOAEw';

// Agrega un evento de escucha al botón de búsqueda
document.getElementById('search-button').addEventListener('click', searchVideos);

// Función que realiza la búsqueda de videos
function searchVideos() {
    // Obtiene el valor del campo de entrada de búsqueda
    const searchInput = document.getElementById('search-input').value;

    // Realiza una solicitud  a la API de YouTube
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchInput}&maxResults=10&type=video`)
        .then(response => response.json())  // Convierte la respuesta a formato JSON
        .then(data => {
            // Llama a la función para mostrar los resultados
            displayResults(data.items);
        })
        .catch(error => console.error('Error:', error));  // Maneja errores si la solicitud falla
}

// Función que muestra los resultados en la interfaz de usuario
function displayResults(items) {
    // Obtiene el contenedor de resultados
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';  // Limpia cualquier contenido previo en el contenedor

    // Itera sobre cada elemento de resultado
    items.forEach(item => {
        const videoId = item.id.videoId;  // Obtiene el ID del video
        const title = item.snippet.title;  // Obtiene el título del video

        // Crea un nuevo elemento div para el video
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');  // Añade una clase al elemento div
        videoElement.innerHTML = `
            <h2>${title}</h2>
            <div id="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;

        // Agrega el elemento del video al contenedor de resultados
        resultsContainer.appendChild(videoElement);
    });
}
