import PropTypes from 'prop-types';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

function HeaderComponent({ headerText }) {
  const navigation = useNavigation();
  return (
    <View style={styles.bgHeader}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.stylePrev}>
        <Image
          style={{ width: 15, height: 25, resizeMode: 'stretch' }}
          source={require('../../../asset/prevIcon.png')}
        />
      </TouchableOpacity>
      <Text style={styles.headerStyle}>
        {headerText ? headerText : 'Quay Lại'}
      </Text>
      {/* <Text style={styles.headerTextReview}>Review</Text> */}
    </View>
  );
}

HeaderComponent.propTypes = {
  title: PropTypes.string,
};

export default HeaderComponent;
const styles = StyleSheet.create({
  bgHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerStyle: {
    fontSize: 15,
    margin: 10,
    color: 'black',
    alignSelf: 'flex-start',
    flex: 3,
  },

  tinyLogo: {
    width: 30,
    height: 30,
    alignSelf: 'flex-start',
  },
  headerTextReview: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
  },
});
