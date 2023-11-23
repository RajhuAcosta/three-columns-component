import { useState } from 'react';
import './Card.css'

const Card = ({title,text,color}) => {
    const [hovered, setHovered] = useState(false);
    const handleMouseEnter = () => {
      setHovered(true);
    };
    const handleMouseLeave = () => {
      setHovered(false);
    };
  return (
    <section className="px-12 xs:px-11 py-12 lg:h-[460px] 1.5xl:h-auto" style={{backgroundColor: `${color}`}}>
        <i className="block"><img src={`/icon-${title}.svg`} alt="" /></i>
        <h3 className="font-['Big_Shoulders_Display'] text-[hsl(0,0%,95%)] text-4xl uppercase mt-9">{title}</h3>
        <p className="font-['Lexend_Deca'] text-[hsla(0,0%,100%,0.75)] mt-7 mb-7">{text}</p>
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="font-['Lexend_Deca'] bg-[hsl(0,0%,95%)] px-8 py-3 rounded-full border-2 border-[hsl(0,0%,95%)] transition-all button hover:bg-transparent" style={{color: hovered ? "white" : `${color}`}}>Learn More</button>
    </section>
  )
}
export default Card