import Header from './components/Header';
import List from './components/taskCategoryList/List';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <List />
      </main>
    </>
  );
}

export default App;
