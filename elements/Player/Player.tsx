import { Howl, Howler } from 'howler';
import { useRef } from 'react';
import Oscilloscope from './Oscilloscope'; 


const Player = () => {
    
    
    const sound = new Howl({ src: ['sound/track.mp3']});

    const oscilloscopeCreator = useRef(null);
    const analyzer = useRef(null);

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

/*
                if (ac.currentTime < 0.1){
                    subDraw();
                    analyzer.isFirstStart = 0;
                    drawTime = ac.currentTime;
                }else if (ac.currentTime - drawTime >= 0.5) {
                    subDraw();
                    drawTime = ac.currentTime;
                }*/

                subDraw();

                }

                draw();

                return analyzer;
                }
    }

    const handlePlay = (event: React.SyntheticEvent) => {
        event.preventDefault();
        sound.play();
        const analyzer = oscilloscopeCreator.current(Howler.ctx);
    }

    const handlePause = (event: React.SyntheticEvent) => {
        event.preventDefault();
        sound.pause();
    }

    const handleStop = (event: React.SyntheticEvent) => {
        event.preventDefault();
        sound.stop();
    }

    return(
        <div className='col s12'>
            
                <div className="col s2">
                    <div className="row">
                        <button onClick={handlePlay}>PLAY</button>
                    </div>
                    <div className="row">
                        <button onClick={handlePause}>PAUSE</button>
                    </div>
                    <div className="row">
                    <button onClick={handleStop}>STOP</button>
                    </div>     
                </div>
                <div className='col s10'>
                    <Oscilloscope callback={onCanvasMount} />
                </div>   
            
        </div>
    )
}

export default Player