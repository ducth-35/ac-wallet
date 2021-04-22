import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLandmarkSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3.906L3.625 9.062 3 9.345V12h2v11H3v5h26v-5h-2V12h2V9.344l-.625-.281L16 3.905zm0 2.188L25.375 10H6.625L16 6.094zM7 12h2v11H7V12zm4 0h2v11h-2V12zm4 0h2v11h-2V12zm4 0h2v11h-2V12zm4 0h2v11h-2V12zM5 25h22v1H5v-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLandmarkSolid;
