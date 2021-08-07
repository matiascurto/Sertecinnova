import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
      }

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Matias Curto" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                       <p>Dedicated web development professional with a track record of meeting company goals using consistent 
                          and organized practices. Expert in working under pressure and adapting to new situations and challenges 
                          to better enhance the organizational brand.
                       </p>
                       <p>
                     I am looking for a full time job position that offers professional challenges using interpersonal skills, 
                     excellent time management and skills to solve problems.
                      </p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <a>{name}</a><br />
                           <a>{street}
                           </a><br />
                           <a href="https://wa.link/v30et1">{phone}</a><br />
                           <a href="mailto: matiascurto15@gmail.com" >{email}</a>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Curriculum vitae</a>

                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
