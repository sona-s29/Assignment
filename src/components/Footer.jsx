export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-2">Basti Ki Pathshala</h3>
          <p>
            Empowering communities through education, healthcare & support. Together, we can change lives.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Connect With Us</h4>
          <p>Email: contact@bastikipathshala.org</p>
          <p>Phone: +91 98765 43210</p>
          <div className="flex space-x-4 mt-2">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <div className="text-center py-3 bg-green-800 text-xs">
        © {new Date().getFullYear()} Basti Ki Pathshala. All rights reserved.
      </div>
    </footer>
  )
}
