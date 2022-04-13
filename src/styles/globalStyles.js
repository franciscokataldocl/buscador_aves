import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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

:root{
--background:#FAFAFA;
--yellow:#FBCE57;
--black:#565656;
--grey:#EEEEEE;

}
html{
 font-size:16px;
}
  body {
    background:var(--background);
    width:100%;
    height:100vh;
    font-family: 'Nunito', sans-serif;
    font-weight: 200;
    padding:0;
    margin:0!important;

  }

  .shadow{
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

.animate-2s{
    -webkit-transition: all .2s ease-out;
  -moz-transition: all .2s ease-out;
  -o-transition: all .2s ease-out;
  transition: all .2s ease-out;
}

//fonts
h1{
    font-weight: 600;
    font-size:2rem;
}
h2{
   font-weight: 400;
   font-size:1.5rem;
}
h3{
    font-weight: 600;
    font-size:1.2rem;
}
h4{
   font-weight: 300;
    font-size:1.1rem;
}
h5{
    font-weight: 200;
    font-size:1rem;
}
p{
    font-weight: 200;
    font-size:1rem;
}
.italic{
    font-style: italic;
}


.c-white{
    color:white;
}
.c-white-opacity{
    color:#ffffffad;
}


.btn{
display: inline-block;
outline: none;
cursor: pointer;
font-size: 14px;
line-height: 1;
border-radius: 500px;
transition-property: background-color,border-color,color,box-shadow,filter;
transition-duration: .3s;
border: 1px solid transparent;
letter-spacing: 2px;
text-transform: uppercase;
white-space: normal;
font-weight: 700;
text-align: center;
padding: 16px 14px 18px;
color: var(--black);
box-shadow: inset 0 0 0 2px var(--yellow);
background-color: transparent;
height: 48px;
display:flex;
text-align:center;


}
.btn-yellow:hover{
    color: white;
    background-color: var(--yellow);
}

.link-card-front{
z-index:3;
text-decoration:none;
width:100%;
height:auto;
z-index:2;
margin-bottom:10%;
margin-left:10%;
}


`;


export default GlobalStyle;
