import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Snackbar } from '@mui/material';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = (props: TodoFormProps) => {
  const { t } = useTranslation();
  const { onAddTodo } = props;

  const [ open, setOpen ] = useState(false);
  const [ text, setText ] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()){
      console.log(text);
      onAddTodo(text);
      setText("");
    } else if (text.trim() === ""){
      setOpen(true);
    }
  };
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {      
      setText(e.target.value);
  };


  return (
    <form onSubmit={handleSubmit} aria-label="Add new Task">
      <input 
        type="text" 
        value={text} 
        onChange={handleOnChange} 
        placeholder={t('add_todo_placeholder')} 
        aria-label={t('add_todo_placeholder')} />
      <button type="submit"> {t('add_button')} </button>
      <Snackbar 
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={t("no_add_task")}
      />
    </form>
  );  
};

export default TodoForm;