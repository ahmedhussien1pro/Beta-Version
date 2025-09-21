import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import "./Writer.css";
import Preloader from "../../Website/Preloader/Preloader";

export default function Writer() {
  const cookie = Cookie();
  const token = cookie.get("CuberWeb");
  const [loadingPage, setLoadingPage] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    birthday: "",
    address: "",
    phoneNum: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPage(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode");
  };

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;
      try {
        const res = await axios.get(
          `https://digitopia-project-backend.vercel.app/api/personalInfo`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = res.data.data;
        const imageUrl = data.image
          ? `${data.image.path.replace("\\", "/")}`
          : "";

        setFormData((prevData) => ({
          ...prevData,
          name: data.name,
          birthday: data.birthday,
          address: data.address,
          phoneNum: data.phoneNum,
          image: imageUrl,
        }));

        setImagePreview(imageUrl);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "birthday") {
      const age = calculateAge(value);
      setFormData((prevData) => ({
        ...prevData,
        birthday: value,
        age: age,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          image: file,
        }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    setSuccess("");

    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("birthday", formData.birthday);
    submissionData.append("address", formData.address);
    submissionData.append("phoneNum", formData.phoneNum);

    if (formData.image) {
      submissionData.append("image", formData.image);
    }

    try {
      await axios.post(
        "https://digitopia-project-backend.vercel.app/api/dataUser",
        submissionData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      setSuccess("Data submitted successfully!");
    } catch (error) {
      setLoading(false);
      setErr("Error submitting data");
    }
  };

  return (
    <>
      {loadingPage && <Preloader loading={loadingPage} />}

      <div className="writer-form">
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {loading && <p>Loading...</p>}
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
        <form className="form-writer" onSubmit={handleSubmit}>
          <div>
            <label className="label-writer">Name:</label>
            <input
              className="input-type-writer"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label-writer">Age:</label>
            <input
              className="input-type-writer"
              type="number"
              name="age"
              value={calculateAge(formData.birthday)}
              disabled
              required
            />
          </div>
          <div>
            <label className="label-writer">Birthday:</label>
            <input
              className="input-type-writer"
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label-writer">Address:</label>
            <input
              className="input-type-writer"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label-writer">Phone Number:</label>
            <input
              className="input-type-writer"
              type="tel"
              name="phoneNum"
              value={formData.phoneNum}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="label-writer">Image:</label>
            <input
              className="input-type-writer"
              type="file"
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <button className="button-writer" type="submit">
            Submit
          </button>
          {err && <p className="error-writer">{err}</p>}
          {success && <p className="success-writer">{success}</p>}
        </form>
      </div>
    </>
  );
}
