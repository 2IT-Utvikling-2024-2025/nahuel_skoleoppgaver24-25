import './css/Frontpage.css'
import logo from '/casual_flex.png'

export default function Profil() {


    return (

        <>
            <div className='header'>
                <img src={logo} alt="A game of hearts of iron" className='fp_image' />
                <h1 className='name'>Nahuel</h1>
            </div>
            
        </>
    )
}