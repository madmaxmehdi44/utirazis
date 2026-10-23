import { getProducts } from "@/lib/woocommerce";
import Storefront from "@/components/storefront";

export const instant = false;

export default async function HomePage() {
  try {
    const products = await getProducts();
    return <Storefront products={products} />;
  } catch (error) {
    console.error("WooCommerce connection failed:", error);
    return (
      <main className="ut-error" dir="inherit">
        <span className="ut-eyebrow">UTIRAZIS / STORE STATUS</span>
        <h1>We couldn’t load the collection.</h1>
        <p>Product data is temporarily unavailable. Please check the store connection and try again.</p>
        <a href="/">Retry</a>
      </main>
    );
  }
}
