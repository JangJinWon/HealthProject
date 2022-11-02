import React, { useState } from "react"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import { format, addMonths, subMonths } from "date-fns"
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns"
import { isSameMonth, isSameDay, addDays, parse } from "date-fns"
// import Modal from "./Modal"

const Icons = styled(Icon)`
  :hover {
    cursor: pointer;
    color: #ffb2af;
  }
`

const Calendar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`

// Header
const Header = styled.div`
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
  .year {
    font-size: 30px;
    margin-right: 5px;
    font-weight: bold;
    margin-left: 170px;
  }
  .month {
    font-size: 30px;
    font-weight: bold;
    margin-left: 15px;
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

// Week
const Days = styled.div`
  width: 100%;
  height: 4%;
  display: flex;
  justify-content: center;
  background-color: #fad291;
`

const Col = styled.div`
  width: 14.2%;
  height: 70%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 5px;
  background-color: #fdf5d2;
`

// Days
const Day = styled.div`
  // 일 컨테이너
  width: 14.2%;
  height: 70%;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  margin: 0px 10px;
  box-shadow: 5px 5px 1px #333;
  :hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`

const ColCell = styled.div`
  // 일
  font-size: 20px;
  font-weight: bold;
  /* color: ${(props) => props.SelectDay}; */
`

const Row = styled.div`
  // 주 컨테이너
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  margin: 10px 0px;
`

const Body = styled.div`
  // 달 컨테이너
  width: 100%;
  height: 87.5%;
  border-radius: 0px 0px 30px 30px;
  background-color: #fad291;
`

// Header
const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <Header>
      <ColStart>
        <span className="year">{format(currentMonth, "yyyy")}년</span>
        <span className="month">{format(currentMonth, "M")}월</span>
      </ColStart>
      <ColEnd>
        <Icons icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
        <Icons icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
      </ColEnd>
    </Header>
  )
}

// Week
const RenderDays = () => {
  const days = []
  const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"]

  for (let i = 0; i < 7; i++) {
    days.push(<Col key={i}>{date[i]}</Col>) // push
  }

  return <Days>{days}</Days>
}

// Days
const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
  const monthStart = startOfMonth(currentMonth) // 달의 시작일
  const monthEnd = endOfMonth(monthStart) // 달의 마지막일
  const startDate = startOfWeek(monthStart) // 주의 시작일
  const endDate = endOfWeek(monthEnd) // 주의 마지막일
  // const [ModalIsOpen, setModalIsOpen] = useState(false) // CalendarModal

  const rows = []
  let days = []
  let day = startDate
  let formattedDate = ""

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d")
      const cloneDay = day
      days.push(
        <Day>
          <ColCell key={day} onClick={() => onDateClick(parse(cloneDay))}>
            <span>{formattedDate}</span>
          </ColCell>
        </Day>
      )
      day = addDays(day, 1)
    }
    rows.push(<Row key={day}>{days}</Row>) // Error
    days = []
  }
  return <Body>{rows}</Body>
}

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }
  const onDateClick = (day) => {
    setSelectedDate(day)
  }

  return (
    <Calendar>
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />

      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </Calendar>
  )
}
