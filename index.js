/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import CustomLogin from './navigator/customLogin';
import Main from './navigator/main';

AppRegistry.registerComponent(appName, () => CustomLogin);
