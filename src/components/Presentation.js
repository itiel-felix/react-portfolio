
import './custom.css';
const Presentation = () => {
    return (
        <div className='presentation-container' style={{}}>
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
            <div className='picture-container'>
                <div className='picture'>
                    <img src={process.env.PUBLIC_URL + '/pikachu.webp'} alt='Itiel' style={{ marginTop: '0rem', marginLeft: '-8rem', width: '180%' }} />
                </div>
            </div>
        </div>
    );
}
export default Presentation;