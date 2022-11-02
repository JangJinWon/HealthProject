import React, { useState, useEffect } from 'react';
import { ServiceCheckText, PersonInfoText } from './PromiseText';
import styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux';
import { signUpTrue } from '../../../../redux/modalTFselector';

const Title = styled.p`
  position: absolute;
  top: 6%;
  left: 40%;
  
  width: 500px;
  height: 300px;
  font-size: 70px;


`

const Context1Container = styled.div`
  position: absolute;
  top: 18%;
  left: 6%;

  width: 1200px;
  height: 200px;

  //background-color: blue;

  font-size: 20px;
  p{
    font-weight: bold;
    span{
      color: red;
    }
  }

`

const Context2Container = styled.div`
  position: absolute;
  top: 40%;
  left: 6%;

  width: 1200px;
  height: 200px;

  //background-color: blue;

  font-size: 20px;
  p{
    font-weight: bold;
    span{
      color: red;
    }
  }
`

const Context3Container = styled.div`
  position: absolute;
  top: 62%;
  left: 6%;

  width: 1200px;
  height: 240px;

  //background-color: blue;

  font-size: 20px;
  p{
    font-weight: bold;
    span{
      color: red;
    }
  }
`

const Context1 = styled.textarea`
  position: absolute;
  top: 15%;


  width: 1195px;
  height: 130px;

  white-space: pre;

  resize:none;
`

const Context2 = styled.textarea`
  position: absolute;
  top: 15%;


  width: 1195px;
  height: 130px;

  white-space: pre;

  resize:none;
`

const ServiceCheckContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 90%;
`

const PersonalInfoCheckContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 90%;
`

const MarketingCheckContainer = styled.div`
position: absolute;
  top: 90%;
  left: 90%;
;
`

const TableStyle = styled.div`
  position: absolute;
  top: 11%;

  width: 1200px;
  height: 70px;

  border: 1px solid black;
  background-color: white;

  table {
    width: 100%;
    border-top: 1px solid #444444;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #444444;
    padding: 10px;
  }
  th{
    font-weight: bold;
    background-color: white;
  }
  td{
    background-color: #ecdebd;
  }
  th:first-child{
    width: 20%;
  }
  th:last-child{
    width: 50%;
  }
  
`

const SubmitBtn = styled.button`
  position: absolute;
  top: 90%;
  left: 41%;
  border-radius: 10px;
  background-color: #efdad7;

  width: 250px;
  height: 80px;
  transition-duration: 0.3s;
  :hover{
    transition-duration: 0.3s;
    background-color: #886f6f;
    cursor: pointer;
  }
`

const SubminBtnText = styled.p`
  color: red;
  font-size: 50px;
`


function ServiceCheckForm() {

  const [serviceCheck, setServiceCheck] = useState(false)
  const [marketingCheck, setMarketingCheck] = useState(false)
  const [personalInfoCheck, setPersonalInfoCheck] = useState(false)
  const [isActive, setisActive] = useState(true)

  const modalTFselector = useSelector((state) => state.modalTFselector)
  const dispatch = useDispatch();

  const serviceBtnEvent = () => {
    setServiceCheck(!serviceCheck)
  }

  const personalInfoBtnEvent = () => {
    setPersonalInfoCheck(!personalInfoCheck)
  }

  const marketingBtnEvent = () => {
    setMarketingCheck(!marketingCheck)
  }





  const SubmitBtnClick = () => {
    console.log(modalTFselector);
    dispatch(signUpTrue())
    console.log(modalTFselector);
  }





  useEffect(() => {
    serviceCheck && marketingCheck && personalInfoCheck ? setisActive(false) : setisActive(true)
  }, [serviceCheck, marketingCheck, personalInfoCheck])

  return (
    <>
      <Title>이용약관</Title>

      <Context1Container >
        <p>이용약관 동의 <span>(필수)</span></p>
        <Context1 type="text" value={ServiceCheckText} readOnly={true} />

        <ServiceCheckContainer >
          <input type="checkbox"
            id="serviceCheck"
            checked={serviceCheck}
            onChange={serviceBtnEvent}
          />
          <label htmlFor="serviceCheck">동의합니다</label>
        </ServiceCheckContainer>
      </Context1Container>


      {/* <Context1 type="text" value={ServiceCheckText} readOnly={true} /> */}


      <Context2Container >
        <p>개인정보 이용 동의 <span>(필수)</span></p>
        <Context2 type="text" value={PersonInfoText} readOnly={true} />

        <PersonalInfoCheckContainer>
          <input type="checkbox"
            id="personalInfoCheck"
            checked={personalInfoCheck}
            onChange={personalInfoBtnEvent} />
          <label htmlFor='personalInfoCheck'>동의합니다</label>
        </PersonalInfoCheckContainer>

      </Context2Container>









      <Context3Container>
        <p>마케팅 동의 <span>(필수)</span></p>
        <TableStyle >
          <br />
          마케팅 정보 수신 여부 및 마케팅을 위한 개인정보 수집이용을 거부하실 수 있으며,
          거부 시에도 똑닥 서비스를 이용하실 수 있으나,
          동의를 거부한 경우 각종 소식 및 이벤트 참여에 제한이 있을 수 있습니다.<br /><br />
          <table>
            <thead>
              <tr>
                <th>개인정보 수집 항목</th>
                <th>개인정보 수집 이용 목적</th>
                <th>보유 및 이용기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이름, 휴대폰번호, 이메일, 주소</td>
                <td>- 이벤트 운영 및 광고성 정보 전송<br />- 서비스 관련 정보 전송</td>
                <td>이용자가 동의를 철회하거나, 탈퇴시까지 보유•이용</td>
              </tr>
            </tbody>
          </table>

        </TableStyle>

        <MarketingCheckContainer>
          <input type="checkbox"
            id="marketingCheck"
            checked={marketingCheck}
            onChange={marketingBtnEvent}
          />
          <label htmlFor="marketingCheck">동의합니다</label>
        </MarketingCheckContainer>
      </Context3Container>

      <SubmitBtn style={isActive ?
        { background: 'gray', transitionDuration: "0.3s", opacity: "0.5" }
        :
        {
          background: "#efdad7", border: '1px solid hotpink'
        }} onClick={SubmitBtnClick} disabled={isActive} >
        <SubminBtnText style={isActive ? { color: "#666666" } : { color: "#886f6f" }}>NEXT</SubminBtnText>
      </SubmitBtn>





    </>
  )


}



export default ServiceCheckForm;