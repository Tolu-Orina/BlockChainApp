import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// app/unauthorized/page.tsx
const UnauthorizedPage: React.FC = () => {
    return (
      <>
      <Navbar/>
      <div className="container mx-auto mt-20 min-h-screen p-4 w-full lg:w-4/5">
        <h1 className="text-2xl font-bold text-red-500">Unauthorized Access</h1>
        <p>You do not have permission to view this page.</p>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default UnauthorizedPage;
  