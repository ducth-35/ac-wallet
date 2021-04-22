import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTrademarkSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 8v2h4v13h2V10h4V8H3zm12 0v15h2V10.875l4.156 6.656.844 1.344.844-1.344L27 10.875V23h2V8h-2.563l-.28.469L22 15.125l-4.156-6.656L17.562 8H15z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTrademarkSolid;
