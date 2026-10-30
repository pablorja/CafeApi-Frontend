# ☕ ApiCafe Frontend

Frontend del sistema ApiCafe desarrollado con Angular Standalone Components.

El proyecto implementa una arquitectura escalable basada en características (Feature-Based Architecture), autenticación mediante JWT y control de acceso por roles.

---

# 🚀 Tecnologías

- Angular
- TypeScript
- Angular Router
- HttpClient
- RxJS
- JWT Authentication
- Guards
- Interceptors

---

# 📁 Estructura del Proyecto

```text
src/
│
├── app/
│   │
│   ├── core/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── models/
│   │   └── services/
│   │
│   ├── features/
│   │
│   ├── layout/
│   │
│   └── shared/
│
├── environments/
│
└── ...
```

---

# 🏗️ Arquitectura

El proyecto sigue una separación clara de responsabilidades.

## Core

Contiene elementos globales de la aplicación.

Ejemplos:

- Servicios globales
- Guards
- Interceptors
- Configuración
- Modelos compartidos

---

## Features

Contiene los módulos funcionales del sistema.

Ejemplos futuros:

```text
features/
├── auth/
├── users/
├── inventory/
├── sales/
└── reports/
```

---

## Shared

Componentes reutilizables por toda la aplicación.

Ejemplos:

- Botones
- Tablas
- Modales
- Pipes
- Directivas

---

## Layout

Elementos estructurales de la interfaz.

Ejemplos:

- Navbar
- Sidebar
- Dashboard Layout
- Auth Layout

---

# 🔐 Autenticación

Actualmente se encuentra implementada la infraestructura base de autenticación.

### Componentes desarrollados

#### AuthService

Responsable de:

- Login de usuarios
- Comunicación con la API de autenticación
- Gestión de sesión

---

#### StorageService

Responsable de:

- Persistir el token JWT
- Persistir información del usuario autenticado
- Recuperar información almacenada

---

#### AuthGuard

Responsable de:

- Proteger rutas privadas
- Evitar acceso sin autenticación

---

#### RoleGuard

Responsable de:

- Validar permisos por roles
- Restringir acceso a funcionalidades específicas

---

#### AuthInterceptor

Responsable de:

- Adjuntar automáticamente el JWT a las peticiones HTTP
- Centralizar la autenticación de solicitudes

---

# ✅ Funcionalidades Implementadas

## Fase 1 - Infraestructura de Autenticación

- [x] Configuración centralizada de API
- [x] Configuración de entornos
- [x] Login mediante API REST
- [x] Persistencia de JWT
- [x] Persistencia de usuario autenticado
- [x] AuthGuard
- [x] RoleGuard
- [x] AuthInterceptor
- [x] Modelos de autenticación

---

# 📌 Próximas Fases

## Fase 2 - Módulo Auth Visual

- [ ] LoginComponent
- [ ] Login Page
- [ ] Auth Routes
- [ ] Auth Layout
- [ ] Manejo visual de errores

---

## Fase 3 - Layout Principal

- [ ] Main Layout
- [ ] Navbar
- [ ] Sidebar
- [ ] Dashboard Base

---

# ⚙️ Instalación

Clonar repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Instalar dependencias:

```bash
npm install
```

Ejecutar proyecto:

```bash
ng serve
```

Abrir:

```text
http://localhost:4200
```

---

# 📚 Convenciones de Desarrollo

Durante el desarrollo del proyecto se siguen las siguientes reglas:

- Tipado fuerte en TypeScript.
- Separación de responsabilidades.
- Un archivo por iteración.
- Explicación previa al desarrollo de cada archivo.
- Comentarios únicamente cuando aporten valor.
- Actualización de README y CHANGELOG al finalizar cada fase.

---

# 👨‍💻 Estado Actual

Versión actual:

```text
v0.1.0
```

Estado:

```text
Fase 1 completada ✅
Fase 2 en desarrollo 🚧
```
