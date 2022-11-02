import React, { useState } from "react"
import Menubar from "../Menubar.js"
import SignupModal from "react-modal"
import styled from "styled-components"
import { authService } from "../../../../service/firebase.js"
import { Close, UserImg } from "../../../../image/index.js"
import { LoginTrue } from "../../../navigation.jsx"

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

const SignupContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
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

const UserSignup = styled.div`
  width: 250px;
  height: 120px;
  position: absolute;
  top: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Form = styled.form``

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

const SignupBtn = styled(Btn)`
  top: 0%;
`

const Signup = ({ isModal, setModal }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newAccount, setNewAccount] = useState(true) // 새로운 유저인지 확인(초기값: true)

  // const toggleAccount = () => setNewAccount((prev) => !prev)

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event
    if (name === "email") {
      setEmail(value)
    } else if (name === "password") {
      setPassword(value)
    }
  }

  // 일반 이메일 회원가입
  //newAccount: true => 회원가입 & false => 로그인
  const onSubmit = async (event) => {
    console.log(newAccount)
    event.preventDefault()
    try {
      let data
      // create account => 회원가입 화면
      data = await authService.createUserWithEmailAndPassword(email, password)
      window.alert("회원가입 성공")
      LoginTrue() // 로그인 화면으로 이동
      console.log(data)
    } catch (error) {
      console.log(error)
      // 이메일 중복 검사
      window.alert(
        "해당 이메일은 이미 사용중 이거나 또는 사용할 수 없는 이메일 입니다."
      )
    }
  }

  return (
    <SignupModal
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
          <SignupContainer>
            <UserIcon src={UserImg} />
            <UserSignup>
              {/* <Form onSubmit={onSubmit}> */}
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={onChange}
              />
              <Input
                name="password"
                type="password"
                placeholder="password"
                required
                value={password}
                onChange={onChange}
              />
              {/* </Form> */}
            </UserSignup>

            <BtnContainer>
              <SignupBtn onClick={onSubmit}>회원가입</SignupBtn>

              {/* <Btn onClick={onLogOutClick}>로그아웃</Btn> */}
            </BtnContainer>
          </SignupContainer>
        </ModalBody>
      </ModalContainer>
    </SignupModal>
  )
}
export default Signup
