// import React from "react"
import PushUpModal from "react-modal"
import styled from "styled-components"

import { Close } from "../../../image/index.js"

import { PushUpFalse } from "../../pages/Strength/Training.js"

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
const PushUp = ({ isModal }) => {
  return (
    <PushUpModal
      isOpen={isModal}
      onRequestClose={() => PushUpFalse()}
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
        <Title>팔굽혀펴기 트레이닝 학습</Title>
        <Closebtn src={Close} onClick={() => PushUpFalse()} />
      </ModalHead>
      <ModalBody>
        <Iframe
          src="https://www.youtube.com/embed/aoH7qNedO8k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullScreen" // 전체 화면 설정
        />

        <Iframe
          src="https://www.youtube.com/embed/bSMFqw6hUXA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullScreen"
        />

        <Iframe
          src="https://www.youtube.com/embed/fh4y5dGZX9c"
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
              <SwiperTitle>팔굽혀펴기 운동 중 저지르는 흔한 실수</SwiperTitle>
              <SwiperText1>엉덩이가 밑으로 내려앉거나 높이 들린다.</SwiperText1>
              <SwiperText2>
                손바닥을 어깨 옆이나 머리 밑에 위치 시킨다.
              </SwiperText2>
              <SwiperText3>밑으로 내려얼 때 턱만 내려온다.</SwiperText3>
            </SwiperContainer>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperContainer>
              <SwiperTitle>팔굽혀펴기 운동 팁</SwiperTitle>
              <SwiperText1>
                손바닥이 어깨 밑에 위치해야 하며 손가락은 앞 방향을 가리키고
                있어야 합니다.
              </SwiperText1>
              <SwiperText2>
                상체, 엉덩이, 다리가 휘어짐 없이 곧은 직선을 이루어야하며 시선은
                아래로 향하고 목은 어디에도 치우치지 않도록 합니다.
              </SwiperText2>
              <SwiperText3>
                마지막으로 팔을 굽힐 때에는 몸 전체가 아랴로 내려올 수 있도록
                하고 엉덩이만 들어올리지 않도록 주의합니다.
              </SwiperText3>
            </SwiperContainer>
          </SwiperSlide>
        </Swiper>
      </ModalBody>
    </PushUpModal>
  )
}

export default PushUp
