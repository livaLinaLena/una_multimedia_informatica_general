// ------------------------------ CONFIGURACIONES ARTISTAS ---------------------------------
const artistasConfi = {
    artistasMap: {
        'claudio': 'claudio-armengol',
        'rosalia': 'rosilus', 
        'santiago': 'santiti',
        'carolina': 'carolita'
    },
    
    artistasData: {
        'claudio': {
            nombre: 'Claudio Armengol',
            especialidad: 'Performance Audiovisual basada en Luz Líquida',
            descripcion: 'Claudio es un artista visual especializado en performances de luz líquida que combinan tecnología y arte para crear experiencias inmersivas.',
            descripcionExtensa: 'Visual Brewer (Claudio Salvador Armengol) es un artista visual argentino especializado en la técnica de visualización analógica llamada "Luz Líquida". Es performer, realizador y docente y es un referente internacional en la técnica, habiendo impartido sus conocimientos a artistas de todo el globo a lo largo de los últimos 5 años. Centra su trabajo en la el cruce de lenguajes analógico-digitales, integrando a su práctica el uso de la retroproyección, la captura de video digital, el trabajo con acróbatas y bailarines y la manipulación de imágenes mediante sistemas de visuales generativas.',
            imagenes: [
                'imagenes/Claudio1.jpg',
                'imagenes/Claudio2.jpg',
                'imagenes/Claudio3.jpg',
                'imagenes/Claudio4.jpg',
                'imagenes/Claudio5.jpg'
            ]
        },
        'rosalia': {
            nombre: 'Rosalia Ruscitto',
            especialidad: 'Fotografía Analógica',
            descripcion: 'Rosalía se especializa en fotografía analógica, capturando momentos con una estética vintage y emocional que evoca nostalgia y autenticidad.',
            descripcionExtensa: '"Como artista, observo lo cotidiano a través de mi cámara, explorando en blanco y negro el juego de claroscuros. Me interesa cómo la luz y la arquitectura definen —y a veces interrumpen— los espacios, buscando capturar esos instantes donde un reflejo, una silueta o el diálogo entre la luz y las formas revelan una mirada personal sobre lo que nos rodea."',
            imagenes: [
                'imagenes/Rosalia1.jpg',
                'imagenes/Rosalia2.jpg',
                'imagenes/Rosalia3.jpg',
                'imagenes/Rosalia4.jpg',
                'imagenes/Rosalia5.jpg'
            ]
        },
        'santiago': {
            nombre: 'Santiago Elesgaray', 
            especialidad: 'Stop Motion',
            descripcion: 'Santiago crea animaciones en stop motion dando vida a objetos inanimados a través de una paciencia meticulosa y una visión narrativa única.',
            descripcionExtensa: 'Santiago Elesgaray es un artista multimedial que se dedica principalmente a la animación y el arte interactivo. Como artista multimedial ocupa varias ramas del arte. En parte busca mostrar como una simple secuencia de imágenes puede contar una historia. Otro aspecto que aborda es la interactividad. La capacidad  de interactuar con el nuevo mundo de lo digital permite todo un abanico de posibilidades las cuales este artista aprovecha.',
            imagenes: [
                'imagenes/Santiti1.jpg',
                'imagenes/Santiti2.png',
                'imagenes/Santiti3.png',
                'imagenes/Santiti4.gif',
                'imagenes/Santiti5.jpg'
            ]
        },
        'carolina': {
            nombre: 'Carolina Oliva',
            especialidad: 'Iluminación para Shows en Vivo', 
            descripcion: '',
            descripcionExtensa: 'Carolina Oliva diseña experiencias lumínicas para espectáculos en vivo, trabajando con multiples artistas en la busqueda de transformar espacios y performance creando atmósferas envolventes a través de lo inmaterial.',
            imagenes: [
                'imagenes/Carolita1.jpg',
                'imagenes/Carolita2.jpg',
                'imagenes/Carolita3.jpg',
                'imagenes/Carolita4.jpg',
                'imagenes/Carolita5.jpg'
            ]
        }
    }
};

