import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home'; // Убедитесь, что пути правильные
import Post from './post/Post';
import './Info.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;

