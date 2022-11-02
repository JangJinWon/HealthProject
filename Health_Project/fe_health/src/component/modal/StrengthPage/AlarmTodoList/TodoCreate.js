import React, { useState } from "react"
import styled, { css } from "styled-components"
import { MdAdd } from "react-icons/md"
import { useTodoDispatch, useTodoNextId } from "./TodoContext"
import TimePicker from "react-time-picker"

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  z-index: 5;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  position: absolute;
`

const TimerInput = styled(TimePicker)`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  background: #f8f9fa;
`

const WaterInput = styled(Input)`
  right: 0px;
`

// const handleOnClick = () => {}

// const handleOnKeyPress = (e) => {
//   if (e.key === "Enter") {
//     handleOnClick()
//   }
// }

function TodoCreate() {
  const [open, setOpen] = useState(false)
  const [Watervalue, setWaterValue] = useState("")
  const [Timervalue, setTimerValue] = useState("10:00")

  const dispatch = useTodoDispatch()
  const nextId = useTodoNextId()

  const onToggle = () => setOpen(!open)
  const onWaterChange = (e) => setWaterValue(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault() // 새로고침 방지
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        timertext: Timervalue,
        watertext: Watervalue,
      },
    })
    setTimerValue("")
    setWaterValue("")
    setOpen(false)
    nextId.current += 1
  }

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <TimerInput
            onSubmit={onSubmit}
            onChange={setTimerValue}
            minuteStep={5}
            value={Timervalue}
          />
          <InsertForm onSubmit={onSubmit}>
            <WaterInput
              autoFocus
              placeholder="추가할 물의양을 입력하세요, 단위(mL)"
              onChange={onWaterChange}
              value={Watervalue}
              onSubmit={onSubmit}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  )
}

export default React.memo(TodoCreate)
