import { createGlobalStyle } from 'styled-components';
import { Margin, Padding } from 'styles/utilities/gutters';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Roboto Thin';
  font-style: normal;
  font-weight: 100;
  src: url('/Fonts/roboto-v20-latin-100.eot'); /* IE9 Compat Modes */
  src: local('Roboto Thin'), local('Roboto-Thin'),
       url('/Fonts/roboto-v20-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/Fonts/roboto-v20-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('/Fonts/roboto-v20-latin-100.woff') format('woff'), /* Modern Browsers */
       url('/Fonts/roboto-v20-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/Fonts/roboto-v20-latin-100.svg#Roboto') format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Roboto Light';
  font-style: normal;
  font-weight: 300;
  src: url('/Fonts/roboto-v20-latin-300.eot'); /* IE9 Compat Modes */
  src: local('Roboto Light'), local('Roboto-Light'),
       url('/Fonts/roboto-v20-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/Fonts/roboto-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('/Fonts/roboto-v20-latin-300.woff') format('woff'), /* Modern Browsers */
       url('/Fonts/roboto-v20-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/Fonts/roboto-v20-latin-300.svg#Roboto') format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Roboto Thin Italic';
  font-style: italic;
  font-weight: 100;
  src: url('/Fonts/roboto-v20-latin-100italic.eot'); /* IE9 Compat Modes */
  src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'),
       url('/Fonts/roboto-v20-latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/Fonts/roboto-v20-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/Fonts/roboto-v20-latin-100italic.woff') format('woff'), /* Modern Browsers */
       url('/Fonts/roboto-v20-latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/Fonts/roboto-v20-latin-100italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Roboto Light Italic';
  font-style: italic;
  font-weight: 300;
  src: url('/Fonts/roboto-v20-latin-300italic.eot'); /* IE9 Compat Modes */
  src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
       url('/Fonts/roboto-v20-latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/Fonts/roboto-v20-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/Fonts/roboto-v20-latin-300italic.woff') format('woff'), /* Modern Browsers */
       url('/Fonts/roboto-v20-latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/Fonts/roboto-v20-latin-300italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url('/Fonts/roboto-v20-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Roboto'), local('Roboto-Regular'),
       url('/Fonts/roboto-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/Fonts/roboto-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/Fonts/roboto-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/Fonts/roboto-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/Fonts/roboto-v20-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Roboto Bold';
  font-style: normal;
  font-weight: 700;
  src: url('/Fonts/roboto-v20-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Roboto Bold'), local('Roboto-Bold'),
       url('/Fonts/roboto-v20-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/Fonts/roboto-v20-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/Fonts/roboto-v20-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/Fonts/roboto-v20-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/Fonts/roboto-v20-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Roboto Bold Italic';
  font-style: italic;
  font-weight: 700;
  src: url('/Fonts/roboto-v20-latin-700italic.eot'); /* IE9 Compat Modes */
  src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'),
       url('/Fonts/roboto-v20-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/Fonts/roboto-v20-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/Fonts/roboto-v20-latin-700italic.woff') format('woff'), /* Modern Browsers */
       url('/Fonts/roboto-v20-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/Fonts/roboto-v20-latin-700italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Roboto Black';
  font-style: normal;
  font-weight: 900;
  src: url('/Fonts/roboto-v20-latin-900.eot'); /* IE9 Compat Modes */
  src: local('Roboto Black'), local('Roboto-Black'),
       url('/Fonts/roboto-v20-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/Fonts/roboto-v20-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('/Fonts/roboto-v20-latin-900.woff') format('woff'), /* Modern Browsers */
       url('/Fonts/roboto-v20-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/Fonts/roboto-v20-latin-900.svg#Roboto') format('svg'); /* Legacy iOS */
}
@font-face {
  font-family: 'Roboto Black Italic';
  font-style: italic;
  font-weight: 900;
  src: url('/Fonts/roboto-v20-latin-900italic.eot'); /* IE9 Compat Modes */
  src: local('Roboto Black Italic'), local('Roboto-BlackItalic'),
       url('/Fonts/roboto-v20-latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/Fonts/roboto-v20-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/Fonts/roboto-v20-latin-900italic.woff') format('woff'), /* Modern Browsers */
       url('/Fonts/roboto-v20-latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/Fonts/roboto-v20-latin-900italic.svg#Roboto') format('svg'); /* Legacy iOS */
}
  html,
  body {
    padding: ${Padding.SIZE_0};
    margin: ${Margin.SIZE_0};;
    font-family: "Roboto";
  }
  * {
    box-sizing: border-box;
  }
`;
