import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./CharacterSection.css";
import PlayerIcon from "../PlayerIcon/PlayerIcon";

const CharacterSection = ({
    index
}) => {

const [currentHero, setcurrentHero] = useState(0)
const [Color, setColor] = useState('lime-500')
const titleref= useRef()

const Heros=[
    {},
    {
        name:"GENJI",
        description:"CYBERNETIC NINJA",
        color:'bg-lime-500'
        ,textcolor:'lime-500',
    },
    {
        name:"HANZO",
        description:"MASTER ARCHER",
        color: 'bg-blue-400'
        ,textcolor:'blue-400',
        
    },
    {
        name:"MOIRA",
        description:"TALON SCIENTIST",
        color:'bg-purple-700'
        ,textcolor:'purple-700',

    },
    {
        name:"REAPER",
        description:"DEATH REINCARNATED"
    },
    {
        name:"SOLDIER:76 ",
        description:"OVERWATCH LEADER",
        color: 'bg-blue-700'
        ,textcolor:'blue-700',
    },
]
const getName=(index)=>{
    return Heros[index+1].name

}
const handleIconClick=(index)=>{
    setcurrentHero(index)
    
}
useEffect(()=>{

},[])
useGSAP(()=>{
    gsap.from('.player-image',{
        x:-300,
        opacity:0,
        duration:0.5,
        ease:"power2.inOut",
        
    })
    gsap.from('#Player-header',{
        x:700,
        opacity:0,
        duration:0.5,
        ease:"power2.inOut",
        
        
    })
    gsap.from('#Player-Discription',{
        y:300,
        opacity:0,
        duration:0.5,
        ease:"power2.inOut",
        
        
    })
},[currentHero])

useGSAP(() => {
    // Infinite scrolling effect
    const tl = gsap.timeline({
    repeat: -1,
    defaults: { ease: "none" },
    });

    tl.to("#text ul", {
    xPercent: -250, // Move the entire width of the container
    duration: 7,// Adjust speed
    });
 

}, []);

return (
    <div id="section-body">
    <div id="characters" className="relative">
        <div className="icon1 absolute right-64 top-5 cursor-pointer " 
        onClick={()=>{
            setcurrentHero(0)
            setColor('lime-500')


        }}>
    <PlayerIcon index={1} isActive={currentHero==0}/>
        </div>
        <div className="icon2 absolute right-32 top-32 cursor-pointer"
        onClick={()=>{
            setcurrentHero(1)
            setColor('blue-400')
            }}>

    <PlayerIcon index={2} isActive={currentHero==1}/>
        </div>
        <div className="icon3 absolute right-10 top-64 cursor-pointer" onClick={()=>{
            setcurrentHero(2)
            setColor('purple-700')
            }}>


    <PlayerIcon index={3} isActive={currentHero==2}/>
        </div>
        <div className="icon4 absolute right-32 top-[24rem] cursor-pointer" onClick={()=>{
            setcurrentHero(3)
            setColor('white')
            }}>


    <PlayerIcon index={4} isActive={currentHero==3}/>
        </div>
        <div className="icon5 absolute right-64 top-[32rem] cursor-pointer" onClick={()=>{
            setcurrentHero(4)
            setColor('blue-700')
            }}>


    <PlayerIcon index={5} isActive={currentHero==4}/>
        </div>

    <div id="player-image">
        <img  className=" player-image absolute bottom-0 h-[80%]" src={`/public/Images/Hero-${currentHero+1}.png`} alt="" />
    </div>
    <div id="player-name" >
        <h1 id="Player-header" className={`text-${Color} `}>{getName(currentHero)}</h1>
        <p id="Player-Discription">{`${Heros[currentHero+1].description}`}</p>
    </div>
    </div>
    <div id="discription" className={`${Heros[currentHero+1].color}`}>
        <div id="text">
        <ul>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
            <li>{getName(currentHero)}</li>
        </ul>
        </div>
    </div>
    </div>
);
};

export default CharacterSection;
