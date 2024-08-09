import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
        <p className="text-lg mb-4">This is a simple starting point for your application. You can modify and expand upon this structure to build your project.</p>
        <ul className="list-disc list-inside">
          <li>Add new pages and components</li>
          <li>Implement your desired features</li>
          <li>Customize the styling to match your needs</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Index;
