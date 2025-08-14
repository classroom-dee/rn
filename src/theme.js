import { StyleSheet } from "react-native";

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    navBarBG: '#24292e',
    textWhite: 'white'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  tagsStyle: StyleSheet.create({
    techStack: {
      backgroundColor: 'skyblue', 
      paddingVertical: 5, 
      paddingHorizontal: 5, 
      borderRadius: 5, 
      alignSelf: 'flex-start'
    }
  }),
  repoItemStyle: StyleSheet.create({
    avatar: {
      width: 50,
      height: 50
    },
    itemBackground: {
      backgroundColor: 'white',
      padding: 5
    },
    itemFont: {
      color: 'black'
    },
  }),
  formStyle: StyleSheet.create({
    textInputNormal: {
      backgroundColor: 'white',
      padding: 5
    },
    textInputError: {
      backgroundColor: 'salmon',
      padding: 5
    }
  })
};
  
export default theme;