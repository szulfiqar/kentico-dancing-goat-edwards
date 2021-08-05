/* eslint-disable */
import React from 'react';
// import Link from '../Components/LowerCaseUrlLink';
import { translate } from 'react-translate';
const Footer = props => {
  return (
    // <div className="footer-wrapper">
    //   <footer role="contentinfo">
    //     <div className="footer-container">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-md-4 col-lg-4 footer-col">
    //             <h3 className="contact-title">{props.t('contact')}</h3>
    //             <p>
    //               (+0) 000-000-0000
    //               <br />
    //               <Link to="mailto:dancinggoat@localhost.local">
    //                 dancinggoat@localhost.local
    //               </Link>
    //               <br />
    //               <br /> Dancing Goat Ltd
    //               <br /> 62 E Lake St Chicago,
    //               <br /> {props.t('cityStateZip')}
    //             </p>
    //           </div>
    //           <div className="col-md-4 col-lg-4 footer-col">
    //             <h3>{props.t('followUs')}</h3>
    //             <Link
    //               className="followus-link"
    //               to={'https://www.facebook.com/Dancing.Goat'}
    //               target="_blank"
    //             >
    //               <img
    //                 alt="Follow us on Facebook"
    //                 className=""
    //                 src="/Images/facebook-icon.png"
    //                 title={props.t('followUsOnFacebook')}
    //               />
    //             </Link>
    //             <Link
    //               className="followus-link"
    //               to={'https://twitter.com/DancingGoat78'}
    //               target="_blank"
    //             >
    //               <img
    //                 alt="Follow us on Twitter"
    //                 className=""
    //                 src="/Images/twitter-icon.png"
    //                 title={props.t('followUsOnTwitter')}
    //               />
    //             </Link>
    //           </div>
    //           <div className="col-md-4 col-lg-4 footer-col" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="container copyright">
    //       Copyright &copy; 2016 Dancing Goat. {props.t('allRightsReserved')}
    //     </div>
    //   </footer>
    // </div>
    <footer id="footer">
      <div className="container">
        <div id="custom-search-footer">
          <div className="input-group col-md-3 col-sm-4">
            <span className="input-group-btn">
              <button className="btn btn-titan btn-sm" type="button">
                <span className="icon-search" />
              </button>
            </span>
            <form>
              <label className="sr-only" htmlFor="footer-search-edwards">Search
                Edwards.com</label>
              <input id="footer-search-edwards" type="text" name="q"
                className="search-query form-control input-sm input-titan"
                placeholder="Search Edwards.com" />
              <button type="submit" className="sr-only">Search Edwards.com</button>
            </form>
          </div>
        </div>
        <div className="zone zone-footer-html">
          <div className="orchardwidget widget-footer-html widget-html-widget">
            <div className="htmlcontent ">
              <p className="pull-right"><a href="/" title="Edwards"><img
                src="https://www.edwards.com/Themes/NewBrand/Styles/Images/edwards/logo-edwards-footer.png"
                className="img-responsive center-block" alt="Edwards Logo" /></a></p>
              <div className="nav-footer-links  pull-left">
                <ul className="nav social extramargin">
                  <li className="footer-follow">Follow Edwards on:</li>
                  <li>
                    <ul className="visible-lg">
                      <li><a href="https://www.facebook.com/Edwardslifesciences/"
                        title="Facebook"><span className="icon-facebook" /></a></li>
                      <li><a href="https://twitter.com/edwardslifesci"
                        title="Twitter"><span className="icon-twitter" /></a></li>
                      <li><a href="https://www.linkedin.com/company/edwards-lifesciences"
                        title="LinkedIn"><span className="icon-linkedin2" /></a></li>
                      <li><a href="https://www.youtube.com/user/EdwardsGlobal"
                        title="youtube"><span className="icon-youtube" /></a></li>
                      <li><a href="http://instagram.com/edwardscareers"
                        title="instagram"><span
                          className="icon-instagram" /></a></li>
                    </ul>
                  </li>
                  <li className="mobileview_socialicons visible-md visible-sm visible-xs">
                    <ul>
                      <li><a href="https://www.facebook.com/Edwardslifesciences/"
                        title="Facebook"><span className="icon-facebook" /></a></li>
                      <li><a href="https://twitter.com/edwardslifesci"
                        title="Twitter"><span className="icon-twitter" /></a></li>
                      <li><a href="https://www.linkedin.com/company/edwards-lifesciences"
                        title="LinkedIn"><span className="icon-linkedin2" /></a></li>
                      <li><a href="https://www.youtube.com/user/EdwardsGlobal"
                        title="youtube"><span className="icon-youtube" /></a></li>
                      <li><a href="http://instagram.com/edwardscareers"
                        title="instagram"><span
                          className="icon-instagram" /></a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav nav-pages small visible-lg"
                  style={{ marginBottom: '0px !important' }}>
                  <li><a href="/aboutus/home" aria-label="about Edwards Lifesciences">About
                    us</a></li>
                  <li><a href="/careers/home" aria-label="view careers at Edwards">Careers</a>
                  </li>
                  <li><a href="http://ir.edwards.com" aria-label="View investor relations">Investors</a></li>
                  <li><a href="/mri-safety" aria-label="view MRI safety">MRI safety</a></li>
                  <li><a href="/aboutus/contactus" aria-label="contact Edwards Lifesciences">Contact
                    us</a></li>
                  <li><a href="/product-ordering"
                    aria-label="view product ordering and inquiries">Product
                    ordering</a></li>
                  <li><a href="/sitemap" aria-label="view site map">Site map</a></li>
                  <li><a href="/legal/legalterms" aria-label="View legal terms">Legal
                    terms</a></li>
                  <li><a href="/legal/privacypolicy" aria-label="View privacy policy">Privacy
                    policy</a>
                  </li>
                </ul>
                <ul className="nav-pages small visible-md visible-sm visible-xs"
                  style={{ paddingLeft: '0px !important' }}>
                  <li><a href="/aboutus/home" aria-label="about Edwards Lifesciences">About
                    us</a></li>
                  <li><a href="/careers/home" aria-label="view careers at Edwards">Careers</a>
                  </li>
                  <li><a href="http://ir.edwards.com" aria-label="View investor relations"
                  >Investors</a></li>
                  <li><a href="/mri-safety" aria-label="view MRI safety">MRI safety</a></li>
                  <li><a href="/aboutus/contactus" aria-label="contact Edwards Lifesciences">Contact
                    us</a></li>
                  <li><a href="/product-ordering"
                    aria-label="view product ordering and inquiries">Product
                    ordering</a></li>
                  <li><a href="/sitemap" aria-label="view site map">Site map</a></li>
                  <li><a href="/legal/legalterms" aria-label="View legal terms">Legal
                    terms</a></li>
                  <li><a href="/legal/privacypolicy" aria-label="View privacy policy">Privacy
                    policy</a>
                  </li>
                </ul>
                <p className="small" style={{ marginTop: '12px' }}>©
                  2021
                  Edwards Lifesciences Corporation. <span className="block-xs">All rights reserved.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      <a id="bt-top" className="cd-top" data-toggle="tooltip">
        <span className="ico2-circle-up" /> <span className="sr-only">Back to top</span>
      </a>
    </footer>
  );
};
export default translate('Footer')(Footer);
