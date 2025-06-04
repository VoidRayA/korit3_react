import { useTranslation } from "react-i18next";
import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props: TodoListProps) => {
  const { t } = useTranslation();
  const { todos, onToggleComplete, onDeleteTodo } = props;
  return ( 
    <ul>
      {todos.length === 0 ? (
        <p> {t('no_task')} </p>
      ) : ( 
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleComplete={onToggleComplete} />
        ))
      )}
    </ul>
  );
};

export default TodoList;