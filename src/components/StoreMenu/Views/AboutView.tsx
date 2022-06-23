import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import ClockSVG from '../../../Svgs/ClockSVG';
import LocationSVG from '../../../Svgs/LocationSVG';
import PhoneSVG from '../../../Svgs/PhoneSVG';
import USDSVG from '../../../Svgs/USDSVG';

const {width, height} = Dimensions.get('screen');

const AboutView: React.FC = () => {
  return (
    <ScrollView style={[styles.scroll]}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          خیابان فرشته از خیابان­ های قدیمی تهران است که بافت کوچه­ هایش شبیه به
          بافت روستا است. در این خیابان شلوغ، پیدا کردن کافه­ ی خوب کار دشواری
          نیست. این خیابان، زیاد بزرگ نیست، بنابراین تعجبی ندارد که یک نفر
          بتواند تمام کافه ­های آن را امتحان کند. در این میان ” کافه حس” یکی از
          محبوب ترین کافه­ ها است و طرفداران بسیار زیادی دارد. این کافه همیشه
          بسیار شلوغ است و در بعضی از روزها برای نشستن در آنجا حتماً باید از قبل
          یک میز را رزرو کنید. کافه حس از چند قسمت تشکیل شده است که هر کدام از
          دیگری زیباتر اند.
        </Text>
        <View style={styles.line} />
        <View>
          <View style={styles.informationRow}>
            <Text style={styles.informationText}>سطح قیمتی: بالا</Text>
            <View style={styles.usdContainer}>
              <USDSVG />
              <USDSVG />
              <USDSVG />
            </View>
          </View>
          <View style={styles.informationRow}>
            <Text style={styles.informationText}>
              ساعات کار: هر روز از ساعت ۹ الی ۲۳
            </Text>
            <ClockSVG />
          </View>
          <View style={styles.informationRow}>
            <Text style={[styles.open, styles.openMap]}>نمایش روی نقشه</Text>
            <Text style={styles.informationText}>
              تهران - خیابان فرشته - خیابان آقابزرگی پلاک ۲۳۴
            </Text>
            <LocationSVG />
          </View>
          <View style={styles.informationRow}>
            <Text style={[styles.open, styles.openCall]}>تماس</Text>
            <Text style={styles.informationText}>021 - 22181000</Text>
            <PhoneSVG />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    marginBottom: height * 0.16,
  },
  container: {
    backgroundColor: '#121212',
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  paragraph: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'IRANSansX-Medium',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginTop: height * 0.035,
    marginBottom: height * 0.03,
  },
  informationRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: height * 0.01,
  },
  informationText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'IRANSansX-Medium',
    marginRight: width * 0.05,
    maxWidth: width * 0.5,
  },
  usdContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  open: {
    color: '#C49D68',
    borderBottomWidth: 1,
    height: height * 0.025,
    borderColor: '#C49D68',
    fontSize: 12,
    fontFamily: 'IRANSansX-Medium',
  },
  openMap: {
    marginRight: width * 0.04,
  },
  openCall: {
    marginRight: width * 0.27,
  },
});

export default AboutView;
