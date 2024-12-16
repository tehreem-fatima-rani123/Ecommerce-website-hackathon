
import { LuShoppingCart } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => (
  <div key={product.id} className="group relative rounded-lg bg-white">
    <div className="relative aspect-square overflow-hidden rounded-lg">
      {product.isNew && (
        <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
          New
        </Badge>
      )}
      {product.isSale && (
        <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
          Sale
        </Badge>
      )}
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          aria-label={`View details of ${product.title}`}
        />
      </Link>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-medium text-[#1C1B1F]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <button
        className="rounded-lg bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]"
        aria-label={`Add ${product.title} to cart`}
      >
        <LuShoppingCart size={20} className="h-5 w-5" />
      </button>
    </div>
  </div>
);

export default function AllProduct() {
  const products: Product[] = [
    { id: 1, title: "Library Stool Chair", price: 20, image: "/Products (2).png" },
    {
      id: 2,
      title: "Vintage Armchair",
      price: 20,
      image: "/Image (1).png",
      originalPrice: 60,
    },
    { id: 3, title: "Ergonomic Office Chair", price: 20, image: "/image 123.jpeg" },
    { id: 4, title: "Modern Dining Chair", price: 20, image: "/naina.png" },
    {
      id: 5,
      title: "Reclining Lounge Chair",
      price: 20,
      image: "/imageee.png",
      isSale: true,
    },
    {
      id: 6,
      title: "Adjustable Desk Chair",
      price: 20,
      image: "/card (1).png",
      isNew: true,
    },
    { id: 7, title: "Classic Bar Stool", price: 20, image: "/Image (2).png" },
    {
      id: 8,
      title: "Sleek High Chair",
      price: 20,
      image: "/Products (2).png",
      isSale: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-semibold text-[#1C1B1F] tracking-tight mb-8">
      All Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}