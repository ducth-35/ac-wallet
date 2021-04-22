import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTencentWeibo(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17 2c-4.96 0-9 4.04-9 9 0 1.531.383 2.957 1.063 4.219.394-.715.843-1.387 1.312-2.031A6.874 6.874 0 0110 11c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7a6.869 6.869 0 01-2.313-.406c-.343.562-.66 1.148-.937 1.781A8.912 8.912 0 0017 20c4.96 0 9-4.04 9-9s-4.04-9-9-9zm0 6a3 3 0 00-3 3c0 .336.086.637.188.938C8.457 17.242 8 25.21 8 29h2c0-3.613.418-10.742 5.406-15.469A2.967 2.967 0 0017 14a3 3 0 000-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTencentWeibo;
