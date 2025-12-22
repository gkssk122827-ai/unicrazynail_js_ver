import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import {ko} from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { addBooking } from '../Store';
import { motion } from 'framer-motion';
import { BOOKING_TERMS } from './TermsData'; 


const Booking = ({nail}) => {

let dispatch = useDispatch();
let navigate = useNavigate();

const bookingList = useSelector(state => state.Booking);

const [searchParams] = useSearchParams()
const preselectedImgUrl = searchParams.get('imgUrl');

const getNextBookingNo = () => {
    if (bookingList.length === 0) {
        return 1;
    }
    const maxNo = bookingList.reduce((max,booking) => {
        return booking.no > max ? booking.no : max;
    }, 0);
    return maxNo +1;
}

const [selectedNail, setSelectedNail] = useState(preselectedImgUrl || "");
console.log('이미지 URL:',preselectedImgUrl);

const [startDate, setStartDate] = useState(new Date());
const [styleInput, setStyleInput] = useState("");
const [nailtitle, setnailtitle] = useState("");
const [Pnumber, setPnumber] = useState("");
const [bookingname, setbookingname] = useState("");
const handleChange=(event) => {
    setSelectedNail(event.target.value);
};
const [isAgreed, setIsAgreed] = useState(false)


useEffect(()=>{
    if (preselectedImgUrl && nail) {
        const item = nail.find((item)=>item.imgUrl === preselectedImgUrl);
        if (item) setnailtitle(item.title);
    }
}, [preselectedImgUrl, nail]);


const BookingSave =() => {
    const fullMessage = `${BOOKING_TERMS.title}\n\n${BOOKING_TERMS.contents.join('\n')}
                            \n\n${BOOKING_TERMS.agreementMsg}`

    if (window.confirm(fullMessage)){
    const selectedItem = nail.find(item => item.imgUrl === selectedNail);
    const newBooking= {
        no: getNextBookingNo(),
        Bname: bookingname, 
        imgUrl: selectedNail,
        title: selectedItem ? selectedItem.title: '선택된 상품 없음',
        date: startDate.toLocaleString('sv-SE').replace(' ',' '),
        pnumber: Pnumber,
        description: styleInput,
    };
    
    dispatch(addBooking(newBooking));
    
    navigate('/bookingList')
    }
};

const formatPhoneNumber = (phoneNumber) => {
    const cleaned = (''+phoneNumber).replace(/\D/g,'');
    const limit = cleaned.substring(0,11);
    const match = limit.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
        return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return limit;
};

const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPnumber(formatted);
}

    return (
         <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
           
            <div className='container' style={{marginTop: "30px",fontSize:"20px"}}>
                <h3 style={{textAlign: "left"}}>예약하기</h3>
                
                <Form.Group className='mb-3' controlId="formName">
                    <Form.Label htmlFor='style'>네일 유형 선택</Form.Label>
                        <Form.Control  
                            as="select"
                            id="style"
                            value={selectedNail}
                            onChange={handleChange}
                            >
                        <option value="">--네일 상품 선택--</option>
                        {nail && nail.map((item)=>(
                            <option
                                key={item.id}
                                value={item.imgUrl}>
                            {item.title}</option>
                        ))}
                        </Form.Control>
                </Form.Group>
                    {selectedNail &&(
                        <div style={{marTop: '20px', marginBottom:'20px', textAlign: 'center'}}>
                            <img
                                src={process.env.PUBLIC_URL + '/' +selectedNail}
                                alt="선택된 네일 스타일 이미지"
                                style={{maxWidth:'300px', maxHeight:'300px', 
                                    borderRadius: '8px', border:'1px solid #ccc'}}
                            />
                        </div>
                        )}
                <Form.Group className='mb-3' controlId='formDate'>
                    <Form.Label>예약일 선택 </Form.Label>
                        <div style={{padding: '10px 0'}}>
                            <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            locale={ko}
                            className="form-control"
                            minDate={new Date()}
                            showTimeSelect
                            dateFormat="yyyy년 MM월 dd일 (eee) HH:mm"
                            timeFormat="HH:mm"
                            timeIntervals={30}
                            />
                        </div> 
                        <p style={{marginTop: '15px', fontSize: '15px'}}>
                            선택된 예약일시: <strong>
                                {startDate.toLocaleDateString('ko-KR',
                                    {year: 'numeric',
                                     month: 'long',
                                     day: 'numeric',
                                     weekday: 'short',
                                     hour: '2-digit',
                                     minute: '2-digit'
                                    })}
                            </strong>
                        </p>  
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='style'>이름</Form.Label>
                        <Form.Control
                            type= "name"
                            value={bookingname}
                            onChange={(e) => setbookingname(e.target.value)}
                            placeholder='이름을 입력해주세요'
                            >
                        </Form.Control>
                </Form.Group><br/>
                <Form.Group>
                    <Form.Label htmlFor='style'>전화번호</Form.Label>
                    <Form.Control
                        type= "tel"
                        value={Pnumber}
                        onChange={handlePhoneChange}
                        placeholder='전화번호 입력 (000-0000-0000)'
                        maxLength={13}
                        >
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group>
                    <Form.Control
                        type= "text"
                        value={styleInput}
                        onChange={(e) => setStyleInput(e.target.value)}
                        placeholder='원하시는 스타일을 입력해주세요'
                        >
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className='mb-3' style={{ textAlign: 'left', fontSize: '14px', color: 'white' }}>
                     <Form.Check
                        type= "checkbox"
                        id="agree-check"
                        label="개인정보 수집 및 예약 규정 안내에 동의 합니다."
                        checked={isAgreed}
                        onChange={(e) => setIsAgreed(e.target.checked)}
                        >
                    </Form.Check>
                    <p>* 노쇼 방지를 위해 예약 시간 24시간 전까지만 취소가 가능합니다.</p>               
                </Form.Group>
                <div style={{textAlign:"right"}}>
                    <button variant='primary' 
                            onClick={BookingSave} 
                            disabled={!isAgreed}
                            style={{marginRight: "10px"}}
                            className='but2'
                            >예약완료</button>
                    <button onClick={()=> navigate('/bookingList')} 
                        style={{marginRight: "10px"}}
                        className='but2'
                        >목록으로</button>
                </div>
            </div>
        </motion.div>
    );
};

export default Booking;