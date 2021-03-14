# Gatsby
[Gatsby. Of site](https://www.gatsbyjs.com/)  
[Gatsby. GitHub](https://github.com/gatsbyjs/gatsby#-get-up-and-running-in-5-minutes)  
[Gatsby Starters](https://github.com/gatsbyjs/gatsby/tree/master/starters)  
[Surge. Static web publishing for Front-End Developers](https://surge.sh/)  
[]()
### 0. Set Up Your Development Environment
```sh
npm install -g gatsby-cli && \
#gatsby new my-blazing-fast-site
project_name='learning_gatsby_and_tailwind' && \
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-hello-world'
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-default'
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-blog-theme-core'
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-blog-theme'
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-mdx-basic'
link_to_starter='https://github.com/gatsbyjs/gatsby-starter-minimal' && \
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-notes-theme'
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-plugin'
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-theme-workspace'
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-theme'
# link_to_starter='https://github.com/gatsbyjs/gatsby-starter-wordpress-blog'
gatsby new ${project_name} ${link_to_starter} && \
cd ${project_name} && \
project_name='' && \
link_to_starter=''

```
If you omit a URL from the end, Gatsby will automatically generate a site for you based on the default starter.  
Уже можно запускать.  
```sh
gatsby develop
gatsby build
gatsby clean
```
### Установить и сконфигурировать ESLint, Prettier
```sh
gatsby recipes
# Выбрать конфигурирование ESLint, затем:
gatsby recipes eslint --install
```
Пока непонятно, необходима ли команда `gatsby recipe` и недостаточно ли только `gatsby recipes * --install`.  
После конфигурирования с помощью `gatsby recipes` на основании,  
[Install the Prettier plugin](https://www.gatsbyjs.com/docs/tutorial/part-zero/#install-the-prettier-plugin)  
[Prettier Install](https://prettier.io/docs/en/install.html)  
[GitHub Prettier](https://github.com/prettier/eslint-config-prettier#installation)  
добавил конфиг для Prettier:  
```sh
npm install --save-dev eslint-config-prettier #babel-eslint
# npm WARN deprecated babel-eslint@10.1.0: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
```
```js
// .eslintrc.js
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, 'prettier']
}
```
Кроме этого добавил:  
```sh
npm install --save-dev @babel/plugin-proposal-decorators babel-preset-gatsby
```
```json
// .babelrc
{
    "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ],
    "presets": [
      [
        "babel-preset-gatsby",
        {
          "targets": {
            "browsers": [">0.25%", "not dead"]
          }
        }
      ]
    ]
}
```
```sh
npm install --save @fontsource/play
```
```js
module.exports = {
    // ...
    fontFamily: {
        sans: ['Play', 'sans-serif']
    }
}
```
Конфиг-файлы:  
gatsby-config.js  
gatsby-browser.js  
~/.config/gatsby/config.json  
### 1. [Get to Know Gatsby Building Blocks](https://www.gatsbyjs.com/docs/tutorial/part-one/)
[Gatsby Project Structure](https://www.gatsbyjs.com/docs/reference/gatsby-project-structure/)  
[Modifying a Starter](https://www.gatsbyjs.com/docs/modifying-a-starter/)  
[React Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)  
[https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/](https://www.gatsbyjs.com/docs/conceptual/graphql-concepts/)  
#### Building with components
Компоненты, это блоки - автономные фрагменты кода, описывающие части UI, обычно написанные на JSX, способные принимать реквизиты\/свойства (аргументы), возвращающие описание части UI.  
Это компоненты React.  
#### What are "props"?
`properties, property`  
Это реквизиты\/свойства (параметры) компонента.  
#### Linking between pages
The Gatsby `<Link /` component is for linking between pages within your site. For external links to pages not handled by your Gatsby site, use the regular HTML `<a>` tag.
#### [Deploy](https://www.gatsbyjs.com/docs/tutorial/part-one/#deploying-a-gatsby-site)
#### Surge
#### [Gatsby Cloud](https://www.gatsbyjs.com/docs/tutorial/part-one/#alternative-deploying-to-gatsby-cloud)
[Gatsby Cloud](https://gatsbyjs.com/)
[Deploying to Gatsby Cloud](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/#set-up-an-existing-gatsby-site)
### [Introduction to Styling in Gatsby](https://www.gatsbyjs.com/docs/tutorial/part-two/)
CSS-файл может быть в любом месте, главное прописать путь к нему в `gatsby-browser.js`, но принято размещать его по пути `src/styles/`  
Это был прямой, простой способ подключить стили.  

#### CSS Modules
Все показано в этих файлах, см. оф. мануал.  
`about-css-modules.js`  
`about-css-modules.module.css`  
`src/components/container.js`  
`src/components/container.module.css`  
Имя файла заканчивается на .module.css вместо обычного .css, это сообщение для Гэтсби, что этот файл CSS должен обрабатываться как модуль CSS, а не как простой CSS.  
#### CSS-in-JS
«CSS-in-JS» относится к шаблону, в котором CSS составляется с использованием JavaScript, а не определяется во внешних файлах.  
Это не является частью React, а предоставляется сторонними библиотеками, например,  
[Emotion](https://www.gatsbyjs.com/docs/how-to/styling/emotion/) and  
[Styled Components](https://www.gatsbyjs.com/docs/how-to/styling/emotion/)  
и не только.
### Creating Nested Layout Components
