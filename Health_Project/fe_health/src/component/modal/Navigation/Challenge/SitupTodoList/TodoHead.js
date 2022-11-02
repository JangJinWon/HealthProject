import React from "react"
import styled from "styled-components"
import { useTodoState } from "./TodoContext"
import SitupGauge from "./SitupGauge.js"

const TodoHeadBlock = styled.div`
  width: 640px;
  height: 80px;
  padding-top: 10px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    position: absolute;
    top: 10px;
    left: 280px;
    margin: 0;
    font-size: 20px;
    color: #343a40;
  }
  .day {
    position: absolute;
    top: 40px;
    left: 320px;
    margin-top: 10px;
    color: #868e96;
    font-size: 17px;
    font-weight: bold;
  }
  .tasks-left {
    position: absolute;
    top: 80px;
    left: 30px;
    color: #20c997;
    font-size: 15px;
    font-weight: bold;
  }
  .tasks-right {
    position: absolute;
    top: 80px;
    right: 30px;
    color: #20c997;
    font-size: 15px;
    font-weight: bold;
  }
`

let battery = 0,
  result = 0

function Bat(gauge, total, success) {
  // 성공 갯수를 퍼샌트로 변환하는 함수
  gauge = Math.floor((parseInt(success) / parseInt(total)) * 100)
  return gauge
}

function TodoHead() {
  const todos = useTodoState()
  const undoneTasks = todos.filter((todo) => todo.id)
  const success = todos.filter((todo) => todo.success)

  result = Bat(battery, undoneTasks.length, success.length)

  const today = new Date()
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" })

  return (
    <>
      <TodoHeadBlock>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
        <div className="tasks-left">총 챌린지 갯수: {undoneTasks.length}</div>
        <div className="tasks-right">챌린지 성공 갯수: {success.length}</div>
      </TodoHeadBlock>
      <SitupGauge total={undoneTasks.length} value={result} />
    </>
  )
}

export default TodoHead
