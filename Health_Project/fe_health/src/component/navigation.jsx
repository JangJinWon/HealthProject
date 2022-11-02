import React, { useEffect, useState } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"
import { darkTheme, lightTheme } from "../redux/themeSelector"
import { createStore } from "redux"

import {
  Light,
  User,
  Main,
  Thumbs_up,
  Reviews,
  Headphone,
  Placeholder,
} from "../image/index.js"

import styled from "styled-components"

// Modal
import LoginModal from "./modal/Navigation/Login/Login.js"
import NoticeModal from "./modal/Navigation/Notice/Notice.js"
import MyInformationModal from "./modal/Navigation/MyInfo/MyInformation.js"
import ChallengeModal from "./modal/Navigation/Challenge/Challenge.js"
import BoardModal from "./modal/Navigation/Board/Main/Board.js"
import BoardList from "./modal/Navigation/Board/List/BoardList.js"
import PushUpModal from "./modal/Navigation/Challenge/Pushup.js"
import SitupModal from "./modal/Navigation/Challenge/Situp.js"
import SquatModal from "./modal/Navigation/Challenge/Squat.js"
import SignupModal from "./modal/Navigation/Login/Signup.js"
import MainPageModal from "./modal/Navigation/Login/Mainpage.js"

const Container = styled.div``

const NavigationStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  right: 0;
  top: 0;
  height: 100%;
  background: ${(props) => props.theme.navColor};
  z-index: 100;

  @media screen and (min-width: 1920px) {
    width: 10%;
  }

  img {
    margin: 12px;
    width: 50px;
    height: 50px;
    &:last-child {
      width: 80px;
      height: 80px;
    }
  }

  img.attrs {
    src: ${(props) => props.src};
  }
`

const ThemeButton = styled.img`
  position: fixed;
  top: 10px;
  right: 100px;
  &:hover {
    cursor: pointer;
  }
`
const UserButton = styled.img`
  position: fixed;
  width: 5px;
  height: 5px;
  top: 10px;
  right: 20px;
  &:hover {
    cursor: pointer;
  }
