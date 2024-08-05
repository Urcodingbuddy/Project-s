import {SearchBar} from '../components/Searchbar'
export const AppBar = ()=>{
    return <div className="flex justify-between pt-3">
        <div className='pt-1 pl-6 inline-flex items-center'>
            <img className="w-24" src="https://i.postimg.cc/HkjC5nCX/yt-logo-rgb-dark.png" alt="" />
        </div>
        <div className='pt-1' >
            <SearchBar></SearchBar>
        </div>
        <div className='pt-1 pr-6 inline-flex items-center'>
            <button className='h-10 w-28 rounded-3xl text-cyan-400 font-medium flex gap-1.5 justify-center items-center border border-cyan-400 '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
 Sign in</button>
        </div>
    </div>
}