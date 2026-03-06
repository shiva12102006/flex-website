import Navbar from "@/app/components/Navbar";



export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Public Navbar */}
    <Navbar/>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      

    </div>
  );
}