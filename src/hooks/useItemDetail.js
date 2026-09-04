import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import ridesData from '@/data/ridesData';
import gearData from '@/data/gearData';
import blogData from '@/data/blogData';

export function useItemDetail() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { addItem } = useCart();

  let item = null;
  let type = '';
  let backPath = '/';

  if (pathname.includes('/rides')) {
    item = ridesData.find((r) => r.id === id);
    type = 'ride';
    backPath = '/#rides';
  } else if (pathname.includes('/shop')) {
    item = gearData.find((g) => g.id === id);
    type = 'gear';
    backPath = '/#shop';
  } else if (pathname.includes('/blog')) {
    item = blogData.find((b) => b.id === id);
    type = 'blog';
    backPath = '/#blog';
  }

  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const cleanStr = priceStr.toString().replace(/[^0-9]/g, '');
    return parseInt(cleanStr, 10);
  };

  const handleAddToCart = () => {
    if (!item) return;
    addItem({
      id: item.id,
      name: item.title || item.name,
      price: parsePrice(item.price),
      img: item.img,
      category: item.category || 'GEAR'
    });
    navigate('/cart');
  };

  return { item, type, backPath, handleAddToCart };
}