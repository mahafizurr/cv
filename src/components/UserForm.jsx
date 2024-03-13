import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    header: {
      name: "",
      title: "",
      bio: "",
    },
    contact: {
      phone: "",
      email: "",
      address: "",
    },
    education: {
      university: [{ name: "", degree: "" }],
      college: [{ name: "", degree: "" }],
      school: [{ name: "", degree: "" }],
    },
    expertise: "",
    language: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          name="header.name"
          value={formData.header.name}
          onChange={handleChange}
          required
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label>Title:</label>
        <input
          type="text"
          name="header.title"
          value={formData.header.title}
          onChange={handleChange}
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label>Bio:</label>
        <textarea
          name="header.bio"
          value={formData.header.bio}
          onChange={handleChange}
          className="w-full border rounded py-2 px-3"
        ></textarea>
      </div>
      <div className="mb-4">
        <label>Phone:</label>
        <input
          type="text"
          name="contact.phone"
          value={formData.contact.phone}
          onChange={handleChange}
          required
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label>Email:</label>
        <input
          type="email"
          name="contact.email"
          value={formData.contact.email}
          onChange={handleChange}
          required
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label>Address:</label>
        <input
          type="text"
          name="contact.address"
          value={formData.contact.address}
          onChange={handleChange}
          required
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label>Education</label>
        <h3>Univercity</h3>
        {formData.education.university.map((item) => (
          <ul key={item.id}>
            <li>
              <input
                type="text"
                name="name"
                value={item.name}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
              />
            </li>
            <li>
              <input
                type="text"
                name="degree"
                value={item.degree}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
              />
            </li>
          </ul>
        ))}
        <h3>College</h3>
        {formData.education.college.map((item) => (
          <ul key={item.id}>
            <li>
              <input
                type="text"
                name="name"
                value={item.name}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
              />
            </li>
            <li>
              <input
                type="text"
                name="degree"
                value={item.degree}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
              />
            </li>
          </ul>
        ))}
        <h3>School</h3>
        {formData.education.school.map((item) => (
          <ul key={item.id}>
            <li>
              <input
                type="text"
                name="name"
                value={item.name}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
              />
            </li>
            <li>
              <input
                type="text"
                name="degree"
                value={item.degree}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3"
              />
            </li>
          </ul>
        ))}
      </div>
      <div className="mb-4">
        <label>Expertise:</label>
        <input
          type="text"
          name="expertise"
          value={formData.expertise}
          onChange={handleChange}
          required
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label>Language:</label>
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
          required
          className="w-full border rounded py-2 px-3"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
