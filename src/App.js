
import './App.css';
import Cats from "./Cat"

function App() {
  return (
    <div className="App">
      <div className="pictures">
        <Cats
          catImage={
            "https://i.pinimg.com/564x/0c/e5/8e/0ce58e58aea9bab33ee80ad007983eee.jpg"
          }
          Name={"Luna"}
          Age={"2"}
        />
        <Cats
          catImage={
            "https://i.pinimg.com/originals/62/4c/d0/624cd08f6926bd27ca9dbba62fa972d9.png"
          }
          Name={"Carl"}
          Age={"7"}
        />
        <Cats
          catImage={
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F01%2Fwhite-oriental-shorthair-cat_1785802076-2000.jpg"
          }
          Name={"Lulu"}
          Age={"1"}
        />
        <Cats
          catImage={
            "https://i.guim.co.uk/img/media/67f70805c64b8bdc45175068c5ec37f7d743987d/0_250_4255_2553/master/4255.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=265bdd10b9ee876d2e404c5631fbbaf3"
          }
          Name={"Yuna"}
          Age={"1 months"}
        />
      </div>
    </div>
  );
}

export default App;
