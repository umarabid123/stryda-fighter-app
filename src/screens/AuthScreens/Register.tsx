import React, { useState } from "react"
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NavigationProp } from "@react-navigation/native"
import { wp } from "../../constant/constants"
import { Colors, Spacing, Typography, BorderRadius } from "../../constant"
import AuthDescription from "../../components/common/AuthDescription"
import CustomIconButton from "../../components/common/CustomIconButton"
import AppButton from "../../components/common/AppButton"
import AppText from "../../components/common/AppText"
import CustomInputField from "../../components/common/TextInput"
import MeshGradientBackground from "../../components/common/MeshGradientBackground"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

// Design dimensions from Figma: 393px width x 852px height
const DESIGN_WIDTH = 393
const DESIGN_HEIGHT = 852

interface RegisterProps {
  onLoginPress?: () => void
}

export default function Register({ onLoginPress }: RegisterProps) {
  const navigation = useNavigation<NavigationProp<any>>()
  const colorScheme = useColorScheme()
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")

  const handleRegister = () => {
    // Handle registration logic here
    console.log("Register:", { email, password, fullName })
    // Navigate to Verify screen after registration
    navigation.navigate("Verify")
  }

  return (
    <View style={styles.container}>
      {/* Background Mesh Gradient */}
      <MeshGradientBackground />
      
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Title and Description */}
        <AuthDescription
          title="Sign Up"
          description="Create your account to get started."
          customStyle={styles.authDescription}
        />

        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <CustomIconButton
            text="Continue with Google"
            source={require("../../../assets/images/google-icon.png")}
            btnStyle={styles.socialButton}
            textStyle={styles.socialButtonText}
            iconStyle={styles.socialIcon}
            onPress={() => console.log("Google signup")}
          />
          <CustomIconButton
            text="Continue with Apple"
            source={require("../../../assets/images/apple-icon.png")}
            btnStyle={styles.socialButton}
            textStyle={styles.socialButtonText}
            iconStyle={styles.socialIcon}
            onPress={() => console.log("Apple signup")}
          />
          <CustomIconButton
            text="Continue with Facebook"
            source={require("../../../assets/images/facebook-icon.png")}
            btnStyle={styles.socialButton}
            textStyle={styles.socialButtonText}
            iconStyle={styles.socialIcon}
            onPress={() => console.log("Facebook signup")}
          />
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <AppText
            text="OR"
            fontSize={Typography.fontSize.md}
            fontName="CircularStd-Book"
            color={colors.textSecondary}
            style={styles.dividerText}
          />
          <View style={styles.dividerLine} />
        </View>

        {/* Full Name Input */}
        <CustomInputField
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />

        {/* Email Input */}
        <CustomInputField
          label="E-mail"
          placeholder="your@email.com"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Password Input */}
        <CustomInputField
          label="Password"
          placeholder="Enter your password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Confirm Password Input */}
        <CustomInputField
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Terms and Conditions */}
        <View style={styles.termsContainer}>
          <AppText
            text="By signing up, you agree to our "
            fontSize={Typography.fontSize.sm}
            fontName="CircularStd-Book"
            color={colors.textSecondary}
          />
          <TouchableOpacity>
            <AppText
              text="Terms of Service"
              fontSize={Typography.fontSize.sm}
              fontName="CircularStd-Medium"
              color={colors.text}
              style={styles.linkText}
            />
          </TouchableOpacity>
          <AppText
            text=" and "
            fontSize={Typography.fontSize.sm}
            fontName="CircularStd-Book"
            color={colors.textSecondary}
          />
          <TouchableOpacity>
            <AppText
              text="Privacy Policy"
              fontSize={Typography.fontSize.sm}
              fontName="CircularStd-Medium"
              color={colors.text}
              style={styles.linkText}
            />
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <AppButton
          text="Sign Up"
          onPress={handleRegister}
          btnStyle={styles.registerButton}
          textStyle={styles.registerButtonText}
        />

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <AppText
            text="Already have an account? "
            fontSize={Typography.fontSize.md}
            fontName="CircularStd-Book"
            color={colors.textSecondary}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login")
              if (onLoginPress) {
                onLoginPress()
              }
            }}
          >
            <AppText
              text="Log in"
              fontSize={Typography.fontSize.md}
              fontName="CircularStd-Medium"
              color={colors.text}
              style={styles.loginLink}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: (70 / DESIGN_HEIGHT) * SCREEN_HEIGHT,
  },
  scrollContent: {
    paddingHorizontal: (32 / DESIGN_WIDTH) * SCREEN_WIDTH,
    paddingBottom: (200 / DESIGN_HEIGHT) * SCREEN_HEIGHT,
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: wp(6),
  },
  logo: {
    width: wp(32),
    height: SCREEN_HEIGHT * 0.04,
  },
  authDescription: {
    marginBottom: wp(8),
  },
  socialButtonsContainer: {
    gap: Spacing.xs,
    marginBottom: Spacing.xl,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: BorderRadius.sm,
    padding: Spacing.lg,
    marginVertical: Spacing.xs,
    backgroundColor: "transparent",
  },
  socialButtonText: {
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.white,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Spacing.xl,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  dividerText: {
    marginHorizontal: Spacing.xl,
  },
  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.xs,
  },
  linkText: {
    textDecorationLine: "underline",
  },
  registerButton: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.lg,
    marginTop: Spacing.xs,
  },
  registerButtonText: {
    color: Colors.darkGray,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Spacing.xl,
  },
  loginLink: {
    fontWeight: Typography.fontWeight.semibold,
    textDecorationLine: "underline",
  },
})

