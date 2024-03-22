import styled from "styled-components";

//https://www.dio.me/articles/construindo-um-header-fixo-no-topo-com-html-e-css
export const Header = styled.header`
    
    //margin: 0;
    /* display: flex; */
    //flex: 1;
    //flex-direction: column;
    
    //height: 8vh;
    //width: 100vw;

    //justify-content: center;
    // display: flex;
    //flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    //align-content: center;


    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #020414;

    display: flex;
    justify-content: space-between;
    //padding: 1rem;

    /* superior | direita | inferior | esquerda */
    //padding: 1rem 4rem 1rem 4rem;

    padding-top: 1rem;
    padding-bottom: 1rem;
`; 



export const Body = styled.body`
    /* display: flex;
    flex-direction: column; */
    background-color: #FFFFFF;
    margin: 0;
`; 

export const HeaderDiv = styled.div`
    width: 70%;
    //background-color: #f56;
    //align-items: center;
    //align-content: center;
    align-self: center;

    display: flex;
    //justify-content: center;
    //padding: 1rem;

    /* superior | direita | inferior | esquerda */
    //padding: 1rem 4rem 1rem 4rem;
`

export const Nav = styled.nav`
  display: flex;
  //justify-content: space-between;
  padding-right: 4rem;

  margin-left: 1rem;

    //align-items: center;
    //align-content: center;
    //align-self: center;

`
export const Ul = styled.ul`
  display: flex;
  //justify-content: space-between;
  padding-right: 4rem;

  margin-left: 1rem;
  flex-wrap: wrap;
`
export const Li = styled.li`
  margin-left: 1rem;
  list-style-type: none;

  padding-right: 1rem;
`

export const Link = styled.a`
  font-size: 24px;
  font-family: 'Mulish', sans-serif;
  font-weight: 400; 
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #91B9F8;
    //color: #7499D1;
    //opacity: 0.7
  }


  text-align: left;
`;

export const Logo = styled.img`
  /* Background pattern from Toptal Subtle Patterns */
  
  /* height: 400px;
  width: 100%; */
  left:0;

  padding-right: 4rem;
  //padding-left: 4rem;


  //text-align: left;
`;






// Textos 
export const Heading1 = styled.h1`
font-size: 60px;
font-family: 'Mulish', sans-serif;
font-weight: 700; //bold
color: #000000;

//text-align: left;
//text-wrap: wrap; // or text-wrap: balance;
text-decoration: none;
`;

export const Heading2 = styled.h2`
font-size: 48px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
color: #000000;

//text-align: left;
text-decoration: none;
`;

export const Heading3 = styled.h3`
font-size: 42px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
color: #000000;

//text-align: left;
text-decoration: none;
`;

export const Heading4 = styled.h4`
font-size: 35px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
color: #000000;

//text-align: left;
text-decoration: none;
`;

export const TextBold = styled.p`
font-size: 24px;
font-family: 'Mulish', sans-serif;
font-weight: 700; //bold
color: #000000;

//text-align: left;
text-decoration: none;
`;

export const Text = styled.h2`
font-size: 24px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
color: #fff;

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