import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLanguageSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 4v18h6v6h18V10h-6V4H4zm2 2h14v4.563L10.562 20H6V6zm5 2v1H8v2h4.938c-.13 1.148-.481 2.055-1.063 2.688a4.54 4.54 0 01-.906-.407C10.266 12.863 10 12.418 10 12H8c0 1.191.734 2.184 1.719 2.844A8.272 8.272 0 018 15v2c1.773 0 3.25-.406 4.375-1.156.523.09 1.055.156 1.625.156v-1.875c.543-.91.832-1.973.938-3.125H16V9h-3V8h-2zm10.438 4H26v14H12v-4.563L21.438 12zM20 13.844l-.938 2.844-2 6-.062.156V24h2v-.875l.031-.125h1.938l.031.125V24h2v-1.156l-.063-.157-2-6L20 13.845zm0 6.281l.281.875h-.562l.281-.875z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLanguageSolid;
