// Configuración de imágenes para cada categoría
const imageConfig = {
    // Categorías principales (30 imágenes cada una)
    'bonificaciones': {
        count: 30,
        folder: 'images/bonificaciones/'
    },
    'eventos-globales': {
        count: 30,
        folder: 'images/eventos-globales/'
    },
    'penalizaciones': {
        count: 30,
        folder: 'images/penalizaciones/'
    },
    
    // Subcategorías de Personal (10 imágenes cada una)
    'alimentacion': {
        count: 10,
        folder: 'images/personal/alimentacion/'
    },
    'servicios-publicos': {
        count: 10,
        folder: 'images/personal/servicios-publicos/'
    },
    'prendas-vestir': {
        count: 10,
        folder: 'images/personal/prendas-vestir/'
    },
    'medios-transporte': {
        count: 10,
        folder: 'images/personal/medios-transporte/'
    },
    'dispositivos-electronicos': {
        count: 10,
        folder: 'images/personal/dispositivos-electronicos/'
    },
    
    // Subcategorías de Industria (10 imágenes cada una)
    'transnacional': {
        count: 10,
        folder: 'images/industria/transnacional/'
    },
    'e-commerce': {
        count: 10,
        folder: 'images/industria/e-commerce/'
    },
    'local': {
        count: 10,
        folder: 'images/industria/local/'
    },
    
    // Subcategorías de Naturaleza (10 imágenes cada una)
    'desierto-zabrinsky': {
        count: 10,
        folder: 'images/naturaleza/desierto-zabrinsky/'
    },
    'laguna-herrera': {
        count: 10,
        folder: 'images/naturaleza/laguna-herrera/'
    },
    'humedal-guali': {
        count: 10,
        folder: 'images/naturaleza/humedal-guali/'
    },
    
    // Subcategorías de Transporte (10 imágenes cada una)
    'transporte-carga': {
        count: 10,
        folder: 'images/transporte/transporte-carga/'
    },
    'proyectos-futuro': {
        count: 10,
        folder: 'images/transporte/proyectos-futuro/'
    },
    'transporte-personas': {
        count: 10,
        folder: 'images/transporte/transporte-personas/'
    },
    
    // Subcategorías de Ciudad (10 imágenes cada una)
    'supermercados': {
        count: 10,
        folder: 'images/ciudad/supermercados/'
    },
    'centros-comerciales': {
        count: 10,
        folder: 'images/ciudad/centros-comerciales/'
    },
    'colegios': {
        count: 10,
        folder: 'images/ciudad/colegios/'
    },
    
    // Subcategorías de Hogar (10 imágenes cada una)
    'barrios': {
        count: 10,
        folder: 'images/hogar/barrios/'
    },
    'ciudadelas': {
        count: 10,
        folder: 'images/hogar/ciudadelas/'
    },
    'municipio': {
        count: 10,
        folder: 'images/hogar/municipio/'
    }
};

// Función para mostrar imagen aleatoria
function showRandomImage(category) {
    const config = imageConfig[category];
    if (!config) {
        console.error('Categoría no encontrada:', category);
        return;
    }
    
    // Generar número aleatorio entre 1 y el count de imágenes
    const randomNum = Math.floor(Math.random() * config.count) + 1;
    
    // Crear nombre del archivo (formato: imagen1.jpg, imagen2.jpg, etc.)
    const imageName = `imagen${randomNum}.png`;
    const imagePath = config.folder + imageName;
    
    // Obtener contenedor de imagen
    const imageContainer = document.getElementById(`${category}-image`);
    
    if (imageContainer) {
        // Crear elemento de imagen
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Imagen de ${category}`;
        img.onerror = function() {
            // Si la imagen no se encuentra, mostrar mensaje de error
            imageContainer.innerHTML = `<p>Imagen no encontrada: ${imagePath}</p><p>Asegúrate de subir la imagen en la carpeta correcta.</p>`;
        };
        
        // Limpiar contenedor y agregar nueva imagen
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);
        
        // Agregar efecto de aparición
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.onload = function() {
            img.style.opacity = '1';
        };
    }
}

// Función para ir atrás
function goBack() {
    window.history.back();
}

// Función para ir al inicio
function goHome() {
    window.location.href = 'index.html';
}