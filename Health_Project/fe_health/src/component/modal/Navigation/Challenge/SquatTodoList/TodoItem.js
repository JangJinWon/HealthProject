import React from "react"
import styled, { css } from "styled-components"
import { MdDone, MdDelete } from "react-icons/md"
import { useTodoDispatch } from "./TodoContext"
import { Squat } from "../../../../../image/index.js"

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  margin-right: 20px;
`

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  flex: 1;
  color: #495057;
  ${(props) =>
    (props.success || props.fail) &&
    css`
      color: #ced4da;
    `}
`

const Btn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 15px;
  border: 1px solid #ced4da;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`

const SuccessBtn = styled(Btn)`
  ${(props) =>
    props.success &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`

function TodoItem({ id, success, text }) {
  const dispatch = useTodoDispatch()
  const onSuccess = () => dispatch({ type: "SUCCESS", id })
  const onRemove = () => dispatch({ type: "REMOVE", id })

  return (
    <TodoItemBlock>
      <Icon src={Squat} />
      <Text>{text}</Text>

      <SuccessBtn
        success={success}
        onClick={() => {
          onSuccess()
        }}
      >
        {success && <MdDone />} 성공
      </SuccessBtn>

      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
}

export default React.memo(TodoItem)
