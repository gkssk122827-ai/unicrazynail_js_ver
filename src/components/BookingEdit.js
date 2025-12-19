import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import {ko} from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Products from './Products';
import { useDispatch, useSelector} from 'react-redux';
import { updateBooking, deleteBooking } from '../Store';
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

const BookingEdit = ({nail, viewMode}) => {



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
};

const [searchParams] = useSearchParams()
const preselectedImgUrl = searchParams.get('imgUrl');

useEffect(()=>{
    if (preselectedImgUrl && nail) {
        const item = nail.find((item)=>item.imgUrl === preselectedImgUrl);
        if (item) setnailtitle(item.title);
    }
}, [preselectedImgUrl, nail]);

let dispatch = useDispatch();
let navigate = useNavigate();
let {no} = useParams();

const bookingList = useSelector(state => state.Booking);

const itemToEdit = bookingList.find(b => b.no === parseInt(no));
console.log('URL no:' ,no, '(Type:',typeof no + ')');
console.log('Booking List:', bookingList);
console.log('Item Found:', itemToEdit);

const [selectedNail, setSelectedNail] = useState(itemToEdit?.imgUrl || '');
console.log('이미지 URL:', itemToEdit?.imgUrl || '');

const [nailtitle, setnailtitle] = useState(itemToEdit ? itemToEdit.title: '');
const [startDate, setStartDate] = useState(itemToEdit ? new Date(itemToEdit.date): new Date());
const [styleInput, setStyleInput] = useState(itemToEdit ? itemToEdit.description: '');
const [Pnumber, setPnumber] = useState(itemToEdit ? itemToEdit.pnumber: '');
const [bookingname, setbookingname] = useState(itemToEdit ? itemToEdit.Bname: '');



const handleChange=(event) => {
        setSelectedNail(event.target.value);
    };


 if (!itemToEdit) {
    return <div className='container'>예약 정보를 찾을 수 없습니다</div>;
}



const Bookingupdate =() => {
    const selectedItem = nail.find(item =>
        item.imgUrl === selectedNail);
        if (selectedItem) {
            setnailtitle(selectedItem.title)
        }

    const updateBookingDate = {
        no: itemToEdit.no,
        Bname: bookingname,
        imgUrl: selectedNail,
        title: selectedItem ? selectedItem.title: '선택된 상품 없음',
        date: startDate.toLocaleString('sv-SE').replace(' ',' '),
        pnumber: Pnumber,
        description: styleInput,
    };

   
    
    dispatch(updateBooking(updateBookingDate));

    navigate('/bookingList')

   

}




const deletes = () => {
    if (itemToEdit) {
        dispatch(deleteBooking(itemToEdit.no));
        navigate('/bookingList');
    }
}

    return (
         <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
               <div className='container' style={{marginTop: "30px"}}>
                           <h5 style={{textAlign: "left"}}>예약수정하기</h5>
                           
                           <Form.Group className='mb-3' controlId="formName">
                               <Form.Label>네일 유형 선택</Form.Label>
                                   <Form.Control  
                                       as="select"
                                       value={selectedNail}
                                       disabled={viewMode}
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
                              
                                   <div style={{marTop: '20px', marginBottom:'20px', textAlign: 'center'}}>
                                       <img
                                           src={process.env.PUBLIC_URL + '/' +selectedNail}
                                           alt={nailtitle}
                                           style={{maxWidth:'300px', maxHeight:'300px', 
                                               borderRadius: '8px', border:'1px solid #ccc'}}
                                       />
                                   </div>
                                  
                           <Form.Group className='mb-3'>
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
                                       readOnly={viewMode}
                                       />
                                   </div> 
                                   <p style={{marginTop: '15px', fontSize: '14px'}}>
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
                               <Form.Control
                                    type= "name"
                                    value={bookingname}
                                    disabled={viewMode}
                                    onChange={(e) => setbookingname(e.target.value)}
                                    placeholder='이름을 입력해주세요'
                                   >
                               </Form.Control>
                           </Form.Group><br/>
                           <Form.Group>
                             <Form.Control
                                 type= "tel"
                                 value={Pnumber}
                                 disabled={viewMode}
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
                                   disabled={viewMode}
                                   onChange={(e) => setStyleInput(e.target.value)}
                                   placeholder='원하시는 스타일을 입력해주세요'
                                   >
                               </Form.Control>
                           </Form.Group><br/>
                           <div style={{textAlign:"right"}}>
                              {!viewMode && (
                                <>
                               <button variant='primary' onClick={Bookingupdate} 
                                   style={{marginRight: "10px"}}
                                   className='but2'
                                   >수정완료</button>
                               <button variant='danger' onClick={deletes}
                                   style={{marginRight: "10px"}}
                                   className='but2'
                                   >예약취소</button>
                                 </>   
                              )}   
                              {viewMode && (
                                <>
                               <button onClick={()=>navigate(`/bookingEdit/${no}`)} 
                                   style={{marginRight: "10px"}}
                                   className='but2'
                                   >예약수정&취소</button>
                              
                                 </>   
                              )}   
                               <button onClick={()=> navigate('/bookingList')} 
                                   style={{marginRight: "10px"}}
                                   className='but2'
                                   >목록으로</button>
                                 
                           </div>
                       </div>
                    </motion.div>
        
    );
};

export default BookingEdit;