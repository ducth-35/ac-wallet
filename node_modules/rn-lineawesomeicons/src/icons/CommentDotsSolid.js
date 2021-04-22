import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCommentDotsSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 5v18h5v5.078L14.352 23H29V5H3zm2 2h22v14H13.648L10 23.918V21H5V7zm5 5a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm6 0a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm6 0a1.999 1.999 0 100 4 1.999 1.999 0 100-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCommentDotsSolid;
