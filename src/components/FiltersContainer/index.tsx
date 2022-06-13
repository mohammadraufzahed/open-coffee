import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, ScrollView, StyleSheet, Text} from 'react-native';
import FilterItem from '../FilterItem';

const {height} = Dimensions.get('screen');

/**
 * @name FiltersContainer
 * @description List the filters to select
 * @example
 * <FiltersContainer />
 */
const FiltersContainer: React.FC = () => {
  const viewOpacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(viewOpacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [viewOpacity]);
  return (
    <Animated.View style={{...styles.container, opacity: viewOpacity}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* <FlatList
            data={FilterData}
            renderItem={item => <FilterItem type={item.item} />}
            keyExtractor={(_, key) => key.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          /> */}
        <FilterItem type="smoke" />
        <FilterItem type="outdoorFood" />
        <FilterItem type="work" />
        <FilterItem type="outdoor" />
        <FilterItem type="all" />
      </ScrollView>
      <Text style={styles.title}>فیلتر های پرطرفدار :</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: height * 0.03,
    alignItems: 'center',
    paddingRight: 16,
  },
  title: {
    color: 'white',
    fontFamily: 'IRANSansX-Bold',
    fontSize: 12,
    marginLeft: 5,
  },
});

export default FiltersContainer;
