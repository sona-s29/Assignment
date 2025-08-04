export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-64 md:h-[400px] overflow-hidden">
        <img
          src="https://nirmalngo.org/assets/images/slider/slide-ngo-2.jpg"
          alt="NGO Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="max-w-6xl mx-auto p-6 text-center mt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Together We Can Make a Difference</h2>
        <p className="text-lg text-gray-700 mb-6">
         Basti Ki Pathshala is dedicated to empowering lives through community service, education, and health initiatives. We believe small efforts from many can bring big change.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-100 p-4 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">👨‍🏫 Education</h3>
            <p>We run school programs, skill training, and literacy camps in rural areas.</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">🏥 Health Camps</h3>
            <p>Free health check-ups, sanitation awareness, and mental health support.</p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            <h3 className="font-semibold text-xl mb-2">🤝 Community</h3>
            <p>Women empowerment, youth leadership, and disaster relief initiatives.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
