// components/PropertyList.js
import React from 'react';

const properties = [
  {
    id: 1,
    title: 'Modern Family Home',
    description: 'A beautiful family home with 4 bedrooms and a large backyard.',
    price: '$450,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080',  
  },
  {
    id: 2,
    title: 'Luxury Villa',
    description: 'An elegant villa with stunning views and premium amenities.',
    price: '$1,200,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080',  
  },
  {
    id: 3,
    title: 'Urban Apartment',
    description: 'A stylish apartment located in the heart of the city.',
    price: '$300,000',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080',  
  }
];

const PropertyList = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Available Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.description}</p>
                <p className="text-lg font-bold text-gray-900">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
