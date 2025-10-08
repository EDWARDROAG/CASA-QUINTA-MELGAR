/* ==========================
   GALERÍA DE VIDEOS
========================== */

// Lista de videos dentro de la carpeta /videos/
const videos = [
  "video_inicio.mp4",
  "mini_tour.mp4",
  "piscina.mp4",
  "zona_bbq.mp4",
  "habitaciones.mp4"
  // 👉 Agrega aquí los demás archivos .mp4 que tengas
];

// Contenedor
const container = document.getElementById("videosContainer");

// Cargar dinámicamente los videos
if (container) {
  videos.forEach(nombre => {
    const card = document.createElement("div");
    card.classList.add("video-card");

    const video = document.createElement("video");
    video.src = `videos/${nombre}`;
    video.controls = true;
    video.playsInline = true;
    video.classList.add("video-item");

    const titulo = document.createElement("p");
    titulo.textContent = nombre.replace(".mp4", "").replace(/_/g, " ");

    card.appendChild(video);
    card.appendChild(titulo);
    container.appendChild(card);
  });
}
