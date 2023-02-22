function ImgCard({ img }) {
    return (
        <div className="w-1/3 h-screen block">
            {/* <img className="w-full h-full" src={require('../images/bg-main-desktop.png')} alt=""/> */}
            <img className="w-full h-full" src={img} alt=""/>
        </div>
    )
}

export default ImgCard;