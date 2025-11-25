import type React from "react"
import { View, TextInput, StyleSheet, TouchableOpacity, Text, type ViewStyle } from "react-native"

import AppText from "./AppText"
import { wp } from "../../constant/constants"
import { Colors } from "../../constant/themes"

interface FormFieldProps {
  label?: string
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
  type?: "text" | "email" | "password" | "number" | "date"
  required?: boolean
  style?: ViewStyle
  isReadOnly?: boolean
  onPress?: () => void
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  type = "text",
  required = false,
  style,
  isReadOnly = false,
  onPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <View style={styles.labelContainer}>
          <AppText text={label}  fontSize={wp(3.5)} color={Colors.white} />
          {required && <Text style={styles.required}> *</Text>}
        </View>
      )}
      <TouchableOpacity activeOpacity={1} onPress={onPress} disabled={!isReadOnly}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.white}
          value={value}
          onChangeText={onChangeText}
          editable={!isReadOnly}
          keyboardType={type === "email" ? "email-address" : type === "number" ? "numeric" : "default"}
          secureTextEntry={type === "password"}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(2.5),
  },
  labelContainer: {
    flexDirection: "row",
    marginBottom: wp(2),
  },
  required: {
    color: Colors.blue50,
    fontSize: wp(3.5),
  
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    paddingVertical: wp(2.5),
    fontSize: wp(3.5),
    color: Colors.white,
  },
})
