import *  as S from './styles/style.jsx'

import ONDASH from './assets/ONDASH.svg'
import Losange from './assets/Losange.svg?react'

// Icones
import { Blend } from 'lucide-react'
import { Handshake } from 'lucide-react'
import { Shapes } from 'lucide-react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles/styleSwiper.css';
// import required modules
import { EffectCards } from 'swiper/modules';


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

        <S.Br/>
        <S.DivButton>
          <S.Link href='#section2'><S.Button1>Saiba Mais</S.Button1></S.Link>
        </S.DivButton>
      </S.Section1>

      {/* Section 2 - Missao */}
      <S.Section2 id="section2">
        <S.DivS2>
          <S.Heading2>Missão</S.Heading2>
          {/* <S.Bg1/> */}
          {/* <br/><br/> */}
          <br />
          {/* <S.Br/> */}
          <S.Text>
          Criar aplicações ágeis para o gerenciamento rápido e fácil.
          </S.Text>

          <S.Br/>
          <S.Heading2>Visão</S.Heading2>
          <br />
          <S.Text>
          Ser uma empresa que revoluciona o mundo por meio da tecnologia.
          </S.Text>
        </S.DivS2>
      </S.Section2>

      {/* Section 3 - Equipe*/}
      <S.Section3 id="section3">
        <S.DivS3>
          <S.Heading2>Missão</S.Heading2>
          {/* <S.Bg1/> */}
          {/* <br/><br/> */}
          <br />
          {/* <S.Br/> */}
          <S.Text>
          Criar aplicações ágeis para o gerenciamento rápido e fácil.
          </S.Text>
        </S.DivS3>
      </S.Section3>
      
      {/* Section 4 - Valores*/}
      <S.Section4 id="section4">
        <S.DivS4>

          <S.Heading2>Valores</S.Heading2>
          <S.Br/>
         
          <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <S.DivCard>
                {/* Icon */}<Blend color="#000" size={28} strokeWidth={1.8}/> 
                <S.Heading4B>Transparência</S.Heading4B>
              </S.DivCard>

              <S.TextCard>Fornecimento claro e acessível de informações aos clientes e parceiros.</S.TextCard>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <S.DivCard>
                {/* Icon */}<Handshake color="#000" size={28} strokeWidth={1.8}/> 
                <S.Heading4B>Colaboração</S.Heading4B>
              </S.DivCard>

              <S.TextCard>Parceria próxima com clientes e equipe para promover inovação com diversidade de ideias.</S.TextCard>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <S.DivCard>
                {/* Icon */}<Shapes color="#000" size={28} strokeWidth={1.8}/> 
                <S.Heading4B>Simplicidade</S.Heading4B>
              </S.DivCard>

              <S.TextCard>Descomplicar processos com soluções intuitivas que facilitem a vida dos usuários.</S.TextCard>
            </SwiperSlide>
          </Swiper>

        </S.DivS4>
      </S.Section4>

      {/* Section 5 - Projeto*/}
      <S.Section5 id="section5">
        <S.DivS5>
          <S.Heading2>Projeto Atual</S.Heading2>
          {/* <S.Bg1/> */}
          {/* <br/><br/> */}
          <S.Br/>
          <S.Heading4>ACAI (Aplicação de controle de almoxarifado interno)</S.Heading4>
          <br/>
          <S.Text>
            Aplicação web para gerenciamento de estoque de empresas separado por planos à escolha da necessidade do cliente. 
          </S.Text>
          <br/>

          <S.DivLi>
            <Losange/>
            <S.Text>Relatórios eficientes sobre produtos com estoque em excesso ou carência.</S.Text>
          </S.DivLi>
          <br/>

          <S.DivLi>
            <Losange/>
            <S.Text>Interface intuiva e prática.</S.Text>
          </S.DivLi>
          <S.Br/>

          <S.Link href='#section5'><S.Button2>Conheça o projeto</S.Button2></S.Link>
        </S.DivS5>
      </S.Section5>      

    </S.Body>
    
  )
}

export default App
