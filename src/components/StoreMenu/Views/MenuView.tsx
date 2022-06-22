import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const MenuView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>قهوه</Text>
      <View style={{flex: 1, marginBottom: height * 0.17}}>
        <FlatList
          data={[0, 1, 2, 3, 4, 5]}
          numColumns={2}
          keyExtractor={item => item.toString()}
          renderItem={MenuItem}
          scrollEnabled
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const MenuItem: React.FC = () => {
  return (
    <View style={menuStyles.container}>
      <Image
        source={require('../../../../assets/images/menuItem.png')}
        resizeMode="cover"
      />
      <Text style={menuStyles.title}>قهوه ترک</Text>
      <Text style={menuStyles.price}>28.000 ت</Text>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    width: width * 0.35,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderRadius: 14,
    marginHorizontal: width * 0.03,
    marginVertical: height * 0.01,
  },
  title: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'IRANSansX-Medium',
    marginVertical: height * 0.02,
  },
  price: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'IRANSansX-Medium',
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'IRANSansX-Medium',
  },
});

export default MenuView;
