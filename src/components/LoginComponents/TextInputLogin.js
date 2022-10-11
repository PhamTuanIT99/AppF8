import React from 'react';
import {TextInput, StyleSheet, Text, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
const windowWidth = Dimensions.get('window').width;
function TextInputLogin({
  OnchaneText,
  valuesText,
  valuePlaceholder,
  typePassword,
}) {
  return (
    <TextInput
      secureTextEntry={typePassword}
      returnKeyType="next"
      autoCapitalize="none"
      placeholder={valuePlaceholder}
      onChangeText={OnchaneText}
      style={styles.inputStyle}>
      <Text style={styles.textValues}>{valuesText}</Text>
    </TextInput>
  );
}
TextInputLogin.propTypes = {
  OnchaneText: PropTypes.func.isRequired,
  valuesText: PropTypes.object,
  valuePlaceholder: PropTypes.string,
  typePassword: PropTypes.bool,
};
export default TextInputLogin;
const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderColor: 'black',
    borderBottomWidth: 1,
    width: windowWidth - 100,
    color: 'black',

  },
  textValues: {
    color: 'black',
    fontSize: 15,
  },
});
