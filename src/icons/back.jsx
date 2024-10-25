import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 16}
      height={props.height || 16}
      viewBox="0 0 50 50"
      {...props}
    >
      <Path d="M23 15c5.11.899 7.756 4.204 11.313 7.75l1.994 1.883c4.577 4.534 4.577 4.534 5.04 7.863-2.1 3.904-5.056 6.749-8.222 9.816l-1.934 1.956C26.394 49 26.394 49 23 49c.36-5.048 3.044-7.522 6.563-10.813l1.576-1.521A448.896 448.896 0 0135 33c-1.998-4.96-6.044-7.995-9.883-11.563C23 19 23 19 23 15z" />
    </Svg>
  );
}

export default ArrowRight;
