import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgObjectGroup(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v4h1v14H5v4h4v-1h14v1h4v-4h-1V9h1V5h-4v1H9V5H5zm4 3h14v1h1v14h-1v1H9v-1H8V9h1V8zm1 2v8h4v4h8v-8h-4v-4h-8zm2 2h4v4h-4v-4zm6 4h2v4h-4v-2h2v-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgObjectGroup;
