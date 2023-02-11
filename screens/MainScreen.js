import React from 'react';
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InputForm from '../components/InputForm';
import TodoItem from '../components/TodoItem';
import { useSelector } from 'react-redux';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
const MainScreen = () => {
  const todos = useSelector((state) => state.todo.todos);
  const todoList = todos.filter((item) => item.state === 'todo');
  const doneList = todos.filter((item) => item.state === 'done');
  const auth = getAuth();
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} />
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>ToDo APP</Text>
        <TouchableOpacity style={styles.logOutButton} onPress={handleLogout}>
          <Text style={styles.logOutButtonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할일</Text>
        {todoList.length === 0 ? (
          <Text style={styles.emptyListText}>할일이 없습니다.</Text>
        ) : (
          <FlatList
            data={todoList}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된일</Text>
        {doneList.length === 0 ? (
          <Text style={styles.emptyListText}>완료한 일이 없습니다.</Text>
        ) : (
          <FlatList
            data={doneList}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#f7f8fa',
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: '600',
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: '500',
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
  logOutButtonText: {
    color: 'white',
    fontSize: 25,
  },
  logOutButton: {
    marginBottom: 25,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
