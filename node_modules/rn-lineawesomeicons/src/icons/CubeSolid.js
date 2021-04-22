import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCubeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4.406l-.406.188-10 4.5-.594.25V22.03l.5.282 10 5.562.5.281.5-.281 10-5.563.5-.28V9.343l-.594-.25-10-4.5L16 4.406zm0 2.188l7.688 3.437L16 13.875l-7.688-3.844L16 6.594zm-9 5.031l8 4v9.656l-8-4.437v-9.219zm18 0v9.219l-8 4.437v-9.656l8-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCubeSolid;
