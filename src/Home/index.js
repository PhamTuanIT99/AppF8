import React, {useState} from 'react';
import {
  ImageBackground,
  FlatList,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Home() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
          LIST FRIEND
        </Text>
      </View>

      <FlatList
        data={Data}
        style={{marginVertical: 5}}
        renderItem={({item}) => (
          <SafeAreaView style={styles.viewItem}>
            <TouchableOpacity
              onPress={() => Alert.alert('Your friends')}
              activeOpacity={0.6}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.avt}
                  style={{width: 40, height: 40, borderRadius: 50}}
                />
                <View style={{marginLeft: 5}}>
                  <Text style={{marginLeft: 5, fontSize: 16}}>{item.name}</Text>
                  <Text style={{marginLeft: 5, fontSize: 12, color: 'gray'}}>
                    {item.id}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 3,
                }}>
                {item.online === 'Online' ? (
                  <View
                    style={{
                      width: 6,
                      height: 6,
                      backgroundColor: 'green',
                      borderRadius: 6,
                      marginTop: 2,
                      marginRight: 3,
                    }}></View>
                ) : null}
                <Text style={{fontSize: 12}}>{item.online}</Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        )}
      />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  viewItem: {
    backgroundColor: 'white',
    flexDirection: 'column',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    marginVertical: 5,
    shadowColor: '#3490e7',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 5,
  },
  textBuy: {
    paddingVertical: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  styleTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 3,
  },
  styleBody: {
    fontSize: 15,
    color: 'gray',
    paddingVertical: 5,
  },
  ViewComment: {
    fontSize: 15,
    paddingTop: 10,
  },
});
const Data = [
  {
    avt: require('../../asset/avt1.jpeg'),
    name: 'Emma',
    title: 'Welcome',
    body: 'Browse to node_modules/react-native-vector-icons and drag the folder Fonts (or just the ones you want) to your project in Xcode.',
    image: require('../../asset/bgrHome.jpeg'),
    sumView: 1220,
    like: 120,
    comment: 80,
    id: '#178462',
    online: 'Online',
  },
  {
    avt: require('../../asset/hotgirl1.jpg'),
    name: 'Elizabeth',
    title: 'Welcome',
    body: 'Browse to node_modules/react-native-vector-icons and drag the folder Fonts (or just the ones you want) to your project in Xcode.',
    image: require('../../asset/hotgirl1.jpg'),
    sumView: 1220,
    like: 120,
    comment: 80,
    id: '#542644',
    online: 'Online',
  },

  {
    avt: require('../../asset/hotgirl3.jpg'),
    name: 'Jessica',
    title: 'Welcome',
    body: 'Browse to node_modules/react-native-vector-icons and drag the folder Fonts (or just the ones you want) to your project in Xcode.',
    image: require('../../asset/bgrHome.jpeg'),
    sumView: 1220,
    like: 120,
    comment: 80,
    id: '#623352',
    online: 'Online',
  },
  {
    avt: require('../../asset/avt2.jpeg'),
    name: 'Emily',
    title: 'Hello',
    body: 'Edit Info.plist and add a property called Fonts provided by application',
    image: require('../../asset/bgrHome4.jpeg'),
    sumView: 324,
    like: 223,
    comment: 33,
    id: '#232565',
    online: '10 minutes ago',
  },
  {
    avt: require('../../asset/avt3.jpeg'),
    name: 'Jennifer',
    title: 'Hi Hi Hi',
    body: 'file at the root of your react-native project with:',
    image: require('../../asset/bgrHome3.jpeg'),
    sumView: 245,
    like: 15,
    comment: 23,
    id: '#025847',
    online: '39 minutes ago',
  },
  {
    avt: require('../../asset/avt4.jpeg'),
    name: 'Laura',
    title: 'I am FFA',
    body: 'For React Native > 0.60, when pods are installed/updated auto linking will automatically add all fonts to the Build Phases,',
    image: require('../../asset/bgrHome2.jpeg'),
    sumView: 820,
    like: 1256,
    id: '#012543',
    comment: 44,
    online: '42 minutes ago',
  },
  {
    avt: require('../../asset/hotgirl2.jpg'),
    name: 'David',
    title: 'Welcome',
    body: 'Browse to node_modules/react-native-vector-icons and drag the folder Fonts (or just the ones you want) to your project in Xcode.',
    image: require('../../asset/bgrHome.jpeg'),
    sumView: 1220,
    like: 120,
    comment: 80,
    id: '#178462',
    online: '2 days ago',
  },
  {
    avt: require('../../asset/avt5.jpeg'),
    name: 'Sarah',
    title: 'I am FFA',
    body: 'For React Native > 0.60, when pods are installed/updated auto linking will automatically add all fonts to the Build Phases,',
    image: require('../../asset/bgrHome1.jpeg'),
    sumView: 3233,
    like: 211,
    id: '#055896',
    comment: 424,
    online: '5 days ago',
  },
  {
    avt: require('../../asset/hotgirl4.jpg'),
    name: 'Laura',
    title: 'I am FFA',
    body: 'For React Native > 0.60, when pods are installed/updated auto linking will automatically add all fonts to the Build Phases,',
    image: require('../../asset/bgrHome2.jpeg'),
    sumView: 820,
    like: 1256,
    id: '#220124',
    comment: 44,
    online: '20 days ago',
  },
  {
    avt: require('../../asset/hotgirl5.jpg'),
    name: 'Pham Tuan',
    title: 'Welcome',
    body: 'Browse to node_modules/react-native-vector-icons and drag the folder Fonts (or just the ones you want) to your project in Xcode.',
    image: require('../../asset/bgrHome.jpeg'),
    sumView: 1220,
    like: 120,
    comment: 80,
    id: '#844512',
    online: '21 days ago',
  },
  {
    avt: require('../../asset/avt5.jpeg'),
    name: 'Maria',
    title: 'I am FFA',
    body: 'For React Native > 0.60, when pods are installed/updated auto linking will automatically add all fonts to the Build Phases,',
    image: require('../../asset/bgrHome1.jpeg'),
    sumView: 3233,
    like: 211,
    id: '#888457',
    comment: 424,
    online: '24 days ago',
  },
  {
    avt: require('../../asset/avt4.jpeg'),
    name: 'Laura',
    title: 'I am FFA',
    body: 'For React Native > 0.60, when pods are installed/updated auto linking will automatically add all fonts to the Build Phases,',
    image: require('../../asset/bgrHome2.jpeg'),
    sumView: 820,
    like: 1256,
    id: '#526356',
    comment: 44,
    online: '42 days ago',
  },
  {
    avt: require('../../asset/balo2.png'),
    name: 'Rebecca',
    title: 'Welcome',
    body: 'Browse to node_modules/react-native-vector-icons and drag the folder Fonts (or just the ones you want) to your project in Xcode.',
    image: require('../../asset/bgrHome.jpeg'),
    sumView: 1220,
    like: 120,
    comment: 80,
    id: '#144547',
    online: '63 days ago',
  },
  {
    avt: require('../../asset/balo1.png'),
    name: 'Linda',
    title: 'I am FFA',
    body: 'For React Native > 0.60, when pods are installed/updated auto linking will automatically add all fonts to the Build Phases,',
    image: require('../../asset/bgrHome1.jpeg'),
    sumView: 3233,
    like: 211,
    id: '#854524',
    comment: 424,
    online: '85 days ago',
  },
];
