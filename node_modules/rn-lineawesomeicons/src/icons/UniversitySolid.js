import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUniversitySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3.875l-.438.219L5.563 9 5 9.281V11h22V9.281L26.437 9l-10-4.906L16 3.875zm0 2.25L21.875 9h-11.75L16 6.125zM7 12v10H6v2h20v-2h-1V12h-2v10h-2V12h-2v10h-2V12h-2v10h-2V12h-2v10H9V12H7zM4 25v2h24v-2H4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUniversitySolid;
