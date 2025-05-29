

import React, { ReactNode } from 'react';

interface PricingWrapperProps {
  children: ReactNode;
}

const PricingWrapper: React.FC<PricingWrapperProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default PricingWrapper;