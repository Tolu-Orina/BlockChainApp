// app/unauthorized/page.tsx
const UnauthorizedPage: React.FC = () => {
    return (
      <div className="container mx-auto p-4 w-full lg:w-4/5">
        <h1 className="text-2xl font-bold text-red-500">Unauthorized Access</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  };
  
  export default UnauthorizedPage;
  