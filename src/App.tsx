import { useState } from 'react';
import Header from './components/Header';
import List from './components/taskCategoryList/List';

function App() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <main className="main">
        <List setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      </main>
    </>
  );
}

export default App;
