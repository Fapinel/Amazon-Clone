import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';




function BootstrapCarousel () {
    return (
        <div>
            <div class='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "5px" }} >  
                           
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel>  
                         <Carousel.Item style={{'height':"600px"}} >  
                         <img style={{'height':"800px"}}  
                         className="d-block w-100"  
                        src={'assets/img/image_2.jpg'}  />  
                           <Carousel.Caption>  
                             <h3>First Demo </h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"600px"}}>  
                                 <img style={{'height':"800px"}}  
                                   className="d-block w-100"  
                                    src={'assets/img/image_1.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3>Second Demo</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"600px"}}>  
                                       <img style={{'height':"800px"}}  
                                        className="d-block w-100"  
                                         src={'assets/img/image_3.jpg'}   />  
                                        <Carousel.Caption>  
                                          <h3>Third Demo</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
        </div>
    )
}

export default BootstrapCarousel; 






