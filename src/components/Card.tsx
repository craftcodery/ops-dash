import React, { PropsWithChildren } from 'react';

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white overflow-hidden shadow sm:rounded-lg">
      {children}
    </div>
  );
};

export default Card;