// ------------------------------ CONFIGURACION NOTI ---------------------------------
const notificacionesConfi = {
    show(message, type = 'success', duration = 4000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
        `;
        
        notification.style.background = type === 'success' ? '#10b981' : '#ef4444';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, duration);
        
        return notification;
    }
};

// VALIDAR EMAIL
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ------------------------------ NAVEGACION ---------------------------------
function navegacionGeneral() {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// ------------------------------ ANIMACIONES TARJETAS ---------------------------------
function tarjetasAnimadas() {
    const tarjetasArtistas = document.querySelectorAll('.tarjeta');
    
    tarjetasArtistas.forEach(tarjeta => {
        tarjeta.addEventListener('click', function(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = ev.clientX - rect.left - size / 2;
            const y = ev.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(139, 92, 246, 0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 10;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode === this) {
                    this.removeChild(ripple);
                }
            }, 600);
            
            setTimeout(() => {
                const artistaId = this.getAttribute('data-artista');
                if (artistaId) {
                    localStorage.setItem('artistaParaMostrar', artistaId);
                    window.location.href = 'galeria.html';
                }
            }, 300);
        });
    });
}

// ------------------------------ ARTISTAS (ENLACES GLOBALES) ---------------------------------
// 
function enlacesArtistasGlobales() {
    document.addEventListener('click', function(ev) {
        // enlaces de artistas
        const enlaceArtista = ev.target.closest('.enlace-artista');
        if (enlaceArtista) {
            ev.preventDefault();
            const artistaId = enlaceArtista.getAttribute('data-artista');
            if (artistaId) {
                localStorage.setItem('artistaParaMostrar', artistaId);
                window.location.href = 'galeria.html';
            }
        }
        
        // manejar tarjetas de artistas --- backup para navegadores antiguos
        const tarjeta = ev.target.closest('.tarjeta');
        if (tarjeta && !enlaceArtista) {
            const artistaId = tarjeta.getAttribute('data-artista');
            if (artistaId) {
                localStorage.setItem('artistaParaMostrar', artistaId);
                window.location.href = 'galeria.html';
            }
        }
    });
}

// ------------------------------ FILTRO DE ARTISTAS ---------------------------------
// FILTROS
function activarFiltroArtista(artistaId) {
    const filterValue = artistasConfi.artistasMap[artistaId];
    if (filterValue) {
        const filterBtn = document.querySelector(`[data-filter="${filterValue}"]`);
        if (filterBtn) {
            filterBtn.click();
        }
    }
}

// ------------------------------ GALERIA ---------------------------------
function interactGaleria() {
    const filterBtns = document.querySelectorAll('.filtro-btn');
    const galleryItems = document.querySelectorAll('.galeria-item');
    
    // VISTA INDIVIDUAL DEL ARTISTA
    function mostrarArtistaIndividual(artistaId) {
        const vistaArtista = document.getElementById('vista-artista');
        const galeriaGrupal = document.getElementById('galeria-grupal');
        const contenidoArtista = document.getElementById('contenido-artista');
        
        if (!vistaArtista || !galeriaGrupal || !contenidoArtista) return;
        
        galeriaGrupal.style.display = 'none';
        vistaArtista.style.display = 'block';
        cargarContenidoArtista(artistaId, contenidoArtista);
        vistaArtista.scrollIntoView({ behavior: 'smooth' });
    }
    
    // CARGAR CONTENIDO DEL ARTISTA
    function cargarContenidoArtista(artistaId, contenedor) {
        const artista = artistasConfi.artistasData[artistaId];
        if (!artista) return;
        
        const contenidoHTML = crearHTMLArtista(artista);
        contenedor.innerHTML = contenidoHTML;
        agregarFuncionalidadMiniaturas();
    }
    
    // HTML DEL ARTISTA
    function crearHTMLArtista(artista) {
        const detallesTrabajo = obtenerDetallesTrabajo(artista.nombre);
        
        let html = '';
        html += '<div class="artista-imagenes">';
        html += '<div class="imagen-principal">';
        html += `<img src="${artista.imagenes[0]}" alt="${artista.nombre} - Trabajo principal" class="imagen-artista">`;
        html += '</div>';
        
        if (artista.imagenes.length > 1) {
            html += '<div class="galeria-miniaturas">';
            artista.imagenes.forEach((imagen, index) => {
                const claseActiva = index === 0 ? 'activa' : '';
                html += `<div class="miniatura ${claseActiva}" data-imagen="${imagen}">`;
                html += `<img src="${imagen}" alt="${artista.nombre} - Imagen ${index + 1}">`;
                html += '</div>';
            });
            html += '</div>';
        }
        html += '</div>';
        
        html += '<div class="artista-info">';
        html += '<header class="artista-header">';
        html += `<h2 class="artista-nombre-titulo">${artista.nombre}</h2>`;
        html += `<span class="artista-especialidad">${artista.especialidad}</span>`;
        html += '</header>';
        
        html += '<div class="artista-descripcionExtensa">';
        html += '<h3>Sobre el Artista</h3>';
        html += `<p>${artista.descripcionExtensa}</p>`;
        html += '</div>';
        
        html += '<div class="artista-datos">';
        html += '<h3>Detalles del Trabajo</h3>';
        html += `<p><strong>Especialidad:</strong> ${artista.especialidad}</p>`;
        html += `<p><strong>Estilo:</strong> ${detallesTrabajo.estilo}</p>`;
        html += `<p><strong>Experiencia:</strong> ${detallesTrabajo.experiencia}</p>`;
        html += `<p><strong>Proyectos Destacados:</strong> ${detallesTrabajo.proyectos}</p>`;
        html += '</div>';
        
        html += '<div class="artista-contacto">';
        html += `<button class="btn btn-primario" onclick="contactarArtista('${artista.nombre}')">Contactar a ${artista.nombre.split(' ')[0]}</button>`;
        html += '</div>';
        html += '</div>';
        
        return html;
    }
    
    // DETALLES DE TRABAJO
    function obtenerDetallesTrabajo(nombreArtista) {
        const detalles = {
            'Claudio Armengol': {
                estilo: 'Visuales Analógicas',
                experiencia: 'Más de 5 años especializado en performances de luz líquida y visuales generativas',
                proyectos: 'Exhibiciones internacionales de luz líquida, colaboraciones con acróbatas y bailarines, workshops globales'
            },
            'Rosalia Ruscitto': {
                estilo: 'Personal y observacional; busco capturar la relación entre la luz, las personas y los lugares',
                experiencia: 'Más de cuatro años desarrollando proyectos fotográficos personales y colaborativos',
                proyectos: '"Reflejos de la mirada" (2023) - Serie que explora la percepción y la identidad a través del reflejo del agua'
            },
            'Santiago Elesgaray': {
                estilo: 'Clay-Animation',
                experiencia: 'Mas de 2 años en la disciplina',
                proyectos: '"La Granja"'
            },
            'Carolina Oliva': {
                estilo: 'Diseño Lumínico para performances en vivo',
                experiencia: '1 año en el campo técnico especializandose en diseño y operación de iluminación para teatro e implementando su trayectoria para shows de música en vivo',
                proyectos: 'Diseño y operación lumínicas para diversos estilos de disciplinas artísticas'
            }
        };
        
        return detalles[nombreArtista] || {
            estilo: 'Arte Multimedial',
            experiencia: 'Experiencia en el campo artístico',
            proyectos: 'Varios proyectos y colaboraciones'
        };
    }
    
    // MINIATURAS
    function agregarFuncionalidadMiniaturas() {
        const miniaturas = document.querySelectorAll('.miniatura');
        const imagenPrincipal = document.querySelector('.imagen-artista');
        
        if (!imagenPrincipal) return;
        
        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', function() {
                miniaturas.forEach(m => m.classList.remove('activa'));
                this.classList.add('activa');
                const nuevaImagen = this.getAttribute('data-imagen');
                imagenPrincipal.src = nuevaImagen;
            });
        });
    }
    
    // contactar artista (global para onclick)
    window.contactarArtista = function(nombreArtista) {
        window.location.href = 'contacto.html';
    };
    
    // event listeners para filtros
    filterBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            
            if (filterValue !== 'all') {
                const artistaId = Object.keys(artistasConfi.artistasMap).find(
                    key => artistasConfi.artistasMap[key] === filterValue
                );
                if (artistaId) {
                    mostrarArtistaIndividual(artistaId);
                }
            } else {
                const vistaArtista = document.getElementById('vista-artista');
                const galeriaGrupal = document.getElementById('galeria-grupal');
                
                if (vistaArtista && galeriaGrupal) {
                    vistaArtista.style.display = 'none';
                    galeriaGrupal.style.display = 'block';
                }
            }
        });
    });
    
    // Event listeners para items de galeria
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const artistaId = this.getAttribute('data-artista');
            if (artistaId) {
                mostrarArtistaIndividual(artistaId);
            }
        });
    });

    // event listener para btn volver
    const btnVolver = document.getElementById('btn-volver-galeria');
    if (btnVolver) {
        btnVolver.addEventListener('click', function() {
            const vistaArtista = document.getElementById('vista-artista');
            const galeriaGrupal = document.getElementById('galeria-grupal');
            
            if (vistaArtista && galeriaGrupal) {
                vistaArtista.style.display = 'none';
                galeriaGrupal.style.display = 'block';
                
                filterBtns.forEach(btn => {
                    if (btn.getAttribute('data-filter') === 'all') {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
                
                galeriaGrupal.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // mostrar artista guardado
    if (window.location.href.includes('galeria.html')) {
        const artistaGuardado = localStorage.getItem('artistaParaMostrar');
        if (artistaGuardado) {
            setTimeout(() => {
                activarFiltroArtista(artistaGuardado);
                localStorage.removeItem('artistaParaMostrar');
            }, 100);
        }
    }
}

// ------------------------------ CONTACTO ---------------------------------
function contactoFormulario() {
    const contactForm = document.querySelector('.formulario-contacto');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(ev) {
            ev.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            // validaciones
            if (!name || !email || !subject || !message) {
                notificacionesConfi.show('Por favor, completa todos los campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                notificacionesConfi.show('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // envio ficticio
            notificacionesConfi.show('¡Mensaje enviado! Te contactaremos pronto.', 'success');
            contactForm.reset();
        });
    }
}

// ------------------------------ SCROLL ANIMADO ---------------------------------
function scrollAnimado() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const elemAnimados = document.querySelectorAll('.tarjeta, .galeria-item, .contexto-cuadricula-artista');
    elemAnimados.forEach(elem => {
        elem.style.opacity = '0';
        elem.style.transform = 'translateY(20px)';
        elem.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(elem);
    });
}

// ------------------------------ INICIALIZACION ---------------------------------
document.addEventListener('DOMContentLoaded', function() {
    navegacionGeneral();
    scrollAnimado();
    contactoFormulario(); 
    tarjetasAnimadas();
    enlacesArtistasGlobales(); 
    
    if (document.querySelector('.filtro-btn')) {
        interactGaleria();
    }
});