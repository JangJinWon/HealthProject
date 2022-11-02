import React from "react"
import styled from "styled-components"
import {
  Close,
  SignupImg,
  Logout,
  Poster1,
  Poster2,
  Poster3,
  Poster4,
  Poster5,
  Poster6,
  Poster7,
} from "../../../../image/index.js"

import { LoginTrue } from "../../../navigation.jsx"
import { authService } from "../../../../service/firebase.js"
import Menubar from "../Menubar.js"
import MainPageModal from "react-modal"
import { UserImage, PhoneNumber, UserName, UserEmail } from "./Login.js"
import { useDispatch } from "react-redux"
import { Location } from "react-router-dom"

// Swiper
import { Swiper, SwiperSlide } from "swiper/react" // basic

import { authAction } from "../../../../redux/auth.js"

const ModalContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 25px;
  width: 1300px;
  height: 790px;
  display: flex;
  justify-content: center;
  border-radius: 30px;
  background-color: #ffa0a0;
`

const ModalHead = styled.div`
  width: 1100px;
  height: 250px;
  position: absolute;
  top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  border-radius: 30px;
  background-color: #47ff9c;
`

const ModalBody = styled.div`
  width: 1200px;
  height: 470px;
  position: absolute;
  top: 300px;
  border-radius: 30px;
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
const UserIcon = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 50px;
`

const LogoutIcon = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 50px;
  right: 50px;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

const Text = styled.div`
  font-size: 25px;
  font-weight: bold;
  position: absolute;
`

const NameText = styled(Text)`
  top: 60px;
  left: 250px;
`

const AgeText = styled(Text)`
  top: 100px;
  left: 250px;
`

const GenderText = styled(Text)`
  top: 100px;
  left: 320px;
`

const EmailText = styled(Text)`
  top: 140px;
  left: 250px;
`

const PhoneText = styled(Text)`
  top: 180px;
  left: 250px;
`

const Poster = styled.img`
  width: 500px;
  height: 430px;
  position: absolute;
  top: 20px;
  left: 50px;
  border-radius: 30px;
  background-color: yellow;
`

const MainPage = ({ isModal, setModal }) => {
  const dispatch = useDispatch()

  // 로그아웃
  const onLogOutClick = () => {
    authService.signOut()
    LoginTrue()
    window.alert("로그아웃")
    dispatch(authAction.logout())
  }

  return (
    <MainPageModal
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

      <Closebtn src={Close} onClick={() => setModal(false)} />
      <ModalContainer>
        <ModalHead>
          <UserIcon src={UserImage}></UserIcon>
          <NameText>{UserName}</NameText>
          <AgeText>24세</AgeText>
          <GenderText>남자</GenderText>
          <EmailText>{UserEmail}</EmailText>
          <PhoneText>010-1234-5678</PhoneText>
          <LogoutIcon src={Logout} onClick={onLogOutClick} />
        </ModalHead>

        <ModalBody>
          <Swiper
            style={{
              width: "1200px",
              height: "480px",
              borderRadius: "30px",
            }}
            spaceBetween={1}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <Poster src={Poster1} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster2} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster3} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster4} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster5} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster6} />
            </SwiperSlide>

            <SwiperSlide>
              <Poster src={Poster7} />
            </SwiperSlide>
          </Swiper>
        </ModalBody>
      </ModalContainer>
    </MainPageModal>
  )
}

export default MainPage
