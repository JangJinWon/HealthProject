// import React from "react"
import PlankModal from "react-modal"
import styled from "styled-components"

import { Close } from "../../../image/index.js"

import { PlankFalse } from "../../pages/Strength/Training.js"

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
    <PlankModal
      isOpen={isModal}
      onRequestClose={() => PlankFalse()}
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
        <Title>플랭크 트레이닝 학습</Title>
        <Closebtn src={Close} onClick={() => PlankFalse()} />
      </ModalHead>
      <ModalBody>
        <Iframe
          src="https://www.youtube.com/embed/Zq8nRY9P_cM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullScreen" // 전체 화면 설정
        />

        <Iframe
          src="https://www.youtube.com/embed/oapL4ktZ3y0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullScreen"
        />

        <Iframe
          src="https://www.youtube.com/embed/J4VCyf3gTeo"
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
              <SwiperTitle>플랭크 운동 중 저지르는 흔한 실수</SwiperTitle>
              <SwiperText1>
                플랭크를 할 때 내 몸은 어깨부터 발까지 모두 일직선을 이루지 않는
                경우 허리 아랫부분에 압박이 가해져 허리 통증이 생길 수가 있다.
              </SwiperText1>
              <SwiperText2>
                일반적으로 1-2분 이상으로 플랭크를 하는 것은 추천하지 않는다고
                전문가들이 누누히 말하고 있다.
              </SwiperText2>
              <SwiperText3>
                플랭크 할때 너무 앞으로 기울어져 있거나 반대로 뒤에 체중을
                실리면 어깨나 목의 통증 유발할 수 있다.
              </SwiperText3>
            </SwiperContainer>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperContainer>
              <SwiperTitle>플랭크 운동 팁</SwiperTitle>
              <SwiperText1>
                몸통을 움직여 줌으로써 코어를 활성화시켜 플랭크에 도움이 될 수
                있습니다.
              </SwiperText1>
              <SwiperText2>
                단계를 낮추어 안정적으로 도전하다 보면 어느덧 그에 맞는 코어가
                될 것이고 이는 플랭크에 도움을 줄 것입니다.
              </SwiperText2>
              <SwiperText3>
                기다란 바를 척추 위에 놓았을 때 뒤통수-등허리-골반을 잇는 선이
                바에 모두 닿는지 체크 합니다.
              </SwiperText3>
            </SwiperContainer>
          </SwiperSlide>
        </Swiper>
      </ModalBody>
    </PlankModal>
  )
}

export default Dips
