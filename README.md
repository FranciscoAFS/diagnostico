# Sistema de Gestión de Productos CRUD

## Descripción

Aplicación web full-stack para la gestión de productos. Permite crear, leer, actualizar y eliminar productos. El proyecto integra un backend con Django REST Framework y un frontend con React

## Tecnologías Utilizadas

### Backend
- **Django** 3.2+ - Framework web Python
- **Django REST Framework** - Para construir APIs RESTful
- **MySQL** - Base de datos relacional
- **mysqlclient** - Adaptador MySQL para Python
- **Pillow** - Procesamiento de imágenes
- **django-cors-headers** - Manejo de CORS
- **python-decouple** - Gestión de variables de entorno

### Frontend
- **React** 19.2+ - Biblioteca de interfaz de usuario
- **Vite** 8.0+ - Herramienta de construcción y desarrollo
- **Tailwind CSS** 4.2+ - Framework de estilos CSS
- **Axios** 1.16+ - Cliente HTTP para solicitudes

## Funcionalidades

- **Crear productos**: Formulario para agregar nuevos productos con nombre, descripción, precio e imagen
- **Listar productos**: Tabla que muestra todos los productos registrados
- **Editar productos**: Permite modificar la información de productos existentes
- **Eliminar productos**: Opción para remover productos del sistema
- **Validaciones**: Validación de precios positivos y límites de caracteres
- **Carga de imágenes**: Soporte para subir imágenes de productos
- **Interfaz responsiva**: Diseño adaptable a diferentes tamaños de pantalla

## Instrucciones para Ejecutar

### Requisitos Previos
- Python 3.8+
- Node.js 14+
- MySQL 5.7+
- Git

### Configuración del Backend

1. **Navega al directorio del backend:**
   ```bash
   cd backend
   ```
   
3. **Crea un entorno virtual:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```
   
4. **Instala las dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

6. **Configura las variables de entorno:**
   Crea un archivo `.env` en la carpeta `backend/`:
   ```
   SECRET_KEY=django-insecure-m#wgv(u!dmr4v1i8ddc(trjgrk5th@4fqhfn-sm_^-=gl7@q!*
   DB_NAME=diagnostico
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_HOST=localhost
   DB_PORT=3306
   ```

8. **Ejecuta las migraciones:**
   ```bash
   python manage.py migrate
   ```

10. **Inicia el servidor de desarrollo:**
   ```bash
   python manage.py runserver
   ```

   El backend estará disponible en `http://localhost:8000`

### Configuración del Frontend

1. **En otra terminal, navega al directorio del frontend:**
   ```bash
   cd frontend/diagnostico
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

5. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

   El frontend estará disponible en `http://localhost:5173`


## Uso de Inteligencia Artificial

Se utilizó **GitHub Copilot** para:
- Generación de estructura base de componentes React
- Optimización de consultas API
- Sugerencias de buenas prácticas en estilos CSS con Tailwind
- Implementación de validaciones de formularios

## API Endpoints
```
GET    /api/producto/         - Obtener todos los productos
POST   /api/producto/         - Crear un nuevo producto
PUT    /api/producto/{id}/    - Actualizar un producto
DELETE /api/producto/{id}/    - Eliminar un producto
```
