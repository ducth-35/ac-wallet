import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLiraSignSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11 4v5.906L8 11v2l3-1.094v2L8 15v2l3-1.094V28h1c5.762 0 10.828-3.848 12.344-9.406l.625-2.344-1.938-.5-.625 2.313c-1.187 4.363-4.976 7.359-9.406 7.78V15.189L19 13v-2l-6 2.188v-2L19 9V7l-6 2.188V4h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLiraSignSolid;
