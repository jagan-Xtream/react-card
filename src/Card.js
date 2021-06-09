import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
// import Data from './Data';

class Card extends React.Component{
  constructor(props){
    super(props);
    const Data=[
      {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUyt83wFhI6lH0ZxWidjl0MdL8te-ofdHaR8tlVLZ5ixV-bN2Je7iSYCrpqc3v6AizJQ&usqp=CAU",
      title:"NATURE",
      description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      tag:"View More",
      source:'https://pixabay.com/images/search/nature/',
    }
    ,{
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1rRlBETQmimE6HwsTxLndJMrYg88tlPnfA&usqp=CAU",
      title:"ANIMAL",
      description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      tag:"View More",
      source:'https://pixabay.com/images/search/animal/',
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTfn4h3TtQopEjwt47kxXQh8X5U8ZB7bp34H3eKIYmEHCIkFRWrXnDKYp1rKB4RZdTKY&usqp=CAU",
      title:"VEHICLE",
      description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      tag:"View More",
      source:'https://pixabay.com/images/search/vehicle/',
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe5kk7lxn8Yuicp4TUuOFWPc7y5_RYCr37QpmdSqnOdKd6Svnl3AtURabyKiyBKrBQQaI&usqp=CAU",
      title:"BIRD",
      description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      tag:"View More",
      source:'https://pixabay.com/images/search/bird/',
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHy2FoO-inaoOTRLxfCsXYR46cAfph3Ti4TRApOyQzGOMJVhNOMdplQFBkn6IANzqoE0o&usqp=CAU",
      title:"ROBOT",
      description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      tag:"View More",
      source:'https://pixabay.com/images/search/robot/',
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ingZa2nrU4YcA-TLGImTu82LLqNz_9cfAtRz_bhvbTCXrEzHoSpk00biyU6qSiL6pW4&usqp=CAU",
      title:"WEAPON",
      description:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",
      tag:"View More",
      source:'https://pixabay.com/images/search/weapon/',
    }
    ];
    this.state={Data};
  }
 
  render(){
   return (
     <div className='row row-cols-1 row-cols-md-3 g-4 mt-2 text-center'>
       {this.state.Data.map((item)=>(
        <div className="col-lg-2">
        <div className="card">
        <img src={item.image} class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <a href={item.source} className='btn btn-dark'>{item.tag}</a>
        </div>
        </div>
        </div>
       ))}
     </div>
   )
  }
}
    
export default Card;
