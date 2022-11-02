import React, { useEffect, useState, useId } from "react"
import styled from "styled-components"
import { Close, PushUp, SitUp, Squat } from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import ChallengeModal from "react-modal"

import { PushUpTrue, SitUpTrue, SquatTrue } from "../../../navigation.jsx"

import { db } from "../../../../service/firebase.js"
import { collection, getDocs } from "firebase/firestore"

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
  right: 0px;
  width: 1350px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1350px;
  height: 100px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 690px;
  position: absolute;
  top: 100px;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1350px;
  height: 100px;
  bottom: 0px;
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

const ChallengeSlide = styled.div`
  width: 550px;
  height: 650px;
  position: absolute;
  left: 50px;
  top: 20px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
`

const ChallengeTitle = styled.div`
  color: #fff;
  font-size: 40px;
  font-family: fantasy;
  font-weight: bold;
  position: absolute;
  top: 30px;
`

const ChallengeImage = styled.img`
  width: 500px;
  height: 400px;
  position: absolute;
  top: 120px;
`

const Btn = styled.div`
  width: 150px;
  height: 40px;
  position: absolute;
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

const ChallengeBtn = styled(Btn)`
  bottom: 50px;
`

const Challenge = ({ isModal, setModal }) => {
  return (
    <ChallengeModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
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
      <Menubar />
      <ModalContainer>
        <ModalHead>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>

        <ModalBody>
          <Swiper
            style={{
              width: "1300px",
              height: "690px",
            }}
            spaceBetween={5}
            slidesPerView={2}
            navigation
            loop={true}
          >
            <SwiperSlide>
              <ChallengeSlide>
                <ChallengeTitle>팔굽혀피기</ChallengeTitle>
                <ChallengeImage src={PushUp} />
                <ChallengeBtn
                  onClick={() => {
                    setModal(false)
                    PushUpTrue()
                  }}
                >
                  현황 보기
                </ChallengeBtn>
              </ChallengeSlide>
            </SwiperSlide>

            <SwiperSlide>
              <ChallengeSlide>
                <ChallengeTitle>윗몸일으키기</ChallengeTitle>
                <ChallengeImage src={SitUp} />
                <ChallengeBtn
                  onClick={() => {
                    setModal(false)
                    SitUpTrue()
                  }}
                >
                  현황 보기
                </ChallengeBtn>
              </ChallengeSlide>
            </SwiperSlide>

            <SwiperSlide>
              <ChallengeSlide>
                <ChallengeTitle>스쿼트</ChallengeTitle>
                <ChallengeImage src={Squat} />
                <ChallengeBtn
                  onClick={() => {
                    setModal(false)
                    SquatTrue()
                  }}
                >
                  현황 보기
                </ChallengeBtn>
              </ChallengeSlide>
            </SwiperSlide>
          </Swiper>
        </ModalBody>

        <ModalFooter />
      </ModalContainer>
    </ChallengeModal>
  )
}

export default Challenge
