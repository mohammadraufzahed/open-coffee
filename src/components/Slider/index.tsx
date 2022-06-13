import React, {useEffect, useRef} from 'react';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import SliderItem from '../SliderItem';

/**
 * @name Slider
 * @description Slider component
 * @example
 * <Slider data={} />
 * @returns {}
 */
const Slider: React.FC = () => {
  const flatListRef = useRef<FlatList | null>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(viewOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [viewOpacity]);
  return (
    <Animated.View style={{opacity: viewOpacity}}>
      <View style={styles.slider}>
        <FlatList
          data={[0, 1, 2, 3, 4]}
          keyExtractor={item => item.toString()}
          renderItem={SliderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          ref={ref => (flatListRef.current = ref)}
        />
      </View>
      <ExpandingDot
        data={[0, 1, 2, 3, 4]}
        expandingDotWidth={30}
        scrollX={scrollX}
        dotStyle={styles.dotStyle}
        containerStyle={styles.dotContainer}
        inActiveDotColor="white"
        activeDotColor="white"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  slider: {
    height: 200,
  },
  dotStyle: {
    width: 10,
    height: 10,
    backgroundColor: '#347af0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotContainer: {
    bottom: 10,
    left: 20,
  },
});

export default Slider;
