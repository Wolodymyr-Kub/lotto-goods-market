
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/types/product";

const Index = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Смартфон",
      price: 10000,
      isLottery: false,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
    },
    {
      id: 2,
      name: "Навушники",
      price: 2000,
      isLottery: true,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    },
    {
      id: 3,
      name: "Ноутбук",
      price: 25000,
      isLottery: true,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Платформа для товарів та розіграшів
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
