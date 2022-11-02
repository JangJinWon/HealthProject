import React from "react"
import styled from "styled-components"
import { Close } from "../../../../image/index.js"

import Menubar from "../Menubar.js"
import SquatModal from "react-modal"

// TodoList
import TodoTemplate from "./SquatTodoList/TodoTemplate.js"
import TodoHead from "./SquatTodoList/TodoHead.js"
import TodoList from "./SquatTodoList/TodoList.js"
import TodoCreate from "./SquatTodoList/TodoCreate.js"
import { TodoProvider } from "./SquatTodoList/TodoContext.js"

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
  display: flex;
  justify-content: center;
  background-color: #96a5ff;
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
  background-color: #b4b4b4;
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
  position: absolute;
  top: 30px;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`

const PushUpBg = styled.div`
  width: 1250px;
  height: 630px;
  position: absolute;
  left: 50px;
  top: 30px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
`

const PushUpBg2 = styled.div`
  width: 1250px;
  height: 530px;
  position: absolute;
  top: 50px;
  background-color: #f2ebe9;
`

const TodoListContainer = styled.div`
  width: 750px;
  height: 470px;
  position: absolute;
  top: 30px;
  right: 30px;
  border-radius: 30px;
  border: 2px solid black;
  background-color: #47ff9c;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`

const Squat = ({ isModal, setModal }) => {
  return (
    <SquatModal
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
          <Title>Mission</Title>
          <Closebtn src={Close} onClick={() => setModal(false)} />
        </ModalHead>

        <ModalBody>
          <PushUpBg>
            <PushUpBg2>
              <TodoListContainer>
                <TodoProvider>
                  <TodoTemplate>
                    <TodoHead />
                    <TodoList />
                    <TodoCreate />
                  </TodoTemplate>
                </TodoProvider>
              </TodoListContainer>
            </PushUpBg2>
          </PushUpBg>
        </ModalBody>

        <ModalFooter />
      </ModalContainer>
    </SquatModal>
  )
}

export default Squat
