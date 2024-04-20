import todoLogo from '../../assets/todoLogo.svg';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddTask}) {
  const [title, setTitle] = useState('');


  function handleSubmit(e) {
    e.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>

        <input placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} />
        <button>Create <AiOutlinePlusCircle size={20} /></button>
        
      </form>
    </header>
  )
}