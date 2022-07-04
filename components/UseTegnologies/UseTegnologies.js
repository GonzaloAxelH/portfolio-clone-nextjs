import { Tecnologies } from "./UserTegnologiesStyles";
let tecnologys = {
  JAVASCRIPT: "https://cdn.svgporn.com/logos/javascript.svg",
  REACT: "https://cdn.svgporn.com/logos/react.svg",
  NEXTJS: "https://cdn.svgporn.com/logos/nextjs-icon.svg",
  TAILWIND: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
  LARAVEL: "https://cdn.svgporn.com/logos/laravel.svg",
  NODE: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
  ETHERIUM: "https://cdn.svgporn.com/logos/ethereum-color.svg",
  TYPESCRIPT: "https://cdn.svgporn.com/logos/typescript-icon.svg",
  GIT: "https://cdn.svgporn.com/logos/git-icon.svg",
  BITCOIN: "https://cdn.svgporn.com/logos/bitcoin.svg",
  SOLIDITY: "https://cdn.svgporn.com/logos/solidity.svg",
  BOOSTRAP: "https://cdn.svgporn.com/logos/bootstrap.svg",
  MYSQL: "https://cdn.svgporn.com/logos/mysql.svg",
  MONGODB: "https://cdn.svgporn.com/logos/mongodb.svg",
  ANGULAR: "https://cdn.svgporn.com/logos/angular-icon.svg",
  GATSBY: "https://cdn.svgporn.com/logos/gatsby.svg",
  STRAPI: "https://cdn.svgporn.com/logos/strapi-icon.svg",
  NPM: "https://cdn.svgporn.com/logos/npm.svg",
  PYTHON: "https://cdn.svgporn.com/logos/python.svg",
  GRAPHQL: "https://cdn.svgporn.com/logos/graphql.svg",
  POSTMAN: "https://cdn.svgporn.com/logos/postman-icon.svg",
  POSTGRESQL: "https://cdn.svgporn.com/logos/postgresql.svg",
  FIREBASE: "https://cdn.svgporn.com/logos/firebase.svg",
  AZURE: "https://cdn.svgporn.com/logos/microsoft-azure.svg",
  DOCKER: "https://cdn.svgporn.com/logos/docker-icon.svg",
  VERCEL: "https://cdn.svgporn.com/logos/vercel-icon.svg",
  JENKINS: "https://cdn.svgporn.com/logos/jenkins.svg",
  MOCHA: "https://cdn.svgporn.com/logos/mocha.svg",
  GITLAB: "https://cdn.svgporn.com/logos/gitlab.svg",
  GIRTHUB: "https://cdn.svgporn.com/logos/github-octocat.svg",
  DJANGO: "https://cdn.svgporn.com/logos/django-icon.svg",
  SOLID: "https://cdn.svgporn.com/logos/solidjs-icon.svg",
  GRUNT: "https://cdn.svgporn.com/logos/grunt.svg",
  GULP: "https://cdn.svgporn.com/logos/gulp.svg",
  VUEJS: "https://cdn.svgporn.com/logos/vue.svg",
  SASS: "https://cdn.svgporn.com/logos/sass.svg",
  VITE: "https://cdn.svgporn.com/logos/vitejs.svg",
  REDHAT: "https://cdn.svgporn.com/logos/redhat-icon.svg",
  NGINX: "https://cdn.svgporn.com/logos/nginx.svg",
  BASH: "https://cdn.svgporn.com/logos/bash-icon.svg",
  STORYBOOK: "https://cdn.svgporn.com/logos/storybook-icon.svg",
  NESTJS: "https://cdn.svgporn.com/logos/nestjs.svg",
  AWS: "https://cdn.svgporn.com/logos/aws.svg",
  KOTLIN: "https://cdn.svgporn.com/logos/kotlin.svg",
  WEBASENMBY: "https://cdn.svgporn.com/logos/webassembly.svg",
  SHOPIFY: "https://cdn.svgporn.com/logos/shopify.svg",
  PAYPAL: "https://cdn.svgporn.com/logos/paypal.svg",
  WIX: "https://cdn.svgporn.com/logos/wix.svg",
  LINUX: "https://cdn.svgporn.com/logos/linux-tux.svg",
  VIM: "https://cdn.svgporn.com/logos/vim.svg",
  SWIFT: "https://cdn.svgporn.com/logos/swift.svg",
  WORDPRESS: "https://cdn.svgporn.com/logos/wordpress-icon.svg",
};

