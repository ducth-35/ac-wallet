import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEnvelopeOpenSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3l-.531.344-12 7.812L3 11.47V29h26V11.469l-.469-.313-12-7.812L16 3zm0 2.375L26.188 12 16 18.594 5.812 12 16 5.375zM5 13.844l10.469 6.781.531.344.531-.344L27 13.844V27H5V13.844z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgEnvelopeOpenSolid;
