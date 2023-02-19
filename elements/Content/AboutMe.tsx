import styles from "../../styles/Home.module.css";


const AboutMe = () => {

    return(
        <div className={styles.text_field}>
            <div className="row">
                <div className="col s12">
                    <h5>Briefly:</h5>
                    <p>
                    Graduated as a teacher of the Russian language and literature,
                    <br/>
                    started as a sound engineer on radio station,
                    continued as a motion designer,
                    <br/>
                    now I have become a ...software developer, I believe
                    </p>
                    <br/>

                    <h5>Long story:</h5>

                    <h6>1</h6>    
                    <p>
                    to automate routine animation in after effect, 
                    I learned how to write expression (AE use JS as an expression language),
                    <br/>
                    <a href="https://www.youtube.com/watch?v=-9vzxbvnA8k">here</a> example of animation
                    </p>

                    <h6>2</h6>
                    <p>
                    then I automated some routine for me and colleagues using powershell and bash (on RPI),
                    <br/>
                    started managing servers at work
                    </p>

                    <h6>3</h6>
                    <p>
                    took a JS course at LevelUp school 
                    </p>

                    <h6>4</h6>
                    <p>
                        during the quarantine made PoC audio player on Electron JS
                    </p>

                    <h5>Now:</h5>
                    <p>
                    - have been working on this
                    <br/>
                    - communicate with server-side developer team as product owner
                    </p>

                </div>
            </div>
            
            
        </div>
    )

}

export default AboutMe