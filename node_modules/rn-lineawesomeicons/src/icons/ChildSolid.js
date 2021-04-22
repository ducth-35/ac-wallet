import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChildSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3c-2.75 0-5 2.25-5 5 0 1.57.766 2.957 1.906 3.875C11.176 12.93 10 14.832 10 17v3.406l.281.313L12 22.437V29h2v-5h4v5h2v-6.563l1.719-1.718.281-.313V17c0-2.168-1.176-4.07-2.906-5.125C20.234 10.957 21 9.57 21 8c0-2.75-2.25-5-5-5zm0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3-3-1.332-3-3 1.332-3 3-3zm0 8c2.219 0 4 1.781 4 4v2.563l-.438.437h-7.125L12 19.562V17c0-2.219 1.781-4 4-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChildSolid;
