import type { Product, ProductSize, ShopCategory } from "@/types/product"

/** Kategori produk; urutan sama dengan widget kategori di sidebar. */
export const shopCategories: readonly ShopCategory[] = [
  { slug: "burger", label: "Burger", icon: "flaticon-burger" },
  { slug: "ayam-goreng", label: "Ayam Goreng", icon: "flaticon-chicken" },
  { slug: "kentang-goreng", label: "Kentang Goreng", icon: "flaticon-french-fries" },
  { slug: "pizza", label: "Pizza", icon: "flaticon-pizza" },
  { slug: "sandwich", label: "Sandwich", icon: "flaticon-sandwich" },
  { slug: "roti", label: "Roti", icon: "flaticon-bread" },
  { slug: "nasi-mi-goreng", label: "Nasi & Mi Goreng", icon: "flaticon-rice" },
  { slug: "hot-dog", label: "Hot Dog", icon: "flaticon-hotdog" },
]

export const productSizeLabels: Record<ProductSize, string> = {
  kecil: "Kecil",
  sedang: "Sedang",
  besar: "Besar",
  "ekstra-besar": "Ekstra Besar",
}

const DISCOUNT = 0.05

type ProductSeed = Omit<Product, "price" | "maxPrice"> & {
  /** Penambahan harga normal untuk ukuran terbesar (rupiah). */
  extra: number
}

function product({ extra, ...seed }: ProductSeed): Product {
  const price = Math.round(seed.originalPrice * (1 - DISCOUNT))
  return { ...seed, price, maxPrice: Math.round((seed.originalPrice + extra) * (1 - DISCOUNT)) }
}

const ALL_SIZES: ProductSize[] = ["kecil", "sedang", "besar", "ekstra-besar"]

