import './NotFound.css'

function NotFound()
{
    return (
        <div className='notFound'>
            <h2>404</h2>
            <h3>PAGE NOT FOUND</h3>
            <a href='/' aria-label='Link to the homepage of the website'>Homepage</a>
        </div>
    )
}

export default NotFound