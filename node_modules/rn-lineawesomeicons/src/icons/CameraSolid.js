import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCameraSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11.5 6l-.313.406L10 8H3v18h26V8h-7l-1.188-1.594L20.5 6h-9zm1 2h7l1.188 1.594L21 10h6v14H5V10h6l.313-.406L12.5 8zM8 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCameraSolid;
