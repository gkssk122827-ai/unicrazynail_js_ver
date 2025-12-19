import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Introduction from './Introduction';
import { motion } from 'framer-motion';

const Detail = (props) => {
    let {id:paramId} = useParams();
    const productId = parseInt(paramId);
    const selectedItem = props.nail.find(item=>item.id === productId);  
        if (!selectedItem) {
            return <div className='conainer' style={{paddingTop: '50px'}}>
                상품을 찾을 수 없습니다. (ID:{productId})
            </div>
        }
    const {imgUrl, title, content, detail } = selectedItem;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
        <div className='container'>
            <div className='center-wrapper'>
                <div className='row' style={{margin: '20px'}}>
                    <div className='col-md-6'>
                        <img src={process.env.PUBLIC_URL+'/'+imgUrl} className='row-img' alt={title}/>
                    </div>
                    <div className='col-md-6'style={{}}>
                        <h3 className='pt-5'>{title}</h3><hr/>
                        <h4>{content}</h4>
                    <Link to = {`/booking?imgUrl=${imgUrl}`}>
                    <button className='but2'
                                style={{padding: '10px 20px'}}
                        >예약하기</button>
                    </Link>
                    </div>
                </div>
            <hr/>
                <div className='detail-box'>
                    <p className='detail-text'>
                        {detail}
                    </p>
                </div>
            </div>
            <Introduction/>
        </div>
    </motion.div>
    );
};

export default Detail;