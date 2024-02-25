import React from 'react';

const TopNavBar = () => {
  return (
    <>
      <div className="alert alert-dismissible fade show m-0" role="alert" style={{ background: 'black' }}>
        <p className='m-0 text-center' style={{ fontWeight: '600', fontSize: '12px', color: 'white' }}>
          Sign up and get <strong>20% off</strong> to your first order. <strong>Sign Up Now</strong>
        </p>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" style={{ color: 'white', opacity: 1, padding: '5px', margin: '0 auto', fontSize: '25px' }}>X</button>
      </div>
    </>
  );
}

export default TopNavBar;
