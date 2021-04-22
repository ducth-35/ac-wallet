import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCameraRetroSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11.5 6l-.313.406L10 8H9V7H5v1H3v18h26V8h-7l-1.188-1.594L20.5 6h-9zm1 2h7l1.188 1.594L21 10h6v4h-5.813c-1.043-1.785-2.98-3-5.187-3-2.207 0-4.145 1.215-5.188 3H5v-4h6l.313-.406L12.5 8zM23 11v2h2v-2h-2zm-7 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4zM5 16h5.094c-.055.32-.094.664-.094 1 0 3.3 2.7 6 6 6s6-2.7 6-6c0-.336-.04-.68-.094-1H27v8H5v-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCameraRetroSolid;
