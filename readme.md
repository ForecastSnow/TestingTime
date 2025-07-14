Proyecto API Express — Testing y Mejoras Básicas
Este proyecto es una API Express tomada de la comunidad, sobre la cual apliqué mis primeros pasos en testing y algunas mejoras puntuales para trabajar con ella de manera más profesional.

**¿Qué hice en el proyecto?**
Implementé tests automáticos con Jest, usando mocks generados con Faker para simular datos y validar funcionalidades sin depender de datos reales.

Agregué un middleware de manejo de errores para mejorar la estabilidad y evitar caídas inesperadas.

Incorporé variables de entorno para una configuración más segura y flexible, eliminando y modificando varios hardcodeos.

Realicé pequeños ajustes para asegurar que el código funcionara correctamente con las nuevas incorporaciones, sin modificar la lógica original.

Implementé Docker con la intención de aprender y sentar bases para futuras implementaciones.

Utilicé Swagger para documentar los endpoints, accesible en http://localhost:{Tu puerto}/api-docs.

**Stack y herramientas**
Node.js + Express

Jest para testing

Faker para mocks

Middleware para manejo de errores

Variables de entorno con dotenv

Docker para contenerización

Swagger para documentación de API

**Pasos para probar el proyecto**
Clonar el repositorio.

Ejecutar npm install para instalar las dependencias.

Crear y configurar el archivo .env basado en .env-example con las variables de entorno necesarias.

Configurar una base de datos distinta a la de producción para desarrollo y testing.

Ejecutar npm run mockdata para generar la información falsa necesaria para poblar la base de datos y que los tests puedan correr correctamente.

Ejecutar npm test para correr los tests automáticos.

Ejecutar npm start para levantar la API y comenzar a trabajar con ella.

**Uso con Docker**


Se incluye una imagen Docker para facilitar la prueba y despliegue del proyecto.

Para descargar la imagen desde Docker Hub:

docker pull forecastsnow/testingtimejs:latest


Para iniciar un contenedor con la imagen (reemplazar TU_MONGO_URI y el puerto según corresponda):

docker run -e "MONGO_URI=TU_MONGO_URI" -e PORT=8080 -p 8080:8080 forecastsnow/testingtimejs

Para generar los datos falsos necesarios (mockdata) dentro del contenedor:

docker run -e "MONGO_URI=TU_MONGO_URI" -e PORT=8080 -p 8080:8080 forecastsnow/testingtimejs npm run mockdata

Para ejecutar los tests dentro del contenedor:

docker run -e "MONGO_URI=TU_MONGO_URI" -e PORT=8080 -p 8080:8080 forecastsnow/testingtimejs npm run test


Este proyecto es una buena base para practicar testing, mejorar gradualmente un código existente y explorar la contenerización con Docker, manteniendo la lógica original intacta.