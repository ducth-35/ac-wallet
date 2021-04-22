import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAutoprefixer(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15.928 5l-7.26 22h3.496l1.236-4h5.205l1.233 4h3.496L15.928 5zm.04 9.69h.073L17.986 21h-3.968l1.95-6.31zM9.267 21l-7.795.559L1 22.668 8.559 23l.707-2zm13.431 0l.721 2L31 22.668l-.47-1.11L22.696 21z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAutoprefixer;
