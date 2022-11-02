import React from "react"
import BatteryGauge from "react-battery-gauge"
import styled from "styled-components"

const Container = styled.div`
  width: 400px;
  height: 470px;
  position: absolute;
  top: -20px;
  left: -460px;
  border-radius: 50px;
  background-color: #ffb6c1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export let Squatgauge = 0

const SquatGauge = (props) => {
  Squatgauge = props.total === 0 ? 1000000 : 5000 / props.value
  return (
    <>
      <Container>
        <BatteryGauge
          maxValue={Squatgauge}
          orientation={"vertical"}
          animated={true}
          style={{
            width: "400px",
            height: "400px",
          }}
        />
      </Container>
    </>
  )
}

export default SquatGauge
