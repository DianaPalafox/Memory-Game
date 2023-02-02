import CardShow from "./CardsShow";

function Cards({ cards, onClick }) {
    const renderedCards = cards.map((card) => {
        return <CardShow id={card.id} key={card.id} card={card} img={card.src} onClick={onClick}/>
    })

    return (
        <div className="cards-container">
        <div className="cards">{renderedCards}</div>
        </div>
    )
}

export default Cards;