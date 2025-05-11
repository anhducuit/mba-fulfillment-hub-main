import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Plus, Minus } from 'lucide-react';
import { products, categories, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/formatters';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const { cart, addToCart } = useCart();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  useEffect(() => {
    let result = products;
    
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm]);

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
    setQuantities(prev => ({ ...prev, [product.id]: 1 })); // Reset to 1 after adding
  };

  const updateQuantity = (productId: string, value: number) => {
    const currentQty = quantities[productId] || 1;
    const newQty = Math.max(1, currentQty + value);
    setQuantities({ ...quantities, [productId]: newQty });
  };

  const getQuantity = (productId: string) => {
    return quantities[productId] || 1;
  };

  return (
    <PageLayout
      title="Sản phẩm - MBA Fulfillment Việt Nam"
      description="Nguyên vật liệu đóng gói chất lượng cao: thùng carton, túi niêm phong, băng keo và các vật tư khác cho doanh nghiệp."
    >
      <PageHeader
        title="Sản phẩm"
        breadcrumbs={[{ label: 'Sản phẩm', path: '/san-pham' }]}
      />
      
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Tìm kiếm sản phẩm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Danh mục:</span>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedCategory === null ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(null)}
              >
                Tất cả
              </Badge>
              
              {categories.map(category => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <ShoppingCart className="text-mba-primary" size={20} />
            <span className="font-medium">{cart.totalItems} sản phẩm</span>
            <Link to="/gio-hang">
              <Button variant="outline" size="sm">
                Xem giỏ hàng
              </Button>
            </Link>
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Không tìm thấy sản phẩm phù hợp.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="product-card h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                  />
                </div>
                
                <CardContent className="pt-5 flex-grow">
                  <Badge className="mb-2">{categories.find(c => c.id === product.category)?.name}</Badge>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-mba-primary font-bold">{formatCurrency(product.price)}</span>
                    <span className="text-sm text-gray-600">/ {product.unit}</span>
                  </div>
                  {product.minOrder > 1 && (
                    <p className="text-sm text-gray-500 mt-1">Tối thiểu: {product.minOrder} {product.unit}</p>
                  )}
                </CardContent>
                
                <CardFooter className="pt-0 pb-5">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center border rounded-md">
                        <button
                          className="px-3 py-1 border-r"
                          onClick={() => updateQuantity(product.id, -1)}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1">{getQuantity(product.id)}</span>
                        <button
                          className="px-3 py-1 border-l"
                          onClick={() => updateQuantity(product.id, 1)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-mba-primary hover:bg-mba-primary/90" 
                      onClick={() => handleAddToCart(product)}
                    >
                      Thêm vào giỏ
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ProductsPage;
