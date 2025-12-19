import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div className="notfound-wrap">
            <h1 className="notfound-code">404</h1>
            <p className='notfound-message'>
                요정하신 페이지를 찾을 수 없습니다.
            </p>
            <p className='notfound-sub'>
                주소가 잘못되었거나, 삭제된 페이지일 수 있습니다.
            </p>

            <Link to = "/" className="notfound-btn">
                <button className='btn'>홈으로 돌아가기</button>
            </Link>
        </div>
    );
};

export default NotFound;