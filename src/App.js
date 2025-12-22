import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap'
import data from './db/nail'
import { useState } from 'react';
import Products from './components/Products';
import {Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import Title from './components/Title';
import BookingList from './components/BookingList'
import BookingEdit from './components/BookingEdit';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Title2 from './components/Title2';
import FAQs from './db/FAQList';
import Introduction from './components/Introduction';
import Login from './components/Login';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion'

function App() {
  let [nail, setnail] = useState(data);
  let navigate = useNavigate();
  let [input, setlnput] = useState("");

  const location = useLocation();

  const appStyle = {
    minHeight: '100vh',
    background : 'linear-gradient(1deg, #50164A 0%, #E59EDD 90%)'
  }
  const sortByName = () => {
    let sortednail = [...nail].sort((a,b) => (a.title > b.title ? 1:-1));
    setnail(sortednail)
  }
  
  return (
    <div className="App">
          <div className='login'>
            <Nav.Link onClick={()=>{ navigate('/login')}}
              className='but'>
              로그인
            </Nav.Link>
          </div>
         <div className='header'>
          <p>유니 크레이지 네일</p>
        </div>
      
        <Navbar bg="dark" variant='dark'>
          <Container>
            <Nav className="menuBar">
            <Nav.Link onClick={()=>{ navigate('/')}} className='Bar'>홈으로</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/introduction')}} className='Bar'>샵소개</Nav.Link>
            <Nav.Item className='Bar has-submenu'>
              <span className='submanu-title'>온라인 예약</span>
                <ul className='submenu'>
                  <li><a onClick={()=>{ navigate('/booking')}}>예약하기</a></li>
                  <li><a onClick={()=>{ navigate('/bookingList')}}>예약확인</a></li>
                  <li><a onClick={()=>{ navigate('/price')}}>가격안내</a></li>
                 {/* <li><a onClick={()=>{ navigate('')}}>자주묻는질문</a></li>*/}
                </ul>
            </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
         <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="slider" style={{backgroundImage:
                    `url(${process.env.PUBLIC_URL+'/img/KakaoTalk_20251211_162844584_02.jpg'})`,
              }}> </div>
                <Title/>
                <div className='container'>
                  <div className="row">
                    <div className="col-md-6" style={{textAlign:"left"}}>
                      <input
                        placeholder="상품명을 입력하세요"
                        onChange={(e)=> setlnput(e.target.value)}
                        style={{
                          padding: "10px",
                          marginLeft: "10px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                          width:"250px",
                          marginRight: "10px"
                        }}
                      />
                    </div>
                    <div className="col-md-6" style={{textAlign:"right"}}>
                      <select
                        onChange={(e)=> {
                          if (e.target.value === "name") sortByName();
                        }}
                        style={{
                          paddig:"10px",
                          marginLeft: "10px",
                          borderRadius: "4px",
                          border: "1px solid #ccc",
                          width: "150px"
                        }}>
                        <option value="">정렬선택</option>
                        <option value="name">이름순</option>
                      </select>
                    </div>
                      
                  </div>
                </div>
                <div className='container' style={{marginTop:"30px"}}>
                  <div className="row">
                    {nail
                      .filter((item) =>
                        item.title.toLowerCase().includes(input.toLowerCase())
                        )
                      .map((item)=>(
                        <Products {...item} key={item.id}/>
                        ))}
                  </div>
                </div>
                <Title2 faqs={FAQs}/>
                   
                 <Footer/>
               </motion.div>
            }/>
       
            
          
        
          <Route path="login" element={<Login nail={nail}/>}/>
          <Route path="detail/:id" element={<Detail nail={nail}/>}/>
          <Route path="bookingList" element={<BookingList nail={nail}/>}/>
          <Route path="booking" element={<Booking nail={nail}/>}/>
          <Route path="introduction" element={<Introduction nail={nail}
                  price={false}/>}/>
          <Route path="price" element={<Introduction nail={nail}
                  price={true}/>}/>
          <Route path="bookingEdit/:no" element={<BookingEdit nail={nail}
                viewMode={false}/>}/>
          <Route path="bookingView/:no" element={<BookingEdit nail={nail}
                viewMode={true}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </AnimatePresence>
      
        
    
    </div>
    
  )
}

export default App;