`

export let LoginTrue,
  NoticeTrue,
  InformationTrue,
  ChallengeTrue,
  BoardTrue,
  AddBoardTrue,
  BoardListTrue,
  PushUpTrue,
  SitUpTrue,
  SquatTrue,
  SignupTrue,
  MainPageTrue

// const Navigations = () => {
function Navigations() {
  const [LoginModalIsOpen, setLoginModalOpen] = React.useState(false)
  const [NoticeModalIsOpen, setNoticeModalOpen] = React.useState(false)
  const [MyInformationModalIsOpen, setMyInformationModalOpen] = React.useState(
    false
  )
  const [ChallengeModalIsOpen, setChallengeModalOpen] = React.useState(false)
  const [BoardModalIsOpen, setBoardModalOpen] = React.useState(false)

  const [PushUpModalIsOpen, setPushUpModalOpen] = React.useState(false)
  const [SitUpModalIsOpen, setSitUpModalOpen] = React.useState(false)
  const [SquatModalIsOpen, setSquatModalOpen] = React.useState(false)

  const [SignupModalIsOpen, setSignupModalOpen] = React.useState(false)
  const [MainPageModalIsOpen, setMainPageModalOpen] = React.useState(false)

  const [BoardListModalIsOpen, setBoardListModalOpen] = React.useState(false)

  LoginTrue = function LoginModalTrue() {
    // 로그인 화면
    setNoticeModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setLoginModalOpen(true)
    setMainPageModalOpen(false)
    setMyInformationModalOpen(false)
  }

  NoticeTrue = function NoteiceModalTrue() {
    // 공지사항 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(true)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(false)
  }

  InformationTrue = function InformationModalTrue() {
    // 내정보 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(true)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(false)
  }

  ChallengeTrue = function ChallengeModalTrue() {
    // 첼린지 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(true)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(false)
  }

  BoardTrue = function BoardModalTrue() {
    // 게시판 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(true)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(false)
  }

  AddBoardTrue = function AddBoardModalTrue() {
    // 글쓰기 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(false)
  }

  BoardListTrue = function CardModalTrue() {
    // 게시판 조회 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(true)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(false)
  }

  PushUpTrue = function PushUpModalTrue() {
    // 팔굽혀펴기 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(true)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(false)
  }

  SitUpTrue = function SitUpModalTrue() {
    // 윗몸일으키기 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(true)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(false)
  }

  SquatTrue = function SquatModalTrue() {
    // 스쿼트 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(true)
    setSignupModalOpen(false)
    setMainPageModalOpen(false)
  }

  SignupTrue = function SignupModalTrue() {
    // 회원가입 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(true)
  }

  MainPageTrue = function MainPageModalTrue() {
    // 메인 페이지 화면
    setLoginModalOpen(false)
    setNoticeModalOpen(false)
    setMyInformationModalOpen(false)
    setChallengeModalOpen(false)
    setBoardModalOpen(false)
    setBoardListModalOpen(false)
    setPushUpModalOpen(false)
    setSitUpModalOpen(false)
    setSquatModalOpen(false)
    setSignupModalOpen(false)
    setMainPageModalOpen(true)
  }
  //,
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  // 문제 원인
  // 로그인, 로그아웃 버튼을 클릭 해야지만 dispatch로 reducer로 상태값을 변경할 수 있기 때문에
  // 버튼을 클릭하지 않으면 다시 navigation 컴포넌트가 리 랜더링 되어 IsLogin값이 false로 고정 된다.

  // 해결 방안
  // Navigation 컴포넌트가 리 랜더링 되더라도 로그아웃하기 전까지는 상태값을 계속 가지고 있거나 또는 IsLogin이 false로 초기화 되는 것을 막아야 한다.
  /// Login Redux
  // 으악 제발 누가좀 살려줘.... ㅠ.ㅠ
  // const IsLogin = false
  const initState = { isLogin: false }
  // useEffect(() => {}, [])
  function reducer(state = initState, action) {
    // state 상태 변경
    if (action.type === "로그인") {
      console.log("Redux state:", state)
      return {
        isLogin: true,
      }
    }
    if (action.type === "로그아웃") {
      LoginTrue()
      console.log(state)
      return {
        isLogin: false,
      }
    }
    return state
  }

  const store = createStore(reducer)
  ///

  return (
    <>
      <Container>
        <LoginModal isModal={LoginModalIsOpen} setModal={setLoginModalOpen} />

        <MainPageModal
          isModal={MainPageModalIsOpen}
          setModal={setMainPageModalOpen}
        />

        <NoticeModal
          isModal={NoticeModalIsOpen}
          setModal={setNoticeModalOpen}
        />

        <ChallengeModal
          isModal={ChallengeModalIsOpen}
          setModal={setChallengeModalOpen}
        />

        <BoardModal isModal={BoardModalIsOpen} setModal={setBoardModalOpen} />

        <BoardList
          isModal={BoardListModalIsOpen}
          setModal={setBoardListModalOpen}
        />

        <PushUpModal
          isModal={PushUpModalIsOpen}
          setModal={setPushUpModalOpen}
        />

        <SitupModal isModal={SitUpModalIsOpen} setModal={setSitUpModalOpen} />

        <SquatModal isModal={SquatModalIsOpen} setModal={setSquatModalOpen} />

        <SignupModal
          isModal={SignupModalIsOpen}
          setModal={setSignupModalOpen}
        />
      </Container>

      <MyInformationModal
        isModal={MyInformationModalIsOpen}
        setModal={setMyInformationModalOpen}
      />

      <NavigationStyle>
        {!theme.darkmode ? (
          <ThemeButton src={Light} onClick={() => dispatch(darkTheme())} />
        ) : (
          <ThemeButton src={Light} onClick={() => dispatch(lightTheme())} />
        )}

        <UserButton src={User} onClick={() => setLoginModalOpen(true)} />

        <ul>
          <li data-menuanchor="MainPage">
            <a href="#MainPage">
              <img src={Main} alt="메인페이지" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="StrengthPage">
            <a href="#StrengthPage">
              <img src={Thumbs_up} alt="앱장점" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="ReviewPage">
            <a href="#ReviewPage">
              <img src={Reviews} alt="리뷰" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="MapPage">
            <a href="#MapPage">
              <img src={Placeholder} alt="지도" />
            </a>
          </li>
        </ul>

        <ul>
          <li data-menuanchor="QuestionPage">
            <a href="#QuestionPage">
              <img src={Headphone} alt="고객센터" />
            </a>
          </li>
        </ul>
      </NavigationStyle>
    </>
  )
}

export default Navigations
