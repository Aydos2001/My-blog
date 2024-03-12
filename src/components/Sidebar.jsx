import React, { useEffect } from 'react'
import { getAuthors } from '../getDataGraphQL/getDataGraphQl'
import { useDispatch, useSelector } from 'react-redux'
import AuthorItem from './pageComponents/AuthorItem'

const Sidebar = () => {

  const dispatch = useDispatch()
  const {authors} = useSelector(state => state.author)
  useEffect(() => {
    getAuthors(dispatch)
  },[])

  return (
    <div className='border-[1px] max-h-max p-2 sticky top-[5px]'>
      {authors.map(item => (
        <AuthorItem item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Sidebar
