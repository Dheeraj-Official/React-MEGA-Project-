import './App.css'
import conf from './config/config.js'

function App() {

  console.log(conf.appWriteBucketID)
  return (
    <>
      <h1 className='text-2xl text-red bg-zinc-600'>A Blog with App write</h1>
    </>
  )
}

export default App
