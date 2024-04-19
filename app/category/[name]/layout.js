import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function CategoryLayout({ children }) {
  return (
    <div>
        <Hero state={false}/>
      {children}
      <Email/>
      <Footer />
    </div>
  );
}
