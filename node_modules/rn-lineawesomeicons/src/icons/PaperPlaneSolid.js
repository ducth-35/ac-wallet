import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPaperPlaneSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3.594 5.344l.437 1.875L5.97 16 4.03 24.781l-.437 1.875 1.781-.718 22-9L29.656 16l-2.281-.938-22-9-1.781-.718zm2.781 3.312L21.906 15H7.781L6.375 8.656zM7.781 17h14.125L6.375 23.344 7.781 17z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPaperPlaneSolid;
