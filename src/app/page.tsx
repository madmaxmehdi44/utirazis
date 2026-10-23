
import { getProducts } from "@/lib/woocommerce";

// export const dynamic = "force-dynamic";
export const instant = false;
export default async function HomePage() {
  try {
    const products = await getProducts();

    return (
      <main className="mx-auto max-w-7xl p-8">
        <h1 className="mb-8 text-3xl font-bold">
          فروشگاه قطعات کامپیوتر Utirazis
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-xl border p-4"
            >
              {product.image?.sourceUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.image.sourceUrl}
                  alt={product.image.altText || product.name}
                  className="mb-4 h-48 w-full object-contain"
                />
              )}

              <h2 className="font-semibold">{product.name}</h2>

              <p className="mt-3 text-lg font-bold">
                {product.price ?? "قیمت نامشخص"}
              </p>
            </article>
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error("WooCommerce connection failed:", error);

    return (
      <main className="p-8">
        <h1 className="text-xl font-bold">خطا در دریافت محصولات</h1>
        <p className="mt-3">
          اتصال GraphQL یا ساختار پاسخ API را بررسی کن.
        </p>
      </main>
    );
  }
}
