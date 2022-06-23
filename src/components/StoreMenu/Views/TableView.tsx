import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DateSVG from '../../../Svgs/DateSVG';

const {width, height} = Dimensions.get('screen');

const TableView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>رزرو میز</Text>
      <View style={styles.list}>
        <FlatList
          data={Array.from(Array(10).keys())}
          keyExtractor={item => item.toString()}
          renderItem={TableItem}
        />
      </View>
    </View>
  );
};

export const TableItem = () => {
  return (
    <View style={itemStyles.container}>
      <Pressable style={itemStyles.buttonContainer}>
        <Text style={itemStyles.buttonText}>رزرو</Text>
        <DateSVG />
      </Pressable>
      <View>
        <Text style={itemStyles.text}>میز شماره 1</Text>
        <Text style={[itemStyles.text, itemStyles.gapTop]}>ظرفیت: 3 نفر</Text>
      </View>
      <Image
        source={require('../../../../assets/images/table.png')}
        resizeMode="cover"
      />
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: height * 0.13,
    backgroundColor: '#171717',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
  },
  gapTop: {
    marginTop: height * 0.015,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'IRANSansX-Medium',
  },
  buttonContainer: {
    backgroundColor: '#C49D68',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.04,
    width: width * 0.17,
    borderRadius: 8,
  },
  buttonText: {
    color: '#121212',
    fontFamily: 'IRANSansX-Bold',
    fontSize: 12,
    marginRight: width * 0.01,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: height * 0.09,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'IRANSansX-Medium',
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
    alignSelf: 'flex-end',
  },
  list: {flex: 1, marginBottom: height * 0.095},
});

export default TableView;
