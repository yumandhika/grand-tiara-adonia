import React from 'react';

const BuildingSpecification = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDR8fHJlYWwlMjBlc3RhdGV8ZW58MHx8fHwxNjM3NDI1NzA1&ixlib=rb-1.2.1&q=80&w=1080" 
              alt="Building" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Building Specifications</h2>
            <h1 className="text-xl font-bold text-gray-800 mb-4">Type 75/60</h1>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">Pondasi: Batu Kali</li>
              <li className="mb-2">Struktur: Beton Bertulang</li>
              <li className="mb-2">Dinding: Hebel</li>
              <li className="mb-2">Lantai: Granit 60 X 60</li>
              <li className="mb-2">Plafon: Rangka Hollow & Gypsum Board</li>
              <li className="mb-2">Kusen: Aluminium</li>
              <li className="mb-2">Pintu: S Plus</li>
              <li className="mb-2">Atap: Baja Ringan & Metal Berpasir</li>
              <li className="mb-2">Sanitary: Shower & Closet Duduk</li>
              <li className="mb-2">Listrik: 2200 Watt</li>
              <li className="mb-2">Air: Submersible</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSpecification;