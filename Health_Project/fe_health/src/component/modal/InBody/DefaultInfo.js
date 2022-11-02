import React, { useCallback, useState } from "react"
import styled from "styled-components"

const UserInfo = styled.div`
  margin-top: 30px;
  width: 200px;
  height: 100px;
  border-radius: 30px;
  background-color: orange;
`

const Menu = styled.div`
  width: inherit;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`
const MenuTop = styled(Menu)`
  height: 30px;
  background-color: #51ffa6;
  border-radius: 30px 30px 0px 0px;
`

const MenuBottom = styled(Menu)`
  height: 70px;
  background-color: #c8c8c8;
  border-radius: 0px 0px 30px 30px;
`

const Text = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const RadioBox = styled.form`
  font-size: 20px;
  font-weight: bold;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`

const GenderBtn = styled.input`
  width: 20px;
  height: 20px;
`

const UserInput = styled.input`
  width: 150px;
  height: 30px;
  border-radius: 10px;
  font-size: 20px;
  text-align: right;
`

export let DefaultInfoArray = new Array(4)

const DefaultInfo = () => {
  const [Gender, setGender] = useState()
  const [AgeValue, setAgeValue] = useState()
  const [HeightValue, setHeightValue] = useState()
  const [WeightValue, setWeightValue] = useState()

  const onGenderChange = (e) => {
    if (e.target.id === "male") {
      DefaultInfoArray[0] = "남자"
    } else if (e.target.id === "female") {
      DefaultInfoArray[0] = "여자"
    }
    setGender(DefaultInfoArray[0])
  }

  const onAgeChange = (e) => {
    DefaultInfoArray[1] = e.target.value
    setAgeValue(DefaultInfoArray[1])
  }

  const onHeightChange = (e) => {
    DefaultInfoArray[2] = e.target.value
    setHeightValue(DefaultInfoArray[2])
  }

  const onWeightChange = (e) => {
    DefaultInfoArray[3] = e.target.value
    setWeightValue(DefaultInfoArray[3])
  }

  return (
    <>
      <UserInfo>
        <MenuTop>
          <Text>성별</Text>
        </MenuTop>
        <MenuBottom>
          <RadioBox>
            <GenderBtn
              type="radio"
              id="male"
              name="gender"
              value={Gender || ""}
              onChange={(e) => onGenderChange(e)}
            />
            남자
            <GenderBtn
              type="radio"
              id="female"
              name="gender"
              value={Gender || ""}
              onChange={(e) => onGenderChange(e)}
            />
            여자
          </RadioBox>
        </MenuBottom>
      </UserInfo>

      <UserInfo>
        <MenuTop>
          <Text>나이</Text>
        </MenuTop>
        <MenuBottom>
          <UserInput
            type="text"
            name="age"
            value={AgeValue || ""}
            placeholder="세(만)"
            onChange={(e) => onAgeChange(e)}
          />
        </MenuBottom>
      </UserInfo>

      <UserInfo>
        <MenuTop>
          <Text>키</Text>
        </MenuTop>
        <MenuBottom>
          <UserInput
            type="text"
            name="height"
            value={HeightValue || ""}
            placeholder="cm"
            onChange={(e) => onHeightChange(e)}
          />
        </MenuBottom>
      </UserInfo>

      <UserInfo>
        <MenuTop>
          <Text>몸무게</Text>
        </MenuTop>
        <MenuBottom>
          <UserInput
            type="text"
            name="weight"
            value={WeightValue || ""}
            placeholder="kg"
            onChange={(e) => onWeightChange(e)}
          />
        </MenuBottom>
      </UserInfo>
    </>
  )
}

export default DefaultInfo
