import ProductsSection from "../../components/products/ProductsSection"; 
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero/HeroSection";

export const Shop = () => {
  return (
    <div className="shop">
      <HeroSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};
