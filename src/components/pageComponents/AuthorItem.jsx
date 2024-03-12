import React from 'react'
import { selectPostsAuthors } from '../../reducers/posts.slice'
import { useDispatch, useSelector } from 'react-redux'

const AuthorItem = ({ item }) => {
    const { posts, selectPosts } = useSelector(state => state.post)
    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(selectPostsAuthors(posts.filter(postItem => postItem.author.id === item.id)))} className='flex justify-start gap-1 cursor-pointer hover:bg-slate-100 border-[1px] p-[3px] rounded-sm mb-2 shadow-sm'>
            <div className='min-w-[40px]'>
                <img src={item.avatar.url} className='w-[40px] h-[40px] rounded-full border-[1px] p-[2px]' alt="" />
            </div>
            <div>
                <p className='font-semibold text-[15px]'>{item.fullName}</p>
                <p className='text-slate-500 text-[12px]'>{item.bio.slice(0, 30)}...</p>
            </div>
        </div>
    )
}

export default AuthorItem
