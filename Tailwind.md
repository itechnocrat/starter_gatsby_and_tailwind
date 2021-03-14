# Tailwind
### Установить и сконфигурировать Tailwind CSS
```sh
gatsby recipes
# Выбрать конфигурирование Tailwind, затем:
gatsby recipes tailwindcss --install
```
Пока непонятно, необходима ли команда `gatsby recipe` и недостаточно ли только `gatsby recipes * --install`.  
С появлением `recipes` следующее, частично, теряет смысл, но для контроля сгодится.  
[Install Tailwind CSS with Gatsby](https://tailwindcss.com/docs/guides/gatsby):  
```sh
npm install gatsby-plugin-postcss tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```
=> `tailwind.config.js` and `postcss.config.js`
Configure Tailwind to remove unused styles in production:
```js
  // tailwind.config.js
  module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}'],
   // ...
  }
```
Enable gatsby-plugin-postcss:
```js
  // gatsby-config.js
  module.exports = {
    /* Your site config here */
   plugins: ['gatsby-plugin-postcss'],
  }
```
Include Tailwind in your CSS:
```css
/* ./src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Finally, create a `./gatsby-browser.js` file at the root of your project:
```js
import './src/styles/global.css';
```
?[Add Tailwind as a PostCSS plugin](https://tailwindcss.com/docs/installation#add-tailwind-as-a-post-css-plugin):  
Add `tailwindcss` and `autoprefixer` to your PostCSS configuration.  
Обычно, это `postcss.config.js`, но может быть `.postcssrc` в корне проекта или ключ `postcss` в файле `package.json`.  
```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
Итого конфиг-файлы:  
postcss.config.js  
tailwind.config.js  
[Installing Tailwind CSS as a PostCSS plugin](https://tailwindcss.com/docs/installation#installing-tailwind-css-as-a-post-css-plugin)  
[Install Tailwind via npm](https://tailwindcss.com/docs/installation#install-tailwind-via-npm)  
