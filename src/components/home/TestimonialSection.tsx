
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Nguyễn Văn A',
    position: 'CEO, Công ty X',
    content: 'MBA Fulfillment đã giúp chúng tôi tối ưu hóa quy trình kho vận, tiết kiệm 30% chi phí vận hành. Dịch vụ tư vấn chuyên nghiệp, tận tâm.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Trần Thị B',
    position: 'Founder, Shop Online Y',
    content: 'Vật tư đóng gói chất lượng cao, giao hàng đúng hẹn. Đặc biệt ấn tượng với dịch vụ vận chuyển Bắc - Nam tiết kiệm chi phí.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Lê Văn C',
    position: 'Giám đốc vận hành, Công ty Z',
    content: 'Sau khi được MBA tư vấn setup kho, hiệu suất xử lý đơn hàng của chúng tôi tăng gấp đôi. Rất hài lòng với sự chuyên nghiệp!',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-mba-primary/5">
      <div className="container mx-auto">
        <SectionTitle 
          title="Khách hàng nói gì về chúng tôi"
          subtitle="Những đánh giá từ các khách hàng đã sử dụng dịch vụ của MBA Fulfillment"
        />
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                
                <p className="italic text-gray-600">" {testimonial.content} "</p>
                
                <div className="mt-4 flex text-mba-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-5 h-5"
                    >
                      <path d="M12 1l3.09 6.5L22 8.28l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.15 2 8.28l6.91-.78L12 1z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
