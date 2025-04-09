import AddTask from './components/forms/AddTask';
import Header from './components/Header';
import List from './components/taskCategoryList/List';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <List />
        <section>
          <AddTask />
        </section>
      </main>
    </>
  );
}

export default App;
