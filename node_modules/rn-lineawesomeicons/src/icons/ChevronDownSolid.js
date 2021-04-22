import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChevronDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6.906 6.594l-.718.687-3.907 3.907-.687.718L16 26.312l14.406-14.406-.687-.719-3.907-3.906-.718-.687L16 15.687 6.906 6.595zm-.031 2.843l8.406 8.376.719.687.719-.688 8.406-8.375 2.438 2.438L16 23.469 4.437 11.875l2.438-2.438z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChevronDownSolid;
