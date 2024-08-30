import { View, Text } from "react-native";

// import styles from "./style";

const Title = ({ clr, fnts, fntw, fntf, title }) => {
  return (
    <View>
      <Text style={
        {
        color: clr,
        fontSize: fnts,
        fontWeight: fntw,
        fontFamily: fntf,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Title;