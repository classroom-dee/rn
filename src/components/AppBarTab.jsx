import { Pressable, Text } from "react-native";
import { Link } from 'react-router-native';

const AppBarTab = ({ style, title, to }) => {

  return (
    <Pressable>
      <Link to={to}>
        <Text style={style}>
          {title}
        </Text>
      </Link>
    </Pressable>
  )
}

export default AppBarTab