import React from 'react';
import RecentItem from './recent_item'
import SuggestedListItem from './suggested_list_item'
const HomeMain = props => (   
    <div id='home-main'>
        <div id='suggested' className='section'>
            <h2 className='section-header'> Suggested for you

                    

            </h2>
            <ul id='suggested-list'>
                <SuggestedListItem/>
                <SuggestedListItem/>  
                <SuggestedListItem/>  
                <SuggestedListItem/>                            
            </ul>
        </div>
        <div id='starred' className='section'>
            <h2 className='section-header'> Starred
                
             
                
            </h2>
            <p>
                When you star items, they’ll show up here for easy access. 
                {/* <a href="/#/help/desktop-web/star-doc-file-folder" target="_blank" rel="noopener noreferrer"> Learn more</a> */}
            </p>
        </div>
        <div id='recent' className='section'>
            <h2 className='section-header'> Recent

                    {/* <button className="hide-button">
                        <span className="">Hide</span>
                    </button> */}

            </h2>
            <ul id='recent-list'>
                <RecentItem/>           
                <RecentItem/>     
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/>           
                <RecentItem/>     
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/> 
                <RecentItem/>
            </ul>
        </div>
    </div>
   

)

export default HomeMain;


