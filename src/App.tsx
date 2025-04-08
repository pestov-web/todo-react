import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <TaskList />
      </main>
    </>
  );
}

export default App;
