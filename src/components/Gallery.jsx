const Gallery = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://source.unsplash.com/300x300/?makeup" alt="Makeup" className="rounded-lg shadow-lg" />
          <img src="https://source.unsplash.com/300x300/?beauty" alt="Makeup" className="rounded-lg shadow-lg" />
          <img src="https://source.unsplash.com/300x300/?cosmetics" alt="Makeup" className="rounded-lg shadow-lg" />
          <img src="https://source.unsplash.com/300x300/?fashion" alt="Makeup" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
