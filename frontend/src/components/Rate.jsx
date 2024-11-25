import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ThemeContextProvider from '../context/ThemeContextProvider'

function Rate() {
  

    return (
      <ThemeContextProvider>
      <div className='flex'>
        <Sidebar />
        <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900
        dark:bg-gray-900 dark:text-white'>
          <Navbar />
        </div>
      </div>
      </ThemeContextProvider>
    )
  }
  
  export default Rate