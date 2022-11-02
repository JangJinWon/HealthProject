import { css } from "@emotion/css"

const PausedOverlay = (props) => (
  <div>
    <img
      src={props.image}
      alt=""
      className={css`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 30px;
      `}
    />
    <div
      className={css`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        className={css`
          font-family: sans-serif;
          text-align: center;
          font-weight: bold;
          font-size: 30px;
          h1 {
            color: #ff28a7;
          }
          p {
            margin-top: 20px;
            color: #5050ff;
          }
        `}
      >
        <h1>The video is paused.</h1>
        <p>Hover to play!</p>
      </div>
    </div>
  </div>
)

export default PausedOverlay
