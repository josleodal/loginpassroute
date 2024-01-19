// Snippets de código para poder componer el programa

//Usado?: 
  const middlewares = require('./middlewares');
//--- Explicación:  Importa las funciones  middlewares


// -------------------------------------------------------------------------------------

//Usado?: 
const bodyParser = require('body-parser');
//--- Explicación: Importa 'body-parser' para  el análisis de las solicitudes HTTP


// -------------------------------------------------------------------------------------

//Usado?: 
const session = require('express-session');
//--- Explicación: Importa 'express-session' para manejar sesiones en Express.


// -------------------------------------------------------------------------------------

//Usado?: 
const express = require('express');
//--- Explicación: Importa el framework Express 

// -------------------------------------------------------------------------------------

//Usado?: 
const bodyParser = require('body-parser');
//--- Explicación: Importa 'body-parser' para  el análisis de las solicitudes HTTP.

// -------------------------------------------------------------------------------------

//Usado?: 
const session = require('express-session');
//--- Explicación: Importa 'express-session' para manejar sesiones en Express.

// -------------------------------------------------------------------------------------

//Usado?: 
const dotenv = require('dotenv');
//--- Explicación: Importa 'dotenv' para cargar variables de entorno.

// -------------------------------------------------------------------------------------

//Usado?: 
const middlewares = require('./middlewares');
//--- Explicación: Importa las funciones  middlewares

// -------------------------------------------------------------------------------------

//Usado?: 
const routes = require('./routes');
//--- Explicación:  Importa 'routes' 


// -------------------------------------------------------------------------------------

//Usado?: 
dotenv.config();
//--- Explicación: Carga las variables de entorno


// -------------------------------------------------------------------------------------

//Usado?: 
const app = express();
//--- Explicación:  Crea una instancia de la aplicación Express

// -------------------------------------------------------------------------------------

//Usado?: 
const PORT = 4000;
//--- Explicación: Define el número de puerto 

// -------------------------------------------------------------------------------------

//Usado?: 
const dotenv = require('dotenv');
//--- Explicación: Importa 'dotenv' para cargar variables de entorno.


// -------------------------------------------------------------------------------------

//Usado?:
dotenv.config();
//--- Explicación: Carga las variables de entorno

// -------------------------------------------------------------------------------------

//Usado?:
middlewares.setupApp(app);
//--- Explicación: Llama a la función 'setupApp' del módulo 'middlewares', pasando la aplicación Express como argumento.


// -------------------------------------------------------------------------------------

//Usado?:
routes.setup(app);
//--- Explicación: Llama a la función 'setup' del módulo 'routes', pasando la aplicación Express como argumento.


// -------------------------------------------------------------------------------------

//Usado?:
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: Función  para validar una palabra 



// -------------------------------------------------------------------------------------


//Usado?:
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: Función que configura rutas 



// -------------------------------------------------------------------------------------


//Usado?:
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: Envia una respuesta HTML


// -------------------------------------------------------------------------------------

//Usado?:
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};

 //Explicación: Configura middleware 'body-parser' y 'express-session'

//Usado?:
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: Maneja solicitudes POST en la ruta 
// -------------------------------------------------------------------------------------

//Usado?:
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: Aplica el middleware 'body-parser' para analizar el cuerpo de las solicitudes con codificación URL.


// -------------------------------------------------------------------------------------

//Usado?:
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: Aplica 'express-session'

// -------------------------------------------------------------------------------------

//Usado?:
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: Inicia el servidor Express

// -------------------------------------------------------------------------------------

//Usado?:
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: Función para verificar sesión 

// -------------------------------------------------------------------------------------


//Usado?:
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación:  Solicitud GET en la ruta '/profile'

// -------------------------------------------------------------------------------------


//Usado?:
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: Solicitud POST en la ruta '/logout'

// -------------------------------------------------------------------------------------

//Usado?:
module.exports = {
  setup,
};
//--- Explicación:Exporta la función 'setup' 
// -------------------------------------------------------------------------------------

//Usado?:
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:Exporta varias funciones del Middleware


// -------------------------------------------------------------------------------------

