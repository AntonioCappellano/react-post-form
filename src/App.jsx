import axios from "axios";
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
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => {
        console.log("post inviato");
      });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
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
          <div>
            <label className="form-label">Post</label>
            <textarea
              type="text"
              className="form-control"
              name="body"
              value={formData.body}
              onChange={handleFormData}
            ></textarea>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="public"
              checked={formData.public}
              onChange={handleFormData}
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Pubblica
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Invia Post
          </button>
        </form>
      </div>
    </>
  );
}
