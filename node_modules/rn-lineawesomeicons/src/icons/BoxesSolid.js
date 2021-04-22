import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBoxesSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10 4v11h12V4H10zm2 2h2v4l2-2 2 2V6h2v7h-8V6zM3 17v11h12V17H3zm14 0v11h12V17H17zM5 19h2v4l2-2 2 2v-4h2v7H5v-7zm14 0h2v4l2-2 2 2v-4h2v7h-8v-7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBoxesSolid;
