import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Banner from '../../Components/Banner/Banner.jsx';
import '../../Components/Topics CSS/topics.css';
import courseImage from '../../assets/img/Regex/courseImage.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Go2TopBtn from '../../Components/Go2Top_Btn/Go2Top_Btn.jsx';
export default function Regex() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Regular Expressions',
      ar: 'التعبيرات النمطية (Regex)',
    },
    description: {
      en: 'Master the power of pattern matching. Learn how to write complex expressions for searching, validating, and extracting data from logs and network traffic.',
      ar: 'أتقن قوة مطابقة الأنماط. تعلم كيفية كتابة تعبيرات معقدة للبحث والتحقق واستخراج البيانات من السجلات وحركة مرور الشبكة.',
    },
    difficulty: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '35 min',
      ar: '35 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.7',
    students: '3820',
  };

  return (
    <>
      <Banner />
      <Header />
      {/* Start Landing */}
      <CourseLanding {...data} />
      {/* End Landing */}
      {/* Start Course */}
      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Topic 1 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span>Introduction
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      <h3 className='content__title'>
                        What are regular expressions?
                      </h3>
                      Regular expressions (or Regex) are patterns of text that
                      you define to search documents and match exactly what
                      you're looking for.
                    </p>
                    <p>
                      <h3 className='content__title'>
                        Why should I learn how to use them?
                      </h3>
                      Even if you won't need them sooner or later, it's a great
                      tool to know how to use. It will make you more capable in
                      CTF's, and potentially a better developer if that's a goal
                      you have. You spend a little time learning it and save
                      yourself lots of time in the long run by using it.
                    </p>
                    <p>
                      <h3 className='content__title'>
                        I know all that, but I'm lazy.
                      </h3>
                      This is a lazy person's tutorial. There's a little
                      reading, and then you learn by doing.
                    </p>
                    <p>
                      <h3 className='content__title'>
                        Where's the 'Deploy' button?
                      </h3>
                      <span className='content__subtitle me-2'>
                        There's no machine to deploy.
                      </span>
                      There are two ways to test your expressions. Either:
                      <br />
                      <ol>
                        <li>
                          create a text file with some test paragraphs (in a
                          Unix machine) and then use egrep{' '}
                          <code className='content__code mx-1'>
                            &lt;pattern&gt; &lt;file&gt;
                          </code>
                          to see what matches and what doesn't, or
                        </li>
                        <li>
                          use an online editor like{' '}
                          <span
                            href='https://regexr.com/'
                            className='link underline'>
                            https://regexr.com/
                          </span>
                          . You can add your own text in the "Text" field, and
                          then type your expressions (patterns) in the
                          "Expression" field.
                        </li>
                      </ol>
                      <div className='content__code px-3'>
                        I recommend the second way.
                      </div>
                    </p>
                  </div>
                </dd>

                {/* Topic 2*/}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>Charsets
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      When searching for a specific string in a file or block of
                      text, you can search for it as is, with{' '}
                      <code className='content__code mx-1'>
                        {' '}
                        grep 'string' &lt;file&gt;{' '}
                      </code>
                      . But what happens if you want to search for{' '}
                      <b> patterns of text?</b> For example, you could be
                      looking for a word that starts with a specific letter, or
                      any words that end with numbers. That's where Regular
                      Expressions come in.
                    </p>
                    <p>
                      Both of the aforementioned problems can be solved by using{' '}
                      <b>charsets.</b>A charset is defined by enclosing in{' '}
                      <code className='content__code mx-1'> [ </code>
                      square brackets{' '}
                      <code className='content__code mx-1'> ] </code>
                      the character(s), or range of characters that you want to
                      match. Then, it finds <b>every occurrence</b> of the
                      pattern you have defined in the file/text you are
                      searching.
                    </p>
                    <p>
                      <code className='content__code mx-1'> [abc] </code>
                      will match
                      <code className='content__code mx-1'> a </code>,
                      <code className='content__code mx-1'> b </code>, and
                      <code className='content__code mx-1'> c </code>
                      (every occurrence of each letter).
                    </p>
                    <p>
                      <code className='content__code mx-1'> [abc] </code>
                      will match
                      <code className='content__code mx-1'> azz </code>, ,
                      <code className='content__code mx-1'> bzz </code>, and
                      <code className='content__code mx-1'> czz </code>
                    </p>
                    <p>
                      You can also use a
                      <code className='content__code mx-1'> - </code>
                      dash to define ranges:
                    </p>
                    <p>
                      <code className='content__code mx-1'> [a-c]zz </code>
                      is the same as above.
                    </p>
                    <p>
                      And then you can combine ranges together: <br />
                      <code className='content__code mx-1'> [a-cx-z]zz </code>
                      will match
                      <code className='content__code mx-1'> azz </code>,
                      <code className='content__code mx-1'> bzz </code>, ,
                      <code className='content__code mx-1'> czz </code>, ,
                      <code className='content__code mx-1'> xzz </code>,
                      <code className='content__code mx-1'> yzz </code>, and
                      <code className='content__code mx-1'> zzz </code>.
                    </p>
                    <p>
                      {' '}
                      Most notably, this can be used to match any alphabetical
                      character: <br />{' '}
                      <code className='content__code mx-1'> [a-zA-Z] </code>
                      will match any <b>single</b> letter (lowercase or
                      uppercase).
                    </p>
                    <p>
                      You can use numbers too: <br />
                      <div className='dark-no'> file[1-3] </div>
                      will match{' '}
                      <code className='content__code mx-1'> file[1-3] </code>,
                      <code className='content__code mx-1'> file2 </code>, and
                      <code className='content__code mx-1'> file3 </code>.
                    </p>
                    <p>
                      Then, there is a way to <b>exclude</b> characters from a
                      charset with the{' '}
                      <code className='content__code mx-1'> ^ </code>
                      hat symbol, and include everything else.
                    </p>
                  </div>
                </dd>

                {/* Topic 3 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>Wildcards and optional characters
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      The wildcard that is used to match any single character
                      (except the line break) is the{' '}
                      <code className='content__code mx-1'> . </code> dot. That
                      means that{' '}
                      <code className='content__code mx-1'> a.c </code> will
                      match <code className='content__code mx-1'> aac </code>,
                      <code className='content__code mx-1'> abc </code>,
                      <code className='content__code mx-1'> a0c </code>,
                      <code className='content__code mx-1'>a!c</code> and so on.
                      Note: If
                    </p>
                    <p>
                      Also, you can set a character as optional in your pattern
                      using the <code className='content__code mx-1'> ? </code>{' '}
                      question mark. That means that{' '}
                      <code className='content__code mx-1'> abc? </code> will
                      match <code className='content__code mx-1'> ab </code> and{' '}
                      <code className='content__code mx-1'> abc </code>, since
                      the <code className='content__code mx-1'> c </code> is
                      optional.
                    </p>
                    <div className='note'>
                      {' '}
                      you want to search for{' '}
                      <code className='content__code mx-1'> . </code> a literal
                      dot, you have to escape it with a{' '}
                      <code className='content__code mx-1'> \ </code> reverse
                      slash. That means that{' '}
                      <code className='content__code mx-1'> a.c </code> will
                      match <code className='content__code mx-1'> a.c </code>,
                      but also a{' '}
                      <code className='content__code mx-1'> abc </code>,{' '}
                      <code className='content__code mx-1'> a@c </code>, and so
                      on. But <code className='content__code mx-1'> a\.c </code>
                      will match just{' '}
                      <code className='content__code mx-1'> a.c </code>.
                    </div>
                  </div>
                </dd>

                {/* Topic 4*/}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>Metacharacters and repetitions
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      There are easier ways to match bigger charsets. For
                      example, <code className='content__code mx-1'> \d </code>{' '}
                      is used to match any <b>single</b> digit.
                      <br /> Here's a reference:
                    </p>
                    <ol className='oList'>
                      <li>
                        <code className='content__code mx-1'> \d </code>
                        matches a digit, like
                        <code className='content__code mx-1'> 9 </code>
                      </li>
                      <li>
                        <code className='content__code mx-1'> \D </code>
                        matches a non-digit, like
                        <code className='content__code mx-1'> A </code> or
                        <code className='content__code mx-1'> @ </code>
                      </li>
                      <li>
                        <code className='content__code mx-1'> \w </code>
                        matches an alphanumeric character, like
                        <code className='content__code mx-1'> a </code> or
                        <code className='content__code mx-1'> 3 </code>
                      </li>
                      <li>
                        <code className='content__code mx-1'> \W </code>
                        matches a non-alphanumeric character, like
                        <code className='content__code mx-1'> ! </code> or
                        <code className='content__code mx-1'> # </code>
                      </li>
                      <li>
                        <code className='content__code mx-1'> \s </code>
                        matches a whitespace character (spaces, tabs, and line
                        breaks)
                      </li>
                      <li>
                        <code className='content__code mx-1'> \S </code>
                        matches everything else (alphanumeric characters and
                        symbols)
                      </li>
                    </ol>
                    <div className='note'>
                      Note: Underscores{' '}
                      <code className='content__code mx-1'> _ </code> are
                      included in the{' '}
                      <code className='content__code mx-1'> \w </code>{' '}
                      metacharacter and not in{' '}
                      <code className='content__code mx-1'> \W </code>. That
                      means that{' '}
                      <code className='content__code mx-1'> \w </code> will
                      match every single character in{' '}
                      <code className='content__code mx-1'>test_file</code>.
                    </div>
                    <p>
                      Often we want a pattern that matches many characters of a
                      single type in a row, and we can do that with repetitions.
                      For example,{' '}
                      <code className='content__code mx-1'> {2} </code> is used
                      to match the preceding character (or metacharacter, or
                      charset) two times in a row. That means that{' '}
                      <code className='content__code mx-1'> z{2} </code> will
                      match exactly
                      <code className='content__code mx-1'> zz </code>.
                    </p>
                    <p>
                      Here's a reference for each repetition along with how many
                      times it matches the preceding pattern:
                      <br />
                      <ol className='oList'>
                        <li>
                          <code className='content__code mx-1'> {12} </code>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='mx-2'
                          />
                          <b>exactly 12</b>times.
                        </li>
                        <li>
                          <code className='content__code mx-1'>
                            {' '}
                            &#123; 1, 5 &#123;{' '}
                          </code>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='mx-2'
                          />
                          <b>1 to 5 </b>times.
                        </li>
                        <li>
                          <code className='content__code mx-1'>
                            {' '}
                            &#123;2, &#125;
                          </code>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='mx-2'
                          />
                          <b> 2 or more </b>times.
                        </li>
                        <li>
                          <code className='content__code mx-1'> * </code>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='mx-2'
                          />
                          <b> 0 or more </b>times.
                        </li>
                        <li>
                          <code className='content__code mx-1'> + </code>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='mx-2'
                          />
                          <b> 1 or more </b>times.
                        </li>
                      </ol>
                    </p>
                  </div>
                </dd>

                {/* Topic 5 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 5</span>Starts with/ ends with, groups, and
                  either/ or
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p>
                      Sometimes it's very useful to specify that we want to
                      search by a certain pattern{' '}
                      <b> in the beginning or the end of a line. </b>We do that
                      with these characters: <br />
                      <ul>
                        <li>
                          <code className='content__code mx-1'> ^ </code>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='mx-2'
                          />
                          <b>Start with</b>
                        </li>
                        <li>
                          <code className='content__code mx-1'> $ </code>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='mx-2'
                          />
                          <b>End with</b>
                        </li>
                      </ul>
                    </p>
                    <p>
                      So for example, if you want to search for a line that{' '}
                      <b>starts with </b>
                      <code className='content__code mx-1'> abc </code>, you can
                      use <code className='content__code mx-1'> ^abc </code>. If
                      you want to search for a line that ends with{' '}
                      <code className='content__code mx-1'> xyz </code>, you can
                      use <code className='content__code mx-1'> xyz$ </code>.
                    </p>
                    <div className='note'>
                      <b className='text-danger'>Note:</b> The{' '}
                      <code className='content__code mx-1'> ^ </code>
                      hat symbol is used to exclude a charset when enclosed in
                      <code className='content__code mx-1'> [ </code>
                      square brackets{' '}
                      <code className='content__code mx-1'> ] </code>, but when
                      it is not, it is used to specify the beginning of a word.
                    </div>
                    <p>
                      You can also define groups by enclosing a pattern in
                      <code className='content__code mx-1'> ( </code>,
                      parentheses
                      <code className='content__code mx-1'> ) </code>, . This
                      function can be used for many ways that are not in the
                      scope of this tutorial. We will use it to define an{' '}
                      <b>either/or</b> pattern, and also to repeat patterns. To
                      say "or" in Regex, we use the{' '}
                      <code className='content__code mx-1'> | </code> pipe.
                    </p>
                    <p>
                      For an "either/or" pattern example, the pattern{' '}
                      <code className='content__code mx-1'>
                        {' '}
                        during the (day|night){' '}
                      </code>
                      will match both of these sentences:{' '}
                      <code className='content__code mx-1'>
                        {' '}
                        during the day{' '}
                      </code>
                      and{' '}
                      <code className='content__code mx-1'>
                        {' '}
                        during the night{' '}
                      </code>
                      . <br />
                      For a repetition example, the pattern{' '}
                      <code className='content__code mx-1'> (no){5} </code>
                      will match the sentence{' '}
                      <code className='content__code mx-1'> nonononono </code>.
                    </p>
                  </div>
                </dd>
                {/* Topic 6 */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 6</span>Conclusion
                </dt>
                <dd className='fadeInUp faq-body'>
                  <div className='faq-content'>
                    <p className='content__subtitle px-3 text-warning'>
                      Well done.
                    </p>
                    <p>
                      Regular expressions are very powerful, even at their most
                      basic usage. There are many resources to study and
                      practise online as well, which I strongly recommend.
                    </p>
                    <p>
                      Also, if you're planning on using regex to develop
                      something and you want to search for something like an
                      e-mail, you should search for premade expressions instead
                      of writing your own.
                    </p>
                    <p>
                      With regex, you have to think specific, but not{' '}
                      <b> too </b> specific, because then you might come up with
                      complicated solutions when there are other more elegant
                      and simple ones.
                    </p>
                  </div>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/Regex/Regex_labs')}
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}
