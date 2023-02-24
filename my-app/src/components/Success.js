import ImgCard from '../mini-factory/ImgCard';
import succseeIcon from '../images/icon-complete.svg'
const succseeIconStyle = ['w-20', 'h-20'].join(' ')

function Success({data}) {
    const { resetType } = data

    return (
        <div className='thx flex flex-col justify-center items-center w-1/2'>
            <ImgCard img={succseeIcon} data={succseeIconStyle}></ImgCard>
            <p className='mt-8 font-bold text-lg text-black'>THANK YOU!</p>
            <p className='mt-2 text-base font-bold text-dgray'>We've added your card details</p>
            <button className='p-2 rounded-lg bg-purple text-white w-300 mt-8' onClick={resetType}>Continue</button>
        </div>
    )
}

export default Success