import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLocationArrowSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4.438l-.906 2.187-8 19-.907 2.125 2.157-.813L16 24.063l7.656 2.875 2.157.813-.907-2.125-8-19L16 4.437zm0 5.093l6.188 14.719-5.844-2.188-.344-.125-.344.125-5.844 2.188L16 9.531z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLocationArrowSolid;
