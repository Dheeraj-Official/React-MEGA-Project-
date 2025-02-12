import './App.css'
import conf from './config/config.js'

function App() {

  console.log(conf.appWriteBucketID)
  return (
    <>
      <h1 className='text-2xl text-zinc-300 bg-zinc-900'>A Blog with App write</h1>
    </>
  )
}

export default App
