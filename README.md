Art Explorer es una aplicación web que permite explorar obras de arte mediante la API de los Harvard Art Museums. Los usuarios pueden buscar por palabras clave generales, artistas, títulos específicos o aplicar otros filtros para encontrar piezas de arte.

# Características
- Búsquedas Dinámicas: Encuentra obras por palabra clave, artista o título.
- Vista Amigable: Visualización optimizada para diferentes dispositivos mediante un carrusel interactivo.
- Detalles: Accede a información completa de cada obra directamente desde la página de detalles.

# Instalación
    Pasos

1. Clonar el repositorio:
    git clone https://github.com/usuario/art-explorer.git
    cd art-explorer

2. Instalar las dependencias:
    npm install

3. Configurar las variables de entorno en un archivo .env:
    HARVARD_API_KEY='clave api'
    VITE_BACKEND_URL=http://localhost:3000/ (traída del back)

4. Iniciar el servidor backend:
    cd backend
    node server.js

5.Iniciar el servidor frontend:
    npm run dev

# Desarrollo
1. Creación de las rutas en el frontend
    Utilicé React Router para definir las rutas principales en la aplicación.
    Creé una página principal (Home.jsx) que incluye tres campos de búsqueda para palabra clave, artista y título.
        Configuré los componentes necesarios:
        SearchBar: Para capturar y gestionar las búsquedas.
        ArtworkList y ArtworkCard: Para mostrar los resultados de manera interactiva.

2. Añadí funcionalidades y extras
    Implementé lodash.debounce para optimizar las consultas a la API evitando excesivas llamadas durante la escritura del usuario.
    Añadí un carrusel dinámico en ArtworkList.jsx usando la biblioteca react-slick para mejorar la presentación de los resultados.
    Incluí un componente Tooltip con instrucciones básicas para los usuarios.   

3. Estilo CSS
    Creé un archivo de estilos (App.css) para diseñar la interfaz.
    Aseguré que la interfaz sea responsive con puntos de quiebre en el carrusel, adaptándose a diferentes tamaños de pantalla.


# Uso 
1. En la página principal, usa las barras de búsqueda para realizar consultas por palabras clave, artista o título.
2. Navega por los resultados en un carrusel interactivo.
3. Haz clic en "View More Details" para ir al sitio oficial de Harvard Art Museums y obtener información detallada.

# Rutas del Backend
- GET /api/artworks/search
Realiza una búsqueda en la API de Harvard Art Museums.

Parámetros:
    query (opcional): Palabra clave general.
    person (opcional): Nombre del artista.
    title (opcional): Título de la obra.

# Créditos
- API de Harvard Art Museums: Proporciona acceso a su vasto repositorio de datos culturales.
- Bibliotecas utilizadas:
    React, React Router, Vite
    Axios para peticiones HTTP
    lodash.debounce para optimizar la búsqueda
    react-slick para el carrusel interactivo