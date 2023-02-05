import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: state.currentId++, text: action.payload.trim(), state: 'todo' });
    },
    updateTodo: (state, action) => {
      const itemIndex = state.todos.findIndex((item) => item.id === action.payload);
      state.todos[itemIndex].state = state.todos[itemIndex].state === 'todo' ? 'done' : 'todo';
      state.todos.push(state.todos.splice(itemIndex, 1)[0]);
    },
    deleteTodo: (state, action) => {
      const itemIndex = state.todos.findIndex((item) => item.id === action.payload);
      if (itemIndex <= -1) {
        return;
      }

      state.todos.splice(itemIndex, 1);
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
