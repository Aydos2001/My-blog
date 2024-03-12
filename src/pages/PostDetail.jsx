import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPosts } from '../getDataGraphQL/getDataGraphQl'

const PostDetail = () => {
    const { slug } = useParams()

    const dispatch = useDispatch()
    useEffect(() => {
        getPosts(dispatch)
    }, [])
    const { posts, selectPosts } = useSelector(state => state.post)

    return (
        <div>
            {[posts.find(postItem => postItem.slug === slug)].map(item => (
                <div key={item?.id} className='mt-6'>
                    <h1 className='text-[30px] font-bold'>{item?.title}</h1>
                    <div className='flex items-center gap-2 mt-3'>
                        <img src={item?.author?.avatar?.url} className='w-[50px] h-[50px] object-cover' alt="" />
                        <div>
                            <div className='text-[15px] font-semibold'>
                                {item?.author?.fullName}
                            </div>
                            <div className='text-[12px] text-gray-600'>
                                {item?.author?.bio}
                            </div>
                        </div>
                    </div>
                    <hr className='mt-3'/>
                    <div className='mt-4 text-[20px] font-semibold'>
                        <p>{item?.excerpt}</p>
                    </div>
                    <div>
                        <img className='my-4 max-w-full' src={item?.coverImage?.url} alt="" />
                    </div>
                    <div dangerouslySetInnerHTML={{__html : item?.content?.html}} className='content'>

                    </div>
                    <hr />
                    <div className="rounded-md border-[1px] mt-[120px] mb-[50px] border-blue-500 p-[20px] bg-blue-300 relative">
                        <img src={item?.author?.avatar?.url} className="absolute top-[-50%] left-[50%] translate-x-[-50%] h-[150px] w-[150px] p-[5px] border-[2px] border-blue-500 rounded-full" alt="" />
                        <p className='text-[20px] font-semibold text-white text-center mt-[70px]'>{item?.author?.fullName}</p>
                        <p className='text-[18px] text-center text-gray-700'>{item?.author?.bio}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostDetail
