import React, { Component } from 'react';

class Services extends Component {
  render() {

    // if(this.props.data){
    //   var projects = this.props.data.projects.map(function(projects){
    //     var projectImage = 'images/portfolio/'+projects.image;
    //     return <div key={projects.title} className="columns portfolio-item">
    //        <div className="item-wrap">
    //         <a href={projects.url} title={projects.title}>
    //            <img alt={projects.title} src={projectImage} />
    //            <div className="overlay">
    //               <div className="portfolio-item-meta">
    //              <h5>{projects.title}</h5>
    //                  <p>{projects.category}</p>
    //               </div>
    //             </div>
    //           <div className="link-icon"><i className="fa fa-link"></i></div>
    //         </a>
    //       </div>
    //     </div>
    //   })
    // }

    return (
        <section id="services" class="services-mf route">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="title-box text-center">
                            <h2 class="title-a">
                                Services
                            </h2>
    
                            <div class="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 phone-2">
                        <div class="service-box">
                            <div class="service-ico">
                                <span class="ico-circle"><i class="fas fa-desktop icon"></i></span>
                            </div>
                            <div class="service-content">
                                <h2 class="s-title">Web Design</h2>
                                <p class="s-description text-center">
                                    We will create a web design that will leave your clients with their mouths open.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-box">
                            <div class="service-ico">
                                <span class="ico-circle"><i class="fas fa-code icon"></i></span>
                            </div>
                            <div class="service-content">
                                <h2 class="s-title">Web Development</h2>
                                <p class="s-description text-center">
                                    We will develop your custom website with html, css, JavaScript, React or Wordpress. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-box">
                            <div class="service-ico">
                                <span class="ico-circle"><i class="fas fa-server icon"></i></span>
                            </div>
                            <div class="service-content">
                                <h2 class="s-title">Domains and Servers</h2>
                                <p class="s-description text-center">
                                    We have servers that will make your website fly, and we will look for the domain that best suits your business. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-box">
                            <div class="service-ico">
                                <span class="ico-circle"><i class="fas fa-mobile-alt icon"></i></span>
                            </div>
                            <div class="service-content">
                                <h2 class="s-title">Responsive Design</h2>
                                <p class="s-description text-center">
                                    We will make responsive designs for all devices: cell phone, tablet, laptop, PC. So no customer is left out. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-box">
                            <div class="service-ico">
                                <span class="ico-circle"><i class="fas fa-paint-brush icon"></i></span>
                            </div>
                            <div class="service-content">
                                <h2 class="s-title">Graphic Design</h2>
                                <p class="s-description text-center">
                                    We do graphic design for your website and social networks to reach more clients visually. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-box">
                            <div class="service-ico">
                                <span class="ico-circle"><i class="fas fa-lightbulb icon"></i></span>
                            </div>
                            <div class="service-content">
                                <h2 class="s-title">Marketing Services</h2>
                                <p class="s-description text-center">
                                    We have digital marketing services, such as instagram, google ads, facebook ads and more. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      );
  }
}

export default Services;
