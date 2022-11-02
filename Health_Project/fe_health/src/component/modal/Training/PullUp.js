// import React from "react"
import PullUpModal from "react-modal"
import styled from "styled-components"

import { Close } from "../../../image/index.js"

import { PullUpFalse } from "../../pages/Strength/Training.js"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"

SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const ModalHead = styled.div`
  width: 1610px;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: #a0a0ff;
  border-radius: 30px 30px 0px 0px;
`

const ModalBody = styled.div`
  width: 1610px;
  height: 750px;
  position: absolute;
  top: 100px;
  background-color: #3dff92;
  border-radius: 0px 0px 30px 30px;
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

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 50px;
  color: #333;
`

const Iframe = styled.iframe`
  margin-top: 50px;
  margin-left: 100px;
  width: 400px;
  height: 315px;
`

const SwiperContainer = styled.div`
  width: 1400px;
  height: 300px;
  position: absolute;
  left: 75px;
  display: flex;
  justify-content: center;
  background-color: #ffc0cb;
  border-radius: 30px;
`

const SwiperTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #ff3232;
  position: absolute;
  top: 20px;
`

const SwiperText = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  position: absolute;
`

const SwiperText1 = styled(SwiperText)`
  top: 100px;
`

const SwiperText2 = styled(SwiperText)`
  top: 170px;
`

const SwiperText3 = styled(SwiperText)`
  top: 240px;
`
const PullUp = ({ isModal, setModal }) => {
  return (
    <PullUpModal
      isOpen={isModal}
      onRequestClose={() => PullUpFalse()}
      ariaHideApp={false}
      style={{
        overlay: {
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "100%",
          width: "90%",
        },

        content: {
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "-200px",
          right: "0px",
          margin: "auto",
          width: "1610px",
          height: "850px",
          borderRadius: "30px",
        },
      }}
    >
      <ModalHead>
        <Title>턱걸이 트레이닝 학습</Title>
        <Closebtn src={Close} onClick={() => PullUpFalse()} />
      </ModalHead>
      <ModalBody>
        <Iframe
          src="https://www.youtube.com/embed/nWhS28U6bCY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullScreen" // 전체 화면 설정
        />

        <Iframe
          src="https://www.youtube.com/embed/38hYWnsOgZ0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullScreen"
        />

        <Iframe
          src="https://www.youtube.com/embed/50MQXdDOiKQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullScreen"
        />

        <Swiper
          style={{
            width: "1550px",
            height: "300px",
            position: "absolute",
            bottom: "30px",
            left: "30px",
          }}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <SwiperContainer>
              <SwiperTitle>턱걸이 운동 중 저지르는 흔한 실수</SwiperTitle>
              <SwiperText1>깔짝깔짝 너무 적은 가동범위</SwiperText1>
              <SwiperText2>지나친 반동</SwiperText2>
              <SwiperText3>불균형이 심한 자세</SwiperText3>
            </SwiperContainer>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperContainer>
              <SwiperTitle>턱걸이 운동 팁</SwiperTitle>
              <SwiperText1>
                풀업바를 잡은 상태에서 점프를 하여 상체를 풀업바 가까이 올린
                상태에서 최대한 오랫동안 유지합니다.
              </SwiperText1>
              <SwiperText2>
                점프해서 풀업바까지 올라간 상태에서 팡을 천천히 4초 동안 펴면서
                등이 완전히 확장될 때까지 몸을 내립니다.
              </SwiperText2>
              <SwiperText3>
                1단계와 2단계 훈련이 익숙해지면 풀업 갯수를 하나씩 계속해서
                늘려갑니다.
              </SwiperText3>
            </SwiperContainer>
          </SwiperSlide>
        </Swiper>
      </ModalBody>
    </PullUpModal>
  )
}

export default PullUp
