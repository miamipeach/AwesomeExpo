import React from 'react';
import { FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import InputForm from '../components/InputForm';
import TodoItem from '../components/TodoItem';
import { useSelector } from 'react-redux';

const MainScreen = () => {
  const todos = useSelector((state) => state.todo.todos);
  const todoList = todos.filter((item) => item.state === 'todo');
  const doneList = todos.filter((item) => item.state === 'done');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Text style={styles.pageTitle}>ToDo APP</Text>
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
});
