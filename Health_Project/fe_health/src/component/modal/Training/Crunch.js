// import React from "react"
import CrunchModal from "react-modal"
import styled from "styled-components"

import { Close } from "../../../image/index.js"

import { CrunchFalse } from "../../pages/Strength/Training.js"

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
    <CrunchModal
      isOpen={isModal}
      onRequestClose={() => CrunchFalse()}
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
        <Title>크런치 트레이닝 학습</Title>
        <Closebtn src={Close} onClick={() => CrunchFalse()} />
      </ModalHead>
      <ModalBody>
        <Iframe
          src="https://www.youtube.com/embed/KqnFav4Edvw"
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
          src="https://www.youtube.com/embed/D_Hti80Dt6A"
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
              <SwiperTitle>크런치 운동 중 저지르는 흔한 실수</SwiperTitle>
              <SwiperText1>
                크런치만 하기보다는 하복부를 위해 모션이 큰 복부 운동을 해주는
                게 골고루 발달된 복근을 만들 수 있습니다.
              </SwiperText1>
              <SwiperText2>
                허리를 아치형으로 바닥에 약간 떨어진채로 운동을 한다면
                허리부상을 야기할 수 있습니다.
              </SwiperText2>
              <SwiperText3>
                손으러 머리를 땡기면서 크런치를 하면 목부상을 야기할 수 있다.
              </SwiperText3>
            </SwiperContainer>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperContainer>
              <SwiperTitle>크런치 운동 팁</SwiperTitle>
              <SwiperText1>
                팔은 머리를 지지해주면서 양팔 또한 넓게 벌려줍니다.
              </SwiperText1>
              <SwiperText2>
                다리를 딱 붙게 모으지말고 어깨 넓이로 벌려주고 최고 정점에서
                호흡을 강하게 뱉어 줍니다.
              </SwiperText2>
              <SwiperText3>
                허리가 뜨지 않도록 골반을 뒤로 말아 허리로 바닥을 눌러 줍니다.
              </SwiperText3>
            </SwiperContainer>
          </SwiperSlide>
        </Swiper>
      </ModalBody>
    </CrunchModal>
  )
}

export default Dips
