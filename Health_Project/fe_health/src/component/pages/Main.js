import React from "react"
import styled from "styled-components"
import main_fisrt from "../../video/main_fisrt.mp4"
import Detail from "../Details/Detail.js"

const Container = styled.div`
  width: 1740px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`

const Video = styled.video`
  position: absolute;
  bottom: 0px;
  top: 0px;
  left: 0px;
  width: 1740px;
  height: 100%;
  background-size: 0% 0%;
  background-image: "./video/main_fisrt.mp4";
  background-position: center center;
  /*background-size: contain;*/
  object-fit: cover; /*cover video background */
  opacity: 0.2;
  @media screen and (min-width: 1920px) {
    width: 100%;
  }
`

const MainTitle = styled.div`
  position: absolute;
  top: 30%;
  font-size: 80px;
  text-align: center;
  color: ${(props) => props.theme.mainPage.mainTitle};
  font-weight: 700;
`

const Message = styled.div`
  position: absolute;
  top: 45%;
  font-size: 60px;
  text-align: center;
  color: #fff;
  font-weight: 500;
`

const MainBtn = styled.div`
  width: 150px;
  height: 40px;
  position: absolute;
  top: 60%;
  background-color: #333;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border-radius: 5px;
  &:hover {
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }
`
function MainSection() {
  const [ClickModalIsOpen, setClickModalOpen] = React.useState(false)

  return (
    <div className="section">
      <Container>
        <MainTitle>Ready to begin you health?</MainTitle>
        <Message>click on the button now</Message>
        <Video id="myVideo" loop muted data-autoplay>
          <source src={main_fisrt} type="video/mp4" />
        </Video>
        <MainBtn onClick={() => setClickModalOpen(true)}>상세 보기</MainBtn>
        <Detail isModal={ClickModalIsOpen} setModal={setClickModalOpen} />
      </Container>
    </div>
  )
}

export default MainSection
