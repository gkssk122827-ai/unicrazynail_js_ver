import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Products = ({id, title, imgUrl, content}) => {
    let navigate = useNavigate()
    return (
        <div className='col-md-4'style={{marginBottom: "50px" }}>
            <Nav.Link onClick={()=> { navigate("detail/"+(id))}} className="c1">
             <img src={process.env.PUBLIC_URL+'/'+imgUrl} className='row-img'/>
             <h5 style={{marginTop:"10px"}}>{title}</h5>
            <p>{content}</p>
           
            </Nav.Link>
        </div>
    );
};

export default Products;