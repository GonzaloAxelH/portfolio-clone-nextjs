
import Code from "../../../components/BlogComponents/CodeComponent/Code";
import Rlink from "../../../components/BlogComponents/Links/Rlink";
import {
  CREATE_DATABASE_MYSQL,
  CREATE_MODEL_MYSQL,
  EXAMPLE,
  PHP_CODE,
} from "./code";
import {
  Label,
  ListaPasos,
  
  Parrafo,
  SubtitleBlog,
} from "../../../components/BlogComponents/BlogPageStyles";

const BlogComponent = (
  <>
    <section>
      <Parrafo>
        A continuacion se presenta una pequeña api hecha en laravel 9 con base
        de datos mysql y una pequeña aplicacion web que la utiliza.
      </Parrafo>
      <ListaPasos>
        <ul>
          <li>
            <a href="#1">
              <span>Creando la base de datos en mysql</span>
            </a>
          </li>
          <li>
            <a href="#2">
              <span>Generando un modelo </span>
            </a>
          </li>
          <li>
            <a href="#3">
              <span>Expalme</span>
            </a>
          </li>
        </ul>
      </ListaPasos>
    </section>


    <section id="1">
      <SubtitleBlog>1.-Creando la base de datos en Mysql</SubtitleBlog>
      <Parrafo>
        En el siguiente paso crearemos la base de datos en Mysql desde la
        consola de bash de windows,nos logueamos con nuestro usuario y
        contraseña.
      </Parrafo>
      <Code
        code={CREATE_DATABASE_MYSQL}
        type="javascript"
        pathFile="basic-rest-api/"
      />
    </section>
    <section id="2">
      <SubtitleBlog>2.-Generando un modelo</SubtitleBlog>
      <Parrafo>
        Generamos un modelo para Estudiante con el comando de artisan dentro de
        la caperta raiz <Label>./basic-rest-api</Label>.
      </Parrafo>
      <Code
        code={CREATE_MODEL_MYSQL}
        type="javascript"
        pathFile="basic-rest-api/"
      />
      <Parrafo>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
        necessitatibus blanditiis voluptatum animi corrupti illo enim, et
        recusandae dolor ratione quidem! Laudantium adipisci iste possimus dolor
        officiis itaque, sit odit.
      </Parrafo>
      <Code code={EXAMPLE} type="javascript" pathFile="basic-rest-api/" />
    </section>
    <section id="3">
      <SubtitleBlog>3.-Subtitulo de Ejemplo</SubtitleBlog>

      <Parrafo>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
        necessitatibus blanditiis <Label>./Blog.js</Label>voluptatum animi
        corrupti illo enim, et recusandae dolor ratione quidem! Laudantium
        adipisci iste possimus dolor officiis itaque, sit odit
        <Label>./app/controllers/api/index.js</Label>.
      </Parrafo>

      <Code code={EXAMPLE} type="javascript" pathFile="basic-rest-api/" />
    </section>
    <SubtitleBlog>3.-Codigo php ejemplo</SubtitleBlog>

    <Parrafo>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
      necessitatibus <Rlink to="https://nodejs.org/es/"> Nodejs</Rlink>{" "}
      consectetur
      <Label>./Blog.js</Label>voluptatum animi corrupti illo enim, et recusandae
      dolor ratione quidem! Laudantium adipisci iste possimus dolor officiis
      itaque, sit odit
      <Label>./app/controllers/api/index.js</Label>.
    </Parrafo>

    <Code code={PHP_CODE} type="php" pathFile="basic-rest-api/" />
  </>
);


export default BlogComponent;
