import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMagento(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3.227L5 10.174V22.44l3 1.713V11.826l8-5.053 8 5.053V24.15l3-1.712V10.174L16 3.227zm-2 8.351l-3 1.887v12.404l5 2.86 5-2.86V13.484L18 11.6v12.53l-2 1.142-2-1.141V11.578z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMagento;
