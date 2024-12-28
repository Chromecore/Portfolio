import './Contact.css'
import ItchIcon from './assets/icons/itch'
import MailIcon from './assets/icons/mail'
import LinkedInIcon from './assets/icons/linkedIn'
import GithubIcon from './assets/icons/github'

function Contact()
{
    const socials = [
        { id: 1, icon: <ItchIcon />, link: 'google.com' },
        { id: 2, icon: <MailIcon />, link: 'google.com' },
        { id: 3, icon: <LinkedInIcon />, link: 'google.com' },
        { id: 4, icon: <GithubIcon />, link: 'google.com' }
    ]

    return (
        <div className='contact'>
            <p className='letsTalk'>Let's Talk!</p>
            <div className='formSocials'>
                <form onSubmit={OnContactSubmit}>
                    <Input name='name' label='Name' type='text' error='Missing Name' />
                    <Input name='email' label='Email Address' type='email' error='Invalid Email' />
                    <Input name='message' label='Message' type='text' error='Missing Message' />
                    <button type='submit'>Send Message</button>
                    <p className='successful'>Successfully Sent</p>

                </form>
                <div className='socials'>
                    {
                        socials.map((social) =>
                            <a href={social.link} target='blank' key={social.id}>
                                {social.icon}
                            </a>
                        )
                    }
                </div>
            </div>
            <p className='theEnd'>The End</p>
        </div >
    )
}

function Input({ type, name, label, error })
{
    return (
        <div className='input'>
            <label htmlFor={name}>{label}</label>
            <div>
                <textarea name={name} type={type} />
                <p className='errorMessage'>{error}</p>
            </div>
        </div>
    );
}

function OnContactSubmit(e)
{
    e.preventDefault();
    const form = e.target;
}

export default Contact