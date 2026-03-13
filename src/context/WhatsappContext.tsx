import { ProductType } from "@/types/product";

type CartItem = ProductType & { qty: number };

export function handleCheckoutWhatsApp(cart: CartItem[]) {
  const phone = "628895762974";

  const message = cart
    .map(
      (item: CartItem) =>
        `• ${item.name}\nQty: ${item.qty}\nPrice: $${item.price * item.qty}`
    )
    .join("\n\n");

  const total = cart.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.qty,
    0
  );

  const text = `
Halo, saya ingin membeli produk berikut:

${message}

Total: $${total}
`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}