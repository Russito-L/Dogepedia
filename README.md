# Dogepedia
Este proyecto consistió en el desarrollo de una SPA (Single Page Application), en la cual utiliza datos de una API (The Dog API) 
y parte de la información extraída es almacenada en una Base de Datos, (#PostgreSQL) para luego ser utilizada a conveniencia.

Características del proyecto:

- Paginación que muestra 8 diferentes razas de perros por pagina.

- Filtros (Uno para mostrar a los perros que posean el temperamento seleccionado entre todos los disponibles en la lista.
El otro para ver exclusivamente a los perros que fueron creados en la pagina por el usuario (los cuales posteriormente son almacenados en la Base de Datos) 
o a los que son oriundos de la API).

- Ordenamiento (Alfabético de los nombres de raza (A-Z, Z-A). Y por peso (Del mas pesado al mas liviano. Del mas liviano al mas pesado)).

- Paginas especificas y particulares de información para cada perro.

- Búsqueda de Perros por nombre de raza (o similitudes en la búsqueda).

- Formulario controlado para la creación de nuevos perros.

Tecnologías empleadas:
- Lenguaje: JavaScript.
- Data Base: PostgreSQL.
- Back-End: nodeJS, ExpressJS, Sequelize.
- Front-End: React, Redux, CSS puro.
