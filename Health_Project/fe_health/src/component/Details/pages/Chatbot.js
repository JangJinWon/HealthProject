import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import LoadingOverlay from "../Loading.js"
import PausedOverlay from "../Paused.js"

import chatbot from "../../../video/ViewDetails/chatbot.mp4"
import { ChatbotImg } from "../../../image/index.js"

const Chatbot = () => {
  return (
    <HoverVideoPlayer
      videoSrc={chatbot}
      videoStyle={{
        width: "300px",
        height: "280px",
        borderRadius: "30px",
      }}
      pausedOverlay={<PausedOverlay image={ChatbotImg} />}
      loadingOverlay={<LoadingOverlay />}
    />
  )
}

export default Chatbot
