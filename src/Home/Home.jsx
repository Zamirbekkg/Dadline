import React, { useState } from 'react';
import Post from '../post/Post'; 


const Home = () => {
    const [showPosts, setShowPosts] = useState(false);

    const handleShowPosts = () => {
        setShowPosts(true);
    };

    return (
        <div className='Homediv'>
            <h1 className='h1'>Dadline</h1>
            <input className='inpt' type="text" placeholder="Введите что-то..." />
            <button className='btn' onClick={handleShowPosts}>Показать посты</button>
            {showPosts && <Post />}
        </div>
    );
}

export default Home;  