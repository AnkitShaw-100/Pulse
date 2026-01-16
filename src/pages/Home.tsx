const Home = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-[#1a0b2e] to-[#0f0f1a] flex flex-col items-center justify-center text-center px-6">
      
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Welcome to Pulse
      </h1>

      <p className="mt-6 max-w-xl text-gray-300 text-lg">
        A dark-themed social platform where communities connect,
        ideas flow, and late-night scrolling feels premium 🌙
      </p>

      <button className="mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-transform">
        Get Started
      </button>
    </div>
  );
};

export default Home;
