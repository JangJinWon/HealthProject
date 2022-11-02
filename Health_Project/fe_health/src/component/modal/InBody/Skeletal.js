import React, { useState } from "react"
import styled from "styled-components"

const MonthBox = styled.div`
  width: 90px;
  height: 130px;
  background-color: #ff9614;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 30px;
  margin-top: 10px;
`

const Month = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffdcdc;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`

const UserInput = styled.input`
  width: 60px;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
  text-align: right;
`

export let SkeletalMonths = new Array(12)

const Skeletal = () => {
  const [January, setJanuary] = useState()
  const [February, setFebruary] = useState()
  const [March, setMarch] = useState()
  const [April, setApril] = useState()
  const [May, setMay] = useState()
  const [June, setJune] = useState()

  const [July, setJuly] = useState()
  const [August, setAugust] = useState()
  const [September, setSeptember] = useState()
  const [October, setOctober] = useState()
  const [November, setNovember] = useState()
  const [December, setDecember] = useState()

  const onJanuaryChange = (e) => {
    SkeletalMonths[0] = e.target.value
    setJanuary(SkeletalMonths[0])
  }

  const onFebruaryChange = (e) => {
    SkeletalMonths[1] = e.target.value
    setFebruary(SkeletalMonths[1])
  }

  const onMarchChange = (e) => {
    SkeletalMonths[2] = e.target.value
    setMarch(SkeletalMonths[2])
  }

  const onAprilChange = (e) => {
    SkeletalMonths[3] = e.target.value
    setApril(SkeletalMonths[3])
  }

  const onMayChange = (e) => {
    SkeletalMonths[4] = e.target.value
    setMay(SkeletalMonths[4])
  }

  const onJuneChange = (e) => {
    SkeletalMonths[5] = e.target.value
    setJune(SkeletalMonths[5])
  }

  const onJulyChange = (e) => {
    SkeletalMonths[6] = e.target.value
    setJuly(SkeletalMonths[6])
  }

  const onAugustChange = (e) => {
    SkeletalMonths[7] = e.target.value
    setAugust(SkeletalMonths[7])
  }

  const onSeptemberChange = (e) => {
    SkeletalMonths[8] = e.target.value
    setSeptember(SkeletalMonths[8])
  }

  const onOctoberChange = (e) => {
    SkeletalMonths[9] = e.target.value
    setOctober(SkeletalMonths[9])
  }

  const onNovemberChange = (e) => {
    SkeletalMonths[10] = e.target.value
    setNovember(SkeletalMonths[10])
  }

  const onDecemberChange = (e) => {
    SkeletalMonths[11] = e.target.value
    setDecember(SkeletalMonths[11])
  }

  return (
    <>
      <MonthBox>
        <Month>1월</Month>
        <UserInput
          type="text"
          name="height"
          value={January || ""}
          placeholder="kg"
          onChange={(e) => onJanuaryChange(e)}
        />
      </MonthBox>

      <MonthBox>
        <Month>2월</Month>
        <UserInput
          type="text"
          name="height"
          value={February || ""}
          placeholder="kg"
          onChange={(e) => onFebruaryChange(e)}
        />
      </MonthBox>

      <MonthBox>
        <Month>3월</Month>
        <UserInput
          type="text"
          name="height"
          value={March || ""}
          placeholder="kg"
          onChange={(e) => onMarchChange(e)}
        />
      </MonthBox>

      <MonthBox>
        <Month>4월</Month>
        <UserInput
          type="text"
          name="height"
          value={April || ""}
          placeholder="kg"
          onChange={(e) => onAprilChange(e)}
        />
      </MonthBox>

      <MonthBox>
        <Month>5월</Month>
        <UserInput
          type="text"
          name="height"
          value={May || ""}
          placeholder="kg"
          onChange={(e) => onMayChange(e)}
        />
      </MonthBox>

      <MonthBox>
        <Month>6월</Month>
        <UserInput
          type="text"
          name="height"
          value={June || ""}
          placeholder="kg"
          onChange={(e) => onJuneChange(e)}
        />
      </MonthBox>

      <MonthBox>
        <Month>7월</Month>
        <UserInput
          type="text"
          name="height"
          value={July || ""}
          placeholder="kg"
          onChange={(e) => onJulyChange(e)}
        />
      </MonthBox>

      <MonthBox>
        <Month>8월</Month>
        <UserInput
          type="text"
          name="height"
          value={August || ""}
          placeholder="kg"
          onChange={(e) => onAugustChange(e)}
        />
      </MonthBox>

      <MonthBox>
        <Month>9월</Month>
        <UserInput
          type="text"
          name="height"
          value={September || ""}
          placeholder="kg"
          onChange={(e) => onSeptemberChange(e)}
        />
      </MonthBox>

      <MonthBox>
        <Month>10월</Month>
        <UserInput
          type="text"
          name="height"
          value={October || ""}
          placeholder="kg"
          onChange={(e) => onOctoberChange(e)}
        />
      </MonthBox>
      <MonthBox>
        <Month>11월</Month>
        <UserInput
          type="text"
          name="height"
          value={November || ""}
          placeholder="kg"
          onChange={(e) => onNovemberChange(e)}
        />
      </MonthBox>
      <MonthBox>
        <Month>12월</Month>
        <UserInput
          type="text"
          name="height"
          value={December || ""}
          placeholder="kg"
          onChange={(e) => onDecemberChange(e)}
        />
      </MonthBox>
    </>
  )
}

export default Skeletal
