import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Container from '../components/pageComponents/Container'

const PostsDetailLayout = () => {
    return (
        <div>
            <Header />
            <Container>
                <div className='flex justify-between gap-1 mt-2'>
                    <div className='sm:mx-0 md:mx-[5%]'>
                        <Content />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PostsDetailLayout
