
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title = 'MBA Fulfillment Việt Nam - Giải pháp kho vận toàn diện', 
  description = 'Dịch vụ tư vấn setup kho vận, cung cấp vật tư đóng gói và vận chuyển hàng hóa Bắc - Nam tối ưu chi phí.' 
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
