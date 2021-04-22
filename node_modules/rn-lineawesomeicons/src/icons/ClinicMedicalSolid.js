import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgClinicMedicalSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4.906L3.625 10.063l-.625.28V27h26V10.344l-.625-.281L16 4.905zm0 2.188l11 4.593V25H5V11.687l11-4.593zM15 13v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgClinicMedicalSolid;
