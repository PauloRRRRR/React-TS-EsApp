import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-transparent bg-nlw-gradient bg-clip-text'>Suas thumbs estão aqui</h1>
      
      <div className='grid grid-cols-6 gap-6'>

        <a href="" className='relative rounded-lg overflow-hidden' className='relative rounded-lg overflow-hidden'>
          <img className='object-cover ' src="/n75pro.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white'>VGN N75 Pro</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div> 

        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/x86.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white'>X86</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div> 
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/ak820.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white'>AK820 Pro</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div> 
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/n75pro.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white'>VGN N75 Pro</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div> 
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img className='' src="/x86.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white'>VGN N75 Pro</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div> 
        </a>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/ak820.png" alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white'>VGN N75 Pro</strong>
            <span className='text-zinc-300 text-sm block mt-1'>4 anúncios</span>
          </div> 
        </a>
        
      </div>

      <div className='bg-[#2A2634] px-8 py-6 mt-8 self-stretch rounded-lg '>

      </div>
    </div>
  )
}

export default App
