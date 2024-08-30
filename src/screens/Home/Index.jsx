import { View, Text, Image } from 'react-native';
import styles from "./style";

// import Title from '../../components/Title';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
       {/* <Title clr="black" fnts={20} fntw="600" title="About us" /> */}
      </View>
      
      <View style={styles.containerPhotos}>
        <Image style={styles.logo} source={require("../../../assets/")} />
      </View>
    </View>
  )
}