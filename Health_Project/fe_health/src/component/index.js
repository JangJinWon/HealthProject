import MainSection from "./pages/Main"
//import StrengthSection from './pages/Strength'
import StrengthSection from "./pages/Strengths"
import ReviewSection from "./pages/Review"
import QuestionSection from "./pages/Question"
import MapSection from "./pages/Map"
import Navigation from "../component/navigation"
import { useState } from "react"
import React from "react"

const TotalPage = () => {
  return (
    <>
      <MainSection content="Slide down!" />
      <StrengthSection content="StrengthSection" />
      <ReviewSection content="ReviewSection" />
      <MapSection content="MapSection" />
      <QuestionSection content="QuestionSection" />
    </>
  )
}

export default TotalPage
