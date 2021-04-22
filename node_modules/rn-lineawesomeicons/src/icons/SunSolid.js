import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSunSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 3v5h2V3h-2zM7.5 6.094L6.094 7.5l3.531 3.563 1.438-1.438L7.5 6.094zm17 0l-3.563 3.531 1.438 1.438L25.906 7.5 24.5 6.094zM16 9c-3.855 0-7 3.145-7 7s3.145 7 7 7 7-3.145 7-7-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zM3 15v2h5v-2H3zm21 0v2h5v-2h-5zM9.625 20.938L6.094 24.5 7.5 25.906l3.563-3.531-1.438-1.438zm12.75 0l-1.438 1.437 3.563 3.531 1.406-1.406-3.531-3.563zM15 24v5h2v-5h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSunSolid;
