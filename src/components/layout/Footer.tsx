
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mba-primary text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MBA Fulfillment Việt Nam</h3>
            <p className="mb-4 text-gray-300">
              Giải pháp toàn diện về kho vận và nguyên vật liệu đóng gói cho doanh nghiệp.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://website.com" className="text-gray-300 hover:text-white">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dich-vu/tu-van-setup-kho" className="text-gray-300 hover:text-white">
                  Tư vấn setup kho vận
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/vat-tu-dong-goi" className="text-gray-300 hover:text-white">
                  Vật tư đóng gói
                </Link>
              </li>
              <li>
                <Link to="/dich-vu/van-chuyen-bac-nam" className="text-gray-300 hover:text-white">
                  Vận chuyển Bắc - Nam
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/san-pham" className="text-gray-300 hover:text-white">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="text-gray-300 hover:text-white">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-mba-secondary shrink-0 mt-0.5" />
                <span className="text-gray-300">40/8 Lê Thị Ánh, Phường Tân Thới Nhất, Quận 12, TPHCM</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-mba-secondary" />
                <a href="tel:+84948078599" className="text-gray-300 hover:text-white">
                  0948 078 599
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-mba-secondary" />
                <a href="mailto:mbafulfillmentvn@gmail.com" className="text-gray-300 hover:text-white">
                  mbafulfillmentvn@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} MBA Fulfillment Việt Nam. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
