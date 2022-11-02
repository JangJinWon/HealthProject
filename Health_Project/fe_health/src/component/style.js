
import styled from "styled-components"

export const Container = styled.div`
  width: 1740px;
  height: 100%;
  h3 {
    margin-top: 200px;
    font-style: italic;
  }
`

export const ItemBox = styled.div`
  width: 200px;
  height: 200px;
  backface-visibility: hidden;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid #333;
  background-color: purple;
  border-radius: 50%;
  font-size: 30px;
`

export const Answer = styled.div`
  width: 400px;
  height: 200px;
  left: 70px;
  background-color: orange;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  line-height: 60px;
  font-family: serif;
`

export const Back1 = styled(ItemBox)`
  position: absolute;
  top: 200px;
  left: 1150px;
  font-size: 15px;
  background-color: #333;
  color: #fff;
  transform: rotateY(-180deg);
`

export const Back2 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 950px;
  font-size: 15px;
  color: #fff;
  background-color: #333;
  transform: rotateY(-180deg);
`

export const Back3 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 1350px;
  font-size: 15px;
  color: #fff;
  background-color: #333;
  transform: rotateY(-180deg);
`

export const Back4 = styled(ItemBox)`
  position: absolute;
  top: 600px;
  left: 1150px;
  font-size: 15px;
  color: #fff;
  background-color: #333;
  transform: rotateY(-180deg);
`

export const btn = styled.div`
  width: 150px;
  height: 40px;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  :hover {
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }
`

export const Front1 = styled(ItemBox)`
  position: absolute;
  top: 200px;
  left: 1150px;
  transform: rotateY(0deg);
`

export const Front2 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 950px;
  transform: rotateY(0deg);
`

export const Front3 = styled(ItemBox)`
  position: absolute;
  top: 400px;
  left: 1350px;
  transform: rotateY(0deg);
`

export const Front4 = styled(ItemBox)`
  position: absolute;
  top: 600px;
  left: 1150px;
  font-size: 30px;
  transform: rotateY(0deg);
`

export const Inquiry = styled.div`
  width: 1400px;
  height: 200px;
  background-color: gray;
  color: #fff;
  position: absolute;
  bottom: 100px;
  left: 170px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Inquiry_btn = styled(btn)`
  position: absolute;
  bottom: 130px;
  left: 800px;
`

export const Navigation_bar = styled.div`
  width: 180px;
  height: 100%;
  background-color: orange;
  border: 4px solid black;
  position: fixed;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Questions = styled.div`
  width: 400px;
  height: 100px;
  position: relative;
  margin-top: 80px;
  left: 70px;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  font-family: serif;
`

export const Selecter1 = styled.div`
  :hover ${Front1} {
    transform: rotateY(180deg);
  }
  :hover ${Back1} {
    transform: rotateY(0deg);
  }
`

export const Selecter2 = styled.div`
  :hover ${Front2} {
    transform: rotateY(180deg);
  }
  :hover ${Back2} {
    transform: rotateY(0deg);
  }
`

export const Selecter3 = styled.div`
  :hover ${Front3} {
    transform: rotateY(180deg);
  }
  :hover ${Back3} {
    transform: rotateY(0deg);
  }
`

export const Selecter4 = styled.div`
  :hover ${Front4} {
    transform: rotateY(180deg);
  }
  :hover ${Back4} {
    transform: rotateY(0deg);
  }
`

export const SilentMoveTo = styled.div`
  position: absolute;
  right: 50px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 20px;
  border: 4px solid black;
  background-color: white;
  color: black;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`

export const SilentMoveTo1 = styled(SilentMoveTo)`
  top: 200px;
`

export const SilentMoveTo2 = styled(SilentMoveTo)`
  top: 350px;
`

export const SilentMoveTo3 = styled(SilentMoveTo)`
  top: 500px;
`

export const SilentMoveTo4 = styled(SilentMoveTo)`
  top: 650px;
`

export const SilentMoveTo5 = styled(SilentMoveTo)`
  top: 800px;
`

export const Swiper_button = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  position: absolute;
`

export const Swiper_next = styled(Swiper_button)`
  left: 650px;
  top: 470px;
  :hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`

export const Swiper_phone = styled.div`
  width: 350px;
  height: 600px;
  background-color: yellow;
  border: 4px solid #333;
  border-radius: 10%;
  position: absolute;
  top: 200px;
  left: 250px;
`

export const Swiper_prev = styled(Swiper_button)`
  left: 160px;
  top: 470px;
  :hover {
    cursor: pointer;
    background-color: #333;
    color: #fff;
  }
`

export const Swiper_slide = styled.div`
  width: 300px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 50px;
  left: 105px;
`
