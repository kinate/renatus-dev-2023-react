const RecentWorks: React.FC = () => {
	return (
        <div className="wpo-project-area section-padding">
        <div className="container">
            <div className="wpo-section-title-s2">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-12">
                        <div className="title">
                            <h2>Recent Work.</h2>
                            <p>Must explain to you how all this mistaken idea pleasure
                                born and give you a complete account.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-2">
                        <div className="sec-title-icon">
                            <i className="fi flaticon-self-growth"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-project-wrap wpo-project-slide owl-carousel">
                <div className="wpo-project-item">
                    <div className="wpo-project-img">
                        <img src="/images/project/img-1.jpg" alt="" />
                    </div>
                    <div className="wpo-project-text">
                        <h2><a href="portfolio-single.html">Arkio - Architecture & Interior WordPress Theme</a></h2>
                        <span>Architecture / Business</span>
                    </div>
                </div>
                <div className="wpo-project-item">
                    <div className="wpo-project-img">
                        <img src="/images/project/img-2.jpg" alt="" />
                    </div>
                    <div className="wpo-project-text">
                        <h2><a href="portfolio-single.html">Follio - Multipurpose Portfolio HTML5 Template</a></h2>
                        <span>Web Design</span>
                    </div>
                </div>
                <div className="wpo-project-item">
                    <div className="wpo-project-img">
                        <img src="/images/project/img-3.jpg" alt="" />
                    </div>
                    <div className="wpo-project-text">
                        <h2><a href="portfolio-single.html">Elito - Creative Portfolio HTML5 Template</a></h2>
                        <span>Website / Creative</span>
                    </div>
                </div>
                <div className="wpo-project-item">
                    <div className="wpo-project-img">
                        <img src="/images/project/img-1.jpg" alt="" />
                    </div>
                    <div className="wpo-project-text">
                        <h2><a href="portfolio-single.html">Arkio - Architecture & Interior WordPress Theme</a></h2>
                        <span>Architecture / Business</span>
                    </div>
                </div>
                <div className="wpo-project-item">
                    <div className="wpo-project-img">
                        <img src="/images/project/img-2.jpg" alt="" />
                    </div>
                    <div className="wpo-project-text">
                        <h2><a href="portfolio-single.html">Follio - Multipurpose Portfolio HTML5 Template</a></h2>
                        <span>Web Design</span>
                    </div>
                </div>
                <div className="wpo-project-item">
                    <div className="wpo-project-img">
                        <img src="/images/project/img-3.jpg" alt="" />
                    </div>
                    <div className="wpo-project-text">
                        <h2><a href="portfolio-single.html">Elito - Creative Portfolio HTML5 Template</a></h2>
                        <span>Website / Creative</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape-p">
            <svg width="1325" height="1687" viewBox="0 0 1325 1687" fill="none">
                <g filter="url(#filter0_f_39_4166)">
                    <circle cx="481.5" cy="843.5" r="343.5" fill-opacity="0.27" />
                </g>
                <defs>
                    <filter id="filter0_f_39_4166" x="-362" y="0" width="1687" height="1687"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4166" />
                    </filter>
                </defs>
            </svg>
        </div>
        <div className="line-shape-1">
            <img src="/images/project/line-1.png" alt="" />
        </div>
        <div className="line-shape-2">
            <img src="/images/project/line-2.png" alt="" />
        </div>
    </div>);
};

export default RecentWorks;
