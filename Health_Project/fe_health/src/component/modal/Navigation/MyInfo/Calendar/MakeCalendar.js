import React from "react"
import Schedule from "./Schedule"
import { transString } from "./CalcDate"
import styled from "styled-components"

const Day = styled.div`
  // 일 컨테이너
  width: 70%;
  height: 70%;
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 5px;
  box-shadow: 5px 5px 1px #333;
  :hover {
    cursor: pointer;
    background-color: #ff9e7d;
  }
`

/*
 * 현재 날짜를 key값 형식으로 변환
 * key ex) 2021.10.11
 */
const returnIdx = (order, year, month, day) => {
  if (order === "PREV") {
    if (month === 0) {
      return transString(year - 1, 12, day)
    } else {
      return transString(year, month, day)
    }
  } else if (order === "NEXT") {
    if (month === 11) {
      return transString(year + 1, 1, day)
    } else {
      return transString(year, month + 2, day)
    }
  }

  return transString(year, month + 1, day)
}

const MakeCalendar = ({
  year,
  month,
  firstDay,
  lastDate,
  changeVisible,
  todo,
}) => {
  const result = []
  const makeDay = (week) => {
    const result = []
    // 첫 주
    if (week === 1) {
      const prevLastDate = parseInt(new Date(year, month, 0).getDate())
      for (let i = 1; i <= 7; i++) {
        // 저번 달 날짜
        if (i <= firstDay) {
          const now = prevLastDate - firstDay + i
          const idx = returnIdx("PREV", year, month, now)

          result.push(
            <td className="diff" onClick={() => changeVisible(idx)} key={idx}>
              <Day>{now} </Day>
              <div className="todo">{Schedule(idx, todo)}</div>
            </td>
          )
        }
        // 현재 달 날짜
        else {
          const now = i - firstDay
          const idx = returnIdx("", year, month, now)

          result.push(
            <td onClick={() => changeVisible(idx)} key={idx}>
              <Day>{now} </Day>
              <div className="todo">{Schedule(idx, todo)}</div>
            </td>
          )
        }
      }
    } else {
      const startDate = (week - 1) * 7

      for (let i = startDate; i <= week * 7 - 1; i++) {
        // 현재 달 날짜
        if (i - firstDay < lastDate) {
          const now = i - firstDay + 1
          const idx = returnIdx("", year, month, now)

          result.push(
            <td onClick={() => changeVisible(idx)} key={idx}>
              <Day>{now} </Day>
              <div className="todo">{Schedule(idx, todo)}</div>
            </td>
          )
        }
        // 다음 달 날짜
        else {
          const now = i - lastDate - firstDay + 1
          const idx = returnIdx("NEXT", year, month, now)

          result.push(
            <td className="diff" onClick={() => changeVisible(idx)} key={idx}>
              <Day>{now} </Day>
              <div className="todo">{Schedule(idx, todo)}</div>
            </td>
          )
        }
      }
    }

    return result
  }

  // 주 계산
  const week = Math.ceil((firstDay + lastDate) / 7)

  for (let i = 1; i <= week; i++) {
    result.push(<tr key={week + i}>{makeDay(i)}</tr>)
  }
  return result
}

export default MakeCalendar
