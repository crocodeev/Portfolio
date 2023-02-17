import { Howl, Howler } from 'howler';
import { useRef, useState } from 'react';
import styles from '../../styles/Player.module.css'
import Oscilloscope from './Oscilloscope'; 
import ControlButton from './ControlButton';
import TrackBar from './TrackBar';

const sound = new Howl({ src: ['sound/track.mp3']});

const Player = () => {
    
    const oscilloscopeCreator = useRef(null);
    const analyzer = useRef(null);
    const pointer = useRef(null);

    const [state, setState] = useState({ play: false, pause: false, stop: false})

    const onCanvasMount = () => {

       const canvas = document.getElementById("oscilloscope");

       oscilloscopeCreator.current = (ac) => {

            const analyzer = ac.createAnalyser();

            Howler.masterGain.connect(analyzer);
            analyzer.connect(Howler.ctx.destination);

            analyzer.height = canvas.height;
            analyzer.width  = canvas.width;
            analyzer.strokeColor = "#00f73a";
            analyzer.strokeWidth = 2;

            analyzer.fftSize  = 2048;
            analyzer.smoothingTimeConstant = 1;

            const bufferLength = analyzer.frequencyBinCount;
            let dataArray = new Uint8Array(bufferLength);

            //create graphic ac and black rectange

            const gc = canvas.getContext('2d');
            const ramp = gc.createRadialGradient(0,0,5,150,75,100);
            ramp.addColorStop(0, 'lime');
            ramp.addColorStop(1, 'black');
            gc.fillStyle = ramp;
            gc.fillRect(0,0,canvas.width, canvas.height);

            //create function for draw wave

            let drawTime = 0;

            function draw() {

            //create animation
                requestAnimationFrame(draw);
            //copy current waveform to dataArray
                analyzer.getByteTimeDomainData(dataArray);
            //sub function for organized code
                function subDraw() {
                //clean background
                    //const ramp = gc.createRadialGradient(150, 75, 0, 150, 75, 150);
                    //ramp.addColorStop(0.8, 'rgba(0, 0, 0, 1)');
                    //ramp.addColorStop(1, 'rgba(27, 113, 10, 0.2)');
                    gc.fillStyle = 'rgba(0, 0, 0, 1)';
                    gc.fillRect(0, 0, canvas.width, canvas.height);
                //draw line
                    const lineRamp = gc.createLinearGradient(0, 0, canvas.width, canvas.height)
                    lineRamp.addColorStop(0.1, 'rgba(0, 0, 0, 1)');
                    lineRamp.addColorStop(0.5, '#00f73a');
                    lineRamp.addColorStop(0.9, 'rgba(0, 0, 0, 1)');
                    gc.lineWidth = 2;
                    gc.strokeStyle = lineRamp;
                    gc.beginPath();
                    // define segment lenght
                    let sliceWidth = canvas.width * 1.0 / bufferLength;
                    //x-axis coordinate
                    let x = 0;

                    for(let i = 0; i < bufferLength; i++) {

                    //y-axis coordinate
                    let v = dataArray[i] / 128.0;
                    let y = v * canvas.height/2;

                    if(i === 0) {
                        gc.moveTo(x, y);
                    } else {
                        gc.lineTo(x, y);
                    }
                    //move to next segment
                    x += sliceWidth;
                    }
                    gc.lineTo(canvas.width, canvas.height/2);
                    gc.stroke();
                }

                subDraw();

                }

                draw();

                return analyzer;
                }
    }

    const onTrackBarMount = () => {

        pointer.current = document.getElementById("pointer");
    }

    const TrackBarAnimation = () => {

        const duration = sound.duration();

        
        console.log(duration);
        
        
        
        const animate = () => {

            const current = sound.seek();

            if(current !== 0){
                console.log(current);
            
                const percent = `${ Math.floor(duration / current * 100)}%`;
                console.log(percent);
                
                pointer.current.style.left = percent;

                requestAnimationFrame(animate);    
            }else{
                pointer.current.style.left = "0%";
                requestAnimationFrame(animate);
            }

        }

        requestAnimationFrame(animate);
    }

    const handlePlay = () => {

        if(sound.playing()){
            return;
        }

        if(!analyzer.current){
            analyzer.current = oscilloscopeCreator.current(Howler.ctx);
        }

        sound.play();

        TrackBarAnimation();
        
        setState({
            play: true,
            pause: false,
            stop: false
        })
        
    }

    const handlePause = () => {

        if(sound.playing()){
            sound.pause();

            setState({
                play: false,
                pause: true,
                stop: false
            })
        }
    
    }

    const handleStop = () => {

        sound.stop();

        setState({
            play: false,
            pause: false,
            stop: true
        })
    }

    return(
        <div className={styles.player_container}>
            <div className="row">
            <div className="col s2">
                    <div className="row">
                        <ControlButton 
                            title={"PLAY"} 
                            callback={handlePlay}
                            state={state.play}
                            />
                    </div>
                    <div className="row">
                        <ControlButton 
                            title={"PAUSE"} 
                            callback={handlePause}
                            state={state.pause}
                            />
                    </div>
                    <div className="row">
                        <ControlButton 
                            title={"STOP"} 
                            callback={handleStop}
                            state={state.stop}
                            />
                    </div>     
                </div>
                <div className='col s10'>
                    <Oscilloscope callback={onCanvasMount} />
                </div>    
            </div>
            <div className="row">
                <div className='col s12'>
                    <TrackBar callback={onTrackBarMount}/>
                </div>
            </div>     
        </div>
    )
}

export default Player