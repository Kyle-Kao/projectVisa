import ImgCard from '../components/ImgCard';

function App() {
  const data = {
    img: require('../images/bg-main-desktop.png')
  }

  return (
    <div className="flex">
      <ImgCard img={data}></ImgCard>
    </div>
  );
}

export default App;
