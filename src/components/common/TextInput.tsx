import React, { useState } from 'react';
import {
  Image,
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { wp } from '../../constant/constants';
import { Colors } from '../../constant/themes';


const fullWidth = wp(90);
export default function CustomInputField({
  label,
  placeholder,
  keyboardType,
  secureTextEntry,
  type = 'text',
  containerStyle,
  inputStyle,
  labelStyle,
  numberOfLines,
}: {
  label?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  type?: string;
  containerStyle?: object;
  inputStyle?: object;
  labelStyle?: object;
  numberOfLines?: number;
}) {
  const [secureText, setSecureText] = useState(true);
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor="#797979"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          multiline={true}
        />
        {type === 'password' && (
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Image
              source={secureText && require('../../assets/image/eye-off.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}

        {type === 'search' && (
          <TouchableOpacity>
            <Image
              source={require('../../assets/image/search-input.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
        {type === 'calender' && (
          <TouchableOpacity>
            <Image
              source={require('../../assets/image/Calendar.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
        {type === 'watch' && (
          <TouchableOpacity>
            <Image
              source={require('../../assets/image/watch-icon-gray.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 12,
    paddingBottom: 4,
    color: Colors.darkGray,
    lineHeight: 18,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#000',
    width: fullWidth,
  },
  eyeIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    top: -36,
    right: 10,
  },
});
