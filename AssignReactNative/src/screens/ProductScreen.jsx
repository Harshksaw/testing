import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { data } from '../../assets/data';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/card';
import { useSelector } from 'react-redux';

const ProductScreen = () => {
  const navigation = useNavigation();

  const diet = useSelector(state => state.filter.diet);
  const cruisine = useSelector(state => state.filter.cruisine);
  const protien = useSelector(state => state.filter.protien);

  console.log(diet, 'filter product diet');
  console.log(cruisine, 'filter product diet');
  console.log(protien, 'filter product diet');

  let ItemsData = data;

  const filterData = () => {
    if (diet && cruisine && protien) {
      ItemsData = data.filter(item => item.Type.Diet === diet && item.Type.Cruisines === cruisine && item.Type.Protiens === protien);
    } else if (diet && cruisine) {
      ItemsData = data.filter(item => item.Type.Diet === diet && item.Type.Cruisines === cruisine);
    } else if (diet && protien) {
      ItemsData = data.filter(item => item.Type.Diet === diet && item.Type.Protiens === protien);
    } else if (cruisine && protien) {
      ItemsData = data.filter(item => item.Type.Cruisines === cruisine && item.Type.Protiens === protien);
    } else if (diet) {
      ItemsData = data.filter(item => item.Type.Diet === diet);
    } else if (cruisine) {
      ItemsData = data.filter(item => item.Type.Cruisines === cruisine);
    } else if (protien) {
      ItemsData = data.filter(item => item.Type.Protiens === protien);
    }
    console.log(ItemsData, 'filtered data');
  }

  if (diet || cruisine || protien) {
    filterData();
  }
    





  return (
    <View style={{ flex: 1, marginBottom: 30 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 15,
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 10,
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          Satisfy your craving
        </Text>
      </View>
        
        
      <Card data={ItemsData} />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    position: 'relative',
  },
});