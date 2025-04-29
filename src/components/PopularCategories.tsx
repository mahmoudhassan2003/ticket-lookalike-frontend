
import React from 'react';

const categories = [
  {
    title: "Concerts",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-600 to-purple-600"
  },
  {
    title: "Sports",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    color: "from-green-600 to-teal-600"
  },
  {
    title: "Theater",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    color: "from-red-600 to-orange-600"
  },
  {
    title: "Comedy",
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    color: "from-yellow-500 to-amber-600"
  }
];

const PopularCategories = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Browse Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a href="#" key={category.title} className="group relative rounded-lg overflow-hidden h-48">
              <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
