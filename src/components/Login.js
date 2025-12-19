import React from 'react';
import { Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Login = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
        <div className='loginfrom'>
            <h2>로그인</h2><hr/>
            <Form.Group className='mb-4'>
                <div className='login-id-pwd'>
                    <Form.Label>아이디</Form.Label>
                        <Form.Control
                        type="text"
                        placehlder='아이디를 입력하시오'
                        ></Form.Control><hr/>
                    <Form.Label>비밀번호</Form.Label>
                        <Form.Control
                        type="password"
                        placehlder='비밀번호를 입력하시오'
                        ></Form.Control><hr/>
                </div>
            </Form.Group>
            <div className='login-but'>
                <button className='but2'>로그인</button>
            </div>
            <div >
                <button className='but'>아이디찾기</button>
                <button className='but'>비밀번호찾기</button>
                <button className='but'>회원가입</button>
            </div>
        </div>
    </motion.div>
    );
};

export default Login;