import React, { useState, useEffect } from 'react';
import {
  Clock,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Send,
  Trophy,
  AlertCircle,
} from 'lucide-react';
import './CompleteQuestion.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import GoBackBtn from '../GoBack_Btn/GoBack_Btn';
import ShowHintBtn from '../ShowHint_Btn/ShowHint_Btn';
const Swal = {
  fire: ({ title, text, icon }) => {
    alert(`${icon.toUpperCase()}: ${title}\n${text}`);
  },
};

function compareArraysIgnoringOrder(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();
  return sorted1.every((val, idx) => val === sorted2[idx]);
}

const CompleteQuestion = ({ questionsData }) => {
  const HintMessage =
    'Remember to consider edge cases and think critically about each question. Good luck!';
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [animateQuestion, setAnimateQuestion] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const questions = questionsData?.questions || [];
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const isAnswered = userAnswers[currentQuestionIndex] !== undefined;
  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  useEffect(() => {
    if (isTimeUp) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsTimeUp(true);
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimeUp]);

  useEffect(() => {
    setAnimateQuestion(true);
    const timer = setTimeout(() => {
      setAnimateQuestion(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  const handleTimeUp = () => {
    Swal.fire({
      title: "Time's Up!",
      text: `Quiz ended. Your final score: ${score}/${totalQuestions}`,
      icon: 'warning',
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const getTimerClass = () => {
    if (timeRemaining < 300) return 'timer-critical';
    if (timeRemaining < 600) return 'timer-warning';
    return 'timer-safe';
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);
      setUserAnswer(userAnswers[newIndex] || '');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const newIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(newIndex);
      setUserAnswer(userAnswers[newIndex] || '');
    }
  };

  const handleAnswerSubmit = () => {
    if (isAnswered || isTimeUp) return;

    const trimmedAnswer = userAnswer.trim();
    if (!trimmedAnswer) return;

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = trimmedAnswer;
    setUserAnswers(newAnswers);

    const correctVal = currentQuestion.correctAnswer;
    if (Array.isArray(correctVal)) {
      const userWords = trimmedAnswer
        .toLowerCase()
        .split(',')
        .map((w) => w.trim());
      const correctWords = correctVal.map((w) => w.toLowerCase());

      if (compareArraysIgnoringOrder(userWords, correctWords)) {
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      if (trimmedAnswer.toLowerCase() === correctVal.toLowerCase()) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const handleSubmit = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 70) {
      Swal.fire({
        title: 'Congratulations! 🎉',
        text: `Excellent work! Final score: ${score}/${totalQuestions} (${percentage.toFixed(
          1
        )}%)`,
        icon: 'success',
      });
    } else if (percentage >= 50) {
      Swal.fire({
        title: 'Good Effort!',
        text: `You passed! Final score: ${score}/${totalQuestions} (${percentage.toFixed(
          1
        )}%)`,
        icon: 'success',
      });
    } else {
      Swal.fire({
        title: 'Keep Practicing!',
        text: `Final score: ${score}/${totalQuestions} (${percentage.toFixed(
          1
        )}%). Review and try again!`,
        icon: 'error',
      });
    }
  };

  const isCorrectAnswer = () => {
    if (!isAnswered) return null;
    const userAns = userAnswers[currentQuestionIndex];
    const correctAns = currentQuestion.correctAnswer;

    if (Array.isArray(correctAns)) {
      return compareArraysIgnoringOrder(
        userAns
          ?.toLowerCase()
          .split(',')
          .map((w) => w.trim()) || [],
        correctAns.map((w) => w.toLowerCase())
      );
    }
    return userAns?.toLowerCase() === correctAns.toLowerCase();
  };

  if (!questionsData || questions.length === 0) {
    return (
      <div
        className='complete-quiz__wrapper d-flex justify-content-center align-items-center'
        style={{ minHeight: '100vh' }}>
        <div className='primary-text h4'>Loading quiz...</div>
      </div>
    );
  }

  return (
    <>
      <div className='complete-quiz__wrapper'>
        <ShowHintBtn hint={HintMessage} />
        <GoBackBtn />
        <ThemeSwitcher />

        <div className='container'>
          <div className='quiz-header-card'>
            <div className='row g-4'>
              <div className='col-md-6'>
                <div className='quiz-stat-box'>
                  <div className='d-flex align-items-center gap-3'>
                    <div className='quiz-stat-icon'>
                      <Trophy size={24} color='#ffc107' />
                    </div>
                    <div>
                      <div className='text-secondary small mb-1'>
                        Current Score
                      </div>
                      <div className='h3 mb-0 primary-text fw-bold'>
                        {score}/{totalQuestions}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='quiz-stat-box'>
                  <div className='d-flex align-items-center gap-3'>
                    <div className='quiz-stat-icon'>
                      <Clock size={24} className={getTimerClass()} />
                    </div>
                    <div>
                      <div className='text-secondary small mb-1'>
                        Time Remaining
                      </div>
                      <div
                        className={`h3 mb-0 fw-bold font-monospace ${getTimerClass()}`}>
                        {formatTime(timeRemaining)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='quiz-main-container'>
            <div className='mb-4'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <h5 className='primary-text mb-0 fw-bold'>
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </h5>
                <span className='text-info fw-semibold'>
                  {progressPercentage.toFixed(0)}% Complete
                </span>
              </div>
              <div className='quiz-progress-bar'>
                <div
                  className='quiz-progress-fill'
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <div
              className={`quiz-question-card ${
                animateQuestion ? 'animate-in' : ''
              }`}>
              <h4 className='primary-text mb-3 fw-bold'>
                {currentQuestion.question}
              </h4>
              {currentQuestion.element && (
                <div
                  className='text-secondary'
                  style={{ lineHeight: 'var(--lineHeight-4)' }}
                  dangerouslySetInnerHTML={{ __html: currentQuestion.element }}
                />
              )}
            </div>

            <div className='mb-4'>
              <input
                type='text'
                className='form-control quiz-input'
                placeholder='Type your answer here...'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={isAnswered || isTimeUp}
                onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()}
              />
              <button
                onClick={handleAnswerSubmit}
                disabled={isAnswered || isTimeUp || !userAnswer.trim()}
                className='btn btn-submit-answer w-100 mt-3 d-flex align-items-center justify-content-center gap-2'>
                <CheckCircle size={20} />
                Submit Answer
              </button>
            </div>

            {isAnswered && (
              <div
                className={`feedback-card ${
                  isCorrectAnswer() ? 'correct' : 'incorrect'
                }`}>
                <div className='d-flex align-items-start gap-3'>
                  <div className='icon-wrapper' style={{ marginTop: '2px' }}>
                    {isCorrectAnswer() ? (
                      <CheckCircle size={24} color='#28a745' />
                    ) : (
                      <XCircle size={24} color='#ff073a' />
                    )}
                  </div>
                  <div>
                    <h6
                      className={`fw-bold mb-2 ${
                        isCorrectAnswer() ? 'text-success' : 'text-danger'
                      }`}>
                      {isCorrectAnswer() ? '✓ Correct!' : '✗ Incorrect'}
                    </h6>
                    {!isCorrectAnswer() && (
                      <p className='primary-text mb-0'>
                        The correct answer is:{' '}
                        <span className='fw-bold'>
                          {Array.isArray(currentQuestion.correctAnswer)
                            ? currentQuestion.correctAnswer.join(', ')
                            : currentQuestion.correctAnswer}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className='row g-3'>
              <div className='col-md-6'>
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className='btn btn-nav w-100 d-flex align-items-center justify-content-center gap-2'>
                  <ChevronLeft size={20} />
                  Previous
                </button>
              </div>

              <div className='col-md-6'>
                {currentQuestionIndex === totalQuestions - 1 ? (
                  <button
                    onClick={handleSubmit}
                    className='btn btn-submit-quiz w-100 d-flex align-items-center justify-content-center gap-2'>
                    <Send size={20} />
                    Submit Quiz
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={currentQuestionIndex === totalQuestions - 1}
                    className='btn btn-nav w-100 d-flex align-items-center justify-content-center gap-2'>
                    Next
                    <ChevronRight size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {timeRemaining < 300 && timeRemaining > 0 && (
            <div className='warning-alert d-flex align-items-center gap-3'>
              <AlertCircle size={24} color='#ff7034' />
              <p className='mb-0 fw-semibold' style={{ color: '#ff7034' }}>
                Warning: Less than 5 minutes remaining!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompleteQuestion;
