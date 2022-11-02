import React, { useEffect, useState, useId } from "react"
import styled from "styled-components"
import { Button, Dialog, DialogContent, IconButton } from "@mui/material"
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined"
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined"
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined"
import { useTodoDispatch } from "../List/BaordContext.js"
import DetailModal from "react-modal"
import { Close } from "../../../../../image/index.js"
import BoardEdit from "./BoardEdit.js"
import Comments from "./Comments.js"

// 파이어베이서 파일에서 import 해온 db
import { db } from "../../../../../service/firebase.js"
// db에 데이터에 접근을 도와줄 친구들
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  FieldValue,
} from "firebase/firestore"
import { async } from "@firebase/util"

const ModalContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
`

const ModalHead = styled.div`
  width: 100%;
  height: 100px;
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

const Delete = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 0.7rem;
  button {
    font-size: 1.2rem;
  }
  .delete-button {
    margin-left: 0.5rem;
  }
`

const ModalBody = styled.div`
  width: 100%;
  height: 790px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 50%;
  height: 70%;
  transition: width 1s;
  opacity: 0;
  border-radius: 30px;
  animation: smoothAppear 1.5s forwards;
  animation-delay: 0.5s;
  font-family: "Noto Sans KR", sans-serif;
  background-color: #fff;
  padding: 4rem;
`

const Header = styled.div`
  justify-content: space-between;
  align-items: baseline;
  display: flex;
  .board-header-username {
    font-size: 2rem;
  }
  .board-header-date {
    font-size: 1.5rem;
    vertical-align: baseline;
  }
`

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  .board-image {
    flex-shrink: 0;
    margin-right: 1rem;
    width: 50%;
    height: 80%;
    img {
      width: 100%;
      height: 125%;
      object-fit: cover;
    }
  }
  .board-title-content {
    word-break: break-all;
    margin-left: 1rem;
    overflow: auto;
    flex-grow: 1;
    &::-webkit-scrollbar {
      display: none;
    }
    .board-title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: midnightblue;
    }
    .board-content {
      overflow-x: hidden;
      margin-top: 15px;
      font-size: 15px;
      font-weight: bold;
    }
  }
`

const Modal = styled.div`
  .modal-title {
    font-size: 2rem;
    font-weight: bold;
    padding: 2rem 0;
  }
  .modal-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .button {
      font-size: 1.4rem;
    }
  }
`

const BoardDetail = ({
  index,
  img_url,
  title,
  content,
  username,
  date,
  isModal,
  setModal,
}) => {
  const [show, setShow] = useState(false)
  const [EditModalIsOpen, setEditModalOpen] = React.useState(false)
  const dispatch = useTodoDispatch()
  const onRemove = (e) => {
    dispatch({ type: "REMOVE", index })
    setModal(false)
  }

  // input으로 받을 새로운 사람의 이름과 나이
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)

  // console.log(newName, newAge)

  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([])
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, "Board")

  // 유니크 id를 만들기 위한 useId(); - react 18 기능으로, 이 훅을 이렇게 사용하는게 맞고 틀린지는 모른다.
  const uniqueId = useId()
  //console.log(uniqueId)

  // 시작될때 한번만 실행 // 읽어오기 - R
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef)
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])

  // 삭제 - D
  const deleteUser = async (id) => {
    // 내가 삭제하고자 하는 db의 컬렉션의 id를 뒤지면서 데이터를 찾는다
    const userDoc = doc(db, "Board", id)
    // deleteDoc을 이용해서 삭제
    await deleteDoc(userDoc)
  }

  return (
    <>
      <DetailModal
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
            backgroundColor: "rgb(231, 235, 240)",
          },
        }}
      >
        <ModalContainer>
          <ModalHead>
            <Closebtn src={Close} onClick={() => setModal(false)} />
          </ModalHead>

          <ModalBody>
            <Wrapper>
              <Delete>
                <Button
                  variant="outlined"
                  color="error"
                  endIcon={<DeleteForeverOutlinedIcon />}
                  className="delete-button"
                  onClick={() => {
                    setShow(true)
                  }}
                >
                  삭제
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<BuildOutlinedIcon />}
                  onClick={() => {
                    // setModal(false)
                    setEditModalOpen(true)
                  }}
                >
                  수정
                </Button>
              </Delete>

              <Header>
                <div className="board-header-username">{username}</div>
                <div className="board-header-date">{date}</div>
              </Header>
              <hr />

              <Body>
                <div className="board-image">
                  <img alt="이미지" src={img_url} />
                </div>
                <div className="board-title-content">
                  <div className="board-title">{title}</div>
                  <div className="board-content">{content}</div>
                </div>
              </Body>

              <hr />
              <div>
                <Comments />
              </div>
            </Wrapper>
          </ModalBody>

          <Dialog open={show}>
            <DialogContent style={{ position: "relative" }}>
              <IconButton
                style={{ position: "absolute", top: "0", right: "0" }}
                onClick={() => {
                  setShow(false)
                }}
              >
                <DisabledByDefaultOutlinedIcon />
              </IconButton>
              <Modal>
                <div className="modal-title"> 정말 삭제하시겠습니까 ?</div>
                <div className="modal-button">
                  <Button
                    className="button"
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      onRemove()
                      users.map((value) =>
                        value.index === index ? deleteUser(value.id) : 0
                      )
                    }}
                  >
                    예
                  </Button>
                  <Button
                    className="button"
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      setShow(false)
                    }}
                  >
                    아니오
                  </Button>
                </div>
              </Modal>
            </DialogContent>
          </Dialog>
        </ModalContainer>
      </DetailModal>

      <BoardEdit
        index={index}
        img_url={img_url}
        title={title}
        content={content}
        username={username}
        date={date}
        isModal={EditModalIsOpen}
        setModal={setEditModalOpen}
      />
    </>
  )
}

export default BoardDetail
