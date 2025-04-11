import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useAppDispatch, useAppSelector} from '../store/store';
import {clearChat, selectAllTopic, setCurrentChat} from '../store/chatSlice';
import {clearMessages, fetchAllMessages} from '../store/messageSlice';
import {unsubscribeMessageQuery} from '../store/subscribeMessage';

const DrawerComponent = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const allTopics = useAppSelector(selectAllTopic);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#0F3A40',
        paddingTop: 20,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
      }}>
      <View style={{flex: 1, marginTop: 60}}>
        <View
          style={{
            alignItems: 'flex-end',
            padding: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(clearChat());
              dispatch(unsubscribeMessageQuery());
              dispatch(clearMessages());
              navigation.dispatch(DrawerActions.closeDrawer());
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'ChatWelcomeScreen'}],
                }),
              );
            }}>
            <Entypo
              name="new-message"
              size={20}
              color="white"
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={allTopics}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginHorizontal: 10,
                  marginVertical: 5,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(setCurrentChat(item.id));
                    dispatch(fetchAllMessages({chatId: item.id}));
                    navigation?.dispatch(DrawerActions.closeDrawer());
                  }}
                  style={{
                    backgroundColor: '#0F3A40',
                    width: '100%',
                    height: 50,
                    borderRadius: 8,
                    justifyContent: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.32,
                    shadowRadius: 2.46,
                    elevation: 9,
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{marginStart: 10, color: 'white'}}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}></FlatList>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          marginBottom: 30,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SettingsScreen');
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 20,
          }}>
          <Ionicons
            name="settings"
            size={25}
            color="white"
            style={{marginLeft: 20}}
          />
          <Text style={{color: 'white', marginLeft: 10}}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DrawerComponent;
