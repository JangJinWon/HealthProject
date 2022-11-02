import React, { useCallback, useEffect, useState } from "react"
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
} from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined"
import styled from "styled-components"

const CommentsWrapper = styled.div`
  .comments-header {
    margin: 1rem 0;
    display: flex;

    .comments-header-textarea {
      flex: 1;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    button {
      margin-left: 0.5rem;
      font-size: 1.1rem;
    }
  }
`

const CommentsBody = styled.div`
  .comments-comment {
    margin: 0.5rem 0;

    .comment-username-date {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      .comment-date {
        color: lightgray;
      }
    }

    .comment-content {
      // \n(엔터)를 태그 안의 텍스트에 적용
      white-space: pre-wrap;
      word-break: break-all;
      margin: 0.4rem auto;
    }
  }
  .comment-username {
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    font-weight: 600;
  }

  .comments-footer {
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
  }
`

const Modal = styled.div`
  .modal-title {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    padding: 1rem 0;
  }
  .modal-content {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 0;
  }
  .modal-button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .button {
      font-size: 1.5em;
    }
  }
`

const Comments = ({ id, username }) => {
  // 현재 페이지, 전체 페이지 갯수
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  // 로그인 후 현재 경로로 돌아오기 위해 useLocation 사용
  const [commentList, setCommentList] = useState([])

  // 입력한 댓글 내용
  const [content, setContent] = useState("")

  const submit = useCallback(async () => {
    const comment = {
      board_id: id,
      content: content,
      user_id: username,
    }
    alert("댓글 등록 완료")
  }, [content])

  // modal이 보이는 여부 상태
  const [show, setShow] = useState(false)

  /*modal 관련 코드*/
  // 로그인을 하지 않은 상태에서 댓글 입력 창을 클릭하면 Modal이 열림.
  const isLogin = () => {
    setShow(true)
  }

  // 로그인 후 돌아올 수 있게 현재 경로 세팅
  const goLogin = () => {
    setShow(false)
  }

  return (
    <>
      <CommentsWrapper>
        {/* 댓글 입력 */}
        <div className="comments-header">
          <TextField
            className="comments-header-textarea"
            maxRows={3}
            onClick={() => isLogin()}
            onChange={(e) => {
              setContent(e.target.value)
            }}
            multiline
            placeholder="댓글을 입력해주세요✏️"
          />
          {content !== "" ? ( // 댓글 유무 판단 후 버튼 선택
            <Button variant="outlined" onClick={() => submit()}>
              등록하기
            </Button>
          ) : (
            <Button variant="outlined" disabled={true}>
              등록하기
            </Button>
          )}
        </div>
        {/* 댓글 목록 */}
        <CommentsBody>
          {commentList.map((item, index) => (
            <div key={index} className="comments-comment">
              <div className="comment-username-date">
                <div className="comment-date">{"date"}</div>
              </div>
              <div className="comment-content">{"Content"}</div>
              <div className="comment-username">{"UserName"}</div>
              <hr />
            </div>
          ))}

          {/* 
          page(현재 페이지)와 pageCount(총 페이지 갯수)가 같으면 서버에서
          모든 댓글을 가져온 상태이므로 댓글 더보기 버튼이 보이지 않게 한다.
          page의 초기 상태가 1이기 때문에 컴포넌트가 마운트 된 후 첫페이지를 가져오고 만약 pageCount가 5이고
          현재 page가 4라면 버튼을 누르는 순간 page가 5가되어 마지막 페이지의 데이터를 가져온다.
         */}
          <div
            className="comments-footer"
            onClick={() => {
              setPage(page + 1)
            }}
          >
            댓글 더보기
            <KeyboardArrowDownIcon />
          </div>
        </CommentsBody>
      </CommentsWrapper>

      {/*modal*/}
      {/* <Dialog open={show}>
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
            <div className="modal-title">로그인이 필요합니다</div>
            <div className="modal-content">
              로그인 페이지로 이동하시겠습니까?
            </div>
            <div className="modal-button">
              <Button
                variant="outlined"
                color="error"
                onClick={() => goLogin()}
              >
                예
              </Button>
              <Button
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
      </Dialog> */}
    </>
  )
}

export default Comments
