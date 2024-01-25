
import './aboutme.css';
const AboutMe = () => {
    return (
        <div className='about-container' style={{}}>
            <div className='presentation'>
                <h1 style={{color:'white', fontSize:'1rem', color:'var(--secondary-color)'}} >
                    Hi, my name is <br />
                    <span style={{fontSize:'5rem', color:'white'}}> Itiel Felix
                        </span>
                        <br />
                        and yes, I'm a <br />
                    <span className='hollow' style={{fontSize:'5rem', fontWeight:''}}>Web Developer
                        </span>
                </h1>

            </div>
        </div>
    );
}
export default AboutMe;