import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Alert,
  Dimensions,
  Modal,
} from 'react-native';
import PanoramaView from '@lightbase/react-native-panorama-view';
import moment from 'moment';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const myData = require('./customData.json');
import firebase from '@firebase/app';
import {initializeApp} from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {WebView} from 'react-native-webview';
const initialImage1 = [
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
  require('../../../../asset/hotgirl1.jpg'),
  require('../../../../asset/hotgirl2.jpg'),
  require('../../../../asset/hotgirl3.jpg'),
  require('../../../../asset/hotgirl4.jpg'),
  require('../../../../asset/hotgirl5.jpg'),
];
const initialStatus = [
  'Tà dương khởi sắc đường chiều',
  'Chân son trỏ gót liêu xiêu dòng đời',
  'Rộn ràng ong bướm lả lơi',
  'Đây đôi mắt biếc kia ngời dáng xuân',
  'Ngậm ngùi hai chữ phù vân',
  'Vận vào thế cuộc gian truân nửa vời',
  'Giọt hồng bao lượt đầy vơi',
  'Giọt tình bao bận nổi trôi sóng cồn',
  'Chơ vơ người xác tôi hồn',
  'Người hình tôi bóng chon von cõi này',
  'Nửa đời trả kiếp thương vay',
  'Tóc xanh giờ đã đong đầy khói sương',
  'Gặp nhau đây! Giữa đời thường',
  'Tôi đi vừa hết nửa đường… mây bay',
  'Chiều buông hồn ngật ngừ say',
  'Trả vay còn một kiếp này tình ơi!',
  'Tà dương khởi sắc đường chiều',
  'Chân son trỏ gót liêu xiêu dòng đời',
  'Rộn ràng ong bướm lả lơi',
  'Đây đôi mắt biếc kia ngời dáng xuân',
  'Ngậm ngùi hai chữ phù vân',
  'Vận vào thế cuộc gian truân nửa vời',
  'Giọt hồng bao lượt đầy vơi',
  'Giọt tình bao bận nổi trôi sóng cồn',
  'Chơ vơ người xác tôi hồn',
  'Người hình tôi bóng chon von cõi này',
  'Nửa đời trả kiếp thương vay',
  'Tóc xanh giờ đã đong đầy khói sương',
  'Gặp nhau đây! Giữa đời thường',
  'Tôi đi vừa hết nửa đường… mây bay',
  'Chiều buông hồn ngật ngừ say',
  'Trả vay còn một kiếp này tình ơi!',
  'Tà dương khởi sắc đường chiều',
  'Chân son trỏ gót liêu xiêu dòng đời',
  'Rộn ràng ong bướm lả lơi',
  'Đây đôi mắt biếc kia ngời dáng xuân',
  'Ngậm ngùi hai chữ phù vân',
  'Vận vào thế cuộc gian truân nửa vời',
  'Giọt hồng bao lượt đầy vơi',
  'Giọt tình bao bận nổi trôi sóng cồn',
  'Chơ vơ người xác tôi hồn',
  'Người hình tôi bóng chon von cõi này',
  'Nửa đời trả kiếp thương vay',
  'Tóc xanh giờ đã đong đầy khói sương',
  'Gặp nhau đây! Giữa đời thường',
  'Tôi đi vừa hết nửa đường… mây bay',
  'Chiều buông hồn ngật ngừ say',
  'Trả vay còn một kiếp này tình ơi!',
];

