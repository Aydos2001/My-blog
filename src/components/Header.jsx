import React from 'react'
import Container from './pageComponents/Container'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='shadow-sm border-[1px] border-gray-200'>
            <Container>
                <div className='flex justify-between items-center gap-1 py-3'>
                    <Link to={"/"}>
                        <div className='text-[18px] font-bold'>
                            <span className="text-indigo-600 ">MY</span>-Blog
                        </div>
                    </Link>
                    <div>
                        <img src="https://picsum.photos/200" className='w-[40px] h-[40px] rounded-full border-[2px] p-[3] border-blue-600' alt="" />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
