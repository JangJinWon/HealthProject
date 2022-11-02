import React, { useEffect, useState, useId } from "react"
import styled from "styled-components"

import {
  Review1,
  Review2,
  Review3,
  Review4,
  Review5,
  User,
  CalendarTitle,
} from "../../image/index"

import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
  Scrollbar,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
} from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import "swiper/css/effect-cube"

SwiperCore.use([
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  Mousewheel,
  Scrollbar,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
]) // Swiper

const Container = styled.div`
  width: 1740px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.reviewPage.backgroundColor};
  @media screen and (min-width: 1920px) {
    width: 90%;
  }
`
const ReviewBottom = styled.div`
  position: relative;
  left: 0%;
  top: 88%;
  width: 1590px;
  height: 85px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.reviewPage.bottomBackgroundColor};
  border-radius: 0px 0px 30px 30px;
`

const NameBox = styled.div`
  position: absolute;
  left: 3%;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Name = styled.img`
  width: 50px;
  height: 50px;
`

const NameText = styled.div`
  margin-top: 5px;
  margin-left: 15px;
  font-size: 30px;
  font-family: "Jua", sans-serif;
`

const TimeBox = styled.div`
  position: absolute;
  right: 3%;
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Time = styled.img`
  /* margin-top: 3px; */
  margin-right: 15px;
  width: 50px;
  height: 50px;
`
const TimeText = styled.div`
  font-size: 30px;
  font-family: "Jua", sans-serif;
`

const Comments = styled.div`
  position: absolute;
  text-align: center;
  font-size: 20px;
  font-family: "Jua", sans-serif;
`

const Comments1 = styled(Comments)`
  top: 10%;
  right: 10%;
  color: #b4b4b4;
  font-size: 40px;
`

const Comments2 = styled(Comments)`
  top: 20%;
  right: 30%;
  color: #32aaff;
  font-size: 25px;
`

const Comments3 = styled(Comments)`
  top: 30%;
  right: 10%;
  color: #ef904c;
`
const Comments4 = styled(Comments)`
  top: 40%;
  right: 30%;
  color: #505050;
`

const Comments5 = styled(Comments)`
  top: 50%;
  right: 10%;
  color: #ffc300;
  font-size: 35px;
`

const Comments6 = styled(Comments)`
  top: 60%;
  right: 35%;
  color: #d151b7;
`

const Comments7 = styled(Comments)`
  top: 80%;
  right: 15%;
  color: #5ec75e;
  font-size: 35px;
`

const Review = styled.img`
  position: absolute;
  width: 600px;
  height: 720px;
`

// 현재 시간 값을 반환하는 함수
const TodayTime = () => {
  let now = new Date() // 현재 날짜 및 시간
  let todayMonth = now.getMonth() + 1 // 월
  let todayDate = now.getDate() // 일
  const week = ["일", "월", "화", "수", "목", "금", "토"]
  let dayOfWeek = week[now.getDay()] // 요일
  let hours = now.getHours() // 시간
  let minutes = now.getMinutes() // 분

  return (
    todayMonth +
    "월" +
    todayDate +
    "일 " +
    dayOfWeek +
    "요일 " +
    hours +
    "시" +
    minutes +
    "분"
  )
}

