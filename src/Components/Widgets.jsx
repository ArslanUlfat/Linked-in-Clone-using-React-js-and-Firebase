import React from 'react'
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget_articles">
            <div className="widget_article_left">
                <FiberManualRecordIcon />
            </div>
            <div className="widget_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>Linked News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Dron Technology","Top News - 900 Readers ")}
            {newsArticle("Corona Virus: Update ","Top News 1200 Readers")}
            {newsArticle("Tesla Hits New highs","Cars & Auto 300 Readers")}
            {newsArticle("Bit Coin Breaks $22k","Crypto Trading 800 Readers")}
            
        </div>
    )
}
export default Widgets
