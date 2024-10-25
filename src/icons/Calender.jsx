import React from "react-native"
import Svg, { Path } from "react-native-svg"

function Calender(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
      <Path d="M16 3.875l3.688-.008C23 4 23 4 27 5v22H5V5c3.895-.974 7.005-1.133 11-1.125zM7 7v2h18V7H7zm0 4v14h18V11H7z" />
      <Path d="M17 21h2v2h-2v-2zM13 21h2v2h-2v-2zM9 21h2v2H9v-2zM21 17h2v2h-2v-2zM17 17h2v2h-2v-2zM13 17h2v2h-2v-2zM9 17h2v2H9v-2zM21 13h2v2h-2v-2zM17 13h2v2h-2v-2zM13 13h2v2h-2v-2z" />
    </Svg>
  )
}

export default Calender
