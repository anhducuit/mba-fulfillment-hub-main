
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import { Package, Warehouse, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Warehouse,
    title: 'Tư vấn setup kho',
    description: 'Giải pháp setup kho vận chuyên nghiệp, tối ưu không gian và quy trình vận hành cho doanh nghiệp.',
    link: '/dich-vu/tu-van-setup-kho',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Package,
    title: 'Vật tư đóng gói',
    description: 'Cung cấp đa dạng nguyên vật liệu đóng gói chất lượng cao với giá thành cạnh tranh.',
    link: '/dich-vu/vat-tu-dong-goi',
    image: '/lovable-uploads/ecf864da-9767-4feb-8344-70ed214f30b6.png'
  },
  {
    icon: Truck,
    title: 'Vận chuyển Bắc - Nam',
    description: 'Dịch vụ vận chuyển hàng hóa Bắc - Nam nhanh chóng, an toàn với chi phí tối ưu nhất.',
    link: '/dich-vu/van-chuyen-bac-nam',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop'
  },
];

const ServiceSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <SectionTitle 
          title="Dịch vụ chuyên nghiệp"
          subtitle="MBA Fulfillment cung cấp các giải pháp toàn diện cho quy trình logistics và kho bãi của doanh nghiệp"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card flex flex-col h-full"
            >
              {service.image ? (
                <div className="mb-5 rounded-lg overflow-hidden h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="mb-5 p-4 bg-mba-primary/5 rounded-lg w-16 h-16 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-mba-primary" />
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              <Button variant="outline" asChild className="mt-auto w-full">
                <Link to={service.link}>
                  Xem chi tiết
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
