import React from 'react';
import Banner from '../Banner/Banner';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Body = () => {
    
    return (
        <div>
            
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>

            
            {/* "See all jobs" button here */}
        </div>
    );
};

export default Body;