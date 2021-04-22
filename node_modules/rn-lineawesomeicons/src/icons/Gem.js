import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGem(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9.531 6L4.22 12.375l-.5.594.5.656 11 14 .781 1 .781-1 11-14 .5-.656-.5-.594L22.47 6H9.53zm.938 2h3.656l-2.688 4H7.125l3.344-4zm7.406 0h3.656l3.344 4h-4.313l-2.687-4zM16 8.844L18.125 12h-4.25L16 8.844zM7.031 14h4.219l2.375 8.406L7.031 14zm6.282 0h5.343L16 23.313 13.312 14zm7.437 0h4.219l-6.594 8.375L20.75 14z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGem;
