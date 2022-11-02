import React from "react"
import styled from "styled-components"
import { Close } from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import InformationModal from "react-modal"

import UserInfo from "./UserInfo.js"
import ChallengeInfo from "./ChallengeInfo.js"
import CalendarInfo from "./CalendarInfo.js"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 1350px;
  height: 890px;
`

const ModalHead = styled.div`
  width: 1350px;
  height: 60px;
`

const ModalBody = styled.div`
  width: 1350px;
  height: 830px;
  position: absolute;
  top: 60px;
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
  height: 370px;
  position: absolute;
  border-radius: 30px;
  border: 2px solid black;
  background-color: #47ff9c;
`

const UserContainer = styled(BasicContainer)`
  width: 410px;
  top: 30px;
  left: 30px;
  display: flex;
  justify-content: center;
`

const ChallengeContainer = styled(BasicContainer)`
  width: 410px;
  left: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`

const CalendarContainer = styled.div`
  width: 850px;
  height: 765px;
  position: absolute;
  top: 30px;
  right: 30px;
  border-radius: 30px;
  border: 2px solid black;
  background-color: #fad291;
`

const MyInformation = ({ isModal, setModal }) => {
  return (
    <InformationModal
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
          <UserContainer>
            <UserInfo />
          </UserContainer>

          <CalendarContainer>
            <CalendarInfo />
          </CalendarContainer>

          <ChallengeContainer>
            <ChallengeInfo />
          </ChallengeContainer>
        </ModalBody>
      </ModalContainer>
    </InformationModal>
  )
}

export default MyInformation
