"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _useBlink = _interopRequireDefault(require("./hooks/useBlink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const TextWithCursor = textWithCursorProps => {
  const {
    children,
    cursorVisible,
    style,
    cursorProps,
    ...rest
  } = textWithCursorProps;
  const blinkVisible = (0, _useBlink.default)();
  const [isTyping, setIsTyping] = React.useState(false);
  const timeout = React.useRef();
  const cursorVisibility = React.useMemo(() => {
    return cursorVisible && (blinkVisible || isTyping);
  }, [blinkVisible, cursorVisible, isTyping]);
  const cursorFontSize = React.useMemo(() => {
    return _reactNative.StyleSheet.flatten([styles.text, style]).fontSize || 18;
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
  return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({
    style: [styles.text, style]
  }, rest), children, /*#__PURE__*/React.createElement(_reactNative.Text, _extends({}, cursorProps, {
    style: [{
      fontSize: cursorFontSize * (cursorFontSize < 26 ? 1.42 : 1.25)
    }, styles.cursor, cursorProps === null || cursorProps === void 0 ? void 0 : cursorProps.style, !cursorVisibility ? styles.cursorHidden : undefined]
  }), "|"));
};

const styles = _reactNative.StyleSheet.create({
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

var _default = TextWithCursor;
exports.default = _default;
//# sourceMappingURL=TextWithCursor.js.map