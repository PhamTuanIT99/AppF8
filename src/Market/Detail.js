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
  ImageBackground,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import _ from 'lodash';
import Image360Viewer from '@hauvo/react-native-360-image-viewer';
import {ScrollView} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Detailproduct() {
  const route = useRoute();
  const {image, image1, image2, image3, image4, image5, image6, image7} =
    route.params;
  const images = _.reverse([
    require(`../../asset/balo1.png`),
    require(`../../asset/balo3.png`),
    require(`../../asset/balo4.png`),
    require(`../../asset/balo1.png`),
    require(`../../asset/balo3.png`),
    require(`../../asset/balo4.png`),
    require(`../../asset/balo1.png`),
    require(`../../asset/balo3.png`),
    require(`../../asset/balo4.png`),
  ]);
  const navigation = useNavigation();
  const TextView = ({titleT, content}) => {
    return (
      <View style={{marginTop: 15, marginLeft: 60}}>
        <Text style={styles.titleDetail}>{titleT}</Text>
        <Text
          style={[styles.titleDetail, {color: 'white', fontWeight: 'normal'}]}>
          {content}
        </Text>
      </View>
    );
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../asset/bgrLogin.png')}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{width: 15, height: 25, resizeMode: 'stretch'}}
              source={require('../../asset/prevIcon.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              paddingHorizontal: 20,
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
            }}>
            Detail
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MainHome')}>
            <Image
              style={{width: 25, height: 25, resizeMode: 'stretch'}}
              source={require('../../asset/delete.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Image360Viewer srcset={images} width={150} height={150} />
          </View>
          <Text style={styles.title}>Explorer Bag - Dark</Text>
          <View style={{marginTop: 20}}>
            <TextView
              titleT="CONTRACT ADDRESS:"
              content="09897asd87qwe8768qas8u81"
            />
            <TextView titleT="TOKEN ID:" content="128572819758491" />
            <TextView titleT="METADATA:" content="Ediable" />
            <TextView titleT="BLOCKCHANIN:" content="Etherium" />
            <TextView titleT="TOKEN STANDARD:" content="ERC-1155" />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.ViewBottom}>
              <Text style={[styles.titleDetail, {color: '#59FF92'}]}>
                RARITY:
              </Text>
              <Text
                style={[
                  styles.titleDetail,
                  {color: 'white', fontWeight: 'normal'},
                ]}>
                SPECIAL EDITION
              </Text>
              <Text style={[styles.titleDetail, {color: '#59FF92'}]}>
                22% IN COMMON
              </Text>
            </View>

            <View style={styles.ViewBottom}>
              <Text style={[styles.titleDetail, {color: '#2557F9'}]}>
                TAYPE:
              </Text>
              <Text
                style={[
                  styles.titleDetail,
                  {color: 'white', fontWeight: 'normal'},
                ]}>
                ENHANCEMENT
              </Text>
              <Text style={[styles.titleDetail, {color: '#2557F9'}]}>
                85% IN COMMON
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.ViewBottom}>
              <Text style={[styles.titleDetail, {color: '#FF6D73'}]}>
                LICENSE:
              </Text>
              <Text
                style={[
                  styles.titleDetail,
                  {color: 'white', fontWeight: 'normal'},
                ]}>
                NON ATTACHED
              </Text>
              <Text style={[styles.titleDetail, {color: '#FF6D73'}]}>
                17% IN COMMON
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
  },
  titleDetail: {
    color: '#FBCF43',
    fontWeight: 'bold',
    fontSize: 15,
  },
  ViewBottom: {
    marginTop: 15,
    marginLeft: 15,
    borderWidth: 1,
    padding: 10,
  },
});
