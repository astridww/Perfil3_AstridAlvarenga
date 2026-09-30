# Perfil3_AstridAlvarenga
Aplicación móvil hecha con React Native y Expo para el Módulo 5: Desarrollo de componentes para dispositivos móviles (Instituto Técnico Ricaldone).
## Datos del estudiante
- **Nombre:** Astrid Judith Alvarenga Cañas
- **Carnet:** 20240476
- **Sección y grupo:** 1A
## Enlaces
- **Video demostrativo:** https://drive.google.com/drive/folders/16a-2DQ97S7JQ1uGql7WFeUK_-htmR7Aa?usp=sharing
- **Descargar APK:** https://expo.dev/accounts/astridww/projects/Perfil3_AstridAlvarenga/builds/bf8832c0-d113-4566-bf54-5e948eeda2d5
## Descripción
La app tiene dos pantallas:
1. **Perfil:** tarjeta con los datos del estudiante y un botón para ir a la segunda pantalla.
2. **API:** lista de personajes de [Rick and Morty API](https://rickandmortyapi.com/api/character) con nombre, imagen y descripción.
## Tecnologías
- React Native con Expo
- React Navigation
- Custom hook `useFetchData` para el consumo de la API
- Componentes reutilizables (`Card`, `StudentCard`)
## Estructura
```
src/
 components/   Card.js, StudentCard.js
 hooks/        useFetchData.js
 screens/      StudentsScreens.js, ApiScreens.js
App.js
```
## Cómo ejecutarlo
```bash
npm install
npx expo start
```
## Generar el APK
```bash
eas build -p android --profile preview
```