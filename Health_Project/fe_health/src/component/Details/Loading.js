import { css, keyframes } from "@emotion/css"

const loadingOverlaySpinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingOverlay = () => (
  <div
    className={css`
      width: 300px;
      height: 280px;
      top: 0;
      left: 0;
      border-radius: 30px;
      background-color: rgba(255, 255, 255, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <div
      className={css`
        border: 6px solid white;
        border-radius: 50%;
        border-color: white white transparent transparent;
        animation: ${loadingOverlaySpinnerAnimation} 1s linear infinite;
      `}
    />
  </div>
)

export default LoadingOverlay
