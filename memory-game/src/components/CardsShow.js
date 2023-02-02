
function CardShow({ img, onClick, id }) {
    return (
        <div>
            <div><img src={img} alt='' height='250' width='250' onClick={onClick} id={id}></img></div>
        </div>
    )
}

export default CardShow;