import React from 'react';

const Catrgory = ({category , strCategoryDescription}) => {

    const modalform = (
        <div>
            <label htmlFor="my-modal" className="text-primary text-xl">read more</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{category.strCategory}</h3>
                <p className="py-4">{category.strCategoryDescription}</p>
                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn">close</label>
                </div>
              </div>
            </div>
        </div>
    );

    return (
        <div className="card mb-8 card-compact w-96 bg-base-100 shadow-xl sm:ml-3 sm:mt-5 sm:ml-6">
            <figure><img src={category.strCategoryThumb} /></figure>
            <div className="card-body">
              <h2 className="card-title">Category: {category.strCategory}</h2>

              {/* ternary start */}
              <p>
                {category.strCategoryDescription.length > 100? 
               category.strCategoryDescription.slice(0,100) + '....'  
               :
                category.strCategoryDescription } 
              </p>

              {category.strCategoryDescription.length > 100 &&  modalform}
              {/* ternary end */}
            </div>
        </div>
    );
};

export default Catrgory;
