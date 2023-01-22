import styles from '../../../styles/FifteenGame.module.css'
import React, { useEffect, useState, useRef } from 'react';
import { EDirections, TCoordinate } from '../types';

const Cell = (props: { chid: string | undefined, number: number }) => {
    
    const coordinates = useRef({ x:0, y:0, id: props.chid});

    useEffect(() => {
        console.log('RENDER');
    })

    const animate = (direction: EDirections, 
                    element: HTMLElement,
                    coordinates: TCoordinate) => {

        switch (direction) {
            case 1:
            element.animate(
                [
                    { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x}px)` }, 
                    { transform: `translateY(${coordinates.y - 100}px) translateX(${coordinates.x}px)` } 
                ],
                  { duration: 200, fill: "forwards" }
            )    
                break;
            case 2:
                element.animate(
                    [
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x}px)` }, 
                        { transform: `translateY(${coordinates.y + 100}px) translateX(${coordinates.x}px)` } 
                    ],
                        { duration: 200, fill: "forwards" }
                )    
                    break;
            case 3:
                element.animate(
                    [
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x}px)` }, 
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x - 100}px)` } 
                    ],
                        { duration: 200, fill: "forwards" }
                    )    
                    break;
            case 4:
                element.animate(
                    [
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x}px)` }, 
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x + 100}px)` } 
                    ],
                        { duration: 200, fill: "forwards" }
                    )    
                    break;                
            default:
                break;
        }

    }

    const getRelativePosition = (el: any) => {

        const style = window.getComputedStyle(el)
        
        const transformString = style.getPropertyValue('transform');

        if(transformString === 'none'){
            return [];
        }else{
            return transformString.split(/, |\)/).slice(4,6)
        }
    }

    const handleClick = (event: any) => {

        const currentCoordinates = getRelativePosition(event.target);

        console.log("current coordinates");
        console.log(currentCoordinates);
        
        /*
        event.target.animate([
            { transform: `translateY(${coordinates.current.y}px) translateX(${coordinates.current.x}px)` }, 
            { transform: `translateY(${coordinates.current.y + 100}px) translateX(${coordinates.current.x}px)` } 
          ],
          { duration: 200, fill: "forwards" })*/

        animate(EDirections.UP, event.target, coordinates.current)  
        

        if(currentCoordinates.length){
            coordinates.current.y = + currentCoordinates[0] + 100
        }else{
            coordinates.current.y = 100
        }  

        console.log(coordinates.current);
        
        
    }

    return(
        <div className={styles.real_cell} 
        id={props.chid} 
        onClick={handleClick}>
            <h1>{props.number}</h1>
        </div>
    )
} 


export default Cell;