import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = 'auth', keyname='accessToken') {
    this.namespace = namespace
    this.keyname = keyname
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(
      `${this.namespace}:${this.keyname}`
    );
    return token ? JSON.parse(token) : {};
  }

  async setAccessToken(token) {
    // token schema: {accessToken: '', expiresAt: '', username: '', id: ''}
    await AsyncStorage.setItem(`${this.namespace}:${this.keyname}`, JSON.stringify(token))
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:${this.keyname}`);
  }
}

export default AuthStorage