import { useState } from 'react'

function Form() {
    const [user, setUser] = useState('your name')
    const [number, setNumber] = useState('0000 0000 0000 0000')
    const [month, setMonth] = useState('MM')
    const [year, setYear] = useState('YY')
    const [cvc, setCvc] = useState('000')
    // const [success, setSuccess] = useState(false)

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
        // setSuccess(true)
    }

    <div id="user-info" className='w-1/2'>
        <form action="" className='w-447 ml-40 flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="name" className='mb-2'>CARDHOLDER NAME</label>
            <input value={user} id='name' type="text" className='border-2 border-black rounded-md p-2' onChange={(e)=>{setUser(e.target.value)}}/>
            <label htmlFor="number" className='mb-2 mt-8'>CARD NUMBER</label>
            <input value={number} maxLength='19' id='number' type="text" className='border-2 border-black rounded-md p-2' onChange={(e)=>{setNumber(e.target.value.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 "))}}/>
            <div className="bottom-info flex mt-8">
              <div className="date flex w-1/2 flex-col">
                <label htmlFor="" className='mb-2'>EXP. DATE(MM/YY)</label>
                <div className="describe flex">
                  <input value={month} maxLength='2' type="text" className='w-1/2 border-2 border-black rounded-md p-2 text-center' onChange={(e)=>setMonth(e.target.value)}/>
                  <input value={year} maxLength='2' type="text" className='w-1/2 border-2 border-black rounded-md p-2 ml-2 text-center' onChange={(e)=>setYear(e.target.value)}/>
                </div>
              </div>
              <div className="cvc flex flex-col w-1/2 ml-4">
                <label htmlFor="cvc" className='mb-2'>CVC</label>
                <input value={cvc} maxLength='3' id='cvc' type="text" className='border-2 border-black rounded-md p-2 text-center' onChange={(e)=>setCvc(e.target.value)}/>
              </div>
            </div>
            {/* <div className="confirm rounded-md w-full p-4 text-center mt-8 bg-purple text-white font-bold text-base cursor-pointer">Confirm</div> */}
            <input value='Confirm' type="submit" className="rounded-md w-full p-4 text-center mt-8 bg-purple text-white font-bold text-base cursor-pointer"/>
        </form>
    </div>
}

export default Form