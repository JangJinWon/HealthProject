import { useState } from "react"
import CalendarInModal from "react-modal"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import {
  MODALCHECK,
  MODAL_END_DATE,
  MODAL_SELECT_DATE,
} from "../../../../../redux/calendar.js"
import SelectDatePicker from "./DatePicker/SelectDatePicker.js"

import DatePicker, {
  DateObject,
  getAllDatesInRange,
} from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"

import { INSERT } from "../../../../../redux/calendarToDo"

const ModalHead = styled.div`
  width: 100%;
  height: 40px;
  background-color: blue;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 28px;
  }
`

const SettingContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 2%;
  width: 46%;
  height: 80%;
  background-color: skyblue;
`

const SelectedDay = styled.div`
  position: absolute;
  top: 8%;
  left: 40px;
  width: 100px;
  height: 100px;
  font-size: 40px;
  color: white;
`

const PrevButton = styled.button`
  position: absolute;
  top: 30px;
  right: 300px;

  position: absolute;
  width: 100px;
  height: 30px;
  top: 10%;
  right: 130px;

  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background: rgb(6, 14, 131);
  background: linear-gradient(50deg, brown 10%, white 100%);
  border: none;

  :hover {
    background: pink;
  }
`

const NextButton = styled.button`
  position: absolute;
  width: 80px;
  height: 30px;
  top: 10%;
  right: 30px;

  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background: rgb(6, 14, 131);
  background: linear-gradient(50deg, brown 10%, white 100%);
  border: none;

  :hover {
    background: pink;
  }
`

const TitleBox = styled.input`
  position: absolute;
  top: 50%;
  left: 40px;
  width: 84%;
  height: 30px;

  background-color: pink;
`

const ContentBox = styled.input`
  position: absolute;
  top: 60%;
  left: 40px;
  width: 84%;
  height: 100px;
  background-color: pink;
`

const EndDateText = styled.p`
  position: absolute;
  top: 63%;
  right: 30px;
  color: yellow;
`

const EndDayCheckBox = styled.input`
  position: absolute;
  top: 62.5%;
  right: 31%;
  width: 17px;
  height: 17px;
  color: yellow;
`

const SelectDateText = styled.div`
  position: absolute;
  top: 63%;
  left: 60px;
  color: yellow;
`

const SelectDayCheckBox = styled.input`
  position: absolute;
  top: 62.5%;
  left: 7.2%;
  width: 17px;
  height: 17px;
  color: yellow;
`

const SelectDateSet = styled.input`
  position: absolute;
  top: 62.5%;
  left: 7.2%;
  width: 17px;
  height: 17px;
  color: yellow;
`

const FieldSet = styled.fieldset`
  position: absolute;
  top: 18%;
  left: 7.2%;

  /* align-content: space-evenly; */

  height: 140px;
  width: 290px;
  color: yellow;
  font-size: 20px;
  font-family: sans-serif;
  border: 5px solid red;
  border-radius: 5px;
`

const Field2Set = styled.fieldset`
  position: absolute;
  top: 18%;
  left: 70%;
  text-align: center;

  height: 140px;
  width: 100px;
  color: yellow;
  font-size: 20px;
  font-family: sans-serif;
  border: 5px solid red;
  border-radius: 5px;
`

const InfoText = styled.legend`
  margin-left: calc(50% - 35px - 8px);
  color: #fff;
  font-size: 20px;
  display: flex;
`

const RadioBox = styled.div`
  background-color: blue;
  display: flex;

  align-items: center;
  height: 30px;
  margin-top: 10px;
  width: 100%;
`

const SelectDateBox = styled.div`
  position: absolute;
  top: 31.5%;
  left: 29%;
`
const RangeDateBox = styled.div`
  position: absolute;
  top: 39.5%;
  left: 29%;
`

const AddButton = styled.button`
  position: absolute;
  top: 85%;
  left: 35%;
  height: 50px;
  width: 150px;
`

//-------------------------------------

const ScheduleContainer = styled.div`
  position: absolute;
  top: 15%;
  right: 2%;
  width: 46%;
  height: 80%;
  background-color: purple;
