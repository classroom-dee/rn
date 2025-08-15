import { Text } from "react-native";
import theme from "../theme";

const ThemedText = ({ style, ...props}) => {
  return <Text {...props} style={[{ fontFamily: theme.fonts }, style]} />;
}

export default ThemedText