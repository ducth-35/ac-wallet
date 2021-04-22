import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSortNumericDownAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8.5 5A3.514 3.514 0 005 8.5V9h2v-.5C7 7.625 7.625 7 8.5 7h1c.875 0 1.5.625 1.5 1.5 0 .457-.352.98-.938 1.344-1.234.758-2.316 1.242-3.218 1.75-.453.254-.867.496-1.219.875C5.273 12.848 5 13.418 5 14v1h8v-2H8.437c.735-.379 1.583-.758 2.688-1.438C12.141 10.927 13 9.845 13 8.5 13 6.578 11.422 5 9.5 5h-1zM22 5v18.688l-2.594-2.594L18 22.5l4.281 4.313.719.687.719-.688L28 22.5l-1.406-1.406L24 23.687V5h-2zM8.594 17l-.156.781s-.165.575-.563 1.157C7.477 19.52 6.98 20 6 20v2c1.375 0 2.32-.676 3-1.406V27h2V17H8.594z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSortNumericDownAltSolid;
