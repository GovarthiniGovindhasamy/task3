import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DropDown(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={props || 30} height={props || 30} viewBox="0 0 50 50">
      <Path 
        d="M4 9c3.353.576 4.938 1.593 7.25 4.063l1.578 1.66L14 16c2.88-1.174 4.343-2.35 6.563-4.625C23 9 23 9 26 9c-.575 3.746-2.136 5.625-4.75 8.313l-2.047 2.175C17 21 17 21 14.503 20.973c-2.979-1.158-4.592-2.562-6.816-4.848l-2.113-2.117C4 12 4 12 4 9z" 
        fill="black"  // Add black color here
      />
    </Svg>
  );
}

export default DropDown;
