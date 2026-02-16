import { useState } from "react";

const inizialData = {
  author: "",
  title: "",
  body: "",
  public: false,
};

export default function App() {
  const [formData, setFormData] = useState(inizialData);
  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <div className="container">
        <form>
          <div>
            <label className="form-label">Autore</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={formData.author}
              onChange={handleFormData}
            ></input>
          </div>
          <div>
            <label className="form-label">Titolo</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleFormData}
            ></input>
          </div>
          
        </form>
      </div>
    </>
  );
}
