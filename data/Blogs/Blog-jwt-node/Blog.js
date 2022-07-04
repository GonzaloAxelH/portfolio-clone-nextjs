import Code from "../../../components/BlogComponents/CodeComponent/Code";
import Rlink from "../../../components/BlogComponents/Links/Rlink";

import {
  Label,
  ListaPasos,
  Parrafo,
  SubtitleBlog,
} from "../../../components/BlogComponents/BlogPageStyles";

const code1 = `npm install --save express jsonwebtoken`;
const code2 = `const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      config = require('./configs/config'),
      app = express();
// 1
app.set('llave', config.llave);
// 2
app.use(bodyParser.urlencoded({ extended: true }));
// 3
app.use(bodyParser.json());
// 4
app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
});
// 5
app.get('/', function(req, res) {
    res.send('Inicio');
});`;

const BlogComponent = (
  <>
    <section>
      <Parrafo>
        Hoy en día las APIs son parte importantísima de nuestro ecosistema de
        desarrollo, ya que gracias a ellas tenemos acceso a miles de millones de
        datos en distintas empresas u organismos, ya que nos permiten mandar
        pedir información, o utilizar servicios de terceros de forma sencilla
        (normalmente…).
      </Parrafo>
      <Parrafo>
        Sin embargo, dejar expuesto un servicio que el punto es que sea bajo
        demanda, es decir, que para tener acceso a este haya que pagar por
        petición, por mes o cosas así, nos hace que estas APIs deban protegerse,
        así no cualquiera puede realizar peticiones a nuestros servicios.
      </Parrafo>
      <Parrafo>
        Hay distintos métodos para poder dar acceso a un API, por ejemplo la
        autenticación a través de tokens y es la que veremos usando JWT.
      </Parrafo>
    </section>
    <section>
      <SubtitleBlog>Autenticación por tokens</SubtitleBlog>
      <Parrafo>
        El funcionamiento de JWT es bastante simple y se basa en 6 pasos:
      </Parrafo>

      <ListaPasos>
        <ul>
          <li>
            Primero: autentica usando credenciales regulares (usuario-contraseña
            normalmente)
          </li>
          <li>
            Segundo: Una vez que ya autenticó en el servidor, genera una cadena
            de caracteres que contiene la token de JWT integrada.
          </li>
          <li>Tercero: Esa token es enviada al cliente</li>
          <li>Cuarto: La token se almacena en el lado del cliente</li>
          <li>
            Quinto: La token se manda al lado del servidor en cada petición que
            se realiza.
          </li>
          <li>
            Sexto: El servidor valida la token y otorga (o no) acceso al recurso
            que el cliente solicita.
          </li>
        </ul>
      </ListaPasos>

      <Parrafo>
        Y listo, este es el proceso a forma de texto. Aquí lo vemos a forma de
        diagrama:
      </Parrafo>
    </section>
    <section>
      <SubtitleBlog>Construyendo nuestra API</SubtitleBlog>
      <Parrafo>
        En esta ocasión no voy a explicar qué es un API, cómo funciona, qué
        métodos usar y demás, solamente haremos una demo, si quieres más
        información de esto puedes consultar mi otra guía:
      </Parrafo>

      <Parrafo>
        Vamos a instalar unas dependencias para poder trabajar con esta guía en
        nuestro nuevo proyecto
      </Parrafo>

      <Code code={code1} type="javascript" pathFile="jwt-auth/" />
      <Parrafo>
        Ahora sí, vamos a nuestro archivo index.js y le pondremos un código
        simple:
      </Parrafo>
      <Code code={code2} type="javascript" pathFile="jwt-auth/index.js/" />
    </section>
  </>
);

export default BlogComponent;
