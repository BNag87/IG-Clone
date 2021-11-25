import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-main">
              <Post nickname="Baz" avatar="https://i.imgur.com/MoHYbHH.jpeg" caption="Moving the community!" image="https://i.imgur.com/4mE4OSd.jpeg" />
              <Post nickname="DrStupid" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
              
              {/* more posts */}
            </section>
    </div>
  );
}

export default App;
