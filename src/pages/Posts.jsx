import React, { useEffect } from 'react'
import PostItem from '../components/pageComponents/PostItem'
import { getPosts } from '../getDataGraphQL/getDataGraphQl'
import { useDispatch, useSelector } from 'react-redux'

const Posts = () => {
    const dispatch = useDispatch()
    const { posts, selectPosts } = useSelector(state => state.post)

    useEffect(() => {
        getPosts(dispatch)
    }, [])

    return (
        <div>
            {selectPosts.length > 0 ?
                selectPosts.map(item => (
                    <PostItem key={item.id} item={item} />
                ))
                :
                posts.map(item => (
                    <PostItem key={item.id} item={item} />
                ))}
        </div>
    )
}

export default Posts
