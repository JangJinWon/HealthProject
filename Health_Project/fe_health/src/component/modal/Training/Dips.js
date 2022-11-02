// import React from "react"
import DipsModal from "react-modal"
import styled from "styled-components"

import { Close } from "../../../image/index.js"

import { DipsFalse } from "../../pages/Strength/Training.js"

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
const Dips = ({ isModal, setModal }) => {
  return (
    <DipsModal
      isOpen={isModal}
      onRequestClose={() => DipsFalse()}
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
        <Title>딥스 트레이닝 학습</Title>
        <Closebtn src={Close} onClick={() => DipsFalse()} />
      </ModalHead>
      <ModalBody>
        <Iframe
          src="https://www.youtube.com/embed/pQSfXvaQGas"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullScreen" // 전체 화면 설정
        />

        <Iframe
          src="https://www.youtube.com/embed/pqn9koa_wrw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullScreen"
        />

        <Iframe
          src="https://www.youtube.com/embed/4K5eDSmR-q8"
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
              <SwiperTitle>딥스 운동 중 저지르는 흔한 실수</SwiperTitle>
              <SwiperText1>
                딥스 운동시 어깨가 팔꿈치보다 내려가지 않도록 해야 합니다.
              </SwiperText1>
              <SwiperText2>
                팔은 거의 굽히지 않은채 승모근만 내려갔다 올라갔다 하는 자세
              </SwiperText2>
              <SwiperText3>
                자신의 어깨 폭에 맞지 않는 딥스바로 운동하지 말 것
              </SwiperText3>
            </SwiperContainer>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperContainer>
              <SwiperTitle>딥스 운동 팁</SwiperTitle>
              <SwiperText1>
                몸에 상체는 15도 정도 앞 쪽으로 기울어지게 동작을 진행한다.
              </SwiperText1>
              <SwiperText2>
                목은 아래쪽으로 고정하고 동작 중 움직이지 않는다.
              </SwiperText2>
              <SwiperText3>
                내려갈 때와 올라갈 때 속도가 비슷하도록 유지한다.
              </SwiperText3>
            </SwiperContainer>
          </SwiperSlide>
        </Swiper>
      </ModalBody>
    </DipsModal>
  )
}

export default Dips