function ReviewSection() {
  return (
    <div className="section">
      <Container>
        <Swiper
          style={{
            backgroundColor: "#F0F0F0",
            width: "1600px",
            height: "820px",
            position: "absolute",
            top: "10%",
            borderRadius: "30px",
            borderWidth: "thick",
            borderStyle: "solid",
            borderColor: "pink",
            breakpoints: {
              1920: {
                //브라우저가 1920보다 클 때
              },
            },
          }}
          effect={"coverflow"}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={3000}
          slidesPerView={1}
          direction="vertical"
          mousewheel={true}
        >
          <SwiperSlide
            style={{
              marginTop: ".1%",
              marginLeft: ".3%",
            }}
          >
            <Review src={Review1} />

            <ReviewBottom>
              <NameBox>
                <Name src={User}></Name>
                <NameText>홍길동</NameText>
              </NameBox>
              <TimeBox>
                <Time src={CalendarTitle}></Time>
                <TimeText>{TodayTime()}</TimeText>
              </TimeBox>
            </ReviewBottom>

            <Comments1>오늘부터 시작합니다!</Comments1>
            <Comments2>
              이런 웹을 이제야 알았다니... 인생 손해봤습니다...
            </Comments2>
            <Comments3>이제부터 이 웹 자주 이용할 것 같네요~</Comments3>
            <Comments4>덕분에 5kg 감량 성공했네요~</Comments4>
            <Comments5>앞으로도 자주 이용할 것 같네요~</Comments5>
            <Comments6>
              커뮤니티 게시판으로 회원들이랑
              <br />
              소통할 수 있어서 좋네요~
            </Comments6>
            <Comments7>오늘부터 몸짱 될 것 같네요~</Comments7>
          </SwiperSlide>

          <SwiperSlide
            style={{
              marginTop: ".1%",
              marginLeft: ".3%",
            }}
          >
            <Review src={Review2} />

            <ReviewBottom>
              <NameBox>
                <Name src={User}></Name>
                <NameText>홍길동</NameText>
              </NameBox>
              <TimeBox>
                <Time src={CalendarTitle}></Time>
                <TimeText>{TodayTime()}</TimeText>
              </TimeBox>
            </ReviewBottom>

            <Comments1>여로모로 잘 사용중 이예요~</Comments1>
            <Comments2>친구 추전받고 오늘 알았습니다.</Comments2>
            <Comments3>좋아요 꾹!~</Comments3>
            <Comments4>
              커뮤니티 답변도 잘 받아주시고 챌린지도 편하게
              <br />
              시작할 수 있어서 좋았어요~~
            </Comments4>
            <Comments5>편하게 이용할 수 있어서 좋아요!</Comments5>
            <Comments6>챌린지로 운동하니깐 너무 재미 있어요~</Comments6>
            <Comments7>제 친구한테도 이 웹 추천하니 좋다고 하네요~</Comments7>
          </SwiperSlide>

          <SwiperSlide
            style={{
              marginTop: ".1%",
              marginLeft: ".3%",
            }}
          >
            <Review src={Review3} />

            <ReviewBottom>
              <NameBox>
                <Name src={User}></Name>
                <NameText>홍길동</NameText>
              </NameBox>
              <TimeBox>
                <Time src={CalendarTitle}></Time>
                <TimeText>{TodayTime()}</TimeText>
              </TimeBox>
            </ReviewBottom>

            <Comments1>오늘부터 시작합니다!</Comments1>
            <Comments2>
              이런 웹을 이제야 알았다니... 인생 손해봤습니다...
            </Comments2>
            <Comments3>이제부터 이 웹 자주 이용할 것 같네요~</Comments3>
            <Comments4>덕분에 5kg 감량 성공했네요~</Comments4>
            <Comments5>앞으로도 자주 이용할 것 같네요~</Comments5>
            <Comments6>
              커뮤니티 게시판으로 회원들이랑
              <br />
              소통할 수 있어서 좋네요~
            </Comments6>
            <Comments7>오늘부터 몸짱 될 것 같네요~</Comments7>
          </SwiperSlide>

          <SwiperSlide
            style={{
              marginTop: ".1%",
              marginLeft: ".3%",
            }}
          >
            <Review src={Review4} />

            <ReviewBottom>
              <NameBox>
                <Name src={User}></Name>
                <NameText>홍길동</NameText>
              </NameBox>
              <TimeBox>
                <Time src={CalendarTitle}></Time>
                <TimeText>{TodayTime()}</TimeText>
              </TimeBox>
            </ReviewBottom>

            <Comments1>여로모로 잘 사용중 이예요~</Comments1>
            <Comments2>친구 추전받고 오늘 알았습니다.</Comments2>
            <Comments3>좋아요 꾹!~</Comments3>
            <Comments4>
              커뮤니티 답변도 잘 받아주시고 챌린지도 편하게
              <br />
              시작할 수 있어서 좋았어요~~
            </Comments4>
            <Comments5>편하게 이용할 수 있어서 좋아요!</Comments5>
            <Comments6>챌린지로 운동하니깐 너무 재미 있어요~</Comments6>
            <Comments7>제 친구한테도 이 웹 추천하니 좋다고 하네요~</Comments7>
          </SwiperSlide>

          <SwiperSlide
            style={{
              marginTop: ".1%",
              marginLeft: ".3%",
            }}
          >
            <Review src={Review5} />

            <ReviewBottom>
              <NameBox>
                <Name src={User}></Name>
                <NameText>홍길동</NameText>
              </NameBox>
              <TimeBox>
                <Time src={CalendarTitle}></Time>
                <TimeText>{TodayTime()}</TimeText>
              </TimeBox>
            </ReviewBottom>

            <Comments1>오늘부터 시작합니다!</Comments1>
            <Comments2>
              이런 웹을 이제야 알았다니... 인생 손해봤습니다...
            </Comments2>
            <Comments3>이제부터 이 웹 자주 이용할 것 같네요~</Comments3>
            <Comments4>덕분에 5kg 감량 성공했네요~</Comments4>
            <Comments5>앞으로도 자주 이용할 것 같네요~</Comments5>
            <Comments6>
              커뮤니티 게시판으로 회원들이랑
              <br />
              소통할 수 있어서 좋네요~
            </Comments6>
            <Comments7>오늘부터 몸짱 될 것 같네요~</Comments7>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  )
}

export default ReviewSection