function ProfileDetail() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyDfZGYq3Io-9sioj3LJnA3nK3WsPR84bcg',
      authDomain: 'vivid-brand-343608.firebaseapp.com',
      databaseURL: 'https://vivid-brand-343608-default-rtdb.firebaseio.com',
      projectId: 'vivid-brand-343608',
      storageBucket: 'vivid-brand-343608.appspot.com',
      messagingSenderId: '24434522406',
      appId: '1:24434522406:web:3da5fa525dbbc596ac29e7',
      measurementId: 'G-5LM9K4V0JX',
    });
  } else {
    firebase.app();
  }
  const [Link, setLink] = useState('test');
  const [Link1, setLink1] = useState();
  var db = firebase.firestore();
  const navigation = useNavigation();
  // let fetchDataFirebase = setInterval(
  //   () =>
  //     db
  //       .collection('payment')
  //       .get()
  //       .then(querySnapshot => {
  //         querySnapshot.forEach(doc => {
  //           // setLink(doc.data().abc.key);
  //           console.log(doc.data().key);
  //           if(doc.data().key){

  //           }
  //         });
  //       }),
  //   2000,
  // );
  let fetchDataFirebase = setInterval(() => {
    db.collection('payment')
      .get()
      .then(querySnapshot => {
        // console.log(querySnapshot);
        querySnapshot.forEach(doc => {
          if (doc.data().key === '2') {
            setLink(doc.data().url);
            setLink1(doc.data().url1);
          } else {
            setLink('test');
          }
        });
      });
  }, 5000);
  // useEffect(() => {
  //   let timer = setInterval(
  //     () =>
  //       db
  //         .collection('payment')
  //         .get()
  //         .then(querySnapshot => {
  //           querySnapshot.forEach(doc => {
  //             setLink(doc.data().name);
  //             console.log(doc.data().name);
  //           });
  //         }),
  //     2000,
  //   );

  //   return () => clearInterval(timer);
  // }, []);
  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  const renderSeparator = () => (
    <View
      style={{
        marginRight: 15,
      }}
    />
  );
  const RenderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginBottom: 10,
          paddingBottom: 10,
          shadowColor: '#3490e7',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile')}
              style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={initialImage1[index]}
                style={{
                  height: 40,
                  width: 40,
                  alignSelf: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}
                resizeMode="cover"
                resizeMethod="auto"
              />
              <View style={{flexDirection: 'column', padding: 10}}>
                <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
                  {item.postedBy.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'black',
                    alignSelf: 'center',
                    alignItems: 'flex-start',
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Image
            source={require('../../../../asset/threedot.png')}
            style={{
              height: 20,
              width: 20,
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            resizeMode="cover"
            resizeMethod="auto"
          />
        </View>
        {/* <PanoramaView
          style={styles.viewer}
          dimensions={{height: windowHeight, width: windowWidth}}
          inputType="mono"
          imageUrl={item.postMedia}
        /> */}
        <Image
          source={{uri: item.postMedia}}
          style={{
            height: 300,
            width: '100%',
            alignSelf: 'center',
            alignItems: 'center',
          }}
          resizeMode="cover"
          resizeMethod="auto"
        />
        <View style={{flexDirection: 'row', padding: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{padding: 5, alignSelf: 'center'}}>
              <Image
                source={require('../../../../asset/iconTym.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}
                resizeMode="cover"
                resizeMethod="auto"
              />
            </View>
            <View style={{padding: 5, alignSelf: 'center'}}>
              <Image
                source={require('../../../../asset/message.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}
                resizeMode="cover"
                resizeMethod="auto"
              />
            </View>
            <View style={{padding: 5, alignSelf: 'center'}}>
              <Image
                source={require('../../../../asset/telegram.png')}
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}
                resizeMode="cover"
                resizeMethod="auto"
              />
            </View>
          </View>
          <View style={{flex: 1}}></View>

          <View style={{padding: 5, alignSelf: 'center'}}>
            <Image
              source={require('../../../../asset/save2.png')}
              style={{
                height: 20,
                width: 20,
                alignSelf: 'center',
              }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', padding: 10, paddingTop: 0}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{alignSelf: 'center'}}>
              <Image
                source={initialImage1[index]}
                style={{
                  borderRadius: 20,
                  height: 20,
                  width: 20,
                  alignSelf: 'center',
                  alignItems: 'center',
                }}
                resizeMode="cover"
                resizeMethod="auto"
              />
            </View>
            <View
              style={{flexDirection: 'row', padding: 5, alignSelf: 'center'}}>
              <Text style={{fontSize: 14, color: 'black', alignSelf: 'center'}}>
                {' '}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  alignSelf: 'center',
                  fontWeight: '700',
                }}>
                {item.postedBy.name}{' '}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  alignSelf: 'center',
                  alignItems: 'flex-start',
                }}>
                and{' '}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  alignSelf: 'center',
                  alignItems: 'flex-start',
                  fontWeight: '700',
                }}>
                {item.likes.length} others
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  alignSelf: 'center',
                  alignItems: 'flex-start',
                }}>
                {' '}
                liked.
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              marginLeft: 10,
              color: 'black',
              alignSelf: 'center',
              fontWeight: '700',
            }}>
            Alice
          </Text>
          <Text style={{marginLeft: 10, color: 'black', alignSelf: 'center'}}>
            {initialStatus[index]}
          </Text>
        </View>

        <Text style={{color: '#8e8e8e', marginLeft: 10, fontSize: 13}}>
          {moment().get('date')} month {moment().get('month')},{' '}
          {moment().get('year')}
        </Text>
      </View>
    );
  };
  const [buttom1, setButtom1] = useState(false);
  const [buttom2, setButtom2] = useState(false);
  return (
    <>
      {Link === 'test' ? (
        <View style={{flex: 1}}>
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
              POSTS
            </Text>
          </View>
          <FlatList
            horizontal={false}
            data={myData}
            renderItem={RenderItem}
            keyExtractor={(item, index) => 'id' + index}
            ItemSeparatorComponent={renderSeparator}
            onEndThreshold={0.5}
            initialScrollIndex={0}
            showsHorizontalScrollIndicator={false}
            viewabilityConfig={_viewabilityConfig}
          />
        </View>
      ) : (
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          {buttom1 === true && <WebView source={{uri: Link1}} />}
          {buttom2 === true && <WebView source={{uri: Link}} />}
          <View
            style={{
              height: 45,
              flexDirection: 'row',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                width: Dimensions.get('window').width / 3,
                backgroundColor: '#C52AFE',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                borderRadius: 8,
              }}
              onPress={() => (setButtom1(true), setButtom2(false))}>
              <Text style={{fontSize: 14, color: 'white'}}>Đăng ký</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: Dimensions.get('window').width / 3,
                backgroundColor: '#C52AFE',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                borderRadius: 8,
              }}
              onPress={() => (setButtom2(true), setButtom1(false))}>
              <Text style={{fontSize: 14, color: 'white'}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  bgHeader: {
    flexDirection: 'row',
    padding: 5,
  },
  stylePrev: {
    flex: 0.5,
    alignSelf: 'center',
  },
  viewer: {
    height: 400,
  },
});

export default ProfileDetail;
