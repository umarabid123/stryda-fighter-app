import React, { useState } from "react"
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import type { NavigationProp } from "@react-navigation/native"
import { Colors, Spacing, Typography, BorderRadius } from "../../constant"
import CustomIconButton from "../../components/common/CustomIconButton"
import AppText from "../../components/common/AppText"
import AppButton from "../../components/common/AppButton"
import MeshGradientBackground from "../../components/common/MeshGradientBackground"
import Divider from "../../components/common/Divider"

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window")

// Design dimensions from Figma: 393px width x 852px height
const DESIGN_WIDTH = 393
const DESIGN_HEIGHT = 852

interface LoginProps {
  onSignUpPress?: () => void
}

export default function Login({ onSignUpPress }: LoginProps) {
  const navigation = useNavigation<NavigationProp<any>>()
  const colorScheme = useColorScheme()
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light
  const [email, setEmail] = useState("")

  const handleNext = () => {
    // Handle next step logic here
    console.log("Next:", { email })
    // Navigate to Verify screen after email entry
    navigation.navigate("Verify")
  }

  return (
    <View style={styles.container}>
      {/* Background Mesh Gradient - Same as Intro */}
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
          {/* Title and Description */}
          <View style={styles.titleContainer}>
            <AppText
              text="Log In"
              fontSize={Typography.fontSize.xxl}
              fontName="CircularStd-Medium"
              color={Colors.white}
              textAlign="center"
              style={styles.title}
            />
            <AppText
              text="Unlock the benefits of a digital hub."
              fontSize={Typography.fontSize.md}
              fontName="CircularStd-Book"
              color={Colors.textSecondary}
              textAlign="center"
              style={styles.subtitle}
            />
          </View>

          {/* Content Container */}
          <View>
            {/* Social Login Buttons */}
            <View style={styles.socialButtonsContainer}>
              <CustomIconButton
                text="Continue with Google"
                source={require("../../../assets/images/google-icon.png")}
                btnStyle={styles.socialButton}
                textStyle={styles.socialButtonText}
                iconStyle={styles.socialIcon}
                onPress={() => console.log("Google login")}
              />
              <CustomIconButton
                text="Continue with Apple"
                source={require("../../../assets/images/apple-icon.png")}
                btnStyle={styles.socialButton}
                textStyle={styles.socialButtonText}
                iconStyle={styles.socialIcon}
                onPress={() => console.log("Apple login")}
              />
              <CustomIconButton
                text="Continue with Facebook"
                source={require("../../../assets/images/facebook-icon.png")}
                btnStyle={styles.socialButton}
                textStyle={styles.socialButtonText}
                iconStyle={styles.socialIcon}
                onPress={() => console.log("Facebook login")}
              />
            </View>

            {/* Divider */}
            <Divider />
            {/* Email Input */}
            <View style={styles.inputContainer}>
              <AppText
                text="E-mail"
                fontSize={Typography.fontSize.sm}
                fontName="CircularStd-Medium"
                color={Colors.white}
                style={styles.inputLabel}
              />
              <TextInput
                style={styles.input}
                placeholder="your@email.com"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
        </ScrollView>

        {/* Next Button - Positioned absolutely at bottom */}
        <AppButton
          text="Next"
          onPress={handleNext}
          btnStyle={styles.nextButton}
          textStyle={styles.nextButtonText}
        />
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
  title: {
    width: (329 / DESIGN_WIDTH) * SCREEN_WIDTH,
    letterSpacing: -0.48,
  },
  subtitle: {
    width: (329 / DESIGN_WIDTH) * SCREEN_WIDTH,
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
  },
  titleContainer: {
    width: (329 / DESIGN_WIDTH) * SCREEN_WIDTH,
    alignItems: "center",
    gap: Spacing.xs,
    marginBottom: Spacing.xxl,
  },

  socialButtonsContainer: {
    gap: Spacing.md,
    marginBottom: Spacing.xxl,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 51,
    paddingHorizontal: Spacing.lg,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: BorderRadius.sm,
    backgroundColor: "transparent",
  },
  socialButtonText: {
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.medium,
    color: Colors.white,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  inputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    gap: Spacing.xs,
  },
  inputLabel: {
    letterSpacing: 0.24,
  },
  input: {
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.light,
    color: "rgba(255, 255, 255, 0.5)",
    padding: 0,
    letterSpacing: 0.28,
  },
  nextButton: {
    position: "absolute",
    bottom: (83 / DESIGN_HEIGHT) * SCREEN_HEIGHT,
    left: (SCREEN_WIDTH - (120 / DESIGN_WIDTH) * SCREEN_WIDTH) / 2,
    width: (120 / DESIGN_WIDTH) * SCREEN_WIDTH,
    minWidth: 120,
    height: 51,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: BorderRadius.full,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.xxxl,
    paddingVertical: Spacing.lg,
    opacity: 0.5,
  },
  nextButtonText: {
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.black,
  },
})
