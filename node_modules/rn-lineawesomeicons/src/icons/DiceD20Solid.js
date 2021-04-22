import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDiceD20Solid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3.719l-.625.5-8.25 6.406-.25.219-.094.312-2.75 10.094-.218.781L16 28.125l12.188-6.094-.22-.781-2.75-10.094-.093-.312-.25-.219-8.25-6.406-.625-.5zm-1 3.344V10h-3.781L15 7.062zm2 0L20.781 10H17V7.062zM9.062 12H14l-3.594 4.781L9.062 12zM18 12h4.938l-1.344 4.781L18 12zm-2 .688L20 18h-8l4-5.313zM7.812 15l1 3.5-2.25 1.125L7.813 15zm16.375 0l1.25 4.625-2.25-1.125 1-3.5zM12 20h8l-4 5.313L12 20zm-2.313.281l2.938 3.907L7.25 21.5l2.438-1.219zm12.626 0L24.75 21.5l-5.375 2.688 2.938-3.907z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDiceD20Solid;
