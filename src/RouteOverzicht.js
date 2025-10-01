import React, { useState } from 'react';
import { Star, StarHalf } from 'lucide-react';

const RouteOverzicht = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alle Categorieën');

  const routes = [
    {
      id: 1,
      title: 'Historische Stadswandeling',
      description: 'Ontdek de rijke geschiedenis van de stad met deze boeiende wandeling.',
      image: 'https://placehold.co/400x250/cbd5e1/475569?text=Historische+Route',
      rating: 4.5,
      distance: '5 km',
      category: 'Historisch'
    },
    {
      id: 2,
      title: 'Natuurpad door het Park',
      description: 'Geniet van de rust en schoonheid van de natuur in dit prachtige park.',
      image: 'https://placehold.co/400x250/cbd5e1/475569?text=Natuurpad+Park',
      rating: 4.0,
      distance: '3 km',
      category: 'Natuur'
    },
    {
      id: 3,
      title: 'Kunstroute in het Centrum',
      description: 'Verken de stad door de ogen van lokale kunstenaars en hun werken.',
      image: 'https://placehold.co/400x250/cbd5e1/475569?text=Kunstroute+Centrum',
      rating: 3.5,
      distance: '4 km',
      category: 'Kunst'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-yellow-500 text-yellow-500" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-5 h-5 fill-yellow-500 text-yellow-500" />);
    }
    return stars;
  };

  const handleSearch = () => {
    console.log('Zoeken naar:', searchQuery, 'Categorie:', selectedCategory);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header className="bg-white shadow-md rounded-xl p-4 mb-8 flex justify-between items-center flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-indigo-700">Tourguide App</h1>
        <nav>
          <ul className="flex flex-wrap gap-4">
            <li><a href="#routes" className="text-indigo-700 font-bold">Routes</a></li>
            <li><a href="#mijn-tours" className="text-gray-600 hover:text-indigo-700 font-medium">Mijn Tours</a></li>
            <li><a href="#profiel" className="text-gray-600 hover:text-indigo-700 font-medium">Profiel</a></li>
            <li>
              <a href="#inloggen" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                Inloggen
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ontdek Routes</h2>
        <p className="text-gray-600 mb-6">Kies een route en ga op avontuur in jouw omgeving!</p>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Zoek routes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Alle Categorieën</option>
            <option>Historisch</option>
            <option>Natuur</option>
            <option>Kunst</option>
            <option>Lokaal Verhaal</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-indigo-500 text-white px-5 py-3 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Zoeken
          </button>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={route.image}
                alt={route.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{route.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{route.description}</p>
                <div className="flex items-center text-yellow-500 mb-3">
                  {renderStars(route.rating)}
                  <span className="text-gray-500 ml-2 text-sm">({route.rating})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-medium">{route.distance}</span>
                  <a
                    href="#route-details"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                  >
                    Bekijk Route
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-8 pb-4">
        &copy; 2025 Tourguide App. Alle rechten voorbehouden.
      </footer>
    </div>
  );
};

export default RouteOverzicht;