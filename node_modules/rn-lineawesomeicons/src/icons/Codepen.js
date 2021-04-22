import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCodepen(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 2.844l-.563.375-12 8.031-.437.281v8.938l.438.281 12 8.031.562.375.563-.375 12-8.031.437-.281V11.53l-.438-.281-12-8.031L16 2.844zm-1 3.062v5.438l-5.156 3.469-4.031-2.72L15 5.907zm2 0l9.188 6.188-4.032 2.719L17 11.342V5.907zm-1 7.188L20.344 16 16 18.906 11.656 16 16 13.094zm-11 .844L8.063 16 5 18.063v-4.125zm22 0v4.124L23.937 16 27 13.937zm-17.125 3.25L15 20.655v5.438l-9.188-6.188 4.063-2.718zm12.25 0l4.063 2.718L17 26.094v-5.438l5.125-3.468z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCodepen;
