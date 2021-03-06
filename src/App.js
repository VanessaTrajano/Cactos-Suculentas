import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle} from 'styled-components'
import img1 from './Img/Img1.jpg'
import img2 from './Img/Img2.jpg'
import img3 from './Img/Img3.jpg'
import img4 from './Img/Img4.jpg'
import img5 from './Img/Img5.jpg'
import img6 from './Img/Img6.jpg'
import logo from './Img/logo.png'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #1A1F16;
    font-family: 'Roboto Mono', monospace;
  }
  main{
    padding-top: 8vw;
    background-color: #C7F9CC;
    height: 120vw;
  }
  a{
    text-decoration: none;
  }
`

const Headers = styled.header`
  width: 100%;
  height: 8vw;
  background-color: #80ED99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4vw;
  position: fixed;
  border-bottom: 0.3vw dashed #345830;
`

const Tittle = styled.div`
  display: flex;
  height: 4.5vw;
  align-items: center;
  text-decoration: overline underline;
  font-size: 1.3vw;
`

const Logo = styled.img`
  height: 4.5vw;
  margin-right: 1vw;
`

const List = styled.ul`
  width: 50vw;
  height: 8vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style:none;
  font-size: 1.3vw;
`

const Item = styled.li`
  width: 7vw;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover{
    font-weight: 900;
    border: 1px solid #1A1F16;
  }
`

const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 25vw;
  text-align: justify;
  padding: 1vw 2vw;
  font-size: 1.3vw;
`

const Care = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  width: 100%;
  height: 22vw;
  text-align: justify;
  padding-left: 4vw;
  font-size: 1.3vw;
`

const Ul = styled.ul`
  list-style: circle;
`

const P = styled.p`
  margin-left: 1.5vw;
  margin-bottom: 1vw;
`

const Images = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 98%;
  height:63vw;
  border: 0.2vw double #4A7856;
  margin: 1vw;
  text-decoration: overline;
  font-size: 1.3vw;
`

const Box = styled.div`
  width: 100%;
  display: flex; 
  justify-content: space-evenly;
  height: 25vw;
`

const Img = styled.img`
  height: 23vw;
  transition: 0.8s;

  &:hover{
    height: 25vw;
  }
`

const Image = styled.img`
  height: 23vw;
  transition: 0.8s;
  
  &:hover{
    height: 25vw
  }
`

const Footers = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 9vw;
  width: 100%;
  font-size: 1.3vw;
  background-color: #80ED99;
  border-top: 0.2vw dashed #345830;
  padding: 0vw 3vw;
  text-align: center;
`

const Madeby = styled.div`
  width: 100%;
  display: flex; 
  justify-content: space-evenly;
  font-size: 1.1vw;
`

export default class App extends React.Component{
  render(){
    return(
      <div>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

const Header = () => {
  return(
    <Headers>
      <Tittle>
        <Logo src={logo}/>
        <h1>Cactos e Suculentas</h1>
      </Tittle>

      <nav>
        <List>
          <Item><a href='#about'>Sobre</a></Item>
          <Item><a href='#care'>Cuidados</a></Item>
          <Item><a href='#images'>Imagens</a></Item>
        </List>
      </nav>
    </Headers>
  )
}

const Main = () => {
  return(
    <main id='about'>
      <Mainsection1/>
      <Mainsection2/>
      <Mainsection3/>
    </main>
  )
}

const Mainsection1 = () => {
  return(
    <About>
    <h2>Sobre</h2>
    <p>As suculentas s??o um grupo de plantas e os cactos s??o de uma fam??lia do grupo das suculentas (Cactaceae). Por essa raz??o, existe o conceito de que todo cacto ?? uma suculenta, mas nem toda suculenta ?? um cacto. </p>
    <p>As suculentas s??o plantas que em geral conseguem sobreviver ?? falta de ??gua e luz, e s??o capazes de armazenar ??gua nas ra??zes, caules, troncos ou folha, caracter??stica esta que as protege das altas temperaturas e do clima seco das regi??es da ??frica e da Am??rica, onde surgiram. A principal diferen??a entre suculentas e cactos ?? que os cactos possuem ar??olas ??? pequenos c??rculos salientes de onde nascem rebentos, espinhos e flores.</p>
    <p id='care'>Os cactos s??o uma das esp??cies preferidas de quem gosta de cultivar vers??es miniatura para decorar ambientes. N??o possuem folhas, e somente algumas d??o flores quando adultos, geralmente uma vez por ano, na mesma ??poca. A planta possui uma estrutura que permanece fechada sob sol forte, e sua pele ?? bem espessa e revestida, tudo para perder o m??nimo de l??quido poss??vel.</p>
  </About>
  )
}

const Mainsection2 = () => {
  return(
    <Care>
      <h2>Dicas simples para cuidar de seu cacto ou suculenta:</h2>
      <Ul>
        <li>Elas precisam de muita luz</li>
          <P>Algumas suculentas preferem luz direta e outras preferem luz indireta, mas uma coisa ?? certa... Toda suculenta precisa receber muita luz para seu crescimento.</P>
        <li>Tome cuidado para n??o afogar sua planta!</li>
          <P>Esse tipo de planta se adapta melhor com pouca ??gua, n??o coloque demais no vaso de sua planta ou isso pode ser prejudicial para o crescimento dela.</P>
        <li id='images'>Pedriscos brancos s??o bonitos, mas n??o fazem bem</li>
          <P>Estas pedras n??o fazem muito bem para elas. S??o m??rmore picado que, quando molhados, liberam um p?? que vai mantando a planta aos poucos.</P>
      </Ul>
    </Care>
    )
}

const Mainsection3 = () => {
  return(
    <Images>
      <h2>Imagens</h2>
      <Box>
        <Img src={img1}/>
        <Img src={img2}/>
        <Img src={img3}/>
        <Img src={img4}/>
      </Box>
      <Box>
        <Image src={img5}/>
        <Image src={img6}/>
      </Box>
    </Images>
    )
}

const Footer = () => {
  return(
    <Footers>
      <p>Lembre-se, se n??o tiver dado certo de primeira, n??o desista! Cuidar de plantas pode n??o ser um trabalho f??cil, mas com o tempo voc?? pega o jeito. Boa sorte!</p>
      <Madeby>
        <p>P??gina feita por: Vanessa Palmeira Kelmer Trajano</p>
        <p>Vai na Web</p>
      </Madeby>
    </Footers>
  )
}