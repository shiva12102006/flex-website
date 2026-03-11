



export default function adminLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Public Navbar */}
    

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      

    </div>
  );
}