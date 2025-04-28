"use client";
import ShopsHeroPage from './ShopsHeroPage'
import BookStore from './Bookstore'

const Shopspage = () => {
  return (
    <div className='flex flex-col h-auto '>
        <ShopsHeroPage />
        <BookStore/>
    </div>
  )
}

export default Shopspage