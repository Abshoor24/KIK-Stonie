import { useCart } from "@/context/CartContext";
import { handleCheckoutWhatsApp } from "@/context/WhatsappContext";

export default function Buy() {
  const { cart } = useCart();

  return (
    <button 
    className="w-full bg-black text-white py-3"
    onClick={() => handleCheckoutWhatsApp(cart)}>
      Buy via WhatsApp
    </button>
  );
}