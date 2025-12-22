import React from 'react';
import Footer from './Footer';
import {motion} from 'framer-motion'

const Introduction = ({price}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {!price && (
            <div className='introduction'>
                <h2>안녕하세요!<br/>
                    유니크레이지네일 입니다</h2>
                <p>저희 살롱은 미국식 아크릴 연장 &젤 아트 전문 네일 살롱입니다<br/>
                    젤 단독시술 메뉴도 운영하고 있으니 많은 관심 부탁드립니다<br/>
                    *시술시 전화연결이 어려울 수 있니으 메세지나 카카오톡 남겨주세요*</p>

                <a href="http://pf.kakao.com/_lqexdn" target="-blank"
                    rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL +"/img/kakaoTalklogo.jpg"}/> 카카오톡</a><br/>
                <a href="https://www.instagram.com/unicrazynail_ayoon" target="-blank"
                    rel="noopener noreferrer">
                    <img src={process.env.PUBLIC_URL +"/img/instagram.jpg"}/> 인스타그램</a>
                <hr/><h3>영업시간</h3>
                <h5>매일 11:00~19:00</h5>
            </div>
            )}
            {price &&(
                <div className='price'>
                    <div className='price-manu'>
                        <div className='price-title'>
                            <h1>Acrylic/ 아크릴릭</h1>
                        </div>
                            <div className='price-content'>
                                <p>아크릴 풀셋 2CM 기준 (연장+일반컬러)</p>
                                <p>130.0</p>
                            </div>
                            <div className='price-content'>
                                <p>원컬러 아크릴 페디큐어</p>
                                <p>150.0</p>
                            </div>
                        <div className='price-title'>
                            <h1>GEL/ 젤네일</h1>
                        </div>
                            <div className='GEL'>
                                <div className='Hand'>
                                    <p>Hand</p>
                                    <div className='price-content'>
                                        <p>젤 원컬러(오버레이X)</p>
                                        <p>40.0</p>
                                    </div>
                                    <div className='price-content'>
                                        <p>젤 교정 원컬러</p>
                                        <p>80.0</p>
                                    </div>
                                </div>
                                <div className='Foot'>
                                    <p>Foot</p>
                                    <div className='price-content'>
                                        <p>젤 페디 월컬러</p>
                                        <p>50.0</p>
                                    </div>
                                    <div className='price-content'>
                                        <p>건식 페디케어</p>
                                        <p>30.0</p>
                                    </div>
                                    <div className='price-content'>
                                        <p>페디스파(스파+케어)</p>
                                        <p>65.0</p>
                                    </div>
                                </div>
                            </div>
                        <div className='price-title'>
                            <h1>Additional Service/ 옵션</h1>
                        </div>
                            <div className='price-content'>
                                <p>컬러추가</p>
                                <p>5.0</p>
                            </div>
                            <div className='price-content'>
                                <p>그라데이션</p>
                                <p>젤30.0  아크릴50.0</p>
                            </div>
                        <div className='price-title'>
                            <h1>Removal/ 제거</h1>
                        </div>
                            <div className='price-content'>
                                <p>일반 폴리쉬 제거</p>
                                <p>5.0</p>
                            </div>
                            <div className='price-content'>
                                <p>자샵 원컬러 젤 제거(8만원 아트시 무료)</p>
                                <p>5.0</p>
                            </div>
                    </div>    
                </div>
            )}
        <div>
            <Footer/>
        </div>
        </motion.div>
    );
};

export default Introduction;