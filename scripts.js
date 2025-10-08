/* ==========================
   BIENVENIDA Y VIDEO INICIAL
========================== */
window.addEventListener("load", () => {
  const modal = document.getElementById("videoModal");
  const videoIntro = document.getElementById("introVideo");

  // Mostrar el modal al cargar
  modal.style.display = "flex";

  // Cerrar al hacer clic en el video o fuera de él
  modal.addEventListener("click", () => {
    modal.style.display = "none";
    videoIntro.pause();
  });

  // Cerrar al terminar el video
  videoIntro.onended = () => modal.style.display = "none";
}); 

/* ==========================
   MINI TOUR
========================== */
const tourModal = document.getElementById("tourModal");
const abrirTour = document.getElementById("btnMiniTour");
const closeTour = document.getElementById("closeTour");
const videoTour = document.getElementById("videoTour");

if (abrirTour) {
  abrirTour.onclick = () => {
    tourModal.style.display = "flex";
    videoTour.play();
  };
}
if (closeTour) {
  closeTour.onclick = () => {
    tourModal.style.display = "none";
    videoTour.pause();
  };
}

/* ==========================
   LIGHTBOX GALERÍA
========================== */
const fotosGaleria = document.querySelectorAll(".fotos-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;

if (fotosGaleria.length > 0) {
  fotosGaleria.forEach((foto, index) => {
    foto.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = foto.src;
      currentIndex = index;
    });
  });

  closeLightbox.onclick = () => lightbox.style.display = "none";
  prevBtn.onclick = () => {
    currentIndex = (currentIndex === 0) ? fotosGaleria.length - 1 : currentIndex - 1;
    lightboxImg.src = fotosGaleria[currentIndex].src;
  };
  nextBtn.onclick = () => {
    currentIndex = (currentIndex === fotosGaleria.length - 1) ? 0 : currentIndex + 1;
    lightboxImg.src = fotosGaleria[currentIndex].src;
  };
}

/* ==========================
   ACCESOS RÁPIDOS
========================== */
const btnMapa = document.getElementById("btnMapa");
if (btnMapa) {
  btnMapa.onclick = () => {
    const mapa = document.getElementById("mapaContainer");
    mapa.style.display = (mapa.style.display === "block") ? "none" : "block";
    mapa.scrollIntoView({ behavior: "smooth" });
  };
}

/* ==========================
   FORMULARIO DE RESERVA → WHATSAPP
========================== */
const formReserva = document.getElementById("formReserva");

if (formReserva) {
  formReserva.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombreReserva").value.trim();
    const personas = document.getElementById("personas").value;
    const entrada = document.getElementById("fechaEntrada").value;
    const salida = document.getElementById("fechaSalida").value;

    if (!nombre || !personas || !entrada || !salida) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const mensaje = `Hola, soy ${nombre}. Quisiera consultar disponibilidad para ${personas} personas desde el ${entrada} hasta el ${salida}.`;
    const url = `https://wa.me/573125475619?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
}

/* ==========================
   MODALES (FAQ, TÉRMINOS, COMENTARIOS)
========================== */
const openFAQ = document.getElementById("openFAQ");
const faqModal = document.getElementById("faqModal");
const closeFAQ = document.getElementById("closeFAQ");

if (openFAQ) {
  openFAQ.onclick = (e) => {
    e.preventDefault();
    faqModal.style.display = "flex";
  };
}
if (closeFAQ) {
  closeFAQ.onclick = () => faqModal.style.display = "none";
}

const openTerms = document.getElementById("openTerms");
const termsModal = document.getElementById("termsModal");
const closeTerms = document.getElementById("closeTerms");

if (openTerms) {
  openTerms.onclick = (e) => {
    e.preventDefault();
    termsModal.style.display = "flex";
  };
}
if (closeTerms) {
  closeTerms.onclick = () => termsModal.style.display = "none";
}

const modalComentarios = document.getElementById("modalComentarios");
const btnComentarios = document.getElementById("btnComentarios");
const cerrarComentarios = document.getElementsByClassName("cerrar")[0];

if (btnComentarios) {
  btnComentarios.onclick = () => modalComentarios.style.display = "flex";
}
if (cerrarComentarios) {
  cerrarComentarios.onclick = () => modalComentarios.style.display = "none";
}

window.onclick = (event) => {
  if (event.target === faqModal) faqModal.style.display = "none";
  if (event.target === termsModal) termsModal.style.display = "none";
  if (event.target === modalComentarios) modalComentarios.style.display = "none";
  if (event.target === tourModal) tourModal.style.display = "none";
};

/* ==========================
   EFECTO MENÚ ACTIVO
========================== */
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 200;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

/* ==========================
   SCROLL SUAVE EN LOS ENLACES
========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ==========================
   EFECTO PEQUEÑO EN NAVBAR
========================== */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    navbar.style.background = "rgba(0, 0, 0, 0.85)";
    navbar.style.padding = "10px 30px";
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.65)";
    navbar.style.padding = "12px 40px";
  }
});
