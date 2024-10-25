import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLeft(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="12px"
      viewBox="0 -960 960 960"
      width="12px"
      fill="white"
      {...props}
    >
      <Path d="M400-80L0-480l400-400 71 71-329 329 329 329-71 71z" />
    </Svg>
  )
}

export default ArrowLeft