import CompleteQuestion from '../../../Components/CompleteQuestion/CompleteQuestion';
import Data from './second_Data.json';
import './Bash_quiz.css';

export default function Second_Lab() {
  return (
    <>
      <CompleteQuestion questionsData={Data} />
    </>
  );
}
