import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Shareicon1(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#0c356a"
      {...props}
    >
      <Path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80z" />
    </Svg>
  )
}

export default Shareicon1