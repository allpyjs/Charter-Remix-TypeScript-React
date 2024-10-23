import Header from "./components/Header";
import Content from './pages/Content';

function App() {
  return (
    <div className="h-full min-h-screen flex flex-col sm:flex-row">
      <Header />
      <Content />
    </div>
  );
}

export default App;