const Tec = ({ url, name }) => {
  return (
    <div className="avatar">
      <img alt={name} aria-hidden src={url} className="background" />
      <img alt={name} src={url} width="100" height="100" />
    </div>
  );
};

const UseTegnologies = () => {
  return (
    <Tecnologies>
      <Tec name="Javascript" url={tecnologys.JAVASCRIPT} />
      <Tec name="React" url={tecnologys.REACT} />
      <Tec name="NextJS" url={tecnologys.NEXTJS} />
      <Tec name="Tailwind" url={tecnologys.TAILWIND} />
      <Tec name="Laravel" url={tecnologys.LARAVEL} />
      <Tec name="NodeJS" url={tecnologys.NODE} />
      <Tec name="Ethereum" url={tecnologys.ETHERIUM} />
      <Tec name="Typescript" url={tecnologys.TYPESCRIPT} />
      <Tec name="Git" url={tecnologys.GIT} />
      <Tec name="Bitcoin" url={tecnologys.BITCOIN} />
      <Tec name="Solidity" url={tecnologys.SOLIDITY} />
      <Tec name="Bootstrap" url={tecnologys.BOOSTRAP} />
      <Tec name="MySQL" url={tecnologys.MYSQL} />
      <Tec name="MongoDB" url={tecnologys.MONGODB} />
      <Tec name="Angular" url={tecnologys.ANGULAR} />
      <Tec name="Gatsby" url={tecnologys.GATSBY} />
      <Tec name="Strapi" url={tecnologys.STRAPI} />
      <Tec name="NPM" url={tecnologys.NPM} />
      <Tec name="Python" url={tecnologys.PYTHON} />
      <Tec name="GraphQL" url={tecnologys.GRAPHQL} />
      <Tec name="Postman" url={tecnologys.POSTMAN} />
      <Tec name="PostgreSQL" url={tecnologys.POSTGRESQL} />
      <Tec name="Firebase" url={tecnologys.FIREBASE} />
      <Tec name="Azure" url={tecnologys.AZURE} />
      <Tec name="Docker" url={tecnologys.DOCKER} />
      <Tec name="Vercel" url={tecnologys.VERCEL} />
      <Tec name="Jenkins" url={tecnologys.JENKINS} />
      <Tec name="Mocha" url={tecnologys.MOCHA} />
      <Tec name="GitLab" url={tecnologys.GITLAB} />
      <Tec name="Github" url={tecnologys.GIRTHUB} />
      <Tec name="Django" url={tecnologys.DJANGO} />
      <Tec name="Swift" url={tecnologys.SWIFT} />
      <Tec name="Wordpress" url={tecnologys.WORDPRESS} />
      <Tec name="NestJS" url={tecnologys.NESTJS} />
      <Tec name="AWS" url={tecnologys.AWS} />
      <Tec name="Kotlin" url={tecnologys.KOTLIN} />
      <Tec name="WebAssembly" url={tecnologys.WEBASENMBY} />
      <Tec name="Shopify" url={tecnologys.SHOPIFY} />
      <Tec name="Paypal" url={tecnologys.PAYPAL} />
      <Tec name="Wix" url={tecnologys.WIX} />
      <Tec name="Linux" url={tecnologys.LINUX} />
      <Tec name="Vim" url={tecnologys.VIM} />
      <Tec name="RedHat" url={tecnologys.REDHAT} />
      <Tec name="Nginx" url={tecnologys.NGINX} />
      <Tec name="Bash" url={tecnologys.BASH} />
      <Tec name="Storybook" url={tecnologys.STORYBOOK} />
    </Tecnologies>
  );
};

export default UseTegnologies;
