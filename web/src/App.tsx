import { MagnifyingGlassPlus } from 'phosphor-react'
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

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>

          <div>
            <strong className='text-2xl text-white font-black block'>Selecione o seu vídeo</strong>
            <span className='text-zinc-300'>Crie sua lista de favoritos </span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-2'>
            <MagnifyingGlassPlus size={24}/>
            Criar Lista
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
