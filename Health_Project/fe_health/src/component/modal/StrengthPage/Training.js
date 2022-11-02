import React from "react"
import styled from "styled-components"
import {
  Close,
  PushUp,
  PullUp,
  Plank,
  Dips,
  Crunch,
} from "../../../image/index.js"

import TrainingModal from "react-modal"

import {
  PushUpTrue,
  PullUpTrue,
  DipsTrue,
  CrunchTrue,
  PlankTrue,
} from "../../pages/Strength/Training.js"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
  width: 1610px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1610px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1610px;
  height: 750px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  background-color: #47ff9c;
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
  font-size: 35px;
  font-weight: bold;
  position: absolute;
  top: 40px;
  color: #333;
`

const TrainingContainer = styled.div`
  width: 600px;
  height: 550px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  background-color: #91d0d2;
`

const TrainingTitle = styled.div`
  color: #fff;
  font-size: 40px;
  font-family: fantasy;
  font-weight: bold;
  position: absolute;
  top: 30px;
`

const TrainingImage = styled.img`
  width: 500px;
  height: 350px;
  position: absolute;
  top: 100px;
`

const TrainingBtn = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: #333;
  position: absolute;
  bottom: 30px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }
`

const Training = ({ isModal, setModal }) => {
  return (
    <TrainingModal
      isOpen={isModal}
      onRequestClose={() => setModal}
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
      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>
        <ModalBody>
          <Title>올바른 홈 트레이닝 습관 형성을 위한 가이드라인</Title>
          <Swiper
            style={{
              width: "1400px",
              height: "550px",
              position: "absolute",
              top: "130px",
              paddingLeft: "100px",
            }}
            spaceBetween={5}
            slidesPerView={2}
            navigation
            loop={true}
          >
            <SwiperSlide>
              <TrainingContainer>
                <TrainingTitle>팔굽혀펴기</TrainingTitle>
                <TrainingImage src={PushUp} />
                <TrainingBtn
                  onClick={() => {
                    PushUpTrue()
                  }}
                >
                  학습하기
                </TrainingBtn>
              </TrainingContainer>
            </SwiperSlide>

            <SwiperSlide>
              <TrainingContainer>
                <TrainingTitle>턱걸이</TrainingTitle>
                <TrainingImage src={PullUp} />
                <TrainingBtn
                  onClick={() => {
                    PullUpTrue()
                  }}
                >
                  학습하기
                </TrainingBtn>
              </TrainingContainer>
            </SwiperSlide>

            <SwiperSlide>
              <TrainingContainer>
                <TrainingTitle>딥스</TrainingTitle>
                <TrainingImage src={Dips} />
                <TrainingBtn
                  onClick={() => {
                    DipsTrue()
                  }}
                >
                  학습하기
                </TrainingBtn>
              </TrainingContainer>
            </SwiperSlide>

            <SwiperSlide>
              <TrainingContainer>
                <TrainingTitle>크런치</TrainingTitle>
                <TrainingImage src={Crunch} />
                <TrainingBtn
                  onClick={() => {
                    CrunchTrue()
                  }}
                >
                  학습하기
                </TrainingBtn>
              </TrainingContainer>
            </SwiperSlide>

            <SwiperSlide>
              <TrainingContainer>
                <TrainingTitle>플랭크</TrainingTitle>
                <TrainingImage src={Plank} />
                <TrainingBtn
                  onClick={() => {
                    PlankTrue()
                  }}
                >
                  학습하기
                </TrainingBtn>
              </TrainingContainer>
            </SwiperSlide>
          </Swiper>
        </ModalBody>
      </ModalContainer>
    </TrainingModal>
  )
}

export default Training
