import React from "react"
import styled from "styled-components"
import { Close, UserImg, User } from "../../../../image/index.js"
import { useDispatch } from "react-redux"

import Menubar from "../Menubar.js"
import LoginModal from "react-modal"
import { authService, firebaseInstance } from "../../../../service/firebase.js"
import { MainPageTrue, SignupTrue } from "../../../navigation.jsx"
import { getAuth } from "firebase/auth"
import { authAction } from "../../../../redux/auth.js"

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
  display: flex;
  justify-content: center;
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

const LoginContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
`

const UserLogin = styled.div`
  width: 250px;
  height: 120px;
  position: absolute;
  top: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const BtnContainer = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: 5%;
  display: flex;
  justify-content: center;
`

const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 10%;
`

const Input = styled.input`
  width: 200px;
  height: 30px;
  font-size: 20px;
  margin: 10px;
  border-radius: 10px;
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

const LoginBtn = styled(Btn)`
  top: 0%;
`

const SignupBtn = styled(Btn)`
  top: 20%;
`

const SocialBtn = styled.button`
  width: 240px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff;
  position: absolute;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GoogleBtn = styled(SocialBtn)`
  top: 50%;
  color: red;
  :hover {
    cursor: pointer;
    background-color: red;
    color: #fff;
  }
`

const FacebookBtn = styled(SocialBtn)`
  top: 75%;
  color: blue;
  :hover {
    cursor: pointer;
    background-color: blue;
    color: #fff;
  }
`

export let PhoneNumber, UserName, UserEmail, UserImage

function Login({ isModal, setModal }) {
  const [ID, setID] = React.useState("")
  const [PW, setPW] = React.useState("")

  const IDOnChange = React.useCallback((e) => {
    setID(e.target.value)
  }, [])

  const PASSOnChange = React.useCallback((e) => {
    setPW(e.target.value)
  }, [])

  // 로그인 상태 변화 (dispatch)
  const dispatch = useDispatch()

  // 일반 이메일 로그인
  const onSubmit = async (event) => {
    try {
      let data
      dispatch(authAction.login())
      data = await authService.signInWithEmailAndPassword(ID, PW)
      window.alert("로그인 성공")
      UserImage = user.photoURL // 프로필 사진 URL
      UserName = user.displayName // 표시 이름
      UserEmail = user.email // 이메일
      MainPageTrue()
      console.log(data)
    } catch (error) {
      console.log(error)
      window.alert("이메일과 비밀번호를 다시 확인해주세요")
    }
  }

  // 소셜 로그인 Google & Facebook
  const auth = getAuth()
  const user = auth.currentUser

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event
    let provider
    if (name === "google") {
      dispatch(authAction.login())
      provider = new firebaseInstance.auth.GoogleAuthProvider()
      await authService.signInWithPopup(provider)
      // UserImage = user.photoURL // 프로필 사진 URL
      // UserName = user.displayName // 표시 이름
      // UserEmail = user.email // 이메일
      UserImage = User // 프로필 사진 URL
      UserName = "장진원" // 표시 이름
      UserEmail = "eunhee15627@gmail.com" // 이메일
      MainPageTrue()
    } else if (name === "facebook") {
      dispatch(authAction.login())
      provider = new firebaseInstance.auth.FacebookAuthProvider()
      await authService.signInWithPopup(provider)
      UserImage = user.photoURL // 프로필 사진 URL
      UserName = user.displayName // 표시 이름
      UserEmail = user.email // 이메일
      MainPageTrue()
    }
    window.alert("로그인 성공")
  }

  return (
    <>
      <LoginModal
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
            backgroundColor: "#FBF8F1",
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
            <LoginContainer>
              <UserIcon src={UserImg} />
              <UserLogin>
                <Input
                  type="text"
                  name="userId"
                  value={ID || ""}
                  onChange={IDOnChange}
                />
                <Input
                  type="password"
                  name="userPW"
                  value={PW || ""}
                  onChange={PASSOnChange}
                />
              </UserLogin>

              <BtnContainer>
                <LoginBtn
                  onClick={() => {
                    onSubmit()
                  }}
                >
                  Login
                </LoginBtn>
                <SignupBtn
                  onClick={() => {
                    setModal(false)
                    SignupTrue()
                  }}
                >
                  Sign Up
                </SignupBtn>
                <GoogleBtn name="google" onClick={onSocialClick}>
                  Google로 로그인
                </GoogleBtn>
                <FacebookBtn name="facebook" onClick={onSocialClick}>
                  Facebook으로 로그인
                </FacebookBtn>
              </BtnContainer>
            </LoginContainer>
          </ModalBody>

          <ModalFooter />
        </ModalContainer>
      </LoginModal>
    </>
  )
}

export default Login
