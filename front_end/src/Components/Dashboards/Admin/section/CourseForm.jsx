import React, { useState, useEffect } from "react";

export default function CourseForm({ onSubmit, editingCourse, onCancel }) {
    const [form, setForm] = useState({
        title: "",
        tags: "",
        creator: "",
        state: "draft",
        attending: "",
        completed: "",
    });

    useEffect(() => {
        if (editingCourse) {
            setForm({
                title: editingCourse.title,
                tags: editingCourse.tags.join(", "),
                creator: editingCourse.creator,
                state: editingCourse.state,
                attending: editingCourse.stats?.attending || "",
                completed: editingCourse.stats?.completed || "",
            });
        }
    }, [editingCourse]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCourse = {
            title: form.title,
            creator: form.creator,
            state: form.state,
            tags: form.tags.split(",").map((t) => t.trim()),
            stats:
                form.state === "ready"
                    ? {
                        attending: Number(form.attending),
                        completed: Number(form.completed),
                    }
                    : undefined,
        };

        // لو Edit: ضيفي الـ id هنا
        if (editingCourse) {
            newCourse.id = editingCourse.id;
        }

        onSubmit(newCourse);

        // Clear form بعد الإرسال
        setForm({
            title: "",
            tags: "",
            creator: "",
            state: "draft",
            attending: "",
            completed: "",
        });
    };

    return (
        <div className="card p-3 mt-3">
            <h5>{editingCourse ? "Edit Course" : "Create New Course"}</h5>

            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label>Title</label>
                    <input
                        className="form-control"
                        value={form.title}
                        onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                        }
                        required
                    />
                </div>

                <div className="mb-2">
                    <label>Tags (comma separated)</label>
                    <input
                        className="form-control"
                        value={form.tags}
                        onChange={(e) =>
                            setForm({ ...form, tags: e.target.value })
                        }
                        required
                    />
                </div>

                <div className="mb-2">
                    <label>Content Creator</label>
                    <input
                        className="form-control"
                        value={form.creator}
                        onChange={(e) =>
                            setForm({ ...form, creator: e.target.value })
                        }
                        required
                    />
                </div>

                <div className="mb-2">
                    <label>State</label>
                    <select
                        className="form-select"
                        value={form.state}
                        onChange={(e) =>
                            setForm({ ...form, state: e.target.value })
                        }
                    >
                        <option value="ready">Ready</option>
                        <option value="under-creation">Under Creation</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>

                {form.state === "ready" && (
                    <>
                        <div className="mb-2">
                            <label>Attending</label>
                            <input
                                type="number"
                                className="form-control"
                                value={form.attending}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        attending: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label>Completed</label>
                            <input
                                type="number"
                                className="form-control"
                                value={form.completed}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        completed: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                    </>
                )}

                <button className="btn btn-primary mt-2" type="submit">
                    {editingCourse ? "Update" : "Create"}
                </button>

                <button
                    className="btn btn-secondary mt-2 ms-2"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
