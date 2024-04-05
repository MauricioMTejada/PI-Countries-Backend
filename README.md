# PI-Countries-Backend
### Backend Proyect Countries

Name DataBase: "countries"

To initialize, type the following command:

- local Database:

    - file `.env`:

        discomment credentials 'Versión de Base de Datos Local'

        commnent others credentials

    - file `src/db.js`:

        discomment "local Database" (line 7 to 11)

        comment "Neon Database" (line 14 to 24)

    - in the console type in:

        `npm start`

- Platform Neon Database:

    - file `.env`:

        commnent credentials 'Versión de Base de Datos Local'

        discommnent credentials 'Versión para Proveedor Neon'

    - file `src/db.js`:

        comment "local Database" (line 7 to 11)

        discomment "Neon Database" (line 14 to 24)

    - in the console type in:

        `npm start`
