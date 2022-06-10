import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import FilterItem from '../FilterItem';

const {height} = Dimensions.get('screen');

/**
 * @name FiltersContainer
 * @description List the filters to select
 * @example
 * <FiltersContainer />
 */
const FiltersContainer: React.FC = () => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: height * 0.02,
    alignItems: 'center',
    paddingRight: 16,
  },
  title: {
    color: 'white',
    fontFamily: 'IRANSansX-Bold',
    fontSize: 12,
  },
});

export default FiltersContainer;
