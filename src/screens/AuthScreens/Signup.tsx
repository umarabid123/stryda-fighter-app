import React, { useState } from "react"
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
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

interface SignUpProps {
  onNext?: () => void
}

export default function SignUp({ onNext }: SignUpProps) {
  const navigation = useNavigation<NavigationProp<any>>()
  const colorScheme = useColorScheme()
  const colors = colorScheme === "dark" ? Colors.dark : Colors.light
  const [email, setEmail] = useState("")

  const handleNext = () => {
    // Navigate to Register screen for next step
    navigation.navigate("Register")
    if (onNext) {
      onNext()
    }
  }

  return (
    <View style={styles.container}>
      <MeshGradientBackground />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground} />
          <View style={styles.progressFill} />
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Title and Description */}
          <View style={styles.titleContainer}>
            <AppText
              text="Create account."
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
              color={colors.textSecondary}
              textAlign="center"
              style={styles.subtitle}
            />
          </View>

          {/* Content Container */}
          <View style={styles.contentContainer}>
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
          <Divider />

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <AppText
              text="E-mail"
              fontSize={Typography.fontSize.md}
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

        {/* Next Button */}
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
  keyboardView: {
    flex: 1,
  },
  progressContainer: {
    position: "absolute",
    top: (60 / DESIGN_HEIGHT) * SCREEN_HEIGHT, // 7.04% from top
    left: (SCREEN_WIDTH - (196.5 / DESIGN_WIDTH) * SCREEN_WIDTH) / 2,
    width: (196.5 / DESIGN_WIDTH) * SCREEN_WIDTH,
    height: 4,
    borderRadius: 30,
  },
  progressBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
  },
  progressFill: {
    position: "absolute",
    left: 0,
    width: `${(49 / 196.5) * 100}%`, // 49px out of 196.5px
    height: "100%",
    backgroundColor: Colors.white,
    borderRadius: 30,
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
  titleContainer: {
    width: (329 / DESIGN_WIDTH) * SCREEN_WIDTH,
    alignItems: "center",
    gap: Spacing.xs,
    marginBottom: 60,
    marginTop:32
  },
  title: {
    width: "100%",
    letterSpacing: -0.48,
  },
  subtitle: {
    width: "100%",
  },
  contentContainer: {
    width: (329 / DESIGN_WIDTH) * SCREEN_WIDTH,
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
    paddingHorizontal: Spacing.xl,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: BorderRadius.md,
    backgroundColor: "transparent",
  },
  socialButtonText: {
    fontSize: Typography.fontSize.lg,
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
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    gap: Spacing.xs,
  },
  inputLabel: {
    letterSpacing: 0.28,
  },
  input: {
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.light,
    color: "rgba(255, 255, 255, 0.5)",
    padding: 0,
    letterSpacing: 0.36,
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
    opacity: 0.6,
  },
  nextButtonText: {
    fontSize: Typography.fontSize.md,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.black,
  },
})
