function Label({ id, title, maxLength, inputValue, replaceState, inputFuc }) {
  const style = id==='name' ? 'mb-2' : 'mb-2 mt-8'

  return (
    <>
      <label htmlFor={id} className={style}>{title}</label>
      <input
      maxLength={maxLength} 
      defaultValue={inputValue} 
      id={id} type="text" 
      className='border-2 border-black rounded-md p-2' 
      onChange={(e)=>{ replaceState? inputFuc(e.target.value.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ")) : inputFuc(e.target.value)}}/>
    </>
  )
}

export default Label