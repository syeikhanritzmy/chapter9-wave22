import React from 'react';

export default function ButtonLogout({ click }) {
  return (
    <div>
      <button className="btn btn-danger" onClick={click}>
        Logout
      </button>
    </div>
  );
}
