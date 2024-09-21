import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {usePhotosQuery} from '../redux/gallaryApi';

import {useDispatch, useSelector} from 'react-redux';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PhotoCard, EmptyFooter} from '../components';
import {RootState} from '../redux/store';
import {setPageNumber} from '../redux/itemQuery';
import useGridColumns from '../hooks/useGridColumns';
import {RootParamList} from '../interfaces/interfaces';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ThemeButton from '../components/ThemeButton';
import {useTheme} from '@react-navigation/native';
import BoldText from '../components/BoldText';

type Props = NativeStackScreenProps<RootParamList, 'HomeStack'>;
const Home = ({navigation}: Props) => {
  const [query, setQuery] = useState('');
  const {_page, _limit} = useSelector((state: RootState) => state.itemQuery);
  const dispatch = useDispatch();
  const {
    data: photos,
    isLoading,
    isFetching,
    refetch,
  } = usePhotosQuery({_page, _limit});

  const onEndReached = () => {
    if (!isFetching && !isLoading) {
      dispatch(setPageNumber(1));
      refetch();
    }
  };

  const renderFooter = () => {
    // Show ActivityIndicator at the bottom when more data is being loaded
    return isFetching || isLoading ? (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ) : null;
  };

  const {numColumns} = useGridColumns();

  const handlePhotoCardPress = (photoId: number) => {
    navigation.navigate('Details', {photoId});
  };

  const handleSearchQuery = (query: string) => {
    setQuery(query);
  };

  const filteredPhoto = photos?.filter(
    photo =>
      photo.title.includes(query) || photo.albumId.toString().includes(query),
  );

  return (
    <FlatList
      key={numColumns}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <Heading
          handleOnChange={handleSearchQuery}
          query={query}
          setQuery={setQuery}
        />
      }
      data={filteredPhoto}
      renderItem={({item: photo}) => (
        <PhotoCard
          id={photo.id}
          title={photo.title}
          thumbnailUtl={photo.thumbnailUrl}
          isLoading={isFetching || isLoading}
          onPress={() => handlePhotoCardPress(photo.id)}
        />
      )}
      keyExtractor={item => item.id.toString()}
      onEndReached={onEndReached}
      ListFooterComponent={renderFooter}
      initialNumToRender={10}
      numColumns={numColumns}
      removeClippedSubviews={true}
      windowSize={10}
      getItemLayout={(data, index) => ({
        length: 140, // Height of the item
        offset: 140 * index, // Offset from the start of the list
        index,
      })}
      onEndReachedThreshold={0.3}
      ListEmptyComponent={<EmptyFooter />}
    />
  );
};

interface HeadingProps {
  handleOnChange: (query: string) => void;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}
const Heading = ({handleOnChange, query, setQuery}: HeadingProps) => {
  const {colors} = useTheme();
  return (
    <View style={styles.headingContainer}>
      <View style={styles.searchTextContainer}>
        <BoldText style={[styles.searchText, {color: colors.text}]}>
          Search
        </BoldText>
        <ThemeButton />
      </View>
      <View style={styles.headingContentContainer}>
        <View style={styles.searchInputContainer}>
          <MaterialIcons name="search" size={25} />
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            onChangeText={handleOnChange}
            value={query}
          />
        </View>
        {query && (
          <MaterialIcons name="close" size={25} onPress={() => setQuery('')} />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  loaderContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  headingContainer: {
    gap: 6,
    paddingVertical: 8,
  },
  searchText: {
    fontSize: 25,
    paddingHorizontal: 8,
  },
  headingContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    marginVertical: 5,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  searchTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Medium',
  },
});
