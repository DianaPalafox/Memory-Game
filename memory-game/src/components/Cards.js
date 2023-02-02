import CardShow from "./CardsShow";

function Cards({ cards }) {
    const renderedCards = cards.map((card) => {
        return <CardShow key={card.id} card={card} img={card.src}/>
    })

    return (
        <div className="cards-container">
        <div className="cards">{renderedCards}</div>
        </div>
    )
}

export default Cards;