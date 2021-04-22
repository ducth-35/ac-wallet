import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBluetoothB(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M14 3.594v9.969L9.719 9.28 8.28 10.72 13.562 16l-5.28 5.281 1.437 1.438L14 18.437v9.97l1.719-1.688 5-5 .687-.719-.687-.719L16.437 16l4.282-4.281.687-.719-.687-.719-5-5L14 3.594zm2 4.844L18.563 11 16 13.563V8.436zm0 10L18.563 21 16 23.563v-5.125z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBluetoothB;
