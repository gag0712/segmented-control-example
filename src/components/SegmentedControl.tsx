import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type TSegmentedControl<T> = {
  segmentList: Array<T>;
  currentSegment: T;
  setCurrentSegment: React.Dispatch<React.SetStateAction<T>>;
};

export const SegmentedControl = <T extends string>({
  segmentList,
  currentSegment,
  setCurrentSegment,
}: TSegmentedControl<T>) => {
  const [parentWidth, setParentWidth] = useState<number>(0);
  const [parentHeight, setParentHeight] = useState<number>(0);
  const offset = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(offset.value)}],
    };
  });
  return (
    <View
      style={[styles.container, {flexDirection: 'row'}]}
      onLayout={event => {
        setParentWidth(event.nativeEvent.layout.width);
        setParentHeight(event.nativeEvent.layout.height);
      }}>
      {segmentList.map((value, index) => {
        return (
          <Pressable
            key={'segment-' + index}
            style={[styles.pressableSegment, {zIndex: 2}]}
            onPress={() => {
              setCurrentSegment(value);
              offset.value =
                ((parentWidth - 4) / segmentList.length) *
                segmentList.indexOf(value);
            }}>
            <Text
              style={{
                color: currentSegment === value ? '#F9F9F9' : '#E8E8E8',
              }}>
              {value}
            </Text>
          </Pressable>
        );
      })}
      <Animated.View
        style={[
          {
            position: 'absolute',
            height: parentHeight - 4,
            width: (parentWidth - 4) / segmentList.length,
            backgroundColor: '#2C2C2C',
            top: 2,
            left: 2,
            borderRadius: 10,
          },
          animatedStyles,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#484848',
    borderRadius: 12,
    padding: 2,
  },
  pressableSegment: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 10,
  },
});
