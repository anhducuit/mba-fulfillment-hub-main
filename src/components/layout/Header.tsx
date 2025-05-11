
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Trang chủ', href: '/' },
  { 
    name: 'Dịch vụ', 
    href: '/dich-vu',
    submenu: [
      { name: 'Tư vấn setup kho', href: '/dich-vu/tu-van-setup-kho' },
      { name: 'Vật tư đóng gói', href: '/dich-vu/vat-tu-dong-goi' },
      { name: 'Vận chuyển Bắc - Nam', href: '/dich-vu/van-chuyen-bac-nam' },
    ]
  },
  { name: 'Sản phẩm', href: '/san-pham' },
  { name: 'Blog', href: '/blog' },
  { name: 'Liên hệ', href: '/lien-he' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  
  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };
  
  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-mba-primary">MBA Fulfillment</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button 
                      className={`flex items-center space-x-1 py-2 ${isActive(item.href) ? 'text-mba-secondary font-medium' : 'text-mba-primary hover:text-mba-secondary'}`}
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden origin-top-left z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="py-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block px-4 py-3 text-sm text-mba-dark hover:bg-mba-light hover:text-mba-secondary"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`py-2 ${isActive(item.href) ? 'text-mba-secondary font-medium' : 'text-mba-primary hover:text-mba-secondary'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden md:block">
            <Button className="btn-primary" asChild>
              <Link to="/lien-he">
                Tư vấn miễn phí
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-mba-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full py-3 text-mba-primary"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <span className={isActive(item.href) ? 'text-mba-secondary font-medium' : ''}>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeSubmenu === item.name && (
                      <div className="pl-4 py-2 space-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className={`block py-2 ${isActive(subitem.href) ? 'text-mba-secondary font-medium' : 'text-mba-dark'}`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block py-3 ${isActive(item.href) ? 'text-mba-secondary font-medium' : 'text-mba-primary'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button className="btn-primary w-full">
                Tư vấn miễn phí
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
