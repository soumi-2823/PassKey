
import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
    <Navbar />
    {/* <div className="bg-white [background:radial-gradient(125%_125%_at_50%_65%,#fff_40%,#63e_100%)]"> */}

    <div className=" bg-blue-50 bg-[radial-gradient(to_right,#f0f0f0_1px,transparent_1px),radial-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">

    {/* <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"> */}
    <Manager />
    </div>
    <Footer />
      
    </>
  )
}

export default App
