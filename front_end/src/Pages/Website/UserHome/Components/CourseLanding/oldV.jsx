import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Landing.css";
import defaultBg from "../../assets/css/bg.jpg";
import defaultImage from "../../assets/css/defaultImage.png";
const CourseLanding = ({
  background,
  backgroundStyle = {},
  courseImage,
  courseTitle = "Course Title",
  courseDescription = "Course Description",
  difficulty = "Course Difficulty",
  duration = "Course Duration",
  onSaveRoom = () => {},
  onLike = () => {},
  onDislike = () => {},
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("buttonStates")) || {};
    setIsSaved(savedState.isSaved || false);
    setIsLiked(savedState.isLiked || false);
    setIsDisliked(savedState.isDisliked || false);

    const startedCourseTitle = localStorage.getItem("startedCourse");
    if (startedCourseTitle === courseTitle) {
      setIsStarted(true);
    }
  }, [courseTitle]);

  useEffect(() => {
    const buttonStates = { isSaved, isLiked, isDisliked };
    localStorage.setItem("buttonStates", JSON.stringify(buttonStates));

    if (isStarted) {
      localStorage.setItem("startedCourse", courseTitle);
    } else {
      const startedCourseTitle = localStorage.getItem("startedCourse");
      if (startedCourseTitle === courseTitle) {
        localStorage.removeItem("startedCourse");
      }
    }
  }, [isStarted, isSaved, isLiked, isDisliked, courseTitle]);

  const toggleSaveRoom = () => {
    setIsSaved((prev) => !prev);
    onSaveRoom();
  };

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
    if (isDisliked) setIsDisliked(false);
    onLike();
  };

  const toggleDislike = () => {
    setIsDisliked((prev) => !prev);
    if (isLiked) setIsLiked(false);
    onDislike();
  };

  const handleStartCourse = () => {
    setIsStarted(true);
  };

  return (
    <div
      className="my-landing"
      style={
        backgroundStyle
          ? {
              background: `url(${background || defaultBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Background overlay */}
      <div className="landing__overlay"></div>

      {/* Main content container */}
      <div className="landing__content">
        {/* Left side (breadcrumb, title, description, etc.) */}
        <div className="landing__text">
          <div className="landing__breadcrumb">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="">{courseTitle}</Link>
              </li>
            </ul>
          </div>
          <div className="landing__course--info">
            <img src={courseImage || defaultImage} alt="Course" />
            <div className="course-text">
              <h1>{courseTitle}</h1>
              <p>{courseDescription}</p>
              <div className="course-icons">
                <div className="diff">
                  <div className="easy">
                    <i className="fa-solid fa-signal"></i>
                    <p>{difficulty}</p>
                  </div>
                </div>
                <div className="duration">
                  <i className="fa-solid fa-clock"></i>
                  <p className="time">{duration}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="landing__options">
            <button
              onClick={toggleSaveRoom}
              className={isSaved ? "active" : ""}
            >
              <i className="far fa-bookmark"></i>
              <p>{isSaved ? "Remove from Favorite" : "Add to Favorite"}</p>
            </button>
            <div className="like">
              <button onClick={toggleLike} className={isLiked ? "active" : ""}>
                <i className="fas fa-thumbs-up"></i>
              </button>
              <button
                onClick={toggleDislike}
                className={isDisliked ? "active" : ""}
              >
                <i className="fas fa-thumbs-down"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Right side (icon border, optional) */}
        <div className="landing__icon">
          <div className="landing__icon-border">
            {/* Edge Icons */}
            <div className="landing__edge-icon landing__edge-icon--top ">
              <i className="fas fa-user-secret"></i>
            </div>
            <div className="landing__edge-icon landing__edge-icon--right landing__edge-icon--active ">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="landing__edge-icon landing__edge-icon--left">
              <i className="fas fa-lightbulb"></i>
            </div>
            {/* Center Circle */}
            <div className="landing__icon-circle">Course</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLanding;
