import { View, Text, Pressable, Linking } from "react-native"
import { useNavigate } from "react-router-native"
import theme from "../../theme"

const ButtonsArea = ({ url }) => {

  const navigate = useNavigate();

  const buttonStyle = ({ pressed }) => [
    {
      width: '100%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
    },
    pressed && { opacity: 0.6 }
  ]

  return (
    <View style={{ alignItems: 'center', gap: 5, marginTop: 10 }}>
      <Pressable style={buttonStyle} onPress={() => Linking.openURL(url)}>
        <Text style={{ color: theme.colors.textWhite }}>
          Open in GitHub
        </Text>
      </Pressable>

      <Pressable style={buttonStyle} onPress={() => navigate('/')}>
        <Text style={{ color: theme.colors.textWhite }}>Back to list</Text>
      </Pressable>
    </View>
  )
}

export default ButtonsArea