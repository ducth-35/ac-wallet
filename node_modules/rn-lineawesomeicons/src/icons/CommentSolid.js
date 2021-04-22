import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCommentSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 6v20h9.586L16 29.414 19.414 26H29V6H3zm2 2h22v16h-8.414L16 26.586 13.414 24H5V8zm4 3v2h14v-2H9zm0 4v2h14v-2H9zm0 4v2h10v-2H9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCommentSolid;
