import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import { Colors, Spacing, Typography, BorderRadius } from '../../constant';
import AppText from '../../components/common/AppText';
import AppButton from '../../components/common/AppButton';
import ProfileInput from '../../components/common/ProfileInput';
import MeshGradientBackground from '../../components/common/MeshGradientBackground';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Design dimensions from Figma: 393px width x 852px height
const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 852;

interface CompleteProfileProps {
  onComplete?: () => void;
}

export default function CompleteProfile({ onComplete }: CompleteProfileProps) {
  const navigation = useNavigation<NavigationProp<any>>();
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [firstName, setFirstName] = useState('Jonathan');
  const [lastName, setLastName] = useState('Haggerty');
  const [dateOfBirth, setDateOfBirth] = useState('Mar 03, 2000');
  const [gender, setGender] = useState('-');
  const [country, setCountry] = useState('England');
  const [socialLinks, setSocialLinks] = useState([
    { platform: 'Instagram', url: 'https://www.instagram.com/laugepetersen' },
  ]);

  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: '', url: '' }]);
  };

  const handleRemoveSocialLink = (index: number) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    // Handle complete profile logic
    console.log('Complete profile:', {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      country,
      socialLinks,
    });
    // if (onComplete) {
    //   onComplete()
    // }
    navigation.navigate('Welcome');
    // navigation?.navigate("Home")
  };

  return (
    <View style={styles.container}>
      <MeshGradientBackground />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
              text="Complete your account."
              fontSize={Typography.fontSize.xxl}
              fontName="CircularStd-Medium"
              color={colors.white}
              textAlign="center"
              style={styles.title}
            />
            <AppText
              text="You can change this later."
              fontSize={Typography.fontSize.md}
              fontName="CircularStd-Book"
              color={colors.textSecondary}
              textAlign="center"
              style={styles.subtitle}
            />
          </View>

          {/* Profile Picture */}

          {/* Form Fields */}
          <View style={styles.formContainer}>
            <ProfileInput
              label="First Name *"
              onChangeText={setFirstName}
              placeholder={firstName}
            />
            <ProfileInput
              label="Last Name *"
              placeholder={lastName}
              onChangeText={setLastName}
            />
            <ProfileInput
              label="Date of birth *"
              placeholder={dateOfBirth}
              onChangeText={setDateOfBirth}
              editable={false}
              onPress={() => console.log('Open date picker')}
            />
            <ProfileInput
              label="Gender *"
              placeholder={gender}
              onChangeText={setGender}
              editable={false}
              onPress={() => console.log('Open gender picker')}
            />
            <ProfileInput
              label="Country *"
              placeholder={country}
              onChangeText={setCountry}
              editable={false}
              onPress={() => console.log('Open country picker')}
            />

            {/* Sports of Interest */}
            <View style={styles.sectionContainer}>
              <AppText
                text="Sports of interest (optional)"
                fontSize={Typography.fontSize.md}
                fontName="CircularStd-Medium"
                color={colors.white}
                style={styles.sectionLabel}
              />
              <TouchableOpacity style={styles.addButton}>
                <AppText
                  text="+"
                  fontSize={Typography.fontSize.xxl}
                  color={Colors.black}
                />
              </TouchableOpacity>
            </View>

            {/* Social Links */}
            <View style={styles.sectionContainer}>
              <View style={styles.socialLinksHeader}>
                <AppText
                  text="Social Links"
                  fontSize={Typography.fontSize.md}
                  fontName="CircularStd-Medium"
                  color={colors.white}
                  style={styles.sectionLabel}
                />
                <AppText
                  text="Website, Instagram, TikTok, Facebook, etc."
                  fontSize={Typography.fontSize.md}
                  fontName="CircularStd-Book"
                  color={colors.textSecondary}
                />
              </View>

              {socialLinks.map((link, index) => (
                <View key={index} style={styles.socialLinkCard}>
                  <View style={styles.socialLinkContent}>
                    <AppText
                      text={link.platform}
                      fontSize={Typography.fontSize.lg}
                      fontName="CircularStd-Medium"
                      color={colors.white}
                    />
                    <AppText
                      text={link.url}
                      fontSize={Typography.fontSize.lg}
                      fontName="CircularStd-Book"
                      color={colors.textSecondary}
                      lines={1}
                      style={styles.socialLinkUrl}
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleRemoveSocialLink(index)}
                  >
                    <AppText
                      text="×"
                      fontSize={Typography.fontSize.xxl}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                </View>
              ))}

              <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddSocialLink}
              >
                <AppText
                  text="+"
                  fontSize={Typography.fontSize.xxl}
                  color={Colors.black}
                />
              </TouchableOpacity>
            </View>

            <AppButton
              text="Next"
              onPress={handleNext}
              btnStyle={styles.nextButton}
              textStyle={styles.nextButtonText}
            />
          </View>
        </ScrollView>

        {/* Next Button */}
      </KeyboardAvoidingView>
    </View>
  );
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
    position: 'absolute',
    top: (43 / DESIGN_HEIGHT) * SCREEN_HEIGHT, // 5.02% from top
    left: (SCREEN_WIDTH - (196.5 / DESIGN_WIDTH) * SCREEN_WIDTH) / 2,
    width: (196.5 / DESIGN_WIDTH) * SCREEN_WIDTH,
    height: 4,
    borderRadius: 30,
    zIndex: 10,
  },
  progressBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 30,
  },
  progressFill: {
    position: 'absolute',
    left: 0,
    width: `${(98 / 196.5) * 100}%`, // 98px out of 196.5px (50%)
    height: '100%',
    backgroundColor: Colors.white,
    borderRadius: 30,
  },
  titleContainer: {
    // position: "absolute",
    // top: (76 / DESIGN_HEIGHT) * SCREEN_HEIGHT,
    // left: (SCREEN_WIDTH - (329 / DESIGN_WIDTH) * SCREEN_WIDTH) / 2,
    width: (329 / DESIGN_WIDTH) * SCREEN_WIDTH,
    alignItems: 'center',
    gap: Spacing.xs,
    zIndex: 10,
  },
  title: {
    width: '100%',
    letterSpacing: -0.48,
  },
  subtitle: {
    width: '100%',
  },
  scrollView: {
    flex: 1,
    marginTop: (70 / DESIGN_HEIGHT) * SCREEN_HEIGHT,
  },
  scrollContent: {
    paddingHorizontal: (32 / DESIGN_WIDTH) * SCREEN_WIDTH,
    paddingBottom: (200 / DESIGN_HEIGHT) * SCREEN_HEIGHT,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
    marginTop: Spacing.xl,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profilePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  addPhotoButton: {
    position: 'absolute',
    bottom: 0,
    right: SCREEN_WIDTH / 2 - 136 - 32 + 120 - 16, // Positioned at bottom right of profile picture
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: (329 / DESIGN_WIDTH) * SCREEN_WIDTH,
    gap: Spacing.xxl,
  },
  sectionContainer: {
    width: '100%',
    gap: Spacing.md,
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.15)',
  },
  sectionLabel: {
    letterSpacing: 0.28,
  },
  socialLinksHeader: {
    gap: Spacing.xs,
  },
  socialLinkCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
  },
  socialLinkContent: {
    flex: 1,
    gap: Spacing.xs,
  },
  socialLinkUrl: {
    overflow: 'hidden',
  },
  removeButton: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  nextButton: {
    width: (120 / DESIGN_WIDTH) * SCREEN_WIDTH,
    minWidth: 120,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.xxxl,
    paddingVertical: Spacing.lg,
  },
  nextButtonText: {
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
    color: Colors.black,
  },
});
