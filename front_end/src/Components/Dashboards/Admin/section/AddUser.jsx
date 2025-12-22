import React, { useState } from "react";

const AddUser = ({ addUser }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // أبعت البيانات للـ parent component
        addUser(formData);

        // امسح الفورم بعد الإضافة
        setFormData({
            name: "",
            email: "",
            role: "",
        });
    };

    return (
        <div className="container p-3">
            <h4 className="mb-3" style={{ color: 'var(--main-color)' }}>Add New User</h4>

            <form onSubmit={handleSubmit} className="border p-3 rounded shadow-sm">

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter user name"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                        name="role"
                        className="form-select"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select role</option>
                        <option value="admin">Admin</option>
                        <option value="content creator">Content Creator</option>
                        <option value="user">User</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUser;
