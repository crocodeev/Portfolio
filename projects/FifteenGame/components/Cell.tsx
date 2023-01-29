import styles from '../../../styles/FifteenGame.module.css'
import React, { useEffect, useState, useRef } from 'react';
import { EDirections, TCoordinate } from '../types';

const Cell = (props: { 
    number: number, 
    row: number,
    col: number
    handleClick: Function }) => {

    const coordinates = useRef({ x:0, y:0});
    const cellRef = useRef(null);

    
    const computeInizialPosition = (row: number, col: number) => {    
        return { left: `${col * 100}px`, top: `${row * 100}px`}  
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
    

    const animate = (direction: EDirections, 
                    element: HTMLElement | null,
                    coordinates: TCoordinate) => {    
                        
        const currentCoordinates = getRelativePosition(cellRef.current)                

        switch (direction) {
            case 1:
                element?.animate(
                    [
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x}px)` }, 
                        { transform: `translateY(${coordinates.y - 100}px) translateX(${coordinates.x}px)` } 
                    ],
                    { duration: 200, fill: "forwards" }
                )

                if(currentCoordinates.length){
                    coordinates.y = + currentCoordinates[1] - 100
                }else{
                    coordinates.y = -100
                }

                break;
            case 2:
                element?.animate(
                    [
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x}px)` }, 
                        { transform: `translateY(${coordinates.y + 100}px) translateX(${coordinates.x}px)` } 
                    ],
                        { duration: 200, fill: "forwards" }
                )
                
                if(currentCoordinates.length){
                    coordinates.y = + currentCoordinates[1] + 100
                }else{
                    coordinates.y = 100
                }

                    break;
            case 3:
                element?.animate(
                    [
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x}px)` }, 
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x - 100}px)` } 
                    ],
                        { duration: 200, fill: "forwards" }
                    )

                if(currentCoordinates.length){
                    coordinates.x = + currentCoordinates[0] - 100
                }else{
                    coordinates.x = -100
                } 

                    break;
            case 4:
                element?.animate(
                    [
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x}px)` }, 
                        { transform: `translateY(${coordinates.y}px) translateX(${coordinates.x + 100}px)` } 
                    ],
                        { duration: 200, fill: "forwards" }
                    )    
                if(currentCoordinates.length){
                    coordinates.x = + currentCoordinates[0] + 100
                }else{
                    coordinates.x = 100
                }
                    break;                
            default:
                break;
        }

    }


    const handleClick = () => {

        props.handleClick(props.number, (direction: EDirections) => {
            animate(direction, cellRef.current, coordinates.current)
        })

    }

    return(
        <div className={props.number ? styles.real_cell : styles.null_cell} 
        style={computeInizialPosition(props.row, props.col)}
        ref={cellRef}
        onClick={handleClick}>
        {
            props.number ?
            <h1>{props.number}</h1>
            :
            null
        }    
            
        </div>
    )
} 


export default Cell;