import React from "react"
import styled, { css } from "styled-components"
import { MdDone, MdDelete } from "react-icons/md"
import { useTodoDispatch } from "./TodoContext"

import { Timer, WaterCup } from "../../../../image/index.js"

const Icon = styled.img`
  width: 32px;
  height: 32px;
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
  background-color: #b4fbff;
  border: 2px solid black;
  border-radius: 10px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  width: 46%;
  display: inline-block;
  border: 2px solid black;
  background-color: red;
`

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  flex: 1;
  color: #495057;
`

function TodoItem({ id, timertext, watertext }) {
  const dispatch = useTodoDispatch()
  const onRemove = () => dispatch({ type: "REMOVE", id })

  return (
    <TodoItemBlock>
      <Icon src={Timer} />
      <Text>{timertext}</Text>

      <Icon src={WaterCup} />
      <Text>{watertext}mL</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
}

export default React.memo(TodoItem)
