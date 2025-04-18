
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/types/product";

const Index = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Нерухомість",
      price: 2500000,
      isLottery: false,
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&q=80",
    },
    {
      id: 2,
      name: "Транспортні засоби",
      price: 850000,
      isLottery: true,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=500&q=80",
    },
    {
      id: 3,
      name: "Коштовності",
      price: 350000,
      isLottery: true,
      image: "https://images.unsplash.com/photo-1515873212753-0a318aa8c562?w=500&q=80",
    },
    {
      id: 4,
      name: "Елітна парфумерія",
      price: 15000,
      isLottery: true,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
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
