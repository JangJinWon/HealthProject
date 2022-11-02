import React, { useReducer, createContext, useContext, useRef } from "react"

const initialTodos = [
  {
    id: 1,
    timertext: "07:30",
    watertext: "200",
  },
  {
    id: 2,
    timertext: "09:40",
    watertext: "100",
  },
  {
    id: 3,
    timertext: "12:30",
    watertext: "250",
  },
  {
    id: 4,
    timertext: "16:10",
    watertext: "100",
  },
]

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return action.todo.timertext === "" ||
        action.todo.watertext === "" ||
        isNaN(parseInt(action.todo.watertext)) // 숫자가 아니면 true
        ? (alert("잘못된 입력 입니다."),
          state.filter((todo) => todo.id !== action.id))
        : state.concat(action.todo)

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()
const TodoNextIdContext = createContext()

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos)
  const nextId = useRef(5)

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
  const context = useContext(TodoStateContext)
  if (!context) {
    throw new Error("Cannot find TodoProvider")
  }
  return context
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext)
  if (!context) {
    throw new Error("Cannot find TodoProvider")
  }
  return context
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext)
  if (!context) {
    throw new Error("Cannot find TodoProvider")
  }
  return context
}
