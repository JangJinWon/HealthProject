import { useCallback, useState } from "react"
import EditModal from "react-modal"
import styled from "styled-components"
import { Close } from "../../../../../image"
import { Button } from "@mui/material"
import ImageUploader from "../Create/ImageUploader"
import TextArea from "../Create/TextArea"
import BoardDetail from "./BoardDetail"
import { useTodoDispatch, useTodoNextId } from "../List/BaordContext.js"
import { UserName } from "../../Login/Login.js"

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

const ModalBody = styled.div`
  width: 100%;
  height: 690px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InsertFormPositioner = styled.div`
  width: 80%;
  height: 100%;
  bottom: 0;
  left: 0;
  background-color: #ffbec3;
  border-radius: 30px;
`

const AddBoardWrapper = styled.div`
  position: relative;
  top: 0px;
  z-index: 1;
  @keyframes smoothAppear {
    from {
      opacity: 0;
      transform: translateY(-5%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  opacity: 0;
  animation: smoothAppear 1s forwards;
  animation-delay: 0.5s;
  font-family: "Noto Sans KR", sans-serif;
  .addBoard-header {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin: 50px 0;
  }
  .submitButton {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
    }
    .disable-button {
      font-size: 1.1rem;
      cursor: not-allowed;
    }
    .success-button {
      font-size: 1.1rem;
    }
  }
  .addBoard-body {
    display: flex;
    margin: 20px 0;
    justify-content: center;
    flex-wrap: wrap;
  }
`

// 현재 시간 값을 반환하는 함수
const TodayTime = () => {
  let now = new Date() // 현재 날짜 및 시간
  let todayMonth = now.getMonth() + 1 // 월
  let todayDate = now.getDate() // 일
  const week = ["일", "월", "화", "수", "목", "금", "토"]
  let dayOfWeek = week[now.getDay()] // 요일
  let hours = now.getHours() // 시간
  let minutes = now.getMinutes() // 분

  return (
    todayMonth +
    "월" +
    todayDate +
    "일 " +
    dayOfWeek +
    "요일 " +
    hours +
    "시" +
    minutes +
    "분"
  )
}

const BoardEdit = ({
  id,
  img_url,
  title,
  content,
  username,
  date,
  isModal,
  setModal,
}) => {
  const [boardId, setboardId] = useState(1)
  const [Title, setTitle] = useState(title)
  const [Content, setContent] = useState(content)
  const [Image, setImage] = useState({
    image_file: "",
    preview_URL: img_url,
  })

  const dispatch = useTodoDispatch()

  const onSubmit = (e) => {
    dispatch({
      type: "UPDATE",
      todo: {
        index: boardId,
        done: false,
        img_url: Image.preview_URL,
        title: Title,
        content: Content,
        username: UserName,
        date: TodayTime(),
      },
    })
    console.log(Title)
    console.log(Content)
    console.log(Image.preview_URL)
    console.log(username)
    console.log(date)
  }

  const EditSubit = () => {
    onSubmit()
    window.alert("😎수정이 완료되었습니다😎")
    setModal(false)
  }

  const canSubmit = useCallback(() => {
    return Image.preview_URL !== "" && Content !== "" && Title !== ""
  }, [Image.preview_URL, Title, Content])

  return (
    <>
      <EditModal
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
            <InsertFormPositioner>
              <AddBoardWrapper>
                <div className="addBoard-wrapper">
                  <div className="addBoard-header">게시물 수정하기 🖊️</div>
                  <div className="submitButton">
                    {canSubmit() ? (
                      <Button
                        onClick={() => EditSubit()}
                        className="success-button"
                        variant="outlined"
                      >
                        수정하기😃
                      </Button>
                    ) : (
                      <Button
                        className="disable-button"
                        variant="outlined"
                        size="large"
                      >
                        제목과 내용을 모두 입력하세요😭
                      </Button>
                    )}
                  </div>
                  <div className="addBoard-body">
                    <ImageUploader
                      setImage={setImage}
                      preview_URL={Image.preview_URL}
                    />
                    <TextArea
                      setTitle={setTitle}
                      setContent={setContent}
                      title={Title}
                      content={Content}
                    />
                  </div>
                </div>
              </AddBoardWrapper>
            </InsertFormPositioner>
          </ModalBody>
        </ModalContainer>
      </EditModal>
    </>
  )
}

export default BoardEdit
