
function CardShow({ img, onClick }) {
    return (
        <div>
            <div><img src={img} alt='' height='250' width='250' onClick={onClick}></img></div>
        </div>
    )
}

export default CardShow;