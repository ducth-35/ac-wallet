import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVolumeDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 4.594L13.281 6.28 8.562 11H4v10h4.563l4.718 4.719L15 27.406V4.594zm-2 4.843v13.126L9.719 19.28 9.406 19H6v-6h3.406l.313-.281L13 9.438zm5.5 2.594l-1.438 1.438c.579.695.938 1.558.938 2.531 0 .973-.36 1.836-.938 2.531L18.5 19.97A5.956 5.956 0 0020 16c0-1.523-.563-2.91-1.5-3.969z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVolumeDownSolid;
