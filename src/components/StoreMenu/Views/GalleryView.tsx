import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

const GalleryView: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Array.from(Array(100).keys())}
        keyExtractor={item => item.toString()}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.listColumn}
        renderItem={() => (
          <Image source={require('../../../../assets/images/gallery.png')} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  listContainer: {
    marginTop: height * 0.015,
    paddingBottom: height * 0.2,
  },
  listColumn: {
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.06,
    marginBottom: height * 0.02,
  },
});

export default GalleryView;
