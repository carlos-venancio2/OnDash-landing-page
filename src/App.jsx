import *  as S from './styles/style.jsx'

import ONDASH from './assets/ONDASH.svg'

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
      </S.Section1>

      {/* Section 2 */}
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

      {/* Section 3 */}
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
      
      {/* Section 4 */}
      <S.Section4 id="section4">
        <S.DivS4>
         
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <S.Heading4B>Transparência</S.Heading4B>
          <S.TextCard>Fornecimento claro e acessível de informações aos clientes e parceiros.</S.TextCard>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>Slide 2</SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

        </S.DivS4>
      </S.Section4>      

    </S.Body>
    
  )
}

export default App
