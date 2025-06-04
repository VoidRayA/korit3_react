import './App.css'
import TodoForm from './components/TodoForm';
import { v4 as uuid } from "uuid";
import type { Todo } from './types/Todo';
import TodoList from './components/TodoList';
import { useLocalStorage } from './types/useLocalStorage';
import { useTranslation } from 'react-i18next';
import "./i18n/18n";

const App: React.FC = () => {  
  const {t, i18n} = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  }  
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuid(),
      text,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];
    console.log("updatedTodos --->", updatedTodos);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(updatedTodos)
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    console.log(updatedTodos)
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{t('app_title')}</h1>
      <div style={{
        display: 'flex',
        gap: '5px',
        flexWrap: 'wrap',
        marginTop: '5px',
        marginBottom: '5px',
      }}>        
      <button onClick={() => changeLanguage('kr')}
        >
          한글
      </button>
      <button onClick={() => changeLanguage('en')}
        >
          English
      </button>
      <button onClick={() => changeLanguage('jp')}
        >
          日本語
      </button>
      <button onClick={() => changeLanguage('ch')}
        >
          简体
      </button>
      <button onClick={() => changeLanguage('tw')}
        >
          繁體
      </button>
      <button onClick={() => changeLanguage('de')}
        >
          German
      </button>      
      </div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleComplete}/>
    </div>
  )
};

export default App;