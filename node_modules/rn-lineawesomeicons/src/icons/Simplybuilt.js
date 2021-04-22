import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSimplybuilt(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 7c-1.094 0-2 .906-2 2v14c0 1.094.906 2 2 2h20c1.094 0 2-.906 2-2V9c0-1.094-.906-2-2-2h-4c-1.094 0-2 .906-2 2v1h-8V9c0-1.094-.906-2-2-2H6zm0 2h4v3h12V9h4v14H6V9zm6 5.5a3 3 0 10.002 6.002A3 3 0 0012 14.5zm8 0a3 3 0 10.002 6.002A3 3 0 0020 14.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSimplybuilt;
