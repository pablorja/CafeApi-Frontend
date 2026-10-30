# Changelog
 
Todos los cambios importantes del proyecto **CafeApi Frontend** serán documentados en este archivo.
 
El formato está inspirado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y sigue versionado semántico.
 
---
 
## [0.1.0-alpha] - 27/09/2026
 
### Añadido
 
#### Configuración inicial
- Creación del proyecto Angular.
- Configuración de Angular con arquitectura Standalone.
- Configuración de SCSS como preprocesador de estilos.
- Configuración inicial de Git para el proyecto.
 
#### Arquitectura base
- Creación de la estructura principal de carpetas:
- `core`
- `features`
- `layout`
- `shared`
 
#### Core
- Creación de la carpeta `constants`.
- Creación de la carpeta `guards`.
- Creación de la carpeta `interceptors`.
- Creación de la carpeta `models`.
- Creación de la carpeta `services`.
 
#### Guards
- Creación de:
- `auth.guard.ts`
- `role.guard.ts`
 
#### Interceptors
- Creación de:
- `auth.interceptor.ts`
 
#### Models
- Creación de:
- `cafe.model.ts`
- `especialidad.model.ts`
- `login-request.model.ts`
- `login-response.model.ts`
- `user.model.ts`
 
#### Services
- Creación de:
- `auth.service.ts`
- `storage.service.ts`
- `token.service.ts`
 
#### Entornos
- Creación de:
- `environment.ts`
- `environment.development.ts`
 
#### Documentación
- Creación del README inicial.
- Definición del roadmap de desarrollo del frontend.
 
---
 
## Próxima versión
 
### [0.2.0]
 
Planificado:
 
- Configuración de environments.
- Configuración de URL base de la API.
- Configuración de HttpClient.
- Configuración del interceptor JWT.
- Implementación inicial de AuthService.
- Integración con el backend CafeApi.

---

## [0.2.0] - 30/10/2026

### Añadido

#### Configuración

- Implementación de `api.config.ts` para la configuración centralizada de la API.
- Configuración de URL base para comunicación con el backend.
- Integración de `HttpClient` para consumo de servicios REST.

#### Autenticación

- Implementación completa de `auth.service.ts`.
- Implementación del flujo de autenticación con JWT.
- Integración del login con el backend CafeApi.
- Gestión de inicio y cierre de sesión.

#### Persistencia de sesión

- Implementación de `storage.service.ts`.
- Almacenamiento seguro del token JWT.
- Almacenamiento de la información del usuario autenticado.
- Métodos para recuperación y eliminación de datos de sesión.

#### Seguridad

- Implementación funcional de `auth.guard.ts`.
- Implementación funcional de `role.guard.ts`.
- Protección de rutas autenticadas.
- Control de acceso basado en roles.

#### Interceptores

- Implementación funcional de `auth.interceptor.ts`.
- Inclusión automática del token JWT en las peticiones HTTP autorizadas.

#### Modelos

- Integración de modelos de autenticación:
  - `login-request.model.ts`
  - `login-response.model.ts`
  - `user.model.ts`

### Mejorado

- Organización de la capa Core.
- Separación de responsabilidades entre autenticación, almacenamiento y seguridad.
- Estructura preparada para la implementación del módulo visual de autenticación.

### Estado

✅ Fase 1 completada.

La infraestructura de autenticación y autorización se encuentra operativa y preparada para iniciar el desarrollo de la interfaz de usuario.

---
