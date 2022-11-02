import styled from "styled-components"

import {
  SignupImg,
  Age,
  Gender,
  Email,
  Phone,
} from "../../../../image/index.js"

import { UserImage, UserName, UserEmail, PhoneNumber } from "../Login/Login.js"

const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 20px;
`

const Box = styled.div`
  width: 400px;
  height: 50px;
  position: absolute;
  border-radius: 10px;
  border: 2px solid black;
  background-color: #57e9e1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
`

const NameBox = styled(Box)`
  top: 140px;
`

const AgeBox = styled(Box)`
  width: 197px;
  top: 195px;
  left: 3px;
`

const GenderBox = styled(Box)`
  width: 197px;
  top: 195px;
  right: 3px;
`

const EmailBox = styled(Box)`
  top: 250px;
`

const PhoneBox = styled(Box)`
  top: 305px;
`

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`

const Text = styled.div`
  font-size: 25px;
  font-weight: bold;
`

const UserInfo = () => {
  return (
    <>
      <UserIcon src={UserImage} />
      <NameBox>
        <Text>{UserName}</Text>
      </NameBox>
      <AgeBox>
        <Icon src={Age} />
        <Text>24</Text>
      </AgeBox>
      <GenderBox>
        <Icon src={Gender} />
        <Text>남자</Text>
      </GenderBox>
      <EmailBox>
        <Icon src={Email} />
        <Text>{UserEmail}</Text>
      </EmailBox>
      <PhoneBox>
        <Icon src={Phone} />
        <Text>010-1234-5678</Text>
      </PhoneBox>
    </>
  )
}

export default UserInfo
