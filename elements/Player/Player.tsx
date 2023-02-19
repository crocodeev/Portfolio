import { Howl, Howler } from 'howler';
import { useRef, useState } from 'react';
import styles from '../../styles/Player.module.css'
import Oscilloscope from './Oscilloscope'; 
import ControlButton from './ControlButton';
import TrackBar from './TrackBar';

const sound = new Howl({ src: ['sound/track.mp3']});

const Player = () => {
    
    const oscilloscopeCreator = useRef<any>(null);
    const analyzer = useRef<any>(null);
    const pointer = useRef<any>(null);

    const [state, setState] = useState({ play: false, pause: false, stop: false})

    const onCanvasMount = () => {


       const canvas = document.getElementById("oscilloscope") as HTMLCanvasElement;

       //initial field
       if(canvas !== null){
        const gc = canvas.getContext('2d') as any;

        gc.fillStyle = 'rgba(0, 0, 0, 1)';
        gc.fillRect(0, 0, canvas.width, canvas.height);
        
        const lineRamp = gc.createLinearGradient(0, 0, canvas.width, canvas.height)
         lineRamp.addColorStop(0.1, 'rgba(0, 0, 0, 1)');
         lineRamp.addColorStop(0.5, '#00f73a');
         lineRamp.addColorStop(0.9, 'rgba(0, 0, 0, 1)');
         gc.lineWidth = 2;
         gc.strokeStyle = lineRamp;
         gc.beginPath();
         gc.moveTo(0, canvas.height/2);
         gc.lineTo(canvas.width, canvas.height/2);
         gc.stroke();
 
        if(oscilloscopeCreator.current === null){

    
            oscilloscopeCreator.current = (ac: any) => {
 
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
       }
    }

    const onTrackBarMount = () => {

        pointer !== null && (pointer.current = document.getElementById("pointer"))
    }

    const TrackBarAnimation = () => {

        const duration = sound.duration();

        const animate = () => {

                if(sound.playing()){

                    const percent = `${(sound.seek() * 100 / duration).toFixed(4)}%`;
                    
                    pointer.current.style.left = percent;

                    requestAnimationFrame(animate);  
                }

        }

        sound.once('play', () => {
            requestAnimationFrame(animate);
        })

        
    }

    const handlePlay = () => {


        if(sound.playing()){
            return;
        }

        if(!analyzer.current){
            
            analyzer.current = oscilloscopeCreator.current(Howler.ctx);
        }


        sound.once('end', () => {
            setState({
                play: false,
                pause: false,
                stop: false
            })

            pointer.current.style.left = "0%"

        })

        

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

        pointer.current.style.left = "0%"

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