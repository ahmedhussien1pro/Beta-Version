import React, { useState } from "react";

const normalizeRole = (role) => {
    if (!role) return "";
    return role.trim().toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
};

export default function UsersTable({ users, editUser, deleteUser }) {

    // const [users, setUsers] = useState([...fakeUsers]);
    const [filterRole, setFilterRole] = useState("All");
    const [search, setSearch] = useState("");

    // State خاص بفورم التعديل فقط
    const [editForm, setEditForm] = useState(null);

    const startEdit = (user) => {
        setEditForm({ ...user });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();

        const normalizedRole = normalizeRole(editForm.role);

        editUser({
            ...editForm,
            role: normalizedRole
        });
        setEditForm(null);

        setEditForm(null); // اختفاء الفورم بعد التعديل
    };

    const cancelEdit = () => {
        setEditForm(null);
    };

    // فلترة + بحث
    const displayedUsers = users.filter((u) => {
        const matchRole =
            filterRole === "All"
                ? true
                : normalizeRole(u.role) === normalizeRole(filterRole);

        const matchSearch =
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase());

        return matchRole && matchSearch;
    });

    return (
        <div className="container py-4">

            {/*
             //region Search + Filter */}
            <div className="d-flex gap-3 mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="form-select"
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Content Creator">Content Creator</option>
                </select>
            </div>


            {/*
             //region Edit Form   */}
            {/* Edit Form (يظهر عند الضغط على Edit فقط) */}
            {editForm && (
                <div className="card p-3 mt-4">
                    <h5>Edit User</h5>

                    <form onSubmit={handleEditSubmit}>
                        <div className="mb-2">
                            <label>Name</label>
                            <input
                                className="form-control"
                                value={editForm.name}
                                onChange={(e) =>
                                    setEditForm({ ...editForm, name: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label>Email</label>
                            <input
                                className="form-control"
                                value={editForm.email}
                                onChange={(e) =>
                                    setEditForm({ ...editForm, email: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label>Role</label>
                            <select
                                className="form-select"
                                value={editForm.role}
                                onChange={(e) =>
                                    setEditForm({ ...editForm, role: e.target.value })
                                }
                            >
                                <option>User</option>
                                <option>Admin</option>
                                <option>Content Creator</option>
                            </select>
                        </div>

                        <div className="d-flex gap-2 mt-2">
                            <button className="btn btn-primary" type="submit">
                                Save Changes
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={cancelEdit}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Users Table */}
            <table className="table table-custom mt-4">
                <thead className="table-header-custom ">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th style={{ width: "150px" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedUsers.map((u) => (
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{normalizeRole(u.role)}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-1"
                                    onClick={() => startEdit(u)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteUser(u.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                    {displayedUsers.length === 0 && (
                        <tr>
                            <td colSpan="4" className="text-center">No results found</td>
                        </tr>
                    )}
                </tbody>
            </table>


        </div>
    );
}
