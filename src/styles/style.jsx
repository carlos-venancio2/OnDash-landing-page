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
  z-index: 5;

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
  background-image: url("src/assets/annie-spratt-dWYU3i-mqEo-unsplash 1.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-position: right bottom;

  align-content: center;
`;
export const DivS1 = styled.div`
  display: flex;
  align-items: left;
  margin-left: 7vw;

  width: 40%;

  flex-direction: column;
`;
export const Button1 = styled.button`
  display:flex;
  background-color: #91B9F8;
  height: 3rem;
  width: 10rem;

  padding: 1rem;
  border-radius: 15px;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-family: 'Mulish', sans-serif;
  font-weight: 700; //bold
  color: #000000;
`;
export const DivButton = styled.div`
  display: flex;
  justify-content: right;

  margin-right: 25vw;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// SECTI0N2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Section2 = styled.section`
  /* background-image: 
  linear-gradient(to bottom, transparent 80%, #fff 100%), url(src/assets/missao.png),
  linear-gradient(to left, rgb(0,0,0, 0), rgb(0,0,0, 1)); */

  background-image: url("src/assets/missao.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: auto;
  background-position: left top;

  align-content: center;
`;
export const DivS2 = styled.div`
  display: flex;
  align-items: left;
  margin-left: 7vw;
  width: 20%;

  flex-direction: column;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// SECTI0N3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Section3 = styled.section`
  background: rgb(2,4,20);
  background: -moz-linear-gradient(180deg, rgba(2,4,20,1) 0%, rgba(2,4,20,1) 25%, rgba(21,29,53,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(2,4,20,1) 0%, rgba(2,4,20,1) 25%, rgba(21,29,53,1) 100%);
  background: linear-gradient(180deg, rgba(2,4,20,1) 0%, rgba(2,4,20,1) 25%, rgba(21,29,53,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020414",endColorstr="#151d35",GradientType=1);

  height: 100vh;
  width: auto;

  align-content: center;
`;
export const DivS3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7vw;
  padding-top: 5rem;

  height: 100vh;
  width: 86vw;

  //width: 20%;

  flex-direction: column;
`;
export const DivTeam = styled.div`
  display: flex;
  align-items: center;

  //max-width: 80vw;
  gap: 1.5rem;
`
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// SECTI0N4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Section4 = styled.section`
  background-image: url("src/assets/heidi-fin-fr0FRbTxGoQ-unsplash 1.svg");
  background-size: cover;
  //background-repeat: no-repeat;
  height: 100vh;
  //width: auto;

  background-position: top;
  align-content:center;
`;
export const DivS4 = styled.div`
  display: flex;
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
export const DivCard = styled.div`
  display: flex;
  align-items: center;

  gap: 0.8rem;
  padding-bottom: 1rem;
`
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// SECTI0N5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Section5 = styled.section`
  background-image: url("src/assets/centre-for-ageing-better-ZlOlRnWk8zU-unsplash.svg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 90vh;
  //width: auto;
  background-position:  left;

  align-content:center;
`;
export const DivS5 = styled.div`
  display: flex;
  align-items: left;
  
  margin-left: 7vw;
  width: 30%;

  flex-direction: column;
`;
export const DivLi = styled.div`
  display: flex;
  gap: 0.5rem;
  row-gap: 1rem;

  align-items: center;
`;
export const Icon = styled.img`
  width: 18px;
  height: 18px;
`
export const Button2 = styled.button`
  display:flex;
  background-color: #91B9F8;
  height: 3rem;
  width: 14rem;

  padding: 1rem;
  border-radius: 15px;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-family: 'Mulish', sans-serif;
  font-weight: 700; //bold
  color: #000000;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export const Br = styled.div`
  padding-bottom: 4rem;
`;
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
color: #fff;

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
/* padding-left:2rem; */
`;

export const Heading2B = styled.h2`
font-size: 42px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
//color: #000000;
color: #000;
//text-align: left;
text-decoration: none;
`;

export const TextBoldB = styled.p`
font-size: 18px;
font-family: 'Mulish', sans-serif;
font-weight: 700; //bold
color: #000;

//text-align: left;
text-decoration: none;
`;

export const TextB = styled.h2`
font-size: 18px;
font-family: 'Mulish', sans-serif;
font-weight: 400; 
color: #000;

//text-align: left;
text-decoration: none;
text-align: justify;
`;
