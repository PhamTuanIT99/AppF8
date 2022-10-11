import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-native-paper';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonSubmit = props => {
  const {Method, Title, StylesCustom} = props;
  return (
    <TouchableOpacity
      onPress={() => Method}
      style={(styles.buttonTieptuc)}>
      <Text style={[styles.lable]}>{Title}</Text>
    </TouchableOpacity>
    // <View style={styles.buttonTieptuc}>
    //   <Button mode="contained" textAlign={'center'} onPress={Method}>
    //     {Title}
    //   </Button>
    // </View>
  );
};

ButtonSubmit.propTypes = {
  Method: PropTypes.func,
  Title: PropTypes.string,
};
export default ButtonSubmit;

const styles = StyleSheet.create({
  lable: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonTieptuc: {
    justifyContent: 'flex-end',
    marginBottom: 0,
    bottom: 0,
    backgroundColor: '#EB1B99',
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 30,
  },
});
