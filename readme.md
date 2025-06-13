Proyecto API Express — Testing y Mejoras Básicas
Este proyecto es una API Express tomada de la comunidad, sobre la cual apliqué mis primeros pasos en testing y algunas mejoras puntuales para trabajar con ella de manera más profesional.

**¿Qué hice en el proyecto?**

Implementé tests automáticos con Jest, usando mocks generados con Faker para simular datos y validar funcionalidades sin depender de datos reales.

Agregué un middleware de manejo de errores para mejorar la estabilidad y evitar caídas inesperadas.

Incorporé variables de entorno para una configuración más segura y flexible, (Eliminando y modificando varios hardcodeos).

Realicé pequeños ajustes para asegurar que el código funcionara correctamente con las nuevas incorporaciones, sin modificar la lógica original.

**Stack y herramientas**

Node.js + Express

Jest para testing

Faker para mocks

Middleware para manejo de errores

Variables de entorno con dotenv

**Pasos para probar el proyecto**

Clonar el repositorio

Configurar .env con tus variables

npm install para instalar dependencias

npm test para ejecutar tests

npm start para levantar la API




Este proyecto es una buena base para practicar testing y mejorar gradualmente un código existente sin modificar su núcleo.
