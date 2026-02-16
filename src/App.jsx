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
              className="form-control"
              name="author"
              value={formData.author}
              onChange={handleFormData}
            ></input>
          </div>
        </form>
      </div>
    </>
  );
}
