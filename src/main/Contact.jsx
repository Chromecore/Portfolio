import './Contact.css'
import ItchIcon from '../assets/icons/itch'
import MailIcon from '../assets/icons/mail'
import LinkedInIcon from '../assets/icons/linkedIn'
import GithubIcon from '../assets/icons/github'
import baseUrl from '../BaseData'

const socials = [
    { id: 1, icon: <ItchIcon />, link: 'https://chromecore.itch.io/' },
    { id: 2, icon: <MailIcon />, link: 'mailto:tayin.wallace@outlook.com' },
    { id: 3, icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/tayinwallace' },
    { id: 4, icon: <GithubIcon />, link: 'https://github.com/Chromecore' }
]

function Contact({ success, error })
{
    return (
        <div className='contact' id="contact">
            <h2 className='letsTalk'>Let's Talk!</h2>
            <div className='formSocials'>
                <form action='https://submit-form.com/9HOvqSp8h'>
                    <input type="hidden" name="_append" value="false" />
                    <input type="hidden" name="_redirect" value={`${baseUrl}/success#contact`} />
                    <input type="hidden" name="_error" value={`${baseUrl}/error#contact`} />

                    <Input name='name' labelText='Name' type='text' />
                    <Input name='email' labelText='Email Address' type='email' />
                    <Input name='message' labelText='Message' type='text' textArea={true} />
                    <button type='submit'>Send Message</button>
                    <p className='successful' hidden={success == undefined}>Successfully Sent</p>
                    <p className='error' hidden={error == undefined}>Error sending message</p>
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
        </div >
    )
}

function Input({ type, name, labelText, textArea })
{
    return (
        <div className='input'>
            <label htmlFor={name} className='required'>{labelText}</label>
            <div>
                {
                    textArea == true ? <textarea name={name} id={name} type={type} required /> :
                        <input id={name} name={name} type={type} required />
                }
            </div>
        </div>
    );
}

export default Contact