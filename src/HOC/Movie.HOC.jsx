import React from "react";
import {Route} from "react-router-dom";
//Layout
import MovieLayout from "../layouts/Movie.layout";
const MovieHOC = ({component:Component,...rest})=>{
    //const Component=component;
    //Components
    //path
    //exact
    //react fragments (<></>)
    return (
    <>
    <Route {...rest} component={(props)=>(<MovieLayout>
        <Component {...props}/>
    </MovieLayout>)}
    />
    </>
    );
};

export default MovieHOC;

// const yas={
//     name:"Yas",
//     age:20,
// };

// //const student = pavan;

// //student.goodStudent=false;

// //Spread operator
// const student ={...yas,goodstudent:true};