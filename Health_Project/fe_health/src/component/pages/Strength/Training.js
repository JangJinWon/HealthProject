import React, { useState } from "react"
import styled from "styled-components"
import TrainingModal from "../../modal/StrengthPage/Training.js"
import HoverVideoPlayer from "react-hover-video-player"
import tarining from "../../../video/Strength/training.mp4"
import {
  ChallengeImg,
  TrainingTitle,
  TrainingThumbnail,
} from "../../../image/index.js"
import PausedOverlay from "./Video/Paused.js"
import LoadingOverlay from "./Video/Loading.js"
import { Timeline, Tween } from "react-gsap"

// Training modal
import PushUpModal from "../../modal/Training/PushUp.js"
import PullUpModal from "../../modal/Training/PullUp.js"
import DipsModal from "../../modal/Training/Dips.js"
import CrunchModal from "../../modal/Training/Crunch.js"
import PlankModal from "../../modal/Training/Plank.js"

const Container = styled.div`
  width: 1700px;
  height: 410px;
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 1%;
  background-color: #dcdcdc;
`

const ImageContainer = styled.div`
  width: 750px;
  height: 350px;
  border-radius: 30px;
  position: absolute;
  left: -900px;
`

const TitleContainer = styled.div`
  width: 600px;
  height: 100px;
  border-radius: 30px 30px 0px 0px;
  position: absolute;
  bottom: -100px;
  background-color: #46ffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  right: 150px;
`

const TitleImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`

const TextContainer = styled.div`
  width: 600px;
  height: 230px;
  border-radius: 0px 0px 30px 30px;
  position: absolute;
  right: 150px;
  bottom: -330px;
  background-color: #47ff9c;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  font-size: 40px;
  color: #333;
  font-weight: bold;
  font-family: "Jua", sans-serif;
`

const Text = styled.div`
  font-size: 30px;
  line-height: 2;
  text-align: center;
  color: #333;
  font-weight: bold;
  font-family: "Jua", sans-serif;
`

const Btn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff;
  color: #333;
  font-family: "Jua", sans-serif;
  :hover {
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`

export let PushUpTrue,
  PushUpFalse,
  PullUpTrue,
  PullUpFalse,
  DipsTrue,
  DipsFalse,
  CrunchTrue,
  CrunchFalse,
  PlankTrue,
  PlankFalse

const Training = () => {
  const [TrainingModalIsOpen, setTrainingModalOpen] = useState(false)

  const [PushUpModalIsOpen, setPushUpModalOpen] = React.useState(false)
  const [PullUpModalIsOpen, setPullUpModalOpen] = React.useState(false)
  const [DipsModalIsOpen, setDipsModalOpen] = React.useState(false)
  const [CrunchModalIsOpen, setCrunchModalOpen] = React.useState(false)
  const [PlankModalIsOpen, setPlankModalOpen] = React.useState(false)

  PushUpTrue = function PushUpModalTrue() {
    setTrainingModalOpen(false)
    setPushUpModalOpen(true)
  }

  PushUpFalse = function PushUpModalfalse() {
    setTrainingModalOpen(true)
    setPushUpModalOpen(false)
  }

  PullUpTrue = function PullUpModalTrue() {
    setTrainingModalOpen(false)
    setPullUpModalOpen(true)
  }

  PullUpFalse = function PullUpModalFalse() {
    setTrainingModalOpen(true)
    setPullUpModalOpen(false)
  }

  DipsTrue = function DipsModalTrue() {
    setTrainingModalOpen(false)
    setDipsModalOpen(true)
  }

  DipsFalse = function DipsModalFalse() {
    setTrainingModalOpen(true)
    setDipsModalOpen(false)
  }

  CrunchTrue = function CrunchModalTrue() {
    setTrainingModalOpen(false)
    setCrunchModalOpen(true)
  }

  CrunchFalse = function CrunchModalFalse() {
    setTrainingModalOpen(true)
    setCrunchModalOpen(false)
  }

  PlankTrue = function PlankModalTrue() {
    setTrainingModalOpen(false)
    setPlankModalOpen(true)
  }

  PlankFalse = function PlankModalFalse() {
    setTrainingModalOpen(true)
    setPlankModalOpen(false)
  }

  return (
    <>
      <Container>
        <Timeline
          target={
            <ImageContainer>
              <HoverVideoPlayer
                videoSrc={tarining}
                videoStyle={{
                  width: "750px",
                  height: "350px",
                  borderRadius: "30px",
                }}
                pausedOverlay={<PausedOverlay image={TrainingThumbnail} />}
                loadingOverlay={<LoadingOverlay />}
              />
            </ImageContainer>
          }
        >
          <Tween
            from={{ opacity: 0 }}
            to={{ opacity: 1, x: "1050px" }}
            duration={3}
          />
        </Timeline>

        <Timeline
          target={
            <TitleContainer>
              <TitleImage src={TrainingTitle} />
              <Title>Training</Title>
            </TitleContainer>
          }
        >
          <Tween
            from={{ opacity: 0 }}
            to={{ opacity: 1, y: "-370px" }}
            duration={3}
          />
        </Timeline>

        <Timeline
          target={
            <TextContainer>
              <Text>
                사용자는 홈 트레이닝 영상을 보며 올바른 운동 <br /> 자세와
                방법을 학습할 수 있습니다.
              </Text>
              <Btn onClick={() => setTrainingModalOpen(true)}>바로가기</Btn>
            </TextContainer>
          }
        >
          <Tween
            from={{ opacity: 0 }}
            to={{ opacity: 1, y: "-370px" }}
            duration={3}
          />
        </Timeline>
      </Container>

      <TrainingModal
        isModal={TrainingModalIsOpen}
        setModal={setTrainingModalOpen}
      />

      <PushUpModal isModal={PushUpModalIsOpen} setModal={setPushUpModalOpen} />

      <PullUpModal isModal={PullUpModalIsOpen} setModal={setPullUpModalOpen} />

      <DipsModal isModal={DipsModalIsOpen} setModal={setDipsModalOpen} />

      <CrunchModal isModal={CrunchModalIsOpen} setModal={setCrunchModalOpen} />

      <PlankModal isModal={PlankModalIsOpen} setModal={setPlankModalOpen} />
    </>
  )
}

export default Training
