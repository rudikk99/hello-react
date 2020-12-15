import React, { Component } from 'react';
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom';

function Personall() {
    return (
        <div className="top" >   
            <div className="video-wrapper">
                <div className="player-wrapper"> 
                    <div className="react-player">
                    <div class="p-2">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=_f-C_nnf3a4"
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className='info' class="d-flex flex-column" > 
                <div class="p-2">
                    <h2> PersonALL [ALLdience Brazil] </h2> <br />
                </div>
                <div class="p-2">
                    <h3> Omnimeasurement - </h3>
                </div>
                <div class="p-2">
                    <h4> audience measurement of any screen, </h4> 
                </div> 
                <div class="p-2">
                    <h5> any source, anywhere, anytime </h5>
                </div>
                <div class="p-2">
                    <p class="text-sm-left" ><mark class="red">Immetrica,</mark> audience-measurement systems engineering specialist, 
                and eCGlobal Research Solutions, innovative consumer insights and 
                big data analytics company, are proud to introduce Immetrica’s new <mark class="blue">personall</mark> 
                ratings service, which, combined with <mark class="red">eCGlobal’s Latin American</mark> panels and 
                advertiser services, is branded <mark class="blue">Alldience.</mark> <mark class="blue">Personall</mark> is built from the ground 
                up to capture all viewing regardless of location and technology, and Alldience 
                is integrated with eCGlobal’s existing social-media use, Web use and consumer 
                segmentable panel with approximately one million active members served by dozens 
                of pay-TV operators. The service can measure conventional television and radio, 
                and new-technology-enabled viewing to realtime and timeshifted DVR, but also sources 
                invisible to most currency ratings providers, including VOD, OTT, websites, apps, 
                YouTube, other social media, in and out of the home. Based on a highly reliable 
                smartphone-enabled ACR technology, the service detects viewing in any environment 
                in which the media audio remains intelligible, in realtime or timeshifted using any 
                means for up to a year after broadcast—or longer.
                </p> <br/>
                </div>
                <div class="p-2">
                <p>
                    For advertisers, we offer complete audience data that permits the calculation 
                    of campaign ROI; campaign retargeting that permits the purchase of inventory 
                    that reaches the target audience; ad creative testing, covering propensity to 
                    watch in realtime and on DVR, opinion and biometrically measured emotion; and 
                    reporting on the entire consumer journey.
                </p><br/>
                </div>
                <div class="p-2">
                <p>
                    For premium-channel operators, we offer channel-coverage ratings (ratings among 
                    their subscribers rather than the entire sample) when eCGlobal operates 
                    subsamples of its panel specific to them. We can also offer a behavioural 
                    definition of channel use, which, however, ignores viewers who have access to 
                    these channels but do not use them.

                </p><br/>
                </div>
                <div class="p-2">
                <p>
                    <mark class="blue">Alldience</mark> can measure binge-watching, and can ingest the multinational streamers 
                    quickly and efficiently, and update their libraries promptly for additions and 
                    deletions. <mark class="blue">Alldience</mark> can support near-real-time programmatic advertising markets 
                    and other uses that require near-immediate turnaround of data.
                </p><br/>
                </div>
                <div class="p-2">
                <p>
                    The unit of measurement is a demographically described individual viewer, with a 
                    rich single-source set of descriptors such as income, education and occupation; 
                    social-media use and engagement; and consumer behaviour available to drill down 
                    further to the target or de facto audience, on a panregional, nationwide, or 
                    local-market scale. In addition to audience measurement for broadcasters, we 
                    offer advertising spot ratings and competitive analysis of advertising flights.
                </p><br/>
                </div>
                <div class="p-2">
                <p>
                    Of particular interest to advertisers is the opportunity to engage panel members 
                    who have just watched designated content with a custom survey automatically pushed 
                    to the members’ smartphones in near-realtime, in what amounts to the world’ss 
                    largest focus group.
                </p><br/>
                </div>
                <div class="p-2">
                    <p>
                    The service is delivered through a world-leading analytics platform capable of 
                    handling the large sample sizes; an optional cost-effective custom reporting 
                    service using Immetrica’s proprietary technology; and customized means for 
                    clients with needs beyond these.
                    </p><br/>
                </div>
                <div class="p-2">
                    <p>
                    A test deployment in Brazil returned first usable data on 31 August 2018 and 
                    continues to run today, demonstrating high accuracy, stability and utility. 
                    We have also studied the viewing of 84 designated advertising creatives.
                    </p><br/>
                </div>
                <div class="p-2">
                    <p>
                        <Link to="/contact">Contact us</Link> to discover what we can do to find all your audience.
                    </p><br/>
                </div>
                
            </div>  
        </div>
    )
  }
  
  export default Personall
  //yarn add react-player
  //<li><Link to="/contact">Contact</Link></li>