import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'cl.vitrina.app',
  appName: 'Vitrina',
  // Carpeta que genera «ng build» (build de producción de Angular).
  webDir: 'dist/frontend/browser',
  android: {
    // La API de Railway usa https, así que no se permite tráfico http sin cifrar.
    allowMixedContent: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      launchAutoHide: true,
      backgroundColor: '#2b4cff',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP',
    },
  },
};

export default config;
