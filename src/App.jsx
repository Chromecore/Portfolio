import { Outlet, ScrollRestoration } from 'react-router-dom';

function App()
{
  /* const lightMode = localStorage.getItem('lightmode'); */

  return <>
    <Outlet />
    <ScrollRestoration />
  </>
}

export default App