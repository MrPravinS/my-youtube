
import './App.css'
import Head from './components/Head'
import Body from './components/Body'

function App() {

  return (
   <div>
     <h1 className='text-3xl'>Building Youtube</h1>
     <Head/>
     <Body/>
     {/* {
       head 
       body
       sidebar
          menubar
        maincontainer
        buttonlist
        videocontainer
           videocard
       } */}
   </div>
  )
}

export default App
