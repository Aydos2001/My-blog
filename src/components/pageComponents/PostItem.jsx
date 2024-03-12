import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ item }) => {
    return (
        <div className="shadow-md sm:flex-col md:flex-row rounded-sm border-[1px] mb-2 flex justify-center items-center gap-2 p-2">
            <div className='flex-[5]'>
                <div className='flex justify-start max-w-max items-center cursor-pointer gap-1 group'>
                    <img src={item.author.avatar.url} className='w-[40px] h-[40px] rounded-full p-[1px] border-[2px] object-cover border-green-800' alt="" />
                    <span className="group-hover:text-blue-700">{item?.author.fullName}</span>
                    <span>-</span>
                    <span className='text-slate-400'>{item.createdAt.slice(0, 10)}</span>
                </div>
                <hr className='my-2' />
                <div>
                    <Link to={`posts/${item.slug}`}>
                        <h1 className='text-[20px] font-bold hover:text-blue-700 cursor-pointer'>
                            {item.title}
                        </h1>
                    </Link>

                    <p className="text-wrap">{item.excerpt}</p>
                </div>
            </div>
            <div className='flex-[2]'>
                <img className='w-full rounded-sm h-[150px] object-cover border-[1px]' src={item.coverImage.url} alt="" />
            </div>
        </div >
    )
}

export default PostItem
