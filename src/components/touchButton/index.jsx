import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import styles from "./style";

const TouchButton = ({ bgc, brr, pad, mrgt, screen, data, fnts, fntw, clr, name }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        // style={styles.button}
        style={{ backgroundColor: bgc, borderRadius: brr, padding: pad, marginTop: mrgt  }}
        onPress={() => navigation.navigate(screen, { data })}
      >
        <Text style={{fontSize: fnts, fontWeight: fntw, color: clr}}>{ name }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchButton;