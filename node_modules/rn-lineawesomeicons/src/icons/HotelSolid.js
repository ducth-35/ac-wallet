import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHotelSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10 4L8 6l2 2 2-2-2-2zm2 2l2 2 2-2-2-2-2 2zm4 0l2 2 2-2-2-2-2 2zm4 0l2 2 2-2-2-2-2 2zm2 2H5v20h22V8h-5zM7 10h18v16h-6v-5h-6v5H7V10zm2 2v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM9 15v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM9 18v2h2v-2H9zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM9 21v2h2v-2H9zm12 0v2h2v-2h-2zm-6 2h2v3h-2v-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHotelSolid;
