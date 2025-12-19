import React from 'react';
import { Button, Table } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { Link, Route } from 'react-router-dom';
import BookingEdit from './BookingEdit';
import { motion } from 'framer-motion';

const BookingList = () => {
    const{ user: {name,age},Booking} = useSelector((state)=> state);

    const sortedBooking = [...Booking].sort((a,b)=> {
        return new Date(b.date) - new Date(a.date)});

    let dispatch = useDispatch();

    const smallProdcutStyle = {
        width: "100px",
        height: "80px",
        cursor : "pointer",
    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='container'>
              
                    <div className='col-sm-12' style={{textAlign: "center"}}>
                        {/* <h5 style={{ padding: "50px"}}>
                            {name}의 예약확인리스트
                        </h5> */}

                        <Table style={{marginTop: '50px'}}>
                            <thead>
                                <tr>
                                    <th>상품사진</th>
                                    <th>예약자명</th>
                                    <th>상품명</th>
                                    <th>예약일</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {sortedBooking.map(({no,Bname, imgUrl, title, date}, i) => (
                                    <tr key={no}>
                                    <td>
                                        <Link to = {`/bookingView/${no}`}>
                                            <img
                                                src={process.env.PUBLIC_URL + '/' +imgUrl}
                                                style={smallProdcutStyle}   
                                                alt={title} 
                                            />
                                        </Link>
                                    </td>
                                    
                                    <td className='textverticalAlign'>{Bname}</td>
                                    <td className='textverticalAlign'>{title}</td>
                                    <td className='textverticalAlign'>{date}</td>

                                    <td >
                                        <Link to = {`/bookingEdit/${no}`}>
                                            <button 
                                            className='but'
                                            >예약수정&취소</button>
                                        </Link>
                                    </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>

        </motion.div>
    );
};

export default BookingList;