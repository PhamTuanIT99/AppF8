import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React, { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Image, ImageBackground, ScrollView, StyleSheet,
  Text, TouchableOpacity, View, Dimensions
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const InfomationComponent = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isCheckRender, setIsCheckRender] = useState(true);
  const navigation = useNavigation();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setValue('dateofbirth', moment(date).format('DD/MM/YYYY'));
  };

  const {
    control,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isValid, isDirty },
    setValue,
    getValues,
  } = useForm();

  const checkValidateSubmit = async () => {
    try {
      await AsyncStorage.setItem('Info', JSON.stringify(getValues()));
      setIsCheckRender(!isCheckRender);
      navigation.goBack(null);
    } catch (err) {
      // Alert.alert('Error');
    }
  };



  const getItemLocal = async () => {
    try {
      const value = await AsyncStorage.getItem('Info');
      if (value !== null) {
        const newData = JSON.parse(value);
        setValue('fullname', newData.fullname);
        setValue('username', newData.username);
        setValue('story', newData.story);
        setValue('website', newData.website);
        setValue('image', newData.image);
      }
    } catch (err) {
      // Alert.alert('Thông báo', 'Đã có lỗi sảy ra vui lòng thử lại');
    }
  };

  useMemo(() => {
    getItemLocal();
  }, [isCheckRender]);

  const pickPicture = onChange => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      onChange();
      setValue('image', image);
    });
  };

  return (

    <>
      <View>
        <Controller
          control={control}
          name="image"
          defaultValue={{}}
          render={({ field: { onChange, onBlur, value, name, ref } }) => {
            return (
              <>
                <View style={{}}>
                  <Image
                    source={{ uri: `data:${value?.mime};base64,${value?.data}` }}
                    style={[
                      styles.labelimage,
                      {
                        paddingTop: 20,
                        height: 100,
                        width: 100,
                        borderRadius: 100,
                        padding: 20,
                      },
                    ]}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => pickPicture(onChange)}
                  style={{
                    padding: 20,
                    alignItems: 'center',
                    flexDirection: 'row',
                    alignSelf: 'center'

                  }}>
                  <Text
                    style={{ fontSize: 15, textDecorationLine: 'underline', color: '#0095f6' }}>
                    {' '}Change Image
                  </Text>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
      <View>
        <Controller
          control={control}
          name="fullname"
          defaultValue={'Daivid Beck'}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <View>
              <TextInput
                style={styles.textinput}
                label="Full Name"
                value={value}
                onChangeText={text => setValue('fullname', text)}
                mode="flat"
                onChange={onChange}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="usename"
          defaultValue={'Daivid'}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <View>
              <TextInput
                style={styles.textinput}
                label="User name"
                value={value}
                onChangeText={text => setValue('usename', text)}
                mode="flat"
                onChange={onChange}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="website"
          defaultValue={'abcdxyz.com'}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <View>
              <TextInput
                style={styles.textinput}
                label="Website"
                value={value}
                onChangeText={text => setValue('website', text)}
                mode="flat"
                onChange={onChange}
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="story"
          defaultValue={'#'}
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <View>
              <TextInput
                style={styles.textinput}
                label="Story"
                value={value}
                onChangeText={text => setValue('story', text)}
                mode="flat"
                onChange={onChange}
              />
            </View>
          )}
        />
      </View>
      <Button
        mode="contained"
        textAlign={'center'}
        style={{ backgroundColor: '#0095f6', }}
        onPress={handleSubmit(checkValidateSubmit)}
      >
        SUBMIT
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: windowWidth - 100,
  },
  viewinput: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  textgioitinh: {
    flex: 0.5,
    alignSelf: 'center',
  },
  labelgioitinhnam: {
    flex: 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  labelgioitinhnu: {
    flex: 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  gioitinh: {
    alignSelf: 'center',
  },
  textcreatimage: {
    flex: 1,
    alignSelf: 'center',
  },
  labelimage: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  textinput: { backgroundColor: '#fff' },
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

export default InfomationComponent;
