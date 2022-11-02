import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import LoadingOverlay from "../Loading.js"
import PausedOverlay from "../Paused.js"

import review from "../../../video/ViewDetails/review.mp4"
import { ReviewImg } from "../../../image/index.js"

const Review = () => {
  return (
    <HoverVideoPlayer
      videoSrc={review}
      videoStyle={{
        width: "300px",
        height: "280px",
        borderRadius: "30px",
      }}
      pausedOverlay={<PausedOverlay image={ReviewImg} />}
      loadingOverlay={<LoadingOverlay />}
    />
  )
}

export default Review
