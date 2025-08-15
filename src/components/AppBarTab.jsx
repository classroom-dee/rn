import { Pressable } from "react-native";
import { Link } from 'react-router-native';
import ThemedText from "./ThemedText";

const AppBarTab = ({ style, title, to }) => {

  return (
    <Pressable>
      <Link to={to}>
        <ThemedText style={style}>
          {title}
        </ThemedText>
      </Link>
    </Pressable>
  )
}

export default AppBarTab