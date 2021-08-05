import React from 'react';
import { translate } from 'react-translate';

import Link from '../Components/LowerCaseUrlLink';
import { englishCode, spanishCode } from '../Utilities/LanguageCodes';
import MessageBox from './MessageBox';

const Header = props => {
  const messageBox = props.message && <MessageBox message={props.message} />;
  return (
    // <header className="header" role="banner">
    //   <div className="menu">
    //     <div className="container">
    //       <nav>
    //         <ul>
    //           <li>
    //             <Link to={`/${props.language}`}>
    //               {props.t('homeLinkTitle')}
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to={`/${props.language}/store`}>
    //               {props.t('storeLinkTitle')}
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to={`/${props.language}/articles`}>
    //               {props.t('articlesLinkTitle')}
    //             </Link>
    //           </li>
    //           {props.language.toLowerCase() === englishCode.toLowerCase() ? (
    //             <li>
    //               <Link to={`/${props.language}/about-us`}>
    //                 {props.t('aboutLinkTitle')}
    //               </Link>
    //             </li>
    //           ) : props.language.toLowerCase() === spanishCode.toLowerCase() ? (
    //             <li>
    //               <Link to={`/${props.language}/acerca-de`}>
    //                 {props.t('aboutLinkTitle')}
    //               </Link>
    //             </li>
    //           ) : null}
    //           <li>
    //             <Link to={`/${props.language}/cafes`}>
    //               {props.t('cafesLinkTitle')}
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to={`/${props.language}/contacts`}>
    //               {props.t('contactsLinkTitle')}
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to={`/${props.language}/edwardPage1LinkTitle`}>
    //               {props.t('edwardPage1LinkTitle')}
    //             </Link>
    //           </li>
    //         </ul>
    //       </nav>
    //       <div className="additional-menu-buttons user-menu">
    //         <nav>
    //           <ul className="dropdown-items-list dropdown-desktop-visible">
    //             <li>
    //               <a
    //                 href="/#"
    //                 onClick={e => {
    //                   e.preventDefault();
    //                   window.location.pathname.endsWith('acerca-de')
    //                     ? props.changeLanguage(englishCode, '/about-us')
    //                     : props.changeLanguage(englishCode);
    //                 }}
    //               >
    //                 English
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="/#"
    //                 onClick={e => {
    //                   e.preventDefault();
    //                   window.location.pathname.endsWith('about-us')
    //                     ? props.changeLanguage(spanishCode, '/acerca-de')
    //                     : props.changeLanguage(spanishCode);
    //                 }}
    //               >
    //                 Español
    //               </a>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    //   {messageBox}
    //   <div className="header-row">
    //     <div className="container">
    //       <div className="col-xs-8 col-md-8 col-lg-4 logo">
    //         <h1 className="logo">
    //           <Link to={`/${props.language}`} className="logo-link">
    //             Dancing Goat
    //           </Link>
    //         </h1>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header id="header" className="header no-sticky  dark edw-menu-ltst banner-page">
      <div id="skip">
        <a href="#main-content" style={{ transition: 'none 0s ease 0s' }}>
          Skip to main content
        </a>
      </div>
      <div id="header-wrap">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"></button>
              <a href="/" className="navbar-brand edw-logo" data-dark-logo="https://www.edwards.com/Themes/NewBrand/Styles/Images/logo-edwards.png" tabIndex={1}>
                <img className="no-collapsed-menu-logo" src="https://www.edwards.com/Themes/NewBrand/Styles/Images/logo-edwards.png" alt="Edwards Logo" />
                <img className="collapsed-logo" src="https://www.edwards.com/Themes/NewBrand/Styles/Images/logo-edwards-inverse.png" alt="Edwards Logo" />
              </a>
            </div>
            <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-1">
              <div className="zone zone-search">
                <div className="orchardwidget widget-Search widget-search widget-search-form">
                  <ul id="top-search" className="sf-js-enabled">
                    <li>
                      <a href="#" id="top-search-trigger"><span className="icon-search"><span className="sr-only">Search Edwards.com</span></span><span className="icon-line-cross" /></a>
                      <form action="/Edwards.Search/Search" method="get"><label className="sr-only" htmlFor="main-search-edwards">Search
                        Edwards.com</label>
                        <input id="main-search-edwards" type="text" name="q" className="form-control" defaultValue placeholder="Search this site" autoComplete="off" />
                        <button type="submit" className="sr-only">Search Edwards.com
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="nav navbar-nav navbar-right sec-edw-menu">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" aria-label="Read more about Therapies">
                    Therapies </a>
                  <ul className="dropdown-menu multi-menu-edw column-2">
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="multi-menu-dropdown" data-mh="columns-2-1" style={{ height: '420px' }}>
                          <li>
                            <a className="menu-category-heading-edw">
                              Transcatheter aortic valve replacement (TAVR) </a>
                            <ul>
                              <li>
                                <a href="/therapies/transcatheter-aortic-valve-replacement-tavr" aria-label="Read more about Transcatheter aortic valve replacement (TAVR)">
                                  Transcatheter aortic valve replacement (TAVR) </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Blood conservation </a>
                            <ul>
                              <li>
                                <a href="/therapies/bloodmanagement" aria-label="Read more about Blood management">
                                  Blood management </a>
                              </li>
                              <li>
                                <a href="/devices/pressure-monitoring/closed-blood-sampling" aria-label="Read more about Closed blood sampling">
                                  Closed blood sampling </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Enhanced surgical recovery </a>
                            <ul>
                              <li>
                                <a href="/therapies/fluid-management" aria-label="Read more about Enhanced surgical recovery">
                                  Enhanced surgical recovery </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Clot management </a>
                            <ul>
                              <li>
                                <a href="/devices/catheters/clot-management" aria-label="Read more about Clot management">
                                  Clot management </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="multi-menu-dropdown" data-mh="columns-2-1" style={{ height: '420px' }}>
                          <li>
                            <a className="menu-category-heading-edw">
                              Hypotension management </a>
                            <ul>
                              <li>
                                <a href="/therapies/hypotension-management" aria-label="Read more about Hypotension management">
                                  Hypotension management </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Infection control </a>
                            <ul>
                              <li>
                                <a href="/therapies/bloodmanagement" aria-label="Read more about Blood management">
                                  Blood management </a>
                              </li>
                              <li>
                                <a href="/devices/pressure-monitoring/closed-blood-sampling" aria-label="Read more about Closed blood sampling">
                                  Closed blood sampling </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Sepsis and Shock management </a>
                            <ul>
                              <li>
                                <a href="/therapies/sepsis-management" aria-label="Read more about Sepsis management">
                                  Sepsis management </a>
                              </li>
                              <li>
                                <a href="/therapies/shock-management" aria-label="Read more about Shock management">
                                  Shock management </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" aria-label="Read more about Specialty Teams">
                    Specialty Teams </a>
                  <ul className="dropdown-menu multi-menu-edw column-2">
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="multi-menu-dropdown" data-mh="columns-2-2" style={{ height: '592px' }}>
                          <li>
                            <a className="menu-category-heading-edw">
                              Anesthesia </a>
                            <ul>
                              <li>
                                <a href="/therapies/fluid-management" aria-label="Read more about Enhanced surgical recovery">
                                  Enhanced surgical recovery </a>
                              </li>
                              <li>
                                <a href="/therapies/hypotension-management" aria-label="Read more about Hypotension management">
                                  Hypotension management </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring" aria-label="Read more about All Hemodynamic monitoring">
                                  All Hemodynamic monitoring </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Critical care team </a>
                            <ul>
                              <li>
                                <a href="/specialty-teams/ICU-management" aria-label="Read more about ICU management">
                                  ICU management </a>
                              </li>
                              <li>
                                <a href="/specialty-teams/OR-solutions" aria-label="Read more about OR solutions">
                                  OR solutions </a>
                              </li>
                              <li>
                                <a href="/pages/COVID19-hemodynamics" aria-label="Read more about Managing critically ill">
                                  Managing critically ill </a>
                              </li>
                              <li>
                                <a href="/pages/COVID19-hemodynamics-in-ICU" aria-label="Read more about Critical care newsletter">
                                  Critical care newsletter </a>
                              </li>
                              <li>
                                <a href="/devices/pressure-monitoring/closed-blood-sampling" aria-label="Read more about Closed blood sampling">
                                  Closed blood sampling </a>
                              </li>
                              <li>
                                <a href="/therapies/sepsis-management" aria-label="Read more about Sepsis management">
                                  Sepsis management </a>
                              </li>
                              <li>
                                <a href="/therapies/shock-management" aria-label="Read more about Shock management">
                                  Shock management </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring" aria-label="Read more about All Hemodynamic monitoring">
                                  All Hemodynamic monitoring </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Surgical team </a>
                            <ul>
                              <li>
                                <a href="/therapies/fluid-management" aria-label="Read more about Enhanced surgical recovery">
                                  Enhanced surgical recovery </a>
                              </li>
                              <li>
                                <a href="/therapies/hypotension-management" aria-label="Read more about Hypotension management">
                                  Hypotension management </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="multi-menu-dropdown" data-mh="columns-2-2" style={{ height: '592px' }}>
                          <li>
                            <a className="menu-category-heading-edw">
                              TAVR Heart Team </a>
                            <ul>
                              <li>
                                <a href="/specialtyteams/heart-team" aria-label="Read more about TAVR Heart Team">
                                  TAVR Heart Team </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Hospital administration </a>
                            <ul>
                              <li>
                                <a href="/devices/pressure-monitoring/closed-blood-sampling" aria-label="Read more about Closed blood sampling">
                                  Closed blood sampling </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" aria-label="Read more about Devices">
                    Devices </a>
                  <ul className="dropdown-menu multi-menu-edw column-3">
                    <div className="row">
                      <div className="col-sm-4">
                        <ul className="multi-menu-dropdown" data-mh="columns-3-3" style={{ height: '671px' }}>
                          <li>
                            <a className="menu-category-heading-edw">
                              Transcatheter heart valves </a>
                            <ul>
                              <li>
                                <a href="/devices/heart-valves/transcatheter" aria-label="Read more about Transcatheter aortic">
                                  Transcatheter aortic </a>
                              </li>
                              <li>
                                <a href="/devices/heart-valves/transcatheter-sapien-3-valve-pulmonic" aria-label="Read more about Transcatheter pulmonic">
                                  Transcatheter pulmonic </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Surgical valve repair </a>
                            <ul>
                              <li>
                                <a href="/devices/annuloplasty/mitral-and-tricuspid-valve-repair" aria-label="Read more about Mitral valve repair">
                                  Mitral valve repair </a>
                              </li>
                              <li>
                                <a href="/devices/annuloplasty/mitral-and-tricuspid-valve-repair" aria-label="Read more about Tricuspid valve repair">
                                  Tricuspid valve repair </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Surgical valve replacement </a>
                            <ul>
                              <li>
                                <a href="/devices/heart-valves/aortic" aria-label="Read more about Aortic valve replacement">
                                  Aortic valve replacement </a>
                              </li>
                              <li>
                                <a href="/devices/heart-valves/mitral" aria-label="Read more about Mitral valve replacement">
                                  Mitral valve replacement </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Bovine pericardial patches </a>
                            <ul>
                              <li>
                                <a href="/devices/bovine-pericardial-patches/duravess" aria-label="Read more about Vascular">
                                  Vascular </a>
                              </li>
                              <li>
                                <a href="/devices/bovine-pericardial-patches/cardiac" aria-label="Read more about Cardiac">
                                  Cardiac </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="multi-menu-dropdown" data-mh="columns-3-3" style={{ height: '671px' }}>
                          <li>
                            <a className="menu-category-heading-edw" href="/devices/hemodynamic-monitoring">
                              Hemodynamic monitoring </a>
                            <ul>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/acumen-intelligent-decision-support-software-suite" aria-label="Read more about Decision support software">
                                  Decision support software </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/clearsight" aria-label="Read more about Noninvasive">
                                  Noninvasive </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/minimally-invasive" aria-label="Read more about Minimally-invasive">
                                  Minimally-invasive </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/PediaSat-catheter" aria-label="Read more about Pediatric oximetry">
                                  Pediatric oximetry </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/ForeSight" aria-label="Read more about Tissue oximetry">
                                  Tissue oximetry </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/oximetry-central-venous-catheter" aria-label="Read more about Venous oximetry">
                                  Venous oximetry </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/swan-ganz-catheters" aria-label="Read more about Pulmonary artery catheters">
                                  Pulmonary artery catheters </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/volumeview" aria-label="Read more about Volumetrics">
                                  Volumetrics </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/monitoring-platforms" aria-label="Read more about Monitoring platforms">
                                  Monitoring platforms </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring" aria-label="Read more about All Hemodynamic monitoring">
                                  All Hemodynamic monitoring </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Decision support software </a>
                            <ul>
                              <li>
                                <a href="/devices/decision-software/hpi" aria-label="Read more about Acumen Hypotension Prediction Index software">
                                  Acumen Hypotension Prediction Index software </a>
                              </li>
                              <li>
                                <a href="/devices/hemodynamic-monitoring/acumen-analytics" aria-label="Read more about Acumen Analytics software">
                                  Acumen Analytics software </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Pressure monitoring </a>
                            <ul>
                              <li>
                                <a href="/devices/pressure-monitoring/transducer" aria-label="Read more about Pressure transducers">
                                  Pressure transducers </a>
                              </li>
                              <li>
                                <a href="/devices/pressure-monitoring/closed-blood-sampling" aria-label="Read more about Closed blood sampling">
                                  Closed blood sampling </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <ul className="multi-menu-dropdown" data-mh="columns-3-3" style={{ height: '671px' }}>
                          <li>
                            <a className="menu-category-heading-edw">
                              Vascular Catheters </a>
                            <ul>
                              <li>
                                <a href="/devices/catheters/clot-management" aria-label="Read more about Clot management">
                                  Clot management </a>
                              </li>
                              <li>
                                <a href="/devices/catheters/occlusion" aria-label="Read more about Occlusion">
                                  Occlusion </a>
                              </li>
                              <li>
                                <a href="/devices/catheters/general-surgery" aria-label="Read more about General surgery">
                                  General surgery </a>
                              </li>
                              <li>
                                <a href="/devices/catheters/vascular" aria-label="Read more about All Vascular">
                                  All Vascular </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Accessories and instruments </a>
                            <ul>
                              <li>
                                <a href="/devices/accessories/edwards-thruport-systems" aria-label="Read more about Edwards ThruPort Systems">
                                  Edwards ThruPort Systems </a>
                              </li>
                              <li>
                                <a href="/devices/catheters/arterial-cannulae" aria-label="Read more about Cardiac cannula">
                                  Cardiac cannula </a>
                              </li>
                              <li>
                                <a href="/devices/accessories/atraumatic-occlusion" aria-label="Read more about Atraumatic occlusion">
                                  Atraumatic occlusion </a>
                              </li>
                              <li>
                                <a href="/devices/accessories/Vascushunt-II-Silicone-Carotid-Shunt" aria-label="Read more about Carotid shunts">
                                  Carotid shunts </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="menu-category-heading-edw">
                              Support </a>
                            <ul>
                              <li>
                                <a href="/mri-safety" aria-label="Read more about MRI safety information">
                                  MRI safety information </a>
                              </li>
                              <li>
                                <a href="http://eifu.edwards.com" aria-label="Read more about Instructions for use">
                                  Instructions for use </a>
                              </li>
                              <li>
                                <a href="/devices/support/product-security" aria-label="Read more about Product security">
                                  Product security </a>
                              </li>
                              <li>
                                <a href="/devices/support/technical-bulletin" aria-label="Read more about Technical bulletin">
                                  Technical bulletin </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" aria-label="Read more about Education">
                    Education </a>
                  <ul className="dropdown-menu">
                    <li className="display-none">
                      <a aria-label="Read more about Education">
                        Education </a>
                    </li>
                    <li>
                      <a href="/clinicaleducation" aria-label="Read more about Critical care professionals">
                        Critical care professionals </a>
                    </li>
                    <li>
                      <a href="https://professionaleducation.edwards.com/" aria-label="Read more about Surgical Professionals">
                        Surgical Professionals </a>
                    </li>
                    <li>
                      <a href="/education/reimbursement" aria-label="Read more about Reimbursement Information">
                        Reimbursement Information </a>
                    </li>
                    <li>
                      <a href="/education/Medical-affairs" aria-label="Read more about Medical Affairs">
                        Medical Affairs </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" aria-label="Read more about Patients">
                    Patients </a>
                  <ul className="dropdown-menu">
                    <li className="display-none">
                      <a aria-label="Read more about Patients">
                        Patients </a>
                    </li>
                    <li>
                      <a href="/aboutus/patientvoice" aria-label="Read more about Patient voice">
                        Patient voice </a>
                    </li>
                    <li>
                      <a href="/patients/patient-information" aria-label="Read more about Heart valve disease information">
                        Heart valve disease information </a>
                    </li>
                    <li>
                      <a href="/patients/faq" aria-label="Read more about Frequently asked questions">
                        Frequently asked questions </a>
                    </li>
                    <li>
                      <a href="/patients/implantpatientregistry" aria-label="Read more about Implant registry">
                        Implant registry </a>
                    </li>
                    <li>
                      <a href="https://www.edwards.com/clinicalresearch" aria-label="Read more about Clinical research information">
                        Clinical research information </a>
                    </li>
                    <li>
                      <a href="/pages/MRTrials" aria-label="Read more about Mitral valve regurgitation clinical trial information">
                        Mitral valve regurgitation clinical trial information </a>
                    </li>
                    <li>
                      <a href="/pages/TRISCENDIITrial" aria-label="Read more about Tricuspid valve replacement clinical trial information">
                        Tricuspid valve replacement clinical trial information </a>
                    </li>
                    <li>
                      <a href="/antibiotics" aria-label="Read more about Antibiotics">
                        Antibiotics </a>
                    </li>
                    <li>
                      <a href="/patients/glossary" aria-label="Read more about Glossary">
                        Glossary </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right prmry-edw-menu">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" aria-label="Read more about About Us">
                    About Us </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/aboutus/home" aria-label="Read more about Who we are">
                        Who we are </a>
                    </li>
                    <li>
                      <a href="/aboutus/OurHistory" aria-label="Read more about Our history">
                        Our history </a>
                    </li>
                    <li>
                      <a href="/aboutus/what-we-do" aria-label="Read more about What we do">
                        What we do </a>
                    </li>
                    <li>
                      <a href="/aboutus/credo" aria-label="Read more about Our Credo">
                        Our Credo </a>
                    </li>
                    <li>
                      <a href="/aboutus/global-locations" aria-label="Read more about Global locations">
                        Global locations </a>
                    </li>
                    <li>
                      <a href="/aboutus/corporategiving" aria-label="Read more about Global corporate giving">
                        Global corporate giving </a>
                    </li>
                    <li>
                      <a href="/aboutus/corp-responsibility" aria-label="Read more about Corporate responsibility">
                        Corporate responsibility </a>
                    </li>
                    <li>
                      <a href="/aboutus/ourleaders" aria-label="Read more about Our leaders">
                        Our leaders </a>
                    </li>
                    <li>
                      <a href="/about-us/newsroom" aria-label="Read more about Newsroom">
                        Newsroom </a>
                    </li>
                    <li>
                      <a href="/aboutus/awards" aria-label="Read more about Awards & recognitions">
                        Awards &amp; recognitions </a>
                    </li>
                    <li>
                      <a href="/product-ordering" aria-label="Read more about Product ordering">
                        Product ordering </a>
                    </li>
                    <li>
                      <a href="/aboutus/events" aria-label="Read more about Events">
                        Events </a>
                    </li>
                    <li>
                      <a href="/aboutus/ContactUs" aria-label="Read more about Contact us">
                        Contact us </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" aria-label="Read more about Careers">
                    Careers </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/careers/home" aria-label="Read more about Careers overview">
                        Careers overview </a>
                    </li>
                    <li>
                      <a href="/careers/workinghere" aria-label="Read more about Working here">
                        Working here </a>
                    </li>
                    <li>
                      <a href="/careers/Discover-Malaysia" aria-label="Read more about Discover Malaysia">
                        Discover Malaysia </a>
                    </li>
                    <li>
                      <a href="/careers/Discover-Ireland" aria-label="Read more about Discover Ireland">
                        Discover Ireland </a>
                    </li>
                    <li>
                      <a href="/careers/our-culture" aria-label="Read more about Our culture">
                        Our culture </a>
                    </li>
                    <li>
                      <a href="/careers/professional-development" aria-label="Read more about Professional development">
                        Professional development </a>
                    </li>
                    <li>
                      <a href="/careers/diversity-inclusion" aria-label="Read more about Diversity & inclusion">
                        Diversity &amp; inclusion </a>
                    </li>
                    <li>
                      <a href="/careers/benefits" aria-label="Read more about Benefits">
                        Benefits </a>
                    </li>
                    <li>
                      <a href="/careers/locations" aria-label="Read more about Locations">
                        Locations </a>
                    </li>
                    <li>
                      <a href="/careers/meet-our-employees" aria-label="Read more about Meet our employees">
                        Meet our employees </a>
                    </li>
                    <li>
                      <a href="/careers/professionalareas" aria-label="Read more about Professional areas">
                        Professional areas </a>
                    </li>
                    <li>
                      <a href="/careers/universityrecruiting" aria-label="Read more about University recruiting">
                        University recruiting </a>
                    </li>
                    <li>
                      <a href="/careers/agencies" aria-label="Read more about Agencies & recruiters">
                        Agencies &amp; recruiters </a>
                    </li>
                    <li>
                      <a href="/careers/faqs" aria-label="Read more about FAQs">
                        FAQs </a>
                    </li>
                    <li>
                      <a href="/careers/jobs" aria-label="Read more about Search jobs">
                        Search jobs </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" aria-label="Read more about Investors">
                    Investors </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="http://ir.edwards.com" aria-label="Read more about Investors overview">
                        Investors overview </a>
                    </li>
                    <li>
                      <a href="http://ir.edwards.com/#tabs-0" aria-label="Read more about News & events">
                        News &amp; events </a>
                    </li>
                    <li>
                      <a href="http://ir.edwards.com/#tabs-1" aria-label="Read more about Corporate governance">
                        Corporate governance </a>
                    </li>
                    <li>
                      <a href="http://ir.edwards.com/#tabs-2" aria-label="Read more about Financial information">
                        Financial information </a>
                    </li>
                    <li>
                      <a href="http://ir.edwards.com/#tabs-3" aria-label="Read more about Stock info & tools">
                        Stock info &amp; tools </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown country-select-edw">
                  <a className="dropdown-toggle btn btn-default">
                    United States - English
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/br">Brazil - Português</a>
                    </li>
                    <li>
                      <a href="/cr">Costa Rica - Español</a>
                    </li>
                    <li>
                      <a href="/zh">China - 中文简体</a>
                    </li>
                    <li>
                      <a href="/de">Germany - Deutsch</a>
                    </li>
                    <li>
                      <a href="/gb">United Kingdom - English</a>
                    </li>
                    <li>
                      <a href="/es">Spain - Español</a>
                    </li>
                    <li>
                      <a href="/it">Italy - Italiano</a>
                    </li>
                    <li>
                      <a href="/sg">Singapore - English</a>
                    </li>
                    <li>
                      <a href="/ch-en">Switzerland - English</a>
                    </li>
                    <li>
                      <a href="/jp">Japan - 日本語</a>
                    </li>
                    <li>
                      <a href="/kr">Korea - 한국어</a>
                    </li>
                    <li>
                      <a href="/pr">Puerto Rico - Español</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default translate('Header')(Header);
