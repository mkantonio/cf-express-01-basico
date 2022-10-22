

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

### Seeds
[Link](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed)

Generar seeds `sequelize seed:generate --name generate_tasks`

Ejecutar los seeds `sequelize db:seed:all`

Deshacer el último seed `sequelize db:seed:undo`


### Instalación de Pug
`npm install pug`




