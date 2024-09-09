
export default function Profile() {

    let profile = {
        name: 'Nahuel Polesel',
        alt: 'Bilde av profil',
        src: '',
        width: '500px'
    }


    return (
     <img src="profile.src" 
     alt={profile.alt} />
    )
}