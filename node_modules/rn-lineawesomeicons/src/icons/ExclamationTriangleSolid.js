import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgExclamationTriangleSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3.219l-.875 1.5-12 20.781-.844 1.5H29.72l-.844-1.5-12-20.781-.875-1.5zm0 4L26.25 25H5.75L16 7.219zM15 14v6h2v-6h-2zm0 7v2h2v-2h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgExclamationTriangleSolid;
