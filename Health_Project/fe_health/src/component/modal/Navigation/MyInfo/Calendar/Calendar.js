import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import MakeCalendar from "./MakeCalendar.js"
import { DECREMENT, INCREMENT, MODAL } from "../../../../../redux/calendar.js"
import { Icon } from "@iconify/react"
import CalInModal from "./CalInModal.js"

const MyCalendar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`

// Header
const Head = styled.div`
  width: 100%;
  height: 7%;
  border-radius: 30px 30px 0px 0px;
  display: flex;
`

const ColStart = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 30px 0px 0px 0px;
  background-color: #fdebc8;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 30px;
    font-weight: bold;
    margin-left: 170px;
  }
`

const ColEnd = styled.div`
  width: 20%;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  background-color: #fdebc8;
  font-size: 30px;
  border-radius: 0px 30px 0px 0px;
`

const MoveButton = styled(Icon)`
  :hover {
    cursor: pointer;
    color: #ffb2af;
  }
`

const CalendarStyle = styled.div`
  body {
    height: 100%;
    width: 100%;
    background: #d8dbe0;
  }

  .Calendar {
    height: 100%;
    width: 100%;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .header p {
    margin-top: 45px;
    font-size: 30px;
  }

  .choice {
    align-items: center;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: #768192;
    outline: none;
    cursor: pointer;
    background: #d8dbe0;
    margin: 30px;
  }
  .choice:hover {
    background: black;
  }

  input {
    padding: 3px;
    border-radius: 5px;
    border: 1px solid black;
    height: 25px;
  }
`

const TableStyle = styled.table`
  width: 100%;
  height: 670px;
  table-layout: fixed;
  text-align: center;
  border-collapse: collapse;
  font-size: 19px;
  // Week
  thead {
    width: 100%;
    height: 4%;
    background-color: #fad291;
    td {
      font-size: 20px;
      font-weight: bold;
      padding: 5px;
      border-radius: 15px;
      background-color: #fdf5d2;
      box-shadow: 2px 2px 1px #333;
    }
  }
  td:first-child {
    color: red;
  }
  td:last-child {
    color: blue;
  }
  table tbody td:hover {
    font-weight: bold;
  }
  li {
    list-style: none;
  }

  .diff {
    color: rgba(0, 0, 0, 0.3) !important;
  }
`

export let CalInModalTrue

const Calendar = () => {
  const [CalInModalIsOpen, setCalInModalIsOpen] = useState(false)

  CalInModalTrue = function CalInModalTrue() {
    setCalInModalIsOpen(true)
  }

  const state = useSelector((state) => state.calendar)
  const dispatch = useDispatch()

  //지금까지 state값 가져오기함. 이제 날짜 관련 << 이거해야함

  //날짜 관련
  const year = state.year
  const month = state.month
  const yearMonth = year + "." + (month + 1)
  const lastDate = parseInt(new Date(year, month + 1, 0).getDate())
  const firstDay = parseInt(new Date(year, month, 1).getDay())

  // 일정
  const todo = state.modal.schedule
  //console.log(todo);

  const index = state.modal.index
  //console.log(index);

  // Month 감소
  const onDecreases = () => {
    dispatch(DECREMENT())
    console.log("back")
  }

  // Month 증가
  const onIncreases = () => {
    dispatch(INCREMENT())
    console.log("front")
  }
  // Modal Active
  const changeVisible = (key) => {
    // setModal(false)
    CalInModalTrue()
    dispatch(MODAL(key))
  }

  return (
    <>
      <MyCalendar>
        <Head>
          <ColStart>
            <span>{yearMonth}</span>
          </ColStart>
          <ColEnd>
            <MoveButton icon="bi:arrow-left-circle-fill" onClick={onDecreases}>
              &lt;
            </MoveButton>
            <MoveButton icon="bi:arrow-right-circle-fill" onClick={onIncreases}>
              &gt;
            </MoveButton>
          </ColEnd>
        </Head>
        <CalendarStyle>
          <TableStyle>
            <thead>
              <tr>
                <td>Sun</td>
                <td>Mon</td>
                <td>Tue</td>
                <td>Wed</td>
                <td>Thu</td>
                <td>Fri</td>
                <td>Sat</td>
              </tr>
            </thead>
            <tbody>
              {MakeCalendar({
                year,
                month,
                firstDay,
                lastDate,
                changeVisible,
                todo,
              })}
            </tbody>
          </TableStyle>
        </CalendarStyle>
      </MyCalendar>
      <CalInModal isModal={CalInModalIsOpen} setModal={setCalInModalIsOpen} />
    </>
  )
}

export default Calendar
