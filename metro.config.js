const { getDefaultConfig } = require("expo/metro-config"); // @expo import gives me the expo-doctor warning
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.sourceExts.push('cjs');
module.exports = defaultConfig;
