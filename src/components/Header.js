import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <header className ="header">
         <strong>Delicious</strong>: <br/>THE BEST FOOD BLOG ON THE WEB. <br/>
         <div className = "img">
         <img src = "fb-icon.png" alt ="fb icon"/>
         <img src = "twit-icon.png" alt ="twitter icon"/>
         <img src = "insta-icon.png" alt ="instagram icon"/>
         <img src = "pint-icon.png" alt ="pinterest icon"/>
         <img src = "mail-icon.png" alt ="mailing icon"/>
         <img src = "gp-icon.png" alt ="google icon"/>
         <img src = "flic-icon.png" alt ="flic icon"/>
         <img src = "rss-icon.png" alt ="rss icon"/>
        </div>
        </header>
        )
    }
}
