import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGg(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12 6.594l-.719.687-8 8-.687.719.687.719 8 8 .719.687.719-.687 4-4 .687-.719-.687-.719-5-5-1.438 1.438L14.562 20 12 22.563 5.437 16 12 9.437l1.281 1.282L14.72 9.28l-2-2L12 6.594zm8 0l-.719.687-4 4-.687.719.687.719 5 5 1.438-1.438L17.437 12 20 9.437 26.563 16 20 22.563l-1.281-1.282-1.438 1.438 2 2 .719.687.719-.687 8-8 .687-.719-.687-.719-8-8L20 6.594z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGg;
