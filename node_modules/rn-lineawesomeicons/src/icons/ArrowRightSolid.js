import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowRightSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M18.719 6.781L17.28 8.22 24.063 15H4v2h20.063l-6.782 6.781 1.438 1.438 8.5-8.5.687-.719-.687-.719-8.5-8.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgArrowRightSolid;
