import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUploadSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3.594l-.719.687-7 7L9.72 12.72 15 7.438V24h2V7.437l5.281 5.282 1.438-1.438-7-7L16 3.594zM7 26v2h18v-2H7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUploadSolid;
