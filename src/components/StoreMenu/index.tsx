import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import AboutView from './Views/AboutView';
import CommentsView from './Views/CommentsView';
import GalleryView from './Views/GalleryView';
import MenuView from './Views/MenuView';
import TableView from './Views/TableView';

const {width, height} = Dimensions.get('screen');

type menuStateType = 'about' | 'menu' | 'tables' | 'comments' | 'gallery';
const names: {name: string; key: menuStateType}[] = [
  {
    name: 'درباره',
    key: 'about',
  },
  {
    name: 'منو',
    key: 'menu',
  },
  {
    name: 'مشاهده میزها',
    key: 'tables',
  },
  {
    name: 'نظرات',
    key: 'comments',
  },
  {
    name: 'گالری تصاویر',
    key: 'gallery',
  },
];

const StoreMenu: React.FC = () => {
  const [menuState, setMenuState] = useState<menuStateType>('about');
  return (
    <View style={{flex: 1}}>
      <View style={styles.menuContainer}>
        {names.map((item, key) => (
          <Text
            style={[
              styles.menuItem,
              menuState === item.key ? styles.menuItemActive : null,
            ]}
            onPress={() => setMenuState(item.key)}
            key={key}>
            {item.name}
          </Text>
        ))}
      </View>
      <View style={{flex: 1}}>
        {menuState === 'about' ? (
          <AboutView />
        ) : menuState === 'menu' ? (
          <MenuView />
        ) : menuState === 'tables' ? (
          <TableView />
        ) : menuState === 'comments' ? (
          <CommentsView />
        ) : menuState === 'gallery' ? (
          <GalleryView />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  menuItem: {
    color: 'white',
    paddingHorizontal: width * 0.04,
    height: height * 0.04,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopStartRadius: 100,
    fontFamily: 'IRANSansX-Medium',
    fontSize: 12,
  },
  menuItemActive: {
    backgroundColor: '#121212',
    color: '#C49D68',
  },
});

export default StoreMenu;
