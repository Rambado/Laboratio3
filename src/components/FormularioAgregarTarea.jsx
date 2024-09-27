import { useState } from 'react';
import PropTypes from 'prop-types';


const FormularioAgregarTarea = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

FormularioAgregarTarea.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default FormularioAgregarTarea;
