import { useState } from 'react'

export default function Volunteer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks for signing up, ${form.name}! We’ll be in touch.`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-green-50 shadow rounded">
      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Join Us as a Volunteer</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us why you want to volunteer..."
          className="w-full p-3 border border-gray-300 rounded"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
