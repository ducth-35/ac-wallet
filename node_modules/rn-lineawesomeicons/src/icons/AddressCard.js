import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAddressCard(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 6v20h26V6H3zm2 2h22v16h-3.406c-.078-.137-.043-.324-.157-.438C23.06 23.184 22.523 23 22 23s-1.059.184-1.438.563c-.113.113-.078.3-.156.437h-8.812c-.078-.137-.043-.324-.156-.438-.38-.378-.915-.562-1.438-.562-.523 0-1.059.184-1.438.563-.113.113-.078.3-.156.437H5V8zm7 2c-2.2 0-4 1.8-4 4 0 1.113.477 2.117 1.219 2.844A5.041 5.041 0 007 21h2a3 3 0 016 0h2a5.041 5.041 0 00-2.219-4.156C15.523 16.117 16 15.114 16 14c0-2.2-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm7 1v2h6v-2h-6zm0 4v2h6v-2h-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAddressCard;