/** Katalog produk, urutan dari yang terbaru. Harga diskon = harga normal dikurangi 5%. */
export const products: readonly Product[] = [
  product({
    slug: "ayam-goreng-krispi",
    name: "Ayam Goreng Krispi",
    category: "ayam-goreng",
    originalPrice: 40000,
    extra: 18000,
    rating: 5,
    sizes: ["kecil", "sedang", "besar"],
    description:
      "Ayam goreng berbumbu rahasia dengan kulit renyah dan daging yang tetap juicy, disajikan hangat dengan saus pilihan.",
    image: "food/kfc.png",
    imageAlt: "Ayam goreng krispi",
    listImage: "shop-food/list/01.png",
  }),
  product({
    slug: "burger-sapi",
    name: "Burger Sapi",
    category: "burger",
    originalPrice: 48000,
    extra: 16000,
    rating: 4,
    sizes: ["sedang", "besar"],
    description:
      "Roti lembut dengan patty daging sapi panggang, keju leleh, selada, dan tomat segar dalam satu gigitan yang mengenyangkan.",
    image: "food/burger.png",
    imageAlt: "Burger daging sapi",
    listImage: "shop-food/list/02.png",
  }),
  product({
    slug: "paket-cepat-saji",
    name: "Paket Cepat Saji",
    category: "ayam-goreng",
    originalPrice: 75000,
    extra: 25000,
    rating: 5,
    sizes: ["sedang", "besar", "ekstra-besar"],
    description:
      "Paket lengkap berisi ayam goreng, kentang goreng, dan minuman dingin, pas untuk makan siang bersama teman atau keluarga.",
    image: "food/main-food.png",
    imageAlt: "Paket makanan cepat saji",
    listImage: "shop-food/list/03.png",
  }),
  product({
    slug: "roti-isi-daging-sapi",
    name: "Roti Isi Daging Sapi",
    category: "roti",
    originalPrice: 45000,
    extra: 14000,
    rating: 4,
    sizes: ["kecil", "sedang", "besar"],
    description:
      "Roti panggang hangat berisi irisan daging sapi tipis, keju, dan saus mustard madu yang gurih manis.",
    image: "food/beef-ruti.png",
    imageAlt: "Roti isi irisan daging sapi",
    listImage: "shop-food/list/04.png",
  }),
  product({
    slug: "burger-daging-jumbo",
    name: "Burger Daging Jumbo",
    category: "burger",
    originalPrice: 58000,
    extra: 20000,
    rating: 4,
    sizes: ["besar", "ekstra-besar"],
    description:
      "Burger berukuran jumbo dengan dua lapis daging, sayuran segar, dan saus spesial untuk selera makan yang besar.",
    image: "food/burger-2.png",
    imageAlt: "Burger daging jumbo dengan sayuran segar",
    listImage: "shop-food/list/05.png",
  }),
  product({
    slug: "pasta-oriental",
    name: "Pasta Oriental",
    category: "nasi-mi-goreng",
    originalPrice: 52000,
    extra: 15000,
    rating: 4,
    sizes: ["sedang", "besar"],
    description:
      "Pasta dengan bumbu gaya oriental, potongan ayam, dan sayuran tumis yang harum, disajikan selagi panas.",
    image: "food/pasta-2.png",
    imageAlt: "Semangkuk pasta gaya oriental",
    listImage: "shop-food/list/01.png",
  }),
  product({
    slug: "pizza-keju-spesial",
    name: "Pizza Keju Spesial",
    category: "pizza",
    originalPrice: 72000,
    extra: 38000,
    rating: 5,
    sizes: ALL_SIZES,
    description:
      "Pizza dengan keju mozzarella berlimpah, saus tomat buatan sendiri, dan topping lengkap di atas adonan tipis yang renyah.",
    image: "food/pizza-3.png",
    imageAlt: "Pizza keju dengan topping lengkap",
    listImage: "shop-food/list/02.png",
  }),
  product({
    slug: "paket-combo-hemat",
    name: "Paket Combo Hemat",
    category: "burger",
    originalPrice: 85000,
    extra: 22000,
    rating: 4,
    sizes: ["sedang", "besar"],
    description:
      "Burger, kentang goreng, dan minuman dalam satu paket hemat yang cocok untuk makan sendiri maupun berdua.",
    image: "food/main-food-2.png",
    imageAlt: "Paket makanan cepat saji berisi burger, kentang goreng, dan minuman",
    listImage: "shop-food/list/03.png",
  }),
  product({
    slug: "roti-isi-ayam-crispy",
    name: "Roti Isi Ayam Crispy",
    category: "sandwich",
    originalPrice: 43000,
    extra: 12000,
    rating: 4,
    sizes: ["kecil", "sedang"],
    description:
      "Sandwich dengan potongan ayam goreng renyah, selada, dan mayones lembut di antara roti yang dipanggang hangat.",
    image: "food/ruti.png",
    imageAlt: "Roti isi ayam goreng renyah",
    listImage: "shop-food/list/04.png",
  }),
  product({
    slug: "ayam-panggang",
    name: "Ayam Panggang",
    category: "ayam-goreng",
    originalPrice: 65000,
    extra: 20000,
    rating: 5,
    sizes: ["sedang", "besar"],
    description:
      "Ayam panggang bumbu rempah yang meresap sampai ke dalam, dipanggang matang merata dan disajikan dengan lalapan.",
    image: "food/grilled-2.png",
    imageAlt: "Ayam panggang berbumbu",
    listImage: "shop-food/list/05.png",
  }),
  product({
    slug: "burger-keju-lezat",
    name: "Burger Keju Lezat",
    category: "burger",
    originalPrice: 49000,
    extra: 14000,
    rating: 4,
    sizes: ["sedang", "besar"],
    description:
      "Burger dengan dua lembar keju leleh, acar mentimun, dan saus spesial yang gurih dengan sedikit rasa asam.",
    image: "food/delicious-burger.png",
    imageAlt: "Burger keju lezat dengan saus spesial",
    listImage: "shop-food/list/01.png",
  }),
  product({
    slug: "kentang-goreng-renyah",
    name: "Kentang Goreng Renyah",
    category: "kentang-goreng",
    originalPrice: 22000,
    extra: 14000,
    rating: 4,
    sizes: ["kecil", "sedang", "besar"],
    description:
      "Kentang goreng potong tipis yang garing di luar dan lembut di dalam, ditaburi garam dan bumbu pilihan.",
    image: "food/french-fry.png",
    imageAlt: "Kentang goreng",
    listImage: "shop-food/list/02.png",
  }),
  product({
    slug: "pizza-pepperoni",
    name: "Pizza Pepperoni",
    category: "pizza",
    originalPrice: 68000,
    extra: 36000,
    rating: 4,
    sizes: ["sedang", "besar", "ekstra-besar"],
    description:
      "Pizza klasik dengan irisan pepperoni gurih pedas dan keju mozzarella yang meleleh sempurna.",
    image: "food/pizza-2.png",
    imageAlt: "Pizza pepperoni",
    listImage: "shop-food/list/03.png",
  }),
  product({
    slug: "ayam-bakar-madu",
    name: "Ayam Bakar Madu",
    category: "ayam-goreng",
    originalPrice: 62000,
    extra: 18000,
    rating: 4,
    sizes: ["sedang", "besar"],
    description:
      "Ayam bakar dengan olesan madu dan kecap manis yang karamel di permukaan, empuk dan harum asap.",
    image: "food/grilled.png",
    imageAlt: "Ayam bakar madu",
    listImage: "shop-food/list/04.png",
  }),
  product({
    slug: "burger-ayam-pedas",
    name: "Burger Ayam Pedas",
    category: "burger",
    originalPrice: 46000,
    extra: 14000,
    rating: 5,
    sizes: ["sedang", "besar"],
    description:
      "Burger ayam goreng tepung dengan saus pedas dan irisan bawang bombai bagi pencinta rasa yang menantang.",
    image: "food/big-burger.png",
    imageAlt: "Burger ayam pedas",
    listImage: "shop-food/list/05.png",
  }),
  product({
    slug: "hot-dog-sosis-sapi",
    name: "Hot Dog Sosis Sapi",
    category: "hot-dog",
    originalPrice: 32000,
    extra: 12000,
    rating: 4,
    sizes: ["kecil", "sedang"],
    description:
      "Sosis sapi panggang dalam roti lembut dengan saus tomat, mustard, dan taburan bawang goreng renyah.",
    image: "food/ruti.png",
    imageAlt: "Hot dog sosis sapi",
    listImage: "shop-food/list/01.png",
  }),
  product({
    slug: "nasi-goreng-spesial",
    name: "Nasi Goreng Spesial",
    category: "nasi-mi-goreng",
    originalPrice: 38000,
    extra: 12000,
    rating: 5,
    sizes: ["sedang", "besar"],
    description:
      "Nasi goreng bumbu khas dengan telur, ayam suwir, dan acar, ditemani kerupuk dan sambal segar.",
    image: "food/pasta.png",
    imageAlt: "Nasi goreng spesial",
    listImage: "shop-food/list/02.png",
  }),
]
