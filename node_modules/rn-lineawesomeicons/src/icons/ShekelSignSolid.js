import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShekelSignSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7 5v22h2V7h1c3.879 0 7 3.121 7 7v7h2v-7c0-4.957-4.043-9-9-9H7zm15 0v20h-1c-3.879 0-7-3.121-7-7v-7h-2v7c0 4.957 4.043 9 9 9h3V5h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgShekelSignSolid;
