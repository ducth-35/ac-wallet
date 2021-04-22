import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWarehouseSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4.906L3.625 10.063l-.625.28V27h26V10.344l-.625-.281L16 4.905zm0 2.188l11 4.593V25h-2V14H7v11H5V11.687l11-4.593zM9 16h14v9H9v-9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgWarehouseSolid;
