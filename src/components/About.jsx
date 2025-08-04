export default function About() {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-4">Who We Are</h2>
      <p className="text-gray-700 mb-4">
        <strong>Basti Ki Pathshala</strong> is a grassroots non-profit working since 2010 to uplift communities in need. With a passionate team of volunteers, educators, and medical professionals, we’ve impacted over 50,000 lives across India.
      </p>
      <p className="text-gray-700 mb-4">
        Our programs are rooted in sustainability and community partnership. Whether it's building a school or organizing medical drives, we work hand-in-hand with locals to create lasting change.
      </p>

       <p className="text-gray-700 mb-4">
        We collaborate with schools, health centers, and local volunteers to reach remote villages and urban slums across India.
        Our efforts have educated over 5,000 children, supported women-led businesses, and run 200+ free health camps.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>📍 Active in 12+ rural districts</li>
        <li>👥 200+ volunteers nationwide</li>
        <li>🎓 5000+ children enrolled in education programs</li>
      </ul>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
        <img
          src="https://www.usnews.com/dims4/USNEWS/4829a20/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F51%2F4a%2Fed8926e6437f838e7a6d66c7cba9%2F150929-students-editorial.jpg"
          alt="Teaching kids"
          className="rounded shadow-md"
        />
        <img
          src="https://aihms.in/blog/wp-content/uploads/2020/04/healthcare1.jpg"
          alt="Healthcare"
          className="rounded shadow-md"
        />
        <img
          src="https://static.wixstatic.com/media/f02629_3fd15850806c498e8864f365f94bfb24~mv2.jpg/v1/fill/w_1000,h_662,al_c,q_85,usm_0.66_1.00_0.01/f02629_3fd15850806c498e8864f365f94bfb24~mv2.jpg"
          alt="Community Work"
          className="rounded shadow-md"
        />
      </div>

    </div>
  )
}
