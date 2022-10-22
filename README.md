

## Proyecto base-datos

### Instalación de Sequelize
```bash
npm install sequelize
sequelize init
npm install -g sequelize-cli
```
### Crear un modelo con su migración
`sequelize model:generate --name Task --atributes description:text`

### Ejecutar una migración
`sequelize db:migrate`

### Revertir una migración
`sequelize db:migrate:undo`

### Instalación de Pug
`npm install pug`




