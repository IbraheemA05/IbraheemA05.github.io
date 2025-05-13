import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`py-12 sm:py-16 text-white relative z-10 ${centered ? 'text-center' : ''}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-blue-100 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;