# Configuracion inicial (Dependencias)

- Se crean dos ramas para el repositorio:
  - main: rama para cargar producto final
  - develop: rama para verificar implementaciones de desarrollo.
- Dependencias de desarrollo que se preinstalaron para el primer commit:
  - sass: npm i --save-dev sass.
  - prettier: npm i -D prettier
    - ver archivo de configuracion: .prettierrc
  - eslint: npm i -D prettier
    - configuracion con: npx eslint --init
    - ver archivo de configuracion ".eslintrc.json"
    - se tienen dos script de soporte: "lint": "eslint .", "lint-fix": "eslint . --fix"
  - prettier-eslint: npm install --save-dev prettier-eslint

## branch feature-backend-connect

- dashboard for cinema CRUD operation:
  - allow a user to modify the cinema table on the database.
- cinema slice created for handling cinema state.
