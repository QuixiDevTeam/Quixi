import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TextLink = ({onPress, text, style}) => {
  return(
      <TouchableOpacity onPress={onPress}>
          <Text style={[styles.link, style]}>{text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    link: {
        color: '#333',
        fontSize: 16,
    }
});

export default TextLink;