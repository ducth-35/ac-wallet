function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import useBlink from './hooks/useBlink';

const TextWithCursor = textWithCursorProps => {
  const {
    children,
    cursorVisible,
    style,
    cursorProps,
    ...rest
  } = textWithCursorProps;
  const blinkVisible = useBlink();
  const [isTyping, setIsTyping] = React.useState(false);
  const timeout = React.useRef();
  const cursorVisibility = React.useMemo(() => {
    return cursorVisible && (blinkVisible || isTyping);
  }, [blinkVisible, cursorVisible, isTyping]);
  const cursorFontSize = React.useMemo(() => {
    return StyleSheet.flatten([styles.text, style]).fontSize || 18;
  }, [style]);
  React.useEffect(() => {
    setIsTyping(true);
    timeout.current = setTimeout(() => {
      setIsTyping(false);
    }, 500);
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [children]);
  return /*#__PURE__*/React.createElement(Text, _extends({
    style: [styles.text, style]
  }, rest), children, /*#__PURE__*/React.createElement(Text, _extends({}, cursorProps, {
    style: [{
      fontSize: cursorFontSize * (cursorFontSize < 26 ? 1.42 : 1.25)
    }, styles.cursor, cursorProps === null || cursorProps === void 0 ? void 0 : cursorProps.style, !cursorVisibility ? styles.cursorHidden : undefined]
  }), "|"));
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginTop: -3.2
  },
  cursor: {
    color: '#6495ed'
  },
  cursorHidden: {
    color: 'transparent'
  }
});
export default TextWithCursor;
//# sourceMappingURL=TextWithCursor.js.map