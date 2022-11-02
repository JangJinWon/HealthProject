import React, { useState } from "react"
import styled from "styled-components"
import { Close } from "../../../image/index.js"

import InputModal from "react-modal"
import OutputModal from "../../modal/InBody/Output.js"
import DefaultInfo from "./DefaultInfo.js"
import Skeletal from "./Skeletal.js"
import BodyFat from "./BodyFat.js"

import { CreateBodyFat } from "./BodyFat.js"

const ModalHead = styled.div`
  width: 1610px;
  height: 150px;
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalBody = styled.div`
  width: 1610px;
  height: 720px;
  position: absolute;
  top: 130px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  border-radius: 30px;
  background-color: #d2d2d2;
`

const ModalFooter = styled.div`
  position: absolute;
  width: 1610px;
  height: 50px;
  bottom: 0px;
`

const Title = styled.div`
  font-size: 50px;
  font-family: fantasy;
  color: #ff4646;
`

const TitleBox = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  display: flex;
  position: absolute;
  left: 60px;
  justify-content: center;
  align-items: center;
  background-color: pink;
`

const SubTitle = styled.div`
  font-size: 29px;
  line-height: 2;
  text-align: center;
  color: #333;
  font-weight: bold;
  font-family: "Jua", sans-serif;
`

const Closebtn = styled.img`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 15%;
  right: 3%;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

const BodyContainer = styled.div`
  width: 1550px;
  height: 150px;
  margin-top: 30px;
  background-color: #14d3ff;
  border-radius: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
`

const Container = styled.div`
  width: 1200px;
  height: inherit;
  display: flex;
  position: absolute;
  right: 100px;
  justify-content: space-between;
`

const Btn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 30px;
  position: absolute;
  bottom: 30px;
  background-color: #fff;
  font-size: 15px;
  font-weight: bold;
  color: #333;
  &:hover {
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`

const Titles = styled.div`
  font-size: 25px;
  font-family: fantasy;
  font-weight: bold;
  font-style: italic;
`

const BodyTitle = styled(Titles)`
  position: absolute;
  top: 40px;
  font-size: 30px;
  text-align: center;
  color: #333;
  font-weight: bold;
  font-family: "Jua", sans-serif;
`

const Input = ({ isModal, setModal }) => {
  const [OutputModalIsOpen, setOutputModalOpen] = useState(false)

  return (
    <>
      <InputModal
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
        <ModalHead>
          <Title>My InBody Information</Title>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>

        <ModalBody>
          <BodyTitle>본인의 인바디 정보를 입력하세요</BodyTitle>

          <BodyContainer>
            <TitleBox>
              <SubTitle>기본 정보 입력</SubTitle>
            </TitleBox>
            <Container>
              <DefaultInfo />
            </Container>
          </BodyContainer>

          <BodyContainer>
            <TitleBox>
              <SubTitle>체지방량 입력</SubTitle>
            </TitleBox>
            <Container>
              <BodyFat />
            </Container>
          </BodyContainer>

          <BodyContainer>
            <TitleBox>
              <SubTitle>골격근량 입력</SubTitle>
            </TitleBox>
            <Container>
              <Skeletal />
            </Container>
          </BodyContainer>

          <Btn
            onClick={() => {
              setOutputModalOpen(true)
              CreateBodyFat()
            }}
          >
            확인하기
          </Btn>
        </ModalBody>
        <ModalFooter />
      </InputModal>
      <OutputModal isModal={OutputModalIsOpen} setModal={setOutputModalOpen} />
    </>
  )
}

export default Input
