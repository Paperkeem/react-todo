import './App.css';
import { DarkmodeProvider } from './context/DarkmodeContext';
import TodoList from './page/TodoList';

function App() {

  return (
    <DarkmodeProvider>
      <TodoList />
    </DarkmodeProvider>
  );
}

export default App;
