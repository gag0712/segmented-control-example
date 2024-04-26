/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SegmentedControl} from './components/SegmentedControl';
function App(): React.JSX.Element {
  const [segmentList, setSegmentList] = useState<Array<string>>(['1', '2']);
  const [currentSegment, setCurrentSegment] = useState<string>('1');

  return (
    <View style={styles.container}>
      <SegmentedControl
        segmentList={segmentList}
        currentSegment={currentSegment}
        setCurrentSegment={setCurrentSegment}
      />
      <View style={styles.body}>
        <Text style={{color: '#F9F9F9'}}>currentSegment {currentSegment}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingHorizontal: 24,
    paddingTop: 100,
    gap: 24,
  },
  body: {
    width: '100%',
    height: 200,
    backgroundColor: '#2C2C2C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