`

const CalInModal = ({ isModal, setModal }) => {
  const date = useSelector((state) => state.calendar)
  const dispatch = useDispatch()

  const yearMonth = date.year + "." + (date.month + 1)

  const [dates, setDates] = useState([
    new Date(),
    new DateObject({ year: 2020, month: 9, day: 8 }),
    "December 09 2020",
    1597994736000, //unix time in milliseconds (August 21 2020)
  ])
  const [dates2, setDates2] = useState([])
  const [allDates, setAllDates2] = useState([])

  const [changeVisible, setChangeVisible] = useState()

  let ddd = []
  const datecal = () => {
    ddd = date.modal.index
    console.log(ddd)
  }

  // 일정 입력
  const onSubmit = (e) => {
    e.preventDefault()

    // if (date.modal.s? != 0) {
    //   console.log("1");
    //   date.modal.schedule.length.map((item) => {
    //     console.log(item);
    //     dispatch(INSERT(item, e.target[0].value))
    //   })
    // }
    // else {
    //   console.log("2");
    //   dispatch(INSERT(date.modal.index, e.target[0].value))
    // }
  }

  // 일정 입력 취소 모달꺼라 굳이필요없음 아직
  const onCancel = () => {
    dispatch({ type: "MODAL" })
  }

  //console.log(dates.map((dates) => dates.format())); //선택일 배열
  //console.log(allDates.map((date2) => date2.format())); //종료일 배열

  const EndDateSet = () => {
    dispatch(MODAL_END_DATE())
    console.log()
  }

  const SelectedDateSet = () => {
    dispatch(MODAL_SELECT_DATE())
  }

  const settingDate = (e) => {
    switch (e.target.value) {
      case "nowDate":
        setChangeVisible("1")
        break

      case "selectedDate":
        setChangeVisible("2")
        break

      case "endDate":
        setChangeVisible("3")
        break

      default:
        break
    }
  }

  return (
    <CalendarInModal
      isOpen={isModal}
      onRequestClose={() => setModal(false)}
      ariaHideApp={false}
      style={{
        content: {
          overflow: "hidden",
          position: "relative",
          width: "1100px",
          height: "600px",
          left: "17%",
          top: "20%",
          borderRadius: "30px",
          backgroundColor: "white",
        },
      }}
    >
      <ModalHead>
        <p>{yearMonth}</p>
      </ModalHead>

      <SettingContainer>
        <SelectedDay>{date.modal.index}</SelectedDay>
        <PrevButton>이전날</PrevButton>
        <NextButton>다음날</NextButton>

        <form onSubmit={onSubmit}>
          <FieldSet>
            <InfoText align="center">날짜 설정</InfoText>
            <RadioBox onChange={settingDate.bind(this)}>
              <div>
                <input type="radio" value="nowDate" name="date" /> 현재일
              </div>
            </RadioBox>
            <RadioBox onChange={settingDate.bind(this)}>
              <div>
                <input type="radio" value="selectedDate" name="date" /> 선택일
              </div>
            </RadioBox>
            <RadioBox onChange={settingDate.bind(this)}>
              <div>
                <input type="radio" value="endDate" name="date" /> 종료일
              </div>
            </RadioBox>
          </FieldSet>

          <Field2Set>
            <InfoText align="center">색</InfoText>
          </Field2Set>

          {changeVisible == "1" ? (
            datecal()
          ) : changeVisible == "2" ? (
            <SelectDateBox>
              <DatePicker
                value={dates}
                onChange={setDates}
                format="MMMM DD YYYY"
                sort
                popperPlacement="auto"
                plugins={[<DatePanel style={{}} position="left" />]}
              />
            </SelectDateBox>
          ) : changeVisible == "3" ? (
            <RangeDateBox>
              <DatePicker
                range
                calendarPosition="top-left"
                fixMainPosition
                value={dates2}
                minDate={new DateObject().toFirstOfMonth()}
                maxDate={new DateObject().toLastOfMonth()}
                onChange={(dateObjects) => {
                  setDates2(dateObjects)
                  setAllDates2(getAllDatesInRange(dateObjects))
                }}
                plugins={[<DatePanel eachDaysInRange />]}
              />
            </RangeDateBox>
          ) : null}

          {/* <EndDateText>종료일 설정하기</EndDateText>
        <SelectDayCheckBox type="checkbox" onClick={SelectedDateSet} />

        <SelectDateText>선택일 설정하기</SelectDateText>
        <EndDayCheckBox type="checkbox" onClick={EndDateSet} /> */}

          <TitleBox placeholder="제목"></TitleBox>
          <ContentBox placeholder="여기"></ContentBox>

          <AddButton type="submit">추가하기</AddButton>
        </form>
      </SettingContainer>

      <ScheduleContainer></ScheduleContainer>
    </CalendarInModal>
  )
}

export default CalInModal
