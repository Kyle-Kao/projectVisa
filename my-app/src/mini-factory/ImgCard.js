function ImgCard({ img, data }) {
    return (
        <div className={data}>
            <img className="w-full h-full" src={img} alt=""/>
        </div>
    )
}

export default ImgCard;