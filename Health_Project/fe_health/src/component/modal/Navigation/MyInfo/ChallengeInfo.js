import styled from "styled-components"
import BatteryGauge from "react-battery-gauge"
import { PushUp, SitUp, Squat } from "../../../../image/index.js"
import { Pushupgauge } from "../Challenge/PushupTodoList/PushupGauge.js"
import { Situpgauge } from "../Challenge/SitupTodoList/SitupGauge.js"
import { Squatgauge } from "../Challenge/SquatTodoList/SquatGauge.js"

const ChallengeIcon = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 5px;
  left: 20px;
`

const BatteryContainer = styled.div`
  width: 400px;
  height: 110px;
  position: relative;
  border-radius: 30px;
  border: 2px solid black;
  background-color: #57e9e1;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`

const TitleText = styled.div`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  position: absolute;
  top: 5px;
  margin-left: 100px;
`

const ChallengeInfo = () => {
  return (
    <>
      <BatteryContainer>
        <ChallengeIcon src={PushUp} />
        <TitleText>팔굽혀펴기</TitleText>
        <BatteryGauge
          maxValue={Pushupgauge === 0 ? 1000000 : Pushupgauge}
          animated={true}
          style={{
            height: "70px",
            position: "absolute",
            top: "30px",
            marginLeft: "100px",
          }}
        />
      </BatteryContainer>

      <BatteryContainer>
        <ChallengeIcon src={SitUp} />
        <TitleText>윗몸일으키기</TitleText>
        <BatteryGauge
          maxValue={Situpgauge === 0 ? 1000000 : Situpgauge}
          animated={true}
          style={{
            height: "70px",
            position: "absolute",
            top: "30px",
            marginLeft: "100px",
          }}
        />
      </BatteryContainer>

      <BatteryContainer>
        <ChallengeIcon src={Squat} />
        <TitleText>스쿼트</TitleText>
        <BatteryGauge
          maxValue={Squatgauge === 0 ? 1000000 : Squatgauge}
          animated={true}
          style={{
            height: "70px",
            position: "absolute",
            top: "30px",
            marginLeft: "100px",
          }}
        />
      </BatteryContainer>
    </>
  )
}

export default ChallengeInfo
