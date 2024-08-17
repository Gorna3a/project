// components/PageHeader.tsx
import React from 'react';
import './header.css';

interface PageHeaderProps {
  
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({  title }) => {
  return (
    <div className="page-header">
      
      <h1 className="page-title">{title}</h1>
    </div>
  );
};

export default PageHeader;
