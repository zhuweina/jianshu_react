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
    src: url('./iconfont.eot?t=1545814459540'); /* IE9*/
    src: url('./iconfont.eot?t=1545814459540#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAVMAAsAAAAAB8gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8gkgoY21hcAAAAYAAAABdAAABnLOoG1lnbHlmAAAB4AAAAWwAAAGIo22SX2hlYWQAAANMAAAALwAAADYTsglvaGhlYQAAA3wAAAAcAAAAJAfeA4VobXR4AAADmAAAAA4AAAAQEAAAAGxvY2EAAAOoAAAACgAAAAoBCACObWF4cAAAA7QAAAAeAAAAIAESADxuYW1lAAAD1AAAAUUAAAJtPlT+fXBvc3QAAAUcAAAALwAAAEK05JBHeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBye8TwzY27438AQw9zA0AAUZgTJAQDiIwwleJztkEEOgDAIBAdbTWP6jB49mj7Iky/nGxWoBx/hkiGw2XAAWIFkHEYGuRFcl7kSfmIPP9NtL1YLaNWmfYzvFJJIlLgqnpSNXzX6+W7JvzaJuU3839onLA9W9xLCAAAAeJw1j79LAmEYx5/nfb17h0QDO48zlbzX85LAE8/zQlALVBKpMRr6AaENNhYNovPtjg0F5e7g1GZDQ1GLk+C/kmdn0fLwPHy+8Hy+4ANYjuk7bYAfQhABDQBVkSHVsIxWBpFZ3DYl28rrHGWb6Xa+YMdRFqmaLMmLaQ1Nkg0r5GwxH5jqU0q6x8n4yBgZxo5VR0YbSnjx6X7ViC2XktXT77lqDp6VBwlxMjr0YkSlWLeKsPJY0gkFYBCEJBgACa4nGEczRFM6FxkVCmYuhtziIldTVr6Cea4yOYDSRtjMFUpIJlcH7qzWxuBl9VoQicA6OMuWb3YxsZ+xO+d7ReNiO7YV0bLTKQU3jZX1FA+5r0L09s0oZNPHAX9TOxGiihTNaXEA8GS80SQvsAYybAJoGdTLuKofQBpA5i3emcGQzHT86A4pHXa7Q59v2G05lDqttkOI89hL9u9+wR8mwX/SbjlurKf1vS8/fspWw3icY2BkYGAA4sn+M3fE89t8ZeBmYQCBG55JuxH0/80sDMyeQC4HAxNIFAAxTQpsAHicY2BkYGBu+N/AEMPCAAJAkpEBFbAAAEcKAm14nGNhYGBgQcIAALAAEQAAAAAAAABEAI4AxAAAeJxjYGRgYGBhMABiEGACYi4gZGD4D+YzAAANwgFPAAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICFkYmRmZGFkZWBOzM5P684tcTA0NicyTGRFcTVZWAAAFjsBm0A') format('woff'),
    url('./iconfont.ttf?t=1545814459540') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1545814459540#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
