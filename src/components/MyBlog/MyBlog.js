import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import { Card, Icon, Image } from 'semantic-ui-react'


function MyBlog() {
    const initialState = {
        loading: true,
        error: '',
        blogs: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS': return {
                loading: false,
                error: '',
                blogs: action.payload
            }
            case 'FETCH_ERROR': return {
                loading: false,
                error: 'Something went wrong',
                blogs: {}
            }
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('http://localhost:5000/myblog')
            .then((response) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR' });
            })
    })

    return (
        <div>
            {
                state.loading ? "Loading..." : state.blogs.map((blog, index) => {
                    return (
                        <div key={index}>
                            <Card>
                                <Image src={`http://localhost:5000/${blog.imageName}`} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{blog.titre}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{blog.username}</span>
                                    </Card.Meta>
                                </Card.Content>
                            </Card>
                            <hr />
                        </div>
                    )
                })
            }



        </div>
    )
}

export default MyBlog