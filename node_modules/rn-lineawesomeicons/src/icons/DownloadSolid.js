import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDownloadSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 4v16.563L9.719 15.28 8.28 16.72l7 7 .719.687.719-.687 7-7-1.438-1.438L17 20.562V4h-2zM7 26v2h18v-2H7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDownloadSolid;
