import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import StarSVG from '../../../Svgs/StarSVG';

const {width, height} = Dimensions.get('screen');

const CommentsView: React.FC = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.title}>
        <Text style={[styles.totalScore, styles.titleText]}>
          امتیاز کلی: 4.2/5
        </Text>
        <Text style={[styles.commentsCount, styles.titleText]}>
          تعداد نظرات: 127
        </Text>
      </View>
      <View style={[{flex: 1}]}>
        <FlatList
          data={Array.from(Array(127).keys())}
          keyExtractor={item => item.toString()}
          renderItem={CommentsItem}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </View>
  );
};

const CommentsItem = () => {
  return (
    <View style={[itemStyles.container]}>
      <View style={itemStyles.topContent}>
        <View style={[itemStyles.stars]}>
          {Array.from(Array(5).keys()).map(item => (
            <StarSVG key={item} fill={item < 3 ? '#C49D68' : 'none'} />
          ))}
        </View>
        <Text style={[itemStyles.username]}>علی علیزاده</Text>
        <Image
          source={require('../../../../assets/images/profile.png')}
          resizeMode="cover"
        />
      </View>
      <Text style={itemStyles.paragraph}>
        بهترین کافه ای که تا بحال رفتم. فضای آروم. پرسنل حرفه ای و پذیرایی عالی.
        پیشنهاد میکنم حتما بهشون سر بزنید و از کیفیت لحظاتی که اونجا سپری میکنید
        شگفت زده میشید.
      </Text>
    </View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    width: width * 0.85,
    marginBottom: height * 0.025,
  },
  topContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: height * 0.015,
    paddingHorizontal: width * 0.04,
  },
  username: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'IRANSansX-Medium',
    marginRight: width * 0.03,
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: width * 0.25,
  },
  paragraph: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'IRANSansX-Medium',
    textAlign: 'center',
    marginVertical: height * 0.025,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingBottom: height * 0.18,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'IRANSansX-Regular',
  },
  commentsCount: {},
  totalScore: {},
  listContent: {
    alignItems: 'center',
  },
});

export default CommentsView;
