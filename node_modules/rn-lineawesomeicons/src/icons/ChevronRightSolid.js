import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChevronRightSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12.25 2.594l-.719.687-3.594 3.625-.687.688.688.718L15.625 16l-7.688 7.688-.687.718.688.688 3.593 3.625.719.687.719-.687 12-12 .687-.719-.687-.719-12-12-.719-.687zm0 2.844L22.813 16 12.25 26.563l-2.188-2.188 7.688-7.656.719-.719-.719-.719-7.688-7.656 2.188-2.188z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChevronRightSolid;
