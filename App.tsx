// import React from 'react';
// import { View } from 'react-native';
// import CustomIconButton from './src/components/common/CustomIconButton';
// import AppText from './src/components/common/AppText';
// import AuthDescription from './src/components/common/AuthDescription';
// import EmailInput from './src/components/common/AuthInput';



// export default function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: 'black',
//         flex: 1,
//         paddingTop:96
//       }}
//     >
//       <AuthDescription title='Log In' description='Unlock the benefits of a digital hub.'/>
//       <CustomIconButton
//         text="Continue with Google"
//         source={require('./assets/images/google-icon.png')}
//         btnStyle={{ borderWidth: 1, borderColor: '#FFFFFF26', borderRadius: 8, padding:16, marginVertical:6 }}
//         textStyle={{fontSize:14, fontWeight:600, color:"#fff"}}
//         iconStyle={{width:24, height:24}}
//       />
//         <CustomIconButton
//         text="Continue with Google"
//         source={require('./assets/images/apple-icon.png')}
//         btnStyle={{ borderWidth: 1, borderColor: '#FFFFFF26', borderRadius: 8, padding:16, marginVertical:6 }}
//         textStyle={{fontSize:14, fontWeight:600, color:"#fff"}}
//         iconStyle={{width:24, height:24}}
//       />
//         <CustomIconButton
//         text="Continue with Google"
//         source={require('./assets/images/facebook-icon.png')}
//         btnStyle={{ borderWidth: 1, borderColor: '#FFFFFF26', borderRadius: 8, padding:16, marginVertical:6 }}
//         textStyle={{fontSize:14, fontWeight:600, color:"#fff"}}
//         iconStyle={{width:24, height:24}}
//       />

//       <EmailInput />
//     </View>
//   );
// }

import type React from "react"
import { useState } from "react"
import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native"
import { ProgressBar } from "./src/components/special/ProgressBar"
import { FormSection } from "./src/components/special/FormSection"
import { AvatarWithAdd } from "./src/components/special/AvatarWithAdd"
import { FormField } from "./src/components/special/FormField"

import { Colors } from "./src/constant/themes"
import { wp } from "./src/constant/constants"
import AppButton from "./src/components/special/AppButton"
import AppText from "./src/components/special/AppText"


interface AccountCompletionProps {
  onNext: () => void
}

export const App: React.FC<AccountCompletionProps> = ({ onNext }) => {
  const [firstName, setFirstName] = useState("Jonathan")
  const [lastName, setLastName] = useState("Haggerty")
  const [dob, setDob] = useState("Mar 03, 2000")
  const [gender, setGender] = useState("-")
  const [country, setCountry] = useState("England")
  const [socialLinks, setSocialLinks] = useState(["https://www.instagram.com/laugepet..."])

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ProgressBar current={4} total={5} />

        <FormSection title="Complete your account." subtitle="You can change this later." />

        <AvatarWithAdd size="large" />

        <FormField
          label="First Name *"
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          required
        />

        <FormField label="Last Name *" placeholder="Last Name" value={lastName} onChangeText={setLastName} required />

        <FormField
          label="Date of birth *"
          placeholder="Date of birth"
          value={dob}
          onChangeText={setDob}
          type="date"
          required
        />

        <FormField
          label="Gender"
          placeholder="Select Gender"
          value={gender}
          onChangeText={setGender}
          isReadOnly
          onPress={() => {}}
        />

        <FormField
          label="Country"
          placeholder="Select Country"
          value={country}
          onChangeText={setCountry}
          isReadOnly
          onPress={() => {}}
        />

        <FormSection title="Sports of interest (optional)" />

        <View style={styles.addButtonContainer}>
          <AppButton text="+" btnStyle={styles.addButton} onPress={() => {}} />
        </View>

        <FormSection title="Social Links" subtitle="Website, Instagram, TikTok, Facebook, etc." />

        {socialLinks.map((link, index) => (
          <View key={index} style={styles.socialLinkContainer}>
            <AppText text="Instagram" fontSize={wp(3.5)} color={Colors.white} />
            <AppText text={link} fontSize={wp(3.2)} color={Colors.grayBlack} />
          </View>
        ))}

        <View style={styles.addButtonContainer}>
          <AppButton text="+" btnStyle={styles.addButton} onPress={() => {}} />
        </View>

        <AppButton text="Next" onPress={onNext} btnStyle={styles.nextButton} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: wp(5),
    paddingTop: wp(2),
    paddingBottom: wp(8),
  },
  addButtonContainer: {
    alignItems: "flex-start",
    marginVertical: wp(2),
  },
  addButton: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: Colors.white,
    marginTop: wp(3),
  },
  socialLinkContainer: {
    backgroundColor: "#1a1a1a",
    padding: wp(4),
    borderRadius: wp(3),
    marginVertical: wp(2),
  },
  nextButton: {
    marginTop: wp(6),
  },
})



