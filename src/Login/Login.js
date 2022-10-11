import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserSelector } from '../store/selector/PersistentStorageSelectors';
import { createPasswordSelector } from '../store/selector/PersistentStorageSelectors';
import { connectToRedux } from '../utils/ReduxConnect';
import PropTypes from 'prop-types';
import TextInputLogin from '../components/LoginComponents/TextInputLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, RadioButton } from 'react-native-paper';
LogBox.ignoreAllLogs();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Login({ userName, passWord }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  const SaveLogin = async () => {
    try {
      await AsyncStorage.setItem('FirstLogin', 'true');
    } catch (err) {
      alert(err);
    }
  };
  return (
    // <ImageBackground
    //   style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
    //   source={require('../../asset/bgrLogin.png')}>
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={[styles.lable, styles.loginStyle]}>Login</Text>
      <View>
        <Text style={styles.lable}>Username:</Text>
        <TextInputLogin
          typePassword={false}
          OnchaneText={values => setUsername(values)}
          valuesText={username}
          valuePlaceholder="User name"
        />
      </View>
      <View style={{ marginBottom: 30, marginTop: 15 }}>
        <Text style={styles.lable}>Password:</Text>
        <TextInputLogin
          typePassword={true}
          OnchaneText={values => setPassword(values)}
          valuesText={password}
          valuePlaceholder="Password"
        />
      </View>
      {/* <TouchableOpacity
        onPress={() => {
          if (username === userName && password === passWord) {
            navigation.navigate('Main');
            SaveLogin();
          } else {
            alert('Incorrect account or password');
          }
        }}
        style={styles.buttonLogin}>
        <Text style={styles.buttonsubmit}>SUBMIT</Text>
      </TouchableOpacity> */}

      <View style={styles.buttonTieptuc}>
        <Button
          mode="contained"
          textAlign={'center'}
          style={{ backgroundColor: '#0095f6' }}
          onPress={() => {
            if (username === userName && password === passWord) {
              navigation.navigate('Main');
              SaveLogin();
            } else {
              alert('Incorrect account or password');
            }
          }}
        >
          SUBMIT
        </Button>
      </View>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <Text style={{ borderBottomColor: 'black', borderBottomWidth: 0.6, flex: 0.4, marginBottom: 15, marginRight: 10 }}></Text>
        <Text style={{ alignSelf: 'center', fontSize: 15, color: 'black' }}>Orther</Text>
        <Text style={{ borderBottomColor: 'black', borderBottomWidth: 0.6, flex: 0.4, marginBottom: 15, marginLeft: 10 }}></Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.viewRegister}>
        <Text
          style={{ fontSize: 15 }}>
          Do not have an account?
        </Text>
        <Text
          style={[
            styles.textValues,
            { fontSize: 15, textDecorationLine: 'underline' },
          ]}>
          {' '}Register
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
    // </ImageBackground>
  );
}
Login.propTypes = {
  userName: PropTypes.object,
  passWord: PropTypes.object,
};
export default connectToRedux({
  component: Login,
  stateProps: state => ({
    userName: createUserSelector()(state),
    passWord: createPasswordSelector()(state),
  }),
});
const styles = StyleSheet.create({
  buttonTieptuc: {
    justifyContent: 'flex-end',
    marginBottom: 0,
    bottom: 0,
    width: '70%'
  },
  buttonsubmit: { textAlign: 'center', color: 'white', },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: windowWidth - 100,
  },
  lable: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  loginStyle: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 70,
  },
  buttonLogin: {
    backgroundColor: '#0095f6',
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 30,
  },
  textValues: {
    color: '#0095f6',
    fontSize: 15,
  },
  viewRegister: {
    alignItems: 'center',
    flexDirection: 'row'
  },
});
