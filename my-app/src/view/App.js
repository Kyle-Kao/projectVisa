import ImgCard from '../components/ImgCard';
import Form from '../components/Form';
import bg from '../images/bg-main-desktop.png'
import front from '../images/bg-card-front.png'
import back from '../images/bg-card-back.png'

function App() {
  const mainBg = ['w-483', 'h-screen', 'absolute', 'left-0', '-z-20'].join(' ')
  const frontCard = ['w-full', 'h-full', 'absolute', 'left-0', '-z-10'].join(' ')
  const backCard = ['w-full', 'h-full', 'absolute', 'left-0', '-z-10'].join(' ')

  return (
    <div className="flex justify-center relative">
      <ImgCard img={bg} data={mainBg}></ImgCard>
      <div id="content" className="w-full h-screen flex justify-center items-center">
        {/* 卡片樣式 */}
        <div id="card-type" className="flex flex-col w-1/2 items-center justify-center h-screen">
          <div id="front" className='p-8 pt-6 pb-6 w-447 h-245 flex flex-col justify-around items-start relative'>
            <ImgCard img={front} data={frontCard}></ImgCard>
            <div id="person" className='flex justify-center items-center'>
              <div className="icon h-12 w-12 rounded-full bg-white"></div>
              <div className="deco h-6 w-6 rounded-full border-2 border-white ml-3"></div>
            </div>
            <div id="number" className='w-11/12 h-10 font-bold text-white rounded-lg text-3xl mt-12'>{number}</div>
            <div id="name-box" className='w-full flex justify-between items-center text-base text-white mt-6'>
              <div className="name font-bold">{user}</div>
              <div className="date">{year}/{month}</div>
            </div>
          </div>
          <div id="back" className='w-447 h-245 mt-8 ml-52 relative'>
            <ImgCard img={back} data={backCard}></ImgCard>
            <div className="cvc-num text-white text-base absolute right-20 top-28">{cvc}</div>
          </div>
        </div>
        {/* 輸入資料 */}
        <Form></Form>
        {/* 成功 */}
      </div>
    </div>
  );
}

export default App;
