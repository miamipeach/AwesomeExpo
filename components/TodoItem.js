import React from 'react';

import { Pressable, Text, View, StyleSheet } from 'react-native';
import IconCheckbox from '../assets/Icon/checkbox-unchecked.svg';
import IconCheckBoxChecked from '../assets/Icon/checkbox-checked.svg';
import IconDelete from '../assets/Icon/delete.svg';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/slices/todoSlice';

const MyComponent = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.itemCheckbox}
        hitSlop={10}
        onPress={() => dispatch(updateTodo(props.id))}
      >
        {props.state === 'todo' ? (
          <IconCheckbox />
        ) : (
          <IconCheckBoxChecked style={styles.itemCheckboxCheckedIcon} />
        )}
      </Pressable>
      <Text style={[styles.itemText, props.state === 'done' ? styles.itemTextChecked : '']}>
        {props.text}
      </Text>
      <Pressable
        style={[styles.deleteButton, props.state === 'done' ? styles.deleteButtonDone : '']}
        hitSlop={10}
      >
        <IconDelete style={styles.deleteIcon} onPress={() => dispatch(deleteTodo(props.id))} />
      </Pressable>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f7f8fa',
  },
  itemCheckbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckboxCheckedIcon: {
    width: 12,
    height: 12,
    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: 'auto',
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: 'line-through',
  },
  deleteText: {
    marginRight: 'auto',
    paddingRight: 10,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
  deleteIcon: {
    width: 12,
    height: 12,
  },
});
