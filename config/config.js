const packageJson = require("../package.json");

const serverPort = process.env.PORT || 3000;

const completeConfig = {
  default: {
    serverPort,
    appSlug: packageJson.name,
    appVersion: packageJson.version,
    appUrl: process.env.NEXT_PUBLIC_API_URL,
    imageUrl: process.env.NEXT_PUBLIC_API_URL,
    locale: "en_US",
    localStorageKey: "vcana-global",
  },

  development: {
    appUrl: process.env.NEXT_PUBLIC_API_DEV_URL,
    imageUrl: process.env.NEXT_PUBLIC_API_DEV_IMAGE_URL,
  },

  production: {
    appUrl: process.env.NEXT_PUBLIC_API_URL,
    imageUrl: process.env.NEXT_PUBLIC_API_IMAGE_URL,
  },
};

const config = {
  ...completeConfig.default,
  ...completeConfig["production"],
};

export default config;
