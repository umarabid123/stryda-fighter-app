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

import React from "react"
import RootNavigator from "./src/navigation"

const App = () => {
  return <RootNavigator />
}

export default App
