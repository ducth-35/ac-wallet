import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAngleDoubleUpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4.688L3.781 16.905l1.438 1.407L16 7.53l10.781 10.782 1.438-1.407L16 4.688zm0 7L3.781 23.905l1.438 1.407L16 14.53l10.781 10.781 1.438-1.406L16 11.688z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAngleDoubleUpSolid;
