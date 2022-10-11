import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {Radio} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);
  const PickImage = async () => {
    ImagePicker.openPicker({
      width: '100%',
      height: '100%',
      cropping: false,
    }).then(image => {
      setImage(image.sourceURL);
    });
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#3490e7',
          height: 60,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            marginBottom: 5,
            fontSize: 16,
            color: 'white',
            fontWeight: '600',
          }}>
          ADD POST
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 25,
        }}>
        <TouchableOpacity onPress={PickImage} style={styles.ViewImage}>
          {image === null ? (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../../asset/image.png')}
              />
              <Text>choese to add a photo</Text>
            </View>
          ) : (
            <Image source={{uri: image}} style={styles.ViewImage} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.styleTitle}>
        <Text style={styles.textTitle}>Title</Text>
        <TextInput
          placeholder="Title"
          style={styles.styleInput}
          onChangeText={value => setTitle(value)}>
          <Text>{title}</Text>
        </TextInput>
      </View>
      <View style={styles.styleTitle}>
        <Text style={styles.textTitle}>Body</Text>
        <TextInput
          multiline
          placeholder="Body"
          style={[styles.styleInput, {height: 170, paddingTop: 10}]}
          onChangeText={value => setBody(value)}>
          <Text>{body}</Text>
        </TextInput>
      </View>
      <View style={styles.styleTitle}>
        <TouchableOpacity style={styles.btnsubmit}>
          <Text
            style={[
              styles.textTitle,
              {
                textAlign: 'center',
                color: 'white',
                paddingVertical: 10,
                fontWeight: '600',
                fontSize: 16,
              },
            ]}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    paddingVertical: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ViewImage: {
    borderRadius: 10,
    width: windowWidth - 50,
    height: windowHeight / 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3490e7',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  styleTitle: {
    width: windowWidth,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3490e7',
    paddingVertical: 6,
    marginLeft: 6,
  },
  styleInput: {
    padding: 15,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#3490e7',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  btnsubmit: {
    backgroundColor: '#3490e7',
    borderRadius: 15,
    shadowColor: '#3490e7',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});
