import { View, Text, Image, ImageBackground } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png");
export default function App(){
  return(
    <View style={{flex:1.5, backgroundColor: "plum"}}>
      <ImageBackground source={logoImg} style={{flex:1}}>

      </ImageBackground>
    </View>
  )
}