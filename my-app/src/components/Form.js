import Label from "../mini-factory/InputLabel";

function Form({data}) {
    const {user, number, month ,year, cvc, handleSubmit} = data;
    
    return (
      <div id="user-info" className='w-1/2'>
        <form action="" className='w-447 ml-40 flex flex-col' onSubmit={handleSubmit}>
            <Label id="name" title="CARDHOLDER NAME" inputValue="your name" inputFuc={user}></Label>
            <Label id="number" title="CARD NUMBER" maxLength="16" inputValue="0000000000000000" replaceState="true" inputFuc={number}></Label>
            <div className="bottom-info flex">
              <div className="date flex w-1/2 flex-col">
                <label htmlFor="" className='mb-2 mt-8'>EXP. DATE(MM/YY)</label>
                <div className="describe flex">
                  <input defaultValue="MM" maxLength='2' type="text" className='w-1/2 border-2 border-black rounded-md p-2 text-center' onChange={(e)=>month(e.target.value)}/>
                  <input defaultValue="YY" maxLength='2' type="text" className='w-1/2 border-2 border-black rounded-md p-2 ml-2 text-center' onChange={(e)=>year(e.target.value)}/>
                </div>
              </div>
              <div className="cvc flex flex-col w-1/2 ml-4">
                <Label id="cvc" title="CVC" maxLength="3" inputValue="000" inputFuc={cvc}></Label>
              </div>
            </div>
            <input value='Confirm' type="submit" className="rounded-md w-full p-4 text-center mt-8 bg-purple text-white font-bold text-base cursor-pointer"/>
        </form>
      </div>
    )
    
}

export default Form