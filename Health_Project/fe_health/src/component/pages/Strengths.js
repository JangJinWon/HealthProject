import React from "react"
import styled from "styled-components"

// modal
import InBody from "./Strength/Inbody.js"
import Training from "./Strength/Training.js"

const Container = styled.div`
  width: 1740px;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.strengthPage.backgroundColor};
  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`

function StrengthSection() {
  return (
    <div className="section">
      <Container>
        <InBody />
        <Training />
      </Container>
    </div>
  )
}

export default StrengthSection
