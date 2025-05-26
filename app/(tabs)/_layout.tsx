import { Inter_400Regular, useFonts } from '@expo-google-fonts/inter';
import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <>{children}</>;
}