import React from 'react';
import { connect } from 'react-redux';
import { buyItem, removeFeature } from './action'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({state, buyItem, removeFeature}) => {
 console.log(buyItem) 

 
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures removeFeature={removeFeature}car={state.car} />
        
      </div>
      <div className="box">
      
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = state =>{
  return{
    state:state
    // additionalPrice: state.additionalPrice,
    // additionalFeatures: state.additionalFeatures,
    // car: state.car
  }
}

export default connect(mapStateToProps,{buyItem, removeFeature})(App);
