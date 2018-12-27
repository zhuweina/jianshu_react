import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1545880882750'); /* IE9*/
    src: url('./iconfont.eot?t=1545880882750#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAXEAAsAAAAACGAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8gkpKY21hcAAAAYAAAABoAAABstL4nbZnbHlmAAAB6AAAAc8AAAH40OsHYGhlYWQAAAO4AAAALwAAADYTtBBhaGhlYQAAA+gAAAAcAAAAJAfeA4ZobXR4AAAEBAAAAA4AAAAUFAAAAGxvY2EAAAQUAAAADAAAAAwA/gF4bWF4cAAABCAAAAAfAAAAIAETADxuYW1lAAAEQAAAAUUAAAJtPlT+fXBvc3QAAAWIAAAAOgAAAE2qVCeSeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBye8byIYG7438AQw9zA0AAUZgTJAQDk0QxJeJztkcENgDAIRR9tNcY4Ro+ee+4YDuHJoYlbKC09OISfPAI/hAMAExCN3UggF0LTaa50P7J2P1GtX1kIBN00a7mP54FvPSQ259G2Bt8lM7+2nuvoUrue0+vs2MXQ4rTv3IeDvKKNGBN4nDWRwWsTQRSH35vZ3bFaEiHdLKlJdHeyuy3CbshmdySQVKGJlqIiiPTQqkjSQ0tPLT2EFnLbSw+lhx56UNDce+ipt3hQUPSSU0kP/iNm66TFy7wZvgff780DBLjqKUB7cB8ATeGhlSIzRVKJRCSMFDIH3AhEEQ2hQNI7FAcnB1u12pYsYurW+6ffd0bJH1VFc7R53jomcBjdQNkT3Z56/WoNJ2yEpoovW8cAivSd0R90CaYhA7NgS6ulMaQ2NjD0EFnIRaCLsOpy6WSuqEYTu0atUt0YD5sYkHI2R9bGl0eB9dnRT3Bw9sI/9f2HYQsZXcplx7+S300ijHppcfXvpRUcfcl91BEHp89lG7EotsLadY4rOqAADNJQAh/A5K7JOAYZ6rhcY1SNgkoBecg1bjlhdQGr3GLyS/SZbFCJ6kgG68+Si2YH0x8WN1WNqGwDL8qN7UdoPvHExtvHNf/dXOHBrF0eDikk87hw1+GZ5Kua3/nmR+X5N6npZXtFzef0fMUuAoAMI49lcg53wIB7ALaHbgMn46eQyl3Ii3x6mDGYiz+7fUr73W5fUfrddkxp3O7EhMSf9kr7u9fgBpP0f9Jpx0lhz96Xln9713POAHicY2BkYGAAYrZHyR/j+W2+MnCzMIDADa80IwT9v4GFgbkByOVgYAKJAgAZzQlxAHicY2BkYGBu+N/AEMPCAAJAkpEBFbACAEcLAm54nGNhYGBgQcMAAQQAFQAAAAAAAAA4AHwAxgD8eJxjYGRgYGBlMGBgYQABJiDmAkIGhv9gPgMADd0BUAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYGjuCAzLy+1yIw7Mzk/rzi1xMDQ2JzJMZEVxNVlYAAAtZAJsgAA') format('woff'),
    url('iconfont.ttf?t=1545880882750') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('iconfont.svg?t=1545880882750#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
