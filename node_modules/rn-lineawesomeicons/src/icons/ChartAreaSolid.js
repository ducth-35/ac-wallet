import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChartAreaSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M28 4.063l-1.625 1.25-4.625 3.625L16.156 8l-.375-.063-.344.22-5.687 3.78-4.563-.906L4 10.781V28h24V4.062zm-2 4.093v5.375l-4.219 3.344-5.468-1.813-.47-.156-.405.25-5.563 3.719L6 17.312V13.22l3.813.75.406.094.344-.22 5.656-3.78 5.625.937.437.063.344-.282L26 8.156zm0 7.938V26H6v-6.5l3.625 1.438.5.187.438-.281 5.624-3.75 5.5 1.843.5.188.438-.344L26 16.094z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChartAreaSolid;
