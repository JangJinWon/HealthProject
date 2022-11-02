// TodoItem.js
import React from "react"
import styled from "styled-components"
import { MdDelete } from "react-icons/md"
import { useTodoDispatch } from "./BaordContext.js"
import DetailModal from "../Detail/BoardDetail.js"

const Remove = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 40px;
  &:hover {
    cursor: pointer;
    color: #ff6b6b;
  }
  display: none;
`

const CardWrapper = styled.div`
  flex-shrink: 0;
  margin: 15px;
  font-family: "Noto Sans KR", sans-serif;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 1s, height 1s, box-shadow 1s;
  cursor: pointer;

  &:hover {
    ${Remove} {
      display: initial;
    }
  }

  @media all and (min-width: 1024px) {
    width: 300px;
    height: 400px;

    &:hover {
      width: 310px;
      height: 410px;
      box-shadow: rgba(0, 0, 0, 0.9) 0px 22px 70px 4px;
    }
  }

  @media all and (max-width: 1024px) {
    width: 270px;
    height: 440px;

    &:hover {
      width: 280px;
      height: 450px;
      box-shadow: rgba(0, 0, 0, 0.9) 0px 22px 70px 4px;
    }
  }

  .card-header {
    width: 100%;
    height: 10%;
    border-radius: 10px 10px 0px 0px;
    position: relative;
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .card-body-img {
    width: 100%;
    height: 60%;

    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-body-text {
    flex-grow: 1;
    overflow-y: scroll;
    word-break: break-all;
    padding: 0.6rem;

    &::-webkit-scrollbar {
      display: none;
    }

    .card-body-text-title {
      font-size: 1.3rem;
      color: darkslategray;
      font-weight: bold;
    }
    .card-body-text-content {
    }
  }

  .card-footer {
    border-top: 0.5px solid black;
    padding: 0.6rem;
    font-weight: 200;
    display: flex;
    color: #282c34;
    font-size: 1.1rem;
    justify-content: space-between;
  }
`

const Card = ({ index, img_url, title, content, username, date }) => {
  const [DetailModalIsOpen, setDetailModalOpen] = React.useState(false)

  return (
    <>
      <CardWrapper
        onClick={() => {
          setDetailModalOpen(true)
        }}
      >
        <div className="card-header"></div>
        <div className="card-body-img">
          <img alt="" src={img_url} />
        </div>
        <div className="card-body-text">
          <div className="card-body-text-title">{title}</div>
          <div className="card-body-text-content">{content}</div>
        </div>
        <div className="card-footer">
          <div className="username">{username}</div>
          <div className="date">{date}</div>
        </div>
      </CardWrapper>

      <DetailModal
        index={index}
        img_url={img_url}
        title={title}
        content={content}
        username={username}
        date={date}
        isModal={DetailModalIsOpen}
        setModal={setDetailModalOpen}
      />
    </>
  )
}

export default React.memo(Card)
