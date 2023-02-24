import ImgCard from '../mini-factory/ImgCard';
import Form from '../components/Form';
import Success from '../components/Success';
import bg from '../images/bg-main-desktop.png'
import front from '../images/bg-card-front.png'
import back from '../images/bg-card-back.png'
import { useState } from 'react'

function App() {
  const mainBg = ['w-483', 'h-screen', 'absolute', 'left-0', '-z-20'].join(' ')
  const frontCard = ['w-full', 'h-full', 'absolute', 'left-0', '-z-10'].join(' ')
  const backCard = ['w-full', 'h-full', 'absolute', 'left-0', '-z-10'].join(' ')
  const [user, setUser] = useState('your name')
  const [number, setNumber] = useState('0000 0000 0000 0000')
  const [month, setMonth] = useState('MM')
  const [year, setYear] = useState('YY')
  const [cvc, setCvc] = useState('000')
  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
      if(user === ''|| user === 'your name'){
        alert('請輸入正確名稱')
        return
      }
      if(number === ''|| user === '0000 0000 0000 0000'){
        alert('請輸入正確卡片號碼')
        return
      }
      if(month === ''|| month === 'MM' || year === ''|| year === 'YY'){
        alert('請輸入正確日期期限')
        return
      }
      if(cvc === ''|| cvc === '000'){
        alert('請輸入正確安全碼')
        return
      }
      setSuccess(true)
  }
  const resetType = () =>{
    setUser('your name')
    setNumber('0000 0000 0000 0000')
    setMonth('MM')
    setYear('YY')
    setCvc('000')
    setSuccess(false)
  }

  const data = {
    user: setUser,
    number: setNumber,
    month: setMonth, 
    year: setYear,
    cvc: setCvc,
    handleSubmit: handleSubmit,
    resetType: resetType
  }

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
              <div className="date">{month}/{year}</div>
            </div>
          </div>
          <div id="back" className='w-447 h-245 mt-8 ml-52 relative'>
            <ImgCard img={back} data={backCard}></ImgCard>
            <div className="cvc-num text-white text-base absolute right-20 top-28">{cvc}</div>
          </div>
        </div>
        { success? <Success data={data}></Success> : <Form data={data}></Form> }
      </div>
    </div>
  );
}

export default App;
