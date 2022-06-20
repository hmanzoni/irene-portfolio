import React from 'react';
import Titles from './ui/Titles';
import QualItem from './ui/QualItem';

const Qualification = () => {
  return (
    <div className="container-fluid py-5" id="qualification">
        <div className="container">
            <Titles mainTitle={'Quality'} littleTitle={'Education & Expericence'} />
            {/* <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Quality</h1>
                <h1 className="position-absolute text-uppercase text-primary">Education & Expericence</h1>
            </div> */}
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h3 className="mb-4">My Education</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <QualItem title={'Master In CSE'} company={'Cambridge University'} period={'2000 - 2050'} desc={'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor'} />
                        {/* <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                            <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                            <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                            <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="mb-4">My Expericence</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <QualItem title={'Web Designer'} company={'Soft Company'} period={'2000 - 2050'} desc={'Dolore ea magna sit amet dolor eirmod.'} />
                        {/* <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Web Designer</h5>
                            <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Web Designer</h5>
                            <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div>
                        <div className="position-relative mb-4">
                            <i className="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                            <h5 className="font-weight-bold mb-1">Web Designer</h5>
                            <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default Qualification;