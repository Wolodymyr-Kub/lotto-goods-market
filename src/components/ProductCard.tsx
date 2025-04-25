
import { useState } from "react";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [tickets, setTickets] = useState<number>(0);

  const handleBuy = () => {
    alert(`Ви купили ${product.name} за ${product.price} грн!`);
  };

  const handleJoinLottery = () => {
    if (tickets > 0) {
      alert(`Ви придбали ${tickets} квитків для розіграшу ${product.name}!`);
    } else {
      alert("Вкажіть кількість квитків!");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-200 hover:scale-105">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-lg text-gray-600 mb-2">Ціна: {product.price} грн</p>
      <p className="text-md text-gray-500 mb-3">
        Тип: {product.isLottery ? "Лотерея" : "Продаж"}
      </p>
      
      {product.isLottery && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Кількість квитків:
          </label>
          <input
            type="number"
            min="1"
            value={tickets}
            onChange={(e) => setTickets(Number(e.target.value))}
            className="border border-gray-300 p-2 rounded-md w-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
      )}

      <div className="mt-4">
        {!product.isLottery ? (
          <button
            onClick={handleBuy}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Купити
          </button>
        ) : (
          <button
            onClick={handleJoinLottery}
            className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
          >
            Взяти участь у розіграші
          </button>
        )}
      </div>
    </div>
  );
}
