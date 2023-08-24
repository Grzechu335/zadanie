import React from 'react'
import {GiHamburgerMenu as HamburgerMenuIcon} from 'react-icons/gi'
import {BsHeart as HeartIcon} from 'react-icons/bs'
import {AiOutlineShoppingCart as CartIcon} from 'react-icons/ai'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='fixed left-0 w-full top-0 h-[100px] flex justify-between items-center px-[20px]  backdrop-blur'>
        <HamburgerMenuIcon className='w-[27px] h-[27px]' />
        <div className='flex items-center space-x-[14px]'>
            <HeartIcon size='30'/>
            <CartIcon size='30'/>
            <div className='bg-red-500 w-[24px] h-[24px]'></div>
        </div>
    </header>
  )
}

export default Header