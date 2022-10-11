import AsyncStorage from '@react-native-async-storage/async-storage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import ProfileDetail from '../Profile_Detail/component';

const initialImage = [
  require('../../../asset/bgrHome.jpeg'),
  require('../../../asset/hotgirl2.jpg'),
  require('../../../asset/balo1.png'),
  require('../../../asset/avt1.jpeg'),
  require('../../../asset/bgrHome3.jpeg'),
  require('../../../asset/avt2.jpeg'),
  require('../../../asset/bgrHome1.jpeg'),
  require('../../../asset/bgrHome2.jpeg'),
  require('../../../asset/hotgirl4.jpg'),
  require('../../../asset/avt3.jpeg'),
  require('../../../asset/bgrHome4.jpeg'),
  require('../../../asset/balo2.png'),
  require('../../../asset/balo5.png'),
  require('../../../asset/hotgirl4.jpg'),
  require('../../../asset/balo4.png'),
];
const initialLabel = ['David', 'Daniel', 'Brian', 'Chris', 'John', 'Kevin'];

function HomeScreen() {
  const navigation = useNavigation();

  const onClickImage = () => {
    navigation.navigate('ProfileDetail');
  };

  const RenderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          padding: 0.3,
        }}
        onPress={() => onClickImage()}>
        <Image
          source={initialImage[index]}
          style={{
            height: 100,
            width: Dimensions.get('window').width / 3 - 0.9,
            alignSelf: 'center',
            resizeMode: 'cover',
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => (
    <View
      style={{
        marginRight: 30,
      }}
    />
  );

  return (
    <>
      <FlatList
        style={{height: 100}}
        horizontal={false}
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={RenderItem}
        keyExtractor={(item, index) => 'id' + index}
        ItemSeparatorComponent={renderSeparator}
        onEndThreshold={0.5}
        initialScrollIndex={0}
      />
    </>
  );
}

function HomeScreen0() {
  const navigation = useNavigation();

  const onClickImage = () => {
    navigation.navigate('ProfileDetail');
  };
  const RenderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{alignSelf: 'center', alignItems: 'center'}}
        onPress={() => onClickImage()}>
        <Image
          source={initialImage[index]}
          style={{
            height: 100,
            width: Dimensions.get('window').width / 3,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => (
    <View
      style={{
        marginRight: 30,
      }}
    />
  );

  return (
    <>
      <FlatList
        horizontal={false}
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={RenderItem}
        keyExtractor={(item, index) => 'id' + index}
        ItemSeparatorComponent={renderSeparator}
        onEndThreshold={0.5}
        initialScrollIndex={0}
      />
    </>
  );
}
function HomeScreen1() {
  const navigation = useNavigation();

  const onClickImage = () => {
    navigation.navigate('ProfileDetail');
  };
  const RenderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{alignSelf: 'center', alignItems: 'center'}}
        onPress={() => onClickImage()}>
        <Image
          source={initialImage[index]}
          style={{
            height: 100,
            width: Dimensions.get('window').width / 3,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => (
    <View
      style={{
        marginRight: 30,
      }}
    />
  );

  return (
    <>
      <FlatList
        horizontal={false}
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={RenderItem}
        keyExtractor={(item, index) => 'id' + index}
        ItemSeparatorComponent={renderSeparator}
        onEndThreshold={0.5}
        initialScrollIndex={0}
      />
    </>
  );
}
const Tab = createMaterialTopTabNavigator();

function Profile() {
  const [initialRoute, setInitialRoute] = React.useState('Image');
  const [uriImage, setUriImage] = useState({});
  const [FullName, seFullNam] = useState(null);
  const [UserName, setUserName] = useState(null);
  const [Website, setWebsite] = useState(null);
  const [Story, setStory] = useState(null);
  const [dataModal, setDataModal] = useState({
    component: ProfileDetail,
    isModalVisible: false,
    toggleModal: () => {},
  });
  const navigation = useNavigation();

  const getItemLocal = async () => {
    try {
      const value = await AsyncStorage.getItem('Info');
      if (value !== null) {
        const newData = JSON.parse(value);
        // setValue('gender', newData.gender);
        setUriImage(newData.image);
        seFullNam(newData.fullname);
        setUserName(newData.username);
        setWebsite(newData.website);
        setStory(newData.story);
      }
    } catch (err) {
      // Alert.alert('Thông báo', 'Đã có lỗi sảy ra vui lòng thử lại');
    }
  };
  useEffect(() => {
    getItemLocal();
  }, [FullName, UserName, Website, Story, uriImage]);

  const renderSeparator = () => (
    <View
      style={{
        marginRight: 15,
      }}
    />
  );

  const RenderItem = ({item, index}) => {
    if (item == null) {
      return (
        <>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                'Notification',
                'This function is in development stage',
              )
            }>
            <Image
              source={require('../../../asset/add.jpg')}
              style={{
                height: 40,
                width: 40,
              }}
            />
            <Text style={{alignSelf: 'center', padding: 5}}>Add</Text>
          </TouchableOpacity>
        </>
      );
    }
    return (
      <>
        <View style={{padding: 3, alignItems: 'center'}}>
          <Image
            source={initialImage[index]}
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
            }}
          />
          <Text style={{alignSelf: 'center'}}>{initialLabel[index]}</Text>
        </View>
      </>
    );
  };
  const removeLogin = async () => {
    try {
      await AsyncStorage.removeItem('FirstLogin');
    } catch (err) {}
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingTop: 30,
            }}>
            <View style={{flex: 1}}>
              <SafeAreaView
                style={{
                  borderColor: '#08B09F',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <View>
                  <Image
                    source={require('../../../asset/avt2.jpeg')}
                    style={{
                      height: 70,
                      width: 70,
                      borderRadius: 50,
                      flexDirection: 'row',
                    }}
                  />
                </View>
                <View style={{padding: 5}}>
                  <Text
                    style={{color: 'black', fontWeight: '700', fontSize: 13}}>
                    {(FullName && FullName) || 'David Alaba'}
                  </Text>
                  <Text
                    style={{color: 'black', fontWeight: '700', fontSize: 13}}>
                    {(Story && Story) || '#115478'}
                  </Text>
                  <Text
                    style={{
                      color: '#0095f6',
                      fontWeight: '700',
                      fontSize: 13,
                      textDecorationLine: 'underline',
                    }}>
                    {(Website && Website) || 'David.com'}
                  </Text>
                </View>
              </SafeAreaView>
            </View>
            <View
              style={{
                flex: 3,
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 0,
                }}>
                <TouchableOpacity
                  onPressIn={() => removeLogin()}
                  onPress={() =>
                    Alert.alert('Are you sure you want to sign out ?', '', [
                      {
                        text: 'Yes',
                        onPress: () => navigation.navigate('Login'),
                      },
                      {
                        text: 'No',
                      },
                    ])
                  }>
                  <Image
                    source={require('../../../asset/logout.png')}
                    style={{width: 25, height: 25}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flexDirection: 'column',
                    padding: 20,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'black',
                      fontWeight: '700',
                    }}>
                    2000
                  </Text>
                  <Text
                    style={{alignSelf: 'center', color: 'black', fontSize: 13}}>
                    Post
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    padding: 20,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'black',
                      fontWeight: '700',
                    }}>
                    2000
                  </Text>
                  <Text
                    style={{alignSelf: 'center', color: 'black', fontSize: 13}}>
                    Follow me
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    padding: 20,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'black',
                      fontWeight: '700',
                    }}>
                    2000
                  </Text>
                  <Text
                    style={{alignSelf: 'center', color: 'black', fontSize: 13}}>
                    Follow other
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              justifyContent: 'center',
            }}>
            <View style={{flex: 1}}>
              <Button
                mode="outlined"
                textAlign={'center'}
                color="black"
                style={{backgroundColor: '#0095f6'}}
                labelStyle={{color: 'white', fontSize: 14, fontWeight: 'bold'}}
                onPress={() => {
                  navigation.navigate('InfomationComponent');
                }}>
                Edit Profile
              </Button>
            </View>
            <View>
              <Image
                source={require('../../../asset/add.jpg')}
                style={{
                  height: 30,
                  width: 30,
                  marginLeft: 20,
                }}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 20,
              paddingHorizontal: 10,
            }}>
            <FlatList
              scrollEnabled={false}
              horizontal={true}
              data={[{}, {}, {}, {}, {}, null]}
              renderItem={RenderItem}
              keyExtractor={(item, index) => 'id' + index}
              ItemSeparatorComponent={renderSeparator}
              onEndThreshold={0.5}
              initialScrollIndex={0}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={{flex: 1.5}}>
          <Tab.Navigator
            initialRouteName={initialRoute}
            screenOptions={({route}) => ({
              tabBarIcon: ({color}) => {
                if (route.name === 'Image') {
                  {
                    return (
                      <Image
                        source={require('../../../asset/gird.png')}
                        style={{
                          height: 17,
                          width: 17,
                          tintColor: color,
                          alignSelf: 'center',
                        }}
                      />
                    );
                  }
                }
                if (route.name === 'Video') {
                  {
                    return (
                      <Image
                        source={require('../../../asset/play.png')}
                        style={{
                          height: 17,
                          width: 17,
                          tintColor: color,
                          alignSelf: 'center',
                        }}
                      />
                    );
                  }
                } else if (route.name === 'Face Of Image') {
                  {
                    return (
                      <Image
                        source={require('../../../asset/user.png')}
                        style={{
                          height: 17,
                          width: 17,
                          tintColor: color,
                          alignSelf: 'center',
                        }}
                      />
                    );
                  }
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: '#0095f6',
              inactiveTintColor: 'black',
              style: {
                height: 40,
                color: 'black',
              },
            }}>
            <Tab.Screen
              name={'Image'}
              component={HomeScreen}
              options={() => ({
                headerShown: false,
                title: 'Image',
              })}></Tab.Screen>
            <Tab.Screen
              name="Video"
              component={HomeScreen0}
              options={() => ({
                headerShown: false,
                title: 'Video',
              })}></Tab.Screen>
            <Tab.Screen
              name="Face Of Image"
              component={HomeScreen1}
              options={() => ({
                headerShown: false,
                title: 'Face Of Image',
              })}></Tab.Screen>
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Profile;
