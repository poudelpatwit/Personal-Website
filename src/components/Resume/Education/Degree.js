import React from 'react';
import PropTypes from 'prop-types';

//functional component that takes props

const Degree = ({data}) => (
    <article className = "degree-container">
        <header>
            <h4 className = "degree" >{data.degree} </h4>
            <p className = "school"><a href= {data.link}> {data.school}</a>, {data.year} </p>
        </header>
    </article>
);
//defining propTypes
Degree.propTypes ={
    data:PropTypes.shape({
        degree: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        school: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
    }).isRequired,
}
export default Degree;
//export the component