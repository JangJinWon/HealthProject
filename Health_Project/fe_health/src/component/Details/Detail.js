import React from "react"
import styled from "styled-components"
import {
  Close,
  MapIcon,
  ChatBotIcon,
  ChallengeIcon,
  BoardIcon,
} from "../../image/index.js"
import DetailsModal from "react-modal"

import Map from "./pages/Map.js"
import Chatbot from "./pages/Chatbot.js"
import Challenge from "./navigation/Challenge.js"
import Review from "./pages/Review.js"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1650px;
  height: 890px;
  display: flex;
  justify-content: center;
`

const ModalHead = styled.div`
  width: 1650px;
  height: 80px;
`

const ModalBody = styled.div`
  width: 1500px;
  height: 790px;
  position: absolute;
  top: 80px;
  border-radius: 30px;
  background-color: #ffb2af;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px 30px;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 3%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const BasicContainer = styled.div`
  width: 350px;
  height: 700px;
  background-color: skyblue;
  border-radius: 30px;
  position: relative;
`

const ImgBox = styled.img`
  width: 50px;
  height: 50px;
`

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  color: #333;
  font-weight: bold;
  font-family: "Jua", sans-serif;
  margin-left: 10px;
`

const BasicHead = styled.div`
  width: 350px;
  height: 100px;
  background-color: gray;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: #46ffff;
`

const BasicBody = styled.div`
  width: 300px;
  height: 280px;
  border-radius: 30px;
  background-color: yellowgreen;
  margin-top: 10px;
  margin-left: 25px;
`

const BasicFooter = styled.div`
  width: 350px;
  height: 300px;
  position: absolute;
  bottom: 0px;
  background-color: gray;
  border-radius: 0px 0px 30px 30px;
  display: flex;
  align-items: center;
  background-color: #47ff9c;
`

const Content = styled.div`
  font-size: 30px;
  text-align: center;
  line-height: 2;
  color: #333;
  font-weight: bold;
  font-family: "Jua", sans-serif;
  margin-left: 10px;
`

const Click = ({ isModal, setModal }) => {
  return (
    <DetailsModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        content: {
          position: "relative",
          width: "1610px",
          height: "850px",
          left: "2%",
          right: "10%",
          borderRadius: "30px",
          backgroundColor: "#7DEBEB",
        },
      }}
    >
      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <BasicContainer>
            <BasicHead>
              <ImgBox src={MapIcon} />
              <Title>????????? ?????? ??????</Title>
            </BasicHead>
            <BasicBody>
              <Map />
            </BasicBody>
            <BasicFooter>
              <Content>
                ???????????? ????????? ?????????
                <br />
                ???????????? ??? ????????????????????? ???????????????.
              </Content>
            </BasicFooter>
          </BasicContainer>

          <BasicContainer>
            <BasicHead>
              <ImgBox src={ChatBotIcon} />
              <Title>?????? ?????? ?????????</Title>
            </BasicHead>
            <BasicBody>
              <Chatbot />
            </BasicBody>
            <BasicFooter>
              <Content>
                ???????????? ???????????? ?????????
                <br />
                ???????????? ??????????????? ?????? ????????????.
                <br />
              </Content>
            </BasicFooter>
          </BasicContainer>

          <BasicContainer>
            <BasicHead>
              <ImgBox src={ChallengeIcon} />
              <Title>?????? ?????????</Title>
            </BasicHead>
            <BasicBody>
              <Challenge />
            </BasicBody>
            <BasicFooter>
              <Content>
                ???????????? ?????? ????????????
                <br /> ?????? ??? ?????? ??? ??? ????????? ????????? ???????????? ?????????
                <br /> ???????????? ???????????????.
              </Content>
            </BasicFooter>
          </BasicContainer>

          <BasicContainer>
            <BasicHead>
              <ImgBox src={BoardIcon} />
              <Title>?????? ?????????</Title>
            </BasicHead>
            <BasicBody>
              <Review />
            </BasicBody>
            <BasicFooter>
              <Content>
                ???????????? ?????? ?????? ????????? ???????????? ????????? ?????? ????????? ??? ?????????
                ???????????????
                <br /> ?????? ????????? ???????????????.
              </Content>
            </BasicFooter>
          </BasicContainer>
        </ModalBody>
      </ModalContainer>
    </DetailsModal>
  )
}

export default Click
