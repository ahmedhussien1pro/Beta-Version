import React, { useState } from "react";
import CourseForm from "./CourseForm";

const stateColors = {
    ready: "success",
    "under-creation": "warning",
    draft: "secondary",
};

export default function Courses({ courses, addCourse, editCourse, deleteCourse }) {
    const [search, setSearch] = useState("");
    const [filterState, setFilterState] = useState("All");

    const [showForm, setShowForm] = useState(false);
    const [editingCourse, setEditingCourse] = useState(null);

    const handleAddOrEdit = (courseData) => {
        if (editingCourse) {
            editCourse({
                ...courseData,
                id: editingCourse.id,
            });
        } else {
            addCourse(courseData);
        }

        setShowForm(false);
        setEditingCourse(null);
    };

    const filteredCourses = courses.filter((course) => {
        const matchState =
            filterState === "All" ? true : course.state === filterState;

        const matchSearch =
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.creator.toLowerCase().includes(search.toLowerCase());

        return matchState && matchSearch;
    });

    return (
        <div className="container py-3">
            <h3 className="mb-4 fw-bold" style={{ color: 'var(--main-color' }}>Courses</h3>

            {/* Search & Filter & Add */}
            <div className="row g-2 mb-3 align-items-center">

                <div className="col-md-5 col-12">
                    <input
                        type="text"
                        placeholder="Search by title or creator..."
                        className="form-control"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-5 col-12">
                    <select
                        className="form-select"
                        value={filterState}
                        onChange={(e) => setFilterState(e.target.value)}
                    >
                        <option value="All">All States</option>
                        <option value="ready">Ready</option>
                        <option value="under-creation">Under Creating</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>

                <div className="col-md-2 col-12">
                    <button
                        className="btn btn-primary w-100"
                        onClick={() => {
                            setEditingCourse(null);
                            setShowForm(true);
                        }}
                    >
                        Create New Course
                    </button>
                </div>

            </div>

            {/* Add / Edit Form */}
            {showForm && (
                <CourseForm
                    onSubmit={handleAddOrEdit}
                    editingCourse={editingCourse}
                    onCancel={() => {
                        setShowForm(false);
                        setEditingCourse(null);
                    }}
                />
            )}


            {/* Courses List */}
            <div className="row g-3">
                {filteredCourses.map((course) => (
                    <div key={course.id} className="col-12">
                        <div className="card p-3 shadow-sm">
                            <div className="d-flex justify-content-between align-items-start">
                                <h5>{course.title}</h5>

                                <span className={`badge p-2 fs-6 fw-bold bg-${stateColors[course.state]}`}>
                                    {course.state}
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="mt-2 d-flex flex-wrap gap-2">
                                {course.tags.map((tag, i) => (
                                    <span key={i} className="badge bg-secondary">{tag}</span>
                                ))}
                            </div>

                            <p className="mt-3 mb-1">
                                <strong>Creator:</strong> {course.creator}
                            </p>

                            {course.state === "ready" && (
                                <div className="mt-2 p-2">
                                    <div><strong>Attending:</strong> {course.stats.attending}</div>
                                    <div><strong>Completed:</strong> {course.stats.completed}</div>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="mt-2">
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => {
                                        setEditingCourse(course);
                                        setShowForm(true);
                                    }}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteCourse(course.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredCourses.length === 0 && (
                    <p className="text-center mt-3">No courses found</p>
                )}
            </div>


        </div>
    );
}
