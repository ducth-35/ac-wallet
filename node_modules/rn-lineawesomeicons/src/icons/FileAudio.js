import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFileAudio(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 3v26h20V3H6zm2 2h16v22H8V5zm8 4.719v6.469A2.95 2.95 0 0015 16c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3v-6.719l2.75.688.5-1.938L16 9.72zM15 18c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFileAudio;
