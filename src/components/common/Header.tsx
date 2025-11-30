import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import { Colors } from '../../constant';
import AppText from './AppText';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DESIGN_WIDTH = 393;

interface HeaderProps {
  title?: string;
  onNotificationPress?: () => void;
  onMenuPress?: () => void;
  showNotificationDot?: boolean;
  isBack?:boolean
}

export default function Header({
  title = 'Home',
  onNotificationPress,
  onMenuPress,
  showNotificationDot = true,
  isBack = false
}: HeaderProps) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

    <View style={{flexDirection:'row', gap:12, alignItems:'center'}}>
        {isBack && 
      <Pressable style={{backgroundColor:'#141414', padding:8, borderRadius:10}} onPress={() => navigation.goBack()}>
        <Image source={require('../../../assets/images/back-arrow-icon.png')} resizeMode='contain' style={{width:16, height:16}} />
      </Pressable>
      }
      <AppText
        text={title}
        fontSize={18}
        style={{fontWeight:600}}
        fontName="CircularStd-Medium"
        color={Colors.white}
      />
    </View>

      <View style={styles.rightSection}>
        {/* Notification Bell */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onNotificationPress}
        >
          {/* Bell Icon SVG */}
          <View style={styles.bellIcon}>
            <Image
              source={require('../../../assets/images/notifications.png')}
              width={24}
              height={24}
            />
          </View>

          {/* Notification Dot */}
          {showNotificationDot && <View style={styles.notificationDot} />}
        </TouchableOpacity>

        {/* Hamburger Menu */}
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Menu')}>
          <View style={styles.hamburgerIcon}>
            <Image
              source={require('../../../assets/images/menu-line-icon.png')}
              width={24}
              height={24}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: (60 / DESIGN_WIDTH) * SCREEN_WIDTH,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: (16 / DESIGN_WIDTH) * SCREEN_WIDTH,
    paddingVertical: 20,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: (16 / DESIGN_WIDTH) * SCREEN_WIDTH,
  },
  iconButton: {
    position: 'relative',
    width: (28 / DESIGN_WIDTH) * SCREEN_WIDTH,
    height: (28 / DESIGN_WIDTH) * SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: (8 / DESIGN_WIDTH) * SCREEN_WIDTH,
    height: (8 / DESIGN_WIDTH) * SCREEN_WIDTH,
    borderRadius: (4 / DESIGN_WIDTH) * SCREEN_WIDTH,
    backgroundColor: '#22C55E',
  },
  hamburgerIcon: {
    gap: (4 / DESIGN_WIDTH) * SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburgerLine: {
    width: (20 / DESIGN_WIDTH) * SCREEN_WIDTH,
    height: 2,
    backgroundColor: Colors.white,
    borderRadius: 1,
  },
});
