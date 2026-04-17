# Prueba Técnica: 4 Byte Solutions

Desarrollada con **Angular 21** y **PrimeNG**. 

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/frankcr121/pt-4bs.git]
   cd pt4bs

2. **Instalar dependencias:**
    npm install

3. **Iniciar el servidor de desarrollo:**
    ng serve

4. **Credenciales de Acceso:**
    Usuario: mor_2314
    Contraseña: 83r5^_

**Decisiones Técnicas**
    Angular Signals: Se implementó el manejo de estado utilizando Signals en lugar de Observables tradicionales para la gestión de datos en los componentes.

    Seguridad con Interceptor: Se desarrolló un AuthInterceptor para adjuntar automáticamente el token JWT en las cabeceras de cada petición HTTP.

    Protección de Rutas con Guards: Se utilizó CanActivate para prevenir el acceso a las vistas de productos a usuarios no autenticados.

    Diseño Moderno: Se personalizó PrimeNG mediante CSS y PrimeFlex para crear una interfaz "Dark Mode" con efectos de desenfoque de fondo, mejorando la estética visual solicitada.

    Arquitectura Limpia: Organización por carpetas core (servicios, modelos, guards) y features (componentes) para facilitar la escalabilidad.

**Mejoras Futuras**

    Manejo de Errores Global: Implementar un ErrorHandler global para capturar errores de tiempo de ejecución y mostrarlos mediante ToastMessages de PrimeNG.

    Estado de Compra: Implementar un carrito de compras funcional utilizando localStorage sincronizado con un Signal global.

    Tests Unitarios: Incrementar la cobertura de pruebas.

    Internacionalización: Implementar soporte para múltiples idiomas (español/inglés).

    Optimización de Imágenes: Implementar lazy loading nativo y formatos de imagen de última generación (WebP) para mejorar los tiempos de carga del catálogo.