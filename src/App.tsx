import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SegmentedControl} from './components/SegmentedControl';

function App(): React.JSX.Element {
  const [segmentList, setSegmentList] = useState<Array<string>>([
    'segment 1',
    'segment 2',
  ]);

  const [currentSegment, setCurrentSegment] = useState<string>('segment 1');

  const onPressAddItem = () => {
    setSegmentList([...segmentList, `segment ${segmentList.length + 1}`]);
  };

  const onPressRemoveItem = () => {
    if (segmentList.length > 1) {
      setSegmentList(segmentList.slice(0, segmentList.length - 1));
    }
  };

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
      <View style={styles.buttonContainer}>
        <Pressable onPress={onPressAddItem} style={styles.button}>
          <Text style={styles.buttonLabel}>+</Text>
        </Pressable>
        <Pressable onPress={onPressRemoveItem} style={styles.button}>
          <Text style={styles.buttonLabel}>-</Text>
        </Pressable>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: '#FFCC33',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonLabel: {
    color: '#141414',
  },
});

export default App;
