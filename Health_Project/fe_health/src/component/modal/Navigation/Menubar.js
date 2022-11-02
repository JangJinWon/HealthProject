import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"

import {
  LoginTrue,
  NoticeTrue,
  InformationTrue,
  ChallengeTrue,
  BoardTrue,
  MainPageTrue,
} from "../../navigation.jsx"
import { Logo } from "../../../image/index.js"

const MenuBar = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 300px;
  height: 890px;
  background-color: #efdad7;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`

const Symbol = styled.img`
  width: 200px;
  height: 150px;
  position: absolute;
  top: 3%;
  left: 15%;
`

const MenuBtn = styled.button`
  width: 300px;
  height: 100px;
  background-color: #886f6f;
  color: #fff;
  font-size: 30px;
  border-color: #c1a3a3;
  font-family: ${(props) => props.theme.font};
  &:hover {
    background-color: #fff;
    color: #808080;
    cursor: pointer;
  }
`

const MenuBtn1 = styled(MenuBtn)``

const MenuBtn2 = styled(MenuBtn)``

const MenuBtn3 = styled(MenuBtn)``

const MenuBtn4 = styled(MenuBtn)``

const MenuBtn5 = styled(MenuBtn)``

function Menubar() {
  const isLogin = useSelector((state) => state.authentificate).isLogin
  console.log(isLogin)
  //const [data, setData] = useState(selectorData)

  // let data = useSelector((state) => state)
  // useEffect(() => {
  //   setData(selectorData)
  //   console.log("Menubar:", selectorData)
  // }, [selectorData])

  return (
    <>
      <MenuBar>
        <Symbol src={Logo} />
        <MenuBtn1
          onClick={() => {
            // LoginTrue()
            isLogin ? MainPageTrue() : LoginTrue()
          }}
        >
          로그인
        </MenuBtn1>
        <MenuBtn2
          onClick={() => {
            NoticeTrue()
          }}
        >
          공지사항
        </MenuBtn2>
        <MenuBtn3
          onClick={() => {
            // InformationTrue()
            isLogin
              ? InformationTrue()
              : window.alert("로그인이 필요한 페이지 입니다.")
          }}
        >
          내정보
        </MenuBtn3>
        <MenuBtn4
          onClick={() => {
            // ChallengeTrue()
            isLogin
              ? ChallengeTrue()
              : window.alert("로그인이 필요한 페이지 입니다.")
          }}
        >
          챌린지
        </MenuBtn4>
        <MenuBtn5
          onClick={() => {
            // BoardTrue()
            isLogin
              ? BoardTrue()
              : window.alert("로그인이 필요한 페이지 입니다.")
          }}
        >
          소통 게시판
        </MenuBtn5>
      </MenuBar>
    </>
  )
}

export default Menubar
// export default React.memo(Menubar) //  컴포넌트에서 리 렌더링이 필요한 상황에서만 해주도록 설정을 할 수 있는데 이때 사용하는 함수가 바로 React.memo 함수입니다.
