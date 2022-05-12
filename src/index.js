import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




function Thing(){
  return(
    <span>Something has gone wrong</span>
)
}

function ErrorBox({ children }) {
  return (
  <div className='container'>
    <button className='button'>
    <i class="fa-solid fa-triangle-exclamation"></i>
    </button>
    <span className='message'>{children}</span>
    
  </div>
  );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ErrorBox>
        <Thing/>
    </ErrorBox>
    
  
);


