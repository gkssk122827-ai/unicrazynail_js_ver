import React from 'react';

const Title2 = (props) => {
    const {faqs} = props;
    let csst1 = {
        marginTop: "10px",
        textAlign: "center",
        width: "300px",
        margin: "0 auto"
    };
    return (
      <div className='containar'
            style={{marginTop: "50px"}}>
        <h3 style={csst1}>자주묻는질문<hr/></h3>
         <div className='faqs'>
            {faqs.map((item)=>(
              
                <div className='col-md-4'
                    key={item.num}
                    style={{marginBottom: "50px" }}>
                    <div className="c2">
                        <h5 style={{marginTop:"10px", color: 'wheat'
                        }}>Q{item.num}.{item.title}</h5>
                        <p className='con'>{item. content}</p>
                    </div>
                </div>
            ))}
         </div>
      </div>  
    );
};

export default Title2;