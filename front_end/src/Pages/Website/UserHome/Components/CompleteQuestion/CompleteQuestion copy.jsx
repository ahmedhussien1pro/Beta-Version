import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Go2TopBtn from '../Go2Top_Btn/Go2Top_Btn';
import './CompleteQuestion.css';
import GoBackButton from '../GoBack_Btn/GoBack_Btn';
import ShowHintBtn from '../ShowHint_Btn/ShowHint_Btn';

function compareArraysIgnoringOrder(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();
  return sorted1.every((val, idx) => val === sorted2[idx]);
}

const CompleteQuestion = ({ questionsData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [animateQuestion, setAnimateQuestion] = useState(false);

  const questions = questionsData.questions;
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const isAnswered = userAnswers[currentQuestionIndex] !== undefined;

  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  useEffect(() => {
    setAnimateQuestion(true);
    const timer = setTimeout(() => {
      setAnimateQuestion(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

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
    if (isAnswered) return;

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
    if (score >= 15) {
      Swal.fire({
        title: 'Congratulations!',
        text: `Your level is fair! Final score: ${score}`,
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } else {
      Swal.fire({
        title: 'Try again!',
        text: `You failed. Final score: ${score}. Please try again.`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  const hintMessage = `<p>Use your knowledge of Bash scripting to answer the quiz questions correctly. Review concepts such as variables, loops, conditionals, and functions to ensure you understand how to write effective Bash scripts.</p>`;
  return (
    <div className='complete-quiz__wrapper Custom__body--bg d-flex justify-content-center align-items-center'>
      <ShowHintBtn hintText={hintMessage} />
      <GoBackButton />
      <div className='container'>
        <div className='complete-quiz__container'>
          <h2 className=' text-center mb-2 main-colo '>
            Complete the Questions &nbsp;
            <i className='fa fa-question-circle ' aria-hidden='true'></i>
          </h2>

          <div className='complete-quiz__progress my-4'>
            <div className='progress'>
              <div
                className='progress-bar progress-bar-striped progress-bar-animated'
                role='progressbar'
                style={{
                  width: `${progressPercentage}%`,
                  transition: 'width 0.4s ease',
                  backgroundColor: 'var(--main-color)',
                }}
                aria-valuenow={currentQuestionIndex + 1}
                aria-valuemin='0'
                aria-valuemax={totalQuestions}></div>
            </div>
            <div className='complete-quiz__progress-text text-center mt-2'>
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
          </div>

          <div
            className={`complete-quiz__question mb-4 ${
              animateQuestion ? 'animate-fade-in' : ''
            }`}>
            <h4>{currentQuestion.question}</h4>
            {currentQuestion.element && (
              <p
                dangerouslySetInnerHTML={{
                  __html: currentQuestion.element,
                }}></p>
            )}
          </div>

          <div className='complete-quiz__answer mb-4 text-center'>
            <input
              type='text'
              className='form-control complete-quiz__answer-input focus-bg-transparent'
              placeholder='Type your answer here...'
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={isAnswered}
            />
            <button
              onClick={handleAnswerSubmit}
              disabled={isAnswered}
              className='btn mt-3  complete-quiz__submit-btn animate-bounce'>
              <i className='fa fa-check' aria-hidden='true'></i> Submit Answer
            </button>
          </div>

          {isAnswered && (
            <div className={`complete-quiz__feedback mb-4 animate-fade-in`}>
              <div
                className={`alert ${
                  userAnswers[currentQuestionIndex]?.toLowerCase() ===
                  (Array.isArray(currentQuestion.correctAnswer)
                    ? currentQuestion.correctAnswer.join(',').toLowerCase()
                    : currentQuestion.correctAnswer.toLowerCase())
                    ? 'alert-success'
                    : 'alert-danger'
                }`}
                role='alert'>
                {Array.isArray(currentQuestion.correctAnswer) ? (
                  userAnswers[currentQuestionIndex]
                    ?.toLowerCase()
                    .split(',')
                    .map((w) => w.trim())
                    .sort()
                    .join(',') ===
                  currentQuestion.correctAnswer
                    .map((w) => w.toLowerCase())
                    .sort()
                    .join(',')
                ) : userAnswers[currentQuestionIndex]?.toLowerCase() ===
                  currentQuestion.correctAnswer.toLowerCase() ? (
                  <>
                    <i className='fa fa-thumbs-up' aria-hidden='true'></i>{' '}
                    Correct!
                  </>
                ) : (
                  <>
                    <i className='fa fa-thumbs-down' aria-hidden='true'></i>{' '}
                    Wrong! The correct answer is:{' '}
                    {Array.isArray(currentQuestion.correctAnswer)
                      ? currentQuestion.correctAnswer.join(', ')
                      : currentQuestion.correctAnswer}
                  </>
                )}

                {Array.isArray(currentQuestion.correctAnswer) && (
                  <>
                    {compareArraysIgnoringOrder(
                      userAnswers[currentQuestionIndex]
                        ?.toLowerCase()
                        .split(',')
                        .map((w) => w.trim()) || [],
                      currentQuestion.correctAnswer.map((w) => w.toLowerCase())
                    ) ? (
                      <>
                        <i className='fa fa-thumbs-up' aria-hidden='true'></i>{' '}
                        Correct!
                      </>
                    ) : (
                      <>
                        <i className='fa fa-thumbs-down' aria-hidden='true'></i>{' '}
                        Wrong! The correct answers are:{' '}
                        {currentQuestion.correctAnswer.join(', ')}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          <div className='complete-quiz__navigation d-flex justify-content-between '>
            <button
              onClick={handlePrevious}
              className='btn complete-quiz__nav-btn animate-bounce col-lg-5 col-md-8 col-sm-10'
              disabled={currentQuestionIndex === 0}>
              <i className='fa fa-arrow-left' aria-hidden='true'></i> Previous
            </button>
            {currentQuestionIndex === totalQuestions - 1 ? (
              <button
                onClick={handleSubmit}
                className='btn  complete-quiz__nav-btn animate-bounce col-lg-5 col-md-8 col-sm-10'>
                <i className='fa fa-paper-plane' aria-hidden='true'></i> Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className='btn  complete-quiz__nav-btn animate-bounce col-lg-5 col-md-8 col-sm-10'
                disabled={currentQuestionIndex === totalQuestions - 1}>
                Next <i className='fa fa-arrow-right' aria-hidden='true'></i>
              </button>
            )}
          </div>
        </div>
      </div>
      <Go2TopBtn />
    </div>
  );
};

export default CompleteQuestion;
