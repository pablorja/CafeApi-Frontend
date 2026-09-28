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
