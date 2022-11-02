import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import TotalPage from "./component"
import Navigation from "./component/navigation"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./theme"
import { useDispatch, useSelector } from "react-redux"

const anchors = [
  "MainPage",
  "StrengthPage",
  "ReviewPage",
  "MapPage",
  "QuestionPage",
]

const FullpageWrapper = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  return (
    <>
      <ReactFullpage
        slidesNavigation="true"
        slidesNavPosition="bottom"
        anchors={anchors}
        licenseKey="1EB53BF6-00984973-A88B8092-A6220857"
        sectionsColor={[
          `black`,
          `${theme.backgroundColor}`,
          `${theme.backgroundColor}`,
          `${theme.backgroundColor}`,
          `${theme.backgroundColor}`,
        ]}
        onLeave={(origin, destination, direction) => {}}
        render={({ state, fullpageApi }) => {
          return <TotalPage />
        }}
      />

      <Navigation />
    </>
  )
}

function App() {
  const theme = useSelector((state) => state.theme)

  return (
    <ThemeProvider theme={theme.darkmode === true ? darkTheme : lightTheme}>
      <FullpageWrapper />
    </ThemeProvider>
  )

  //-------방법1------------

  // const form = new FormData();
  // form.append('name', 'veneas');
  // form.append('food', 'cake');

  // useEffect(() => {
  //   axios({
  //     url: '/test',
  //     method: 'post',
  //     data: form
  //   })
  //     .then(function a(response) {
  //       console.log(response)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  // console.log("pp");

  //-------방법2------------

  //   // message 초기값 설정 (""로 설정)
  //   const [message, setMessage] = useState("");

  //   // useEffect(함수, 배열) : 컴포넌트가 화면에 나타났을 때 자동 실행
  //   useEffect(() => {
  //     // fetch(url, options) : Http 요청 함수
  //     fetch("/api/getRequest")
  //       .then(response => response.text())
  //       .then(message => {
  //         setMessage(message);
  //       });
  //   }, [])
  // //d
  //   return (
  //     <div >
  //         <p>
  //           돌아온거 : {message}
  //         </p>
  //     </div>
  //   );
}

export default App
