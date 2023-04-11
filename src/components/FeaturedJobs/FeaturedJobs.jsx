import React, { useContext } from 'react';
import { JobsContext } from '../../App';

const FeaturedJobs = () => {
  const jobs = useContext(JobsContext || [])
console.log(jobs);
    return (
        <div>
            <h3>this is featured jobs component</h3>
            
        </div>
    );
};

export default FeaturedJobs;