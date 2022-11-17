
// import 'react-native-gesture-handler';
import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,

  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainNavigation from './src/navigation';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App: () => Node = () => {

  return (
    <>
      <MainNavigation />
    </>


  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
