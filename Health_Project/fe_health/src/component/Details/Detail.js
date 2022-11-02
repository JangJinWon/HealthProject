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
              <Title>헬스장 위치 검색</Title>
            </BasicHead>
            <BasicBody>
              <Map />
            </BasicBody>
            <BasicFooter>
              <Content>
                사용자가 검색한 장소를
                <br />
                마커표시 및 리스트형식으로 보여줍니다.
              </Content>
            </BasicFooter>
          </BasicContainer>

          <BasicContainer>
            <BasicHead>
              <ImgBox src={ChatBotIcon} />
              <Title>쳇봇 상담 서비스</Title>
            </BasicHead>
            <BasicBody>
              <Chatbot />
            </BasicBody>
            <BasicFooter>
              <Content>
                관리자를 대신하여 쳇봇이
                <br />
                사용자의 문의사항을 상담 해줍니다.
                <br />
              </Content>
            </BasicFooter>
          </BasicContainer>

          <BasicContainer>
            <BasicHead>
              <ImgBox src={ChallengeIcon} />
              <Title>운동 첼린지</Title>
            </BasicHead>
            <BasicBody>
              <Challenge />
            </BasicBody>
            <BasicFooter>
              <Content>
                사용자가 직접 첼린지를
                <br /> 추가 및 삭제 할 수 있으며 첼린지 성공률을 배터리
                <br /> 게이지로 보여줍니다.
              </Content>
            </BasicFooter>
          </BasicContainer>

          <BasicContainer>
            <BasicHead>
              <ImgBox src={BoardIcon} />
              <Title>리뷰 게시판</Title>
            </BasicHead>
            <BasicBody>
              <Review />
            </BasicBody>
            <BasicFooter>
              <Content>
                사용자가 직접 헬스 후기를 작성하여 사진과 함께 등록할 수 있으며
                사용자간에
                <br /> 댓글 작성이 가능합니다.
              </Content>
            </BasicFooter>
          </BasicContainer>
        </ModalBody>
      </ModalContainer>
    </DetailsModal>
  )
}

export default Click
