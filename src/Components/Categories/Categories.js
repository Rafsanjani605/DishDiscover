import React from 'react';
import { useLoaderData } from 'react-router';
import Catrgory from '../category/Catrgory';

const Categories = () => {

    const categories = useLoaderData()
    console.log(categories);

    return (
        <div className=''>
            <div className='w-11/12	 justify-center grid grid-cols-1 justify-center items-center mt-10  sm:grid-cols-1 sm:m-2  sm:mt-3 lg:grid-cols-3 xl:grid-cols-3 '>
            
            {
                categories.categories.map(category => <Catrgory category={category} key={category.idCategory}></Catrgory>)
                
            }
        </div>
        </div>
    );
};

export default Categories;



  