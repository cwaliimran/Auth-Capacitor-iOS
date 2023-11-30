import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // plugins: {
  //   GoogleAuth: {
  //     scopes: ['profile', 'email'],
  //     // serverClientId: '86985945866-uo2qp6cmattjk3kafsltiknv0so04ouo.apps.googleusercontent.com',
  //     forceCodeForRefreshToken: true,
  //   },
  // },
  
    "plugins": {
      "@codetrix-studio/capacitor-google-auth": {
        "scopes": ["profile", "email"],
        "webClientId": '86985945866-uo2qp6cmattjk3kafsltiknv0so04ouo.apps.googleusercontent.com',
      }
    },  
  appId: 'com.nextauth.app',
  appName: 'my-next-auth-app',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
