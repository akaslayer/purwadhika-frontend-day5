import classNames from 'classnames';
import React from 'react'
import CardList from './CardList';
import CardData from '../util/CardData';
import Meme from './Meme';


interface CardProps {
  title: string
}

const BackgroundColorMap: { [key: string]: string } = {
  "Not started": "bg-grey",
  "In Progress": "bg-lavender",
  "Blocked": "bg-rose",
  "Done": "bg-green",
}

const Card: React.FC<CardProps> = ({ title }) => {

  const backgroudColor = BackgroundColorMap[title]
  const activeCards = CardData.filter(card => card.status === `${title}`);
  console.log(activeCards);
  return (
    <div className="gap-8 flex flex-col w-full" >
      <input type="text" id="fname" name="Lane Name" placeholder={title} className={classNames("px-3 py-1  text-sf-pro-text text-black font-semibold w-1/3 rounded-full text-center text-base  placeholder:text-black", backgroudColor)} />
      {activeCards.map((item) => (
        <div key={item.id} className='flex flex-col gap-2'>
          {item.meme ? (<><CardList {...item} /> <Meme memePic={item.meme} /></>) : <CardList {...item} />}
        </div>
      ))}


    </div >
  )
}

export default Card