import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFacebook(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.384 4 4 9.384 4 16s5.384 12 12 12 12-5.384 12-12S22.616 4 16 4zm0 2c5.535 0 10 4.465 10 10a9.976 9.976 0 01-8.512 9.879v-6.963h2.848l.447-2.893h-3.295v-1.58c0-1.2.395-2.267 1.518-2.267h1.805V9.652c-.317-.043-.988-.136-2.256-.136-2.648 0-4.2 1.398-4.2 4.584v1.923h-2.722v2.893h2.723v6.938A9.975 9.975 0 016 16c0-5.535 4.465-10 10-10z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFacebook;
