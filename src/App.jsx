import *  as S from './style.jsx'

import ONDASH from './assets/ONDASH.svg'

function App() {

  return (
    <S.Body>

      {/* HEADER */}
      <S.Header>
        <S.Logo src={ONDASH} />
        
        {/* <S.HeaderDiv> */}
        <S.HeaderDiv>
          <nav> {/* S.Nav */}
            <S.Ul>
              <S.Link href="#section1"> <S.Li>Início</S.Li> </S.Link>
              <S.Link href="#section2"> <S.Li>Missão</S.Li> </S.Link>
              <S.Link href="#section3"> <S.Li>Equipe</S.Li> </S.Link>
              <S.Link href="#section4"> <S.Li>Valores</S.Li> </S.Link>
              <S.Link href="#section5"> <S.Li>Projetos</S.Li> </S.Link>
            </S.Ul>
          </nav>
        </S.HeaderDiv>
      </S.Header>

      {/* Section 1 */}
      <S.Section1 id="section1">
        <S.DivS1>
          <S.Heading1>Transformando Ideias em Realidade</S.Heading1>
          {/* <S.Bg1/> */}
          {/* <br/><br/> */}
          <S.Br/>
          <S.Heading4>
            Onde a inovação encontra a agilidade, a simplicidade se une à eficiência e a colaboração é a chave do sucesso. 
          </S.Heading4>
        </S.DivS1>
      </S.Section1>
      

    </S.Body>
    
  )
}

export default App
