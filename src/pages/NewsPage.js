import React from 'react'
import {FetchNews} from "../contextAPI/NewsContext";
import NewsComponent from '../components/NewsComponent';
import Footer from '../components/Footer';

const News = () => {
    return (
        <div>
            <FetchNews>
                <NewsComponent />
            </FetchNews>

            <Footer />
        </div>
    )
}

export default News
