import styled from "styled-components";

//https://www.dio.me/articles/construindo-um-header-fixo-no-topo-com-html-e-css


export const Body = styled.body`
    /* display: flex;
    flex-direction: column; */
    background-color: #FFFFFF;
    margin: 0;
`; 

// HEADER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//https://www.dio.me/articles/construindo-um-header-fixo-no-topo-com-html-e-css
export const Header = styled.header`
  position: fixed;
  width: 100%;

  background-color: #020414;

  display: flex;

  padding-top: 1rem;
  padding-bottom: 1rem;

  top: 0;
  left: 0;

  align-items: center;
`; 

export const HeaderDiv = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;

  padding-right: 4rem;

  /* superior | direita | inferior | esquerda */
  //padding: 1rem 4rem 1rem 4rem;
`

// export const Nav = styled.nav`
// `

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding-top: 1rem;
  padding-bottom: 1rem;
`

export const Li = styled.li`
  list-style-type: none;

  padding-left: 3rem;
`

export const Link = styled.a`
  font-size: 18px;
  font-family: 'Mulish', sans-serif;
  font-weight: 400; 
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #91B9F8;
    //color: #7499D1;
    //opacity: 0.7
  }
`;

export const Logo = styled.img`

  height: 2rem;
  padding-left: 4rem;

`;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// SECTI0N1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Section1 = styled.section`
  background-image: url("src/assets/inicio.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: auto;
`;
export const DivS1 = styled.div`
  display: flex;
  align-items: left;
  margin-left: 7vw;
  padding-top: 9rem;

  width: 50%;

  flex-direction: column;
`;
export const Br = styled.div`
  padding-bottom: 4rem;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// SECTI0N2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Section2 = styled.section`
  background-image: 
  linear-gradient(to bottom, transparent 80%, #fff 100%), url(src/assets/missao.png),
  linear-gradient(to left, rgb(0,0,0, 0), rgb(0,0,0, 1));

  //background-image: linear-gradient(rgba(30, 102, 7, 1), rgba(30, 102, 7, 0.2));
  //background-image: url("src/assets/missao.png");
  //background-image: linear-gradient(to bottom, transparent 80%, #fff 100%), url(src/assets/missao.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: auto;
`;
export const DivS2 = styled.div`
  display: flex;
  align-items: left;
  margin-left: 7vw;
  padding-top: 8rem;

  width: 20%;

  flex-direction: column;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// SECTI0N3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Section3 = styled.section`
  background-color: #fff;
  height: 100vh;
  width: auto;
`;
export const DivS3 = styled.div`
  display: flex;
  align-items: left;
  margin-left: 7vw;
  padding-top: 8rem;

  width: 20%;

  flex-direction: column;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// SECTI0N4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Section4 = styled.section`
  background-color: #fff;
  height: 100vh;
  width: auto;
`;
export const DivS4 = styled.div`
  display: flex;
  //align-items: center;
  //align-content: center;
  justify-content: center;
  margin-left: 7vw;
  padding-top: 2rem;

  width: 20%;
  height: 100vh;

  flex-direction: column;
`;
export const TextCard = styled.h2`
  font-size: 18px;
  font-family: 'Mulish', sans-serif;
  font-weight: 400; 
  color: #000;

  //text-align: left;
  text-decoration: none;
  text-align: center;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// *******************************************************************
// Textos White
export const Heading1 = styled.h1`
font-size: 48px;
font-family: 'Mulish', sans-serif;
font-weight: 700; //bold
color: #fff;

//text-align: left;
//text-wrap: wrap; // or text-wrap: balance;
text-decoration: none;
`;

export const Heading2 = styled.h2`
font-size: 42px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
//color: #000000;
color: #fff;

//text-align: left;
text-decoration: none;
`;

export const Heading3 = styled.h3`
font-size: 35px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
color: #000000;

//text-align: left;
text-decoration: none;
`;

export const Heading4 = styled.h4`
font-size: 24px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
color: #fff;

//text-align: left;
text-decoration: none;
`;

export const TextBold = styled.p`
font-size: 18px;
font-family: 'Mulish', sans-serif;
font-weight: 700; //bold
color: #000000;

//text-align: left;
text-decoration: none;
`;

export const Text = styled.h2`
font-size: 18px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
color: #fff;

//text-align: left;
text-decoration: none;
text-align: justify;
`;

// *******************************************************************
// Textos Black
export const Heading4B = styled.h4`
font-size: 24px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
color: #000;

//text-align: left;
text-decoration: none;
`;





// export const Title1 = styled.h1`
// font-size:
// font-family:
// font-weight:
// text-align: justify;
// text-wrap: wrap; text-wrap: balance;
// text-decoration: none;
// `



{/* <style>
    body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
    .w3-bar-block .w3-bar-item {padding:20px}
</style>

<body>

<!-- Sidebar (hidden by default) -->
<nav class="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style="display:none;z-index:2;width:40%;min-width:300px" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()"
  class="w3-bar-item w3-button">Close Menu</a>
  <a href="#food" onclick="w3_close()" class="w3-bar-item w3-button">Food</a>
  <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">About</a>
</nav>

<!-- Top menu -->
<div class="w3-top">
  <div class="w3-white w3-xlarge" style="max-width:1200px;margin:auto">
    <div class="w3-button w3-padding-16 w3-left" onclick="w3_open()">☰</div>
    <div class="w3-right w3-padding-16">Mail</div>
    <div class="w3-center w3-padding-16">My Food</div>
  </div>
</div>
  
<!-- !PAGE CONTENT! -->
<div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:100px"></div> */}