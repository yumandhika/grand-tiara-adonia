import Image from 'next/image';
import React from 'react';

const BuildingSpecification = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-2">
            <Image src={`https://drive.google.com/uc?export=view&id=16rFeaddyz--8m9zesHPDR9dQ5tYfThn-`} alt="Gambar dari Google Drive" width={500} height={300} />
            <Image src={`https://drive.google.com/uc?export=view&id=1SKU8nSyaD8jOYocxlq1Wl4P68MHCIL27`} alt="Gambar dari Google Drive" width={500} height={300} />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Building Specifications</h2>
            <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-xl font-bold text-gray-800">Type 75/60</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border px-4 py-2">Pondasi</td>
                <td className="border px-4 py-2">Batu Kali</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Struktur</td>
                <td className="border px-4 py-2">Beton Bertulang</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Dinding</td>
                <td className="border px-4 py-2">Hebel</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Lantai</td>
                <td className="border px-4 py-2">Granit 60 X 60</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Plafon</td>
                <td className="border px-4 py-2">Rangka Hollow & Gypsum Board</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Kusen</td>
                <td className="border px-4 py-2">Aluminium</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Pintu</td>
                <td className="border px-4 py-2">S Plus</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Atap</td>
                <td className="border px-4 py-2">Baja Ringan & Metal Berpasir</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Sanitary</td>
                <td className="border px-4 py-2">Shower & Closet Duduk</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Listrik</td>
                <td className="border px-4 py-2">2200 Watt</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Air</td>
                <td className="border px-4 py-2">Submersible</td>
              </tr>
            </tbody>
          </table>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingSpecification;