import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { Colors } from '@/themes';

import styles from './styles';

export const RounerInput = ({
  placeholder,
  title,
  onChangeText,
  containerStyle = {},
  ...otherInputProps
}) => {
  return (
    <View style={[styles.rounerContainer, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.rounerInput}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={Colors.GREY}
          clearButtonMode="while-editing"
          {...otherInputProps}
        />
      </View>
    </View>
  );
};
