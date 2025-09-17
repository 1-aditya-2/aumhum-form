import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import InputField from "../components/InputField";
import Modal from "../components/SuccessModal";
import "../styles/FormPage.css";

const FormPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simulated GET API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormData({ name: "John Doe", email: "aditya@example.com", phone: "123456789" });
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simulated POST API
  const handleSave = async () => {
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSaving(false);
    setIsModalOpen(true);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Aumhum Form</h2>

      {loading ? (
        <Loader />
      ) : (
        <>
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Phone No"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <button
            className={`save-btn ${saving ? "disabled" : ""}`}
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Success 🎉"
      >
        <p>Your data has been saved successfully!</p>
      </Modal>
    </div>
  );
};

export default FormPage;
