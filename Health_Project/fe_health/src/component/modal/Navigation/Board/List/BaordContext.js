import React, { useReducer, createContext, useContext, useRef } from "react"

const initialTodos = []

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo) // concat => 배열 끝에 새로운 요소 추가
    case "UPDATE":
      // map => 함수의 반환값으로 새로운 배열을 만든다
      return state.map((todo) =>
        todo.index === action.todo.index ? todo : console.log(0)
      )
    case "REMOVE":
      return state.filter((todo) => todo.index !== action.index)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
const TodoNextIdContext = createContext()

export function BoardProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  const nextId = useRef(1)

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState() {
  return useContext(TodoStateContext)
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext)
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext)
}
