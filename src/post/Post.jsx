import { useEffect, useState } from 'react';
import axios from 'axios';

const Post = () => {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        axios.get('https://grazy.pythonanywhere.com/test/')
            .then(response => {
                setPost(response.data); 
            })
            .catch(error => console.error('Error fetching posts:', error));
    }, []);
    
    return (
        <div className='post-container'>
            {post.map(post => (
                <div key={post.id} className='post-card'>
                    <h3 className='post-title'>{post.title}</h3>
                    <p className='post-description'>{post.descriptions}</p>
                    {post.image && <img src={post.image} alt={post.title} className='post-image' />}
                </div>
            ))}
        </div>
    );
}

export default Post;
