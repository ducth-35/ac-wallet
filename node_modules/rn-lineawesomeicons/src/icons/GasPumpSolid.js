import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGasPumpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 5C6.355 5 5 6.355 5 8v19h14v-7h2v4c0 1.645 1.355 3 3 3s3-1.355 3-3V13.812a2.93 2.93 0 00-.875-2.093L21.406 7 20 8.406l2.844 2.844C21.769 11.707 21 12.766 21 14c0 1.645 1.355 3 3 3a2.95 2.95 0 001-.188V24c0 .566-.434 1-1 1-.566 0-1-.434-1-1v-4c0-1.094-.906-2-2-2h-2V8c0-1.645-1.355-3-3-3H8zm0 2h8c.566 0 1 .434 1 1v4H7V8c0-.566.434-1 1-1zm16 6c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1zM7 14h10v11H7V14z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGasPumpSolid;
