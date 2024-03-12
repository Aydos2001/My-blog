import request, { gql } from "graphql-request"
import { fetchedErrorPosts, fetchedPosts, fetchingPosts } from "../reducers/posts.slice"
import { fetchedAuthors, fetchedErrorAuthors, fetchingAuthors } from "../reducers/author.slice"



export async function getAuthors(dispatch) {
  const query = gql`
    {authors {
        id
        fullName
        bio
        avatar {
        url
        }
    }}
    
`
  dispatch(fetchingAuthors())
  await request("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clt4fkvcf2n4m08vw39xwg8kj/master", query)
    .then((res) => {
      dispatch(fetchedAuthors(res.authors))
    })
    .catch((err) => {
      dispatch(fetchedErrorAuthors())
    })
}

export async function getPosts(dispatch) {
  const query = gql`
    {
        posts {
          id
          title
          excerpt
          createdAt
          slug
          coverImage {
            url
          }
          content {
            html
          }
          author {
            fullName
            id
            avatar {
              url
            }
            bio
          }
        }
      }
    `
  dispatch(fetchingPosts())
  await request("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clt4fkvcf2n4m08vw39xwg8kj/master", query)
    .then((res) => {
      dispatch(fetchedPosts(res.posts))
    })
    .catch((err) => {
      dispatch(fetchedErrorPosts())
      console.log(err)
    })
}

