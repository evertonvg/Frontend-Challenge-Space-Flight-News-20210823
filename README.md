# titulo: challenge space flight news
# challenge by coodesh
# Esse é um projeto que traz uma listagem de artigos da Api pública spaceflightnewsapi com a possibilidade de fazer filtro por nome do artigo e data de publicação.

# descrição das tecnologias usadas

# nuxt.js: um framework para vue.js que ja vem com alguns pacotes já pré-instalados, o que me facilitou na configuração inicial do projeto.
# tailwindcss: framework para css que usa classes de utilidades.
# axios: ferramenta para consumir apis, ja inclusa dentro do nuxt.
# vue material design icons: um pacote com componentes vue.js de icones feitos em svg do próprio material design.
# nuxt date fns: um modulo nuxt.js para formatação de dias e horas.

# Como rodar o projeto:
# foi utilizado a versão v14.15.0 do node.js.
# deve criar um arquivo chamado ".env" na raiz do projeto com o seguinte conteúdo: API_URL=https://api.spaceflightnewsapi.net/v3
# executar "npm install" no terminal para instalar os pacotes.
# após isso, dentro de package.json (localizado na raiz do projeto), existe uma lista de scripts que podem ser utilizados no terminal para executar o projeto, dependendo do resultado que se deseja obter. O comando mais comum para rodar o projeto é "npm run dev", que irá executar um server localmente em desenvolvimento.

# abaixo dessa linha tem somente o read.me padrão do nuxt.js, caso se tenha mais duvidas sobre o projeto.




## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
