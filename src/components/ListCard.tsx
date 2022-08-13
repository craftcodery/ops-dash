import React, { PropsWithChildren } from 'react';
import Card from '@/components/Card';

const ListCard: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Card>
      <div className="sm:py-2">{children}</div>
    </Card>
  );
};

export default ListCard;
