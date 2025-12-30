import React from 'react';
import '../../Components/Topics CSS/topics.css';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/Cryptography/course_image.png';
import Footer from '../../Footer/Footer';
import exampleImage1 from '../../assets/img/Cryptography/1.png';
import exampleImage2 from '../../assets/img/Cryptography/2.png';
import exampleImage3 from '../../assets/img/Cryptography/3.svg';
import exampleImage4 from '../../assets/img/Cryptography/4.svg';
import exampleImage5 from '../../assets/img/Cryptography/5.svg';
import exampleImage6 from '../../assets/img/Cryptography/6.svg';
import exampleImage7 from '../../assets/img/Cryptography/7.svg';
import exampleImage8 from '../../assets/img/Cryptography/8.svg';
import exampleImage9 from '../../assets/img/Cryptography/9.svg';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
export default function CryptoGraphy() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Cryptography',
      ar: 'علم التشفير (Cryptography)',
    },
    description: {
      en: 'Dive into the world of secure communication. Learn about symmetric and asymmetric encryption, hashing algorithms, and how to protect data integrity in digital environments.',
      ar: 'غص في عالم الاتصالات الآمنة. تعرف على التشفير المتماثل وغير المتماثل، خوارزميات التجزئة (Hashing)، وكيفية حماية سلامة البيانات في البيئات الرقمية.',
    },
    difficulty: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '45 min',
      ar: '45 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.9',
    students: '2980',
  };

  return (
    <>
      <Header />
      {/* Start Landing  */}
      <CourseLanding {...data} />
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Single FAQ Area  */}

                <dt className='fadeInUp faq-header'>
                  <span>step 1</span> Introduction to Cryptography
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h1 className='content__title'>
                    Welcome to Introduction to Cryptography
                  </h1>
                  <br />
                  <h2 className='content__title'>What will you learn?</h2>
                  <ol>
                    <li>What is Cryptography?</li>
                    <li>The Role of Cryptography in Information Security </li>
                    <li> What is Steganography?</li>
                    <li>How does Steganography differ from Cryptography?</li>
                    <li>Steganography Techniques</li>
                    <li>Best Tools to Perform Steganography</li>
                  </ol>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> step 2</span> What is Cryptography?
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    <br />
                  </p>
                  <h1 className='content__title'>What is Cryptography?</h1>
                  <h4>Cryptography? </h4>
                  <p>
                    Cryptography refers almost exclusively to encryption, the
                    process of converting ordinary information (plaintext) into
                    ciphertext. Decryption is the reverse, moving from
                    unintelligible ciphertext to plaintext.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage1} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h4>The Role of Cryptography in Information Security</h4>
                  <p>
                    Cryptography can be used to achieve several goals of
                    information security, including confidentiality, integrity,
                    and authentication. Integrity:
                  </p>
                  <p>
                    Cryptography can also be used to ensure the integrity (or
                    accuracy) of information through the use of hashing
                    algorithms and message digests.
                  </p>
                  <p>
                    <strong>Confidentiality :</strong> only targeted people
                    would be able to receive data
                  </p>
                  <p>
                    <strong>Integrity :</strong> we should keep data safe
                    without modification (storage or transmission)
                  </p>
                  <p>
                    <strong>Authentication :</strong> we able to decide who is
                    the current user.
                  </p>
                  <br />
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> step 3</span> What is Steganography?{' '}
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <h1 className='content__title'>What is Steganography?</h1>
                  <p>
                    Steganography is the art and science of embedding secret
                    messages in a cover message in such a way that, no one apart
                    from the sender and intended recipient, suspects the
                    existence of the message.
                  </p>
                  <p>
                    The diagram below represents a basic steganographic model.{' '}
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage2} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h4>How does Steganography differ from Cryptography?</h4>
                  <p>
                    Both of them have almost the same aim which is to protect a
                    third-party message or information. They do, however, use a
                    completely different mechanism to protect the information.
                  </p>
                  <p>
                    Cryptography changes the ciphertext information which can
                    not be understood without a decryption key. And if someone
                    intercepted this encrypted message they could easily see
                    that some sort of encryption had been applied.{' '}
                  </p>
                  <p>
                    Steganography, on the other hand, does not alter the
                    information format, so it conceals the message's existence.
                  </p>
                  <br />
                  <h4>Steganography Techniques</h4>
                  <ol>
                    <li>Image Steganography</li>
                    <li>Audio Steganography</li>
                  </ol>
                  <br />
                  <h4>Image Steganography</h4>
                  <p>
                    Hiding the data is known as image steganography, by taking
                    the cover object as the background.
                  </p>
                  <br />
                  <p>
                    In digital steganography, images are widely used as cover
                    sources, because the digital representation of an image
                    contains a huge number of bits. There are several ways of
                    hiding the data within an image.
                  </p>
                  <br />
                  <h4>Popular approaches involve:</h4>
                  <ol>
                    <li>Least Significant Bit Insertion</li>
                    <li>Masking and Filtering</li>
                    <li>Redundant Pattern Encoding</li>
                    <li>Encrypt and Scatter</li>
                  </ol>
                  <br />
                  <h3>Audio Steganography</h3>
                  <p>
                    In audio steganography, the secret message is embedded into
                    an audio signal which alters the binary sequence of the
                    corresponding audio file.
                  </p>
                  <p>
                    Hiding secret messages in digital sound is a much more
                    difficult process when compared to others, such as Image
                    Steganography.
                  </p>
                  <br />
                  <h4>Different methods of audio steganography include:</h4>
                  <ol>
                    <li>Least Significant Bit Encoding</li>
                    <li>Parity Encoding</li>
                    <li>Phase Coding</li>
                    <li>Spread Spectrum</li>
                  </ol>
                  <br />
                  <h4>Best Tools to Perform Steganography</h4>
                  <p>
                    There are many software available that offer steganography.
                    Some offer normal steganography, but a few offer encryption
                    before hiding the data.
                  </p>
                  <br />
                  <h4>
                    These are the steganography tools that are available for
                    free:
                  </h4>
                  <p>
                    <span>Stegsolve :</span> Interactively transforms images,
                    and views color schemes separately
                  </p>
                  <p>
                    <span>SonicVisualiser : </span> Visualizing audio files in a
                    waveform, display spectrograms
                  </p>
                  <p>
                    <span>DeepSound : </span>Audio stego tool that was used in
                    Mr. Robot series. Windows tool but could be run in wine.
                  </p>
                  <p>
                    <span>Steghide :</span> tool to encrypt and hide data.
                  </p>
                  <br />
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> step 4</span> Plaintext to Ciphertext
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <p>
                    Let’s start with an illustration before introducing the key
                    terms. We begin with the plaintext that we want to encrypt.
                    The plaintext is the readable data; it can be anything from
                    a simple “hello”, a cat photo, credit card information, or
                    medical health records. From a cryptography perspective,
                    these are all “plaintext” messages waiting to be encrypted.
                    The plaintext is passed through the encryption function
                    along with a proper key; the encryption function returns a
                    ciphertext. The encryption function is part of the cipher; a
                    cipher is an algorithm to convert a plaintext into a
                    ciphertext and vice versa.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage3} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    To recover the plaintext, we must pass the ciphertext along
                    with the proper key via the decryption function, which would
                    give us the original plaintext. This is shown in the
                    illustration below.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage4} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    We have just introduced several new terms, and we need to
                    learn them to understand any text about cryptography. The
                    terms are listed below:
                  </p>
                  <ol>
                    <li>
                      <strong>Plaintext</strong> is the original, readable
                      message or data before it’s encrypted. It can be a
                      document, an image, a multimedia file, or any other binary
                      data.
                    </li>
                    <li>
                      <strong>Ciphertext</strong> is the scrambled, unreadable
                      version of the message after encryption. Ideally, we
                      cannot get any information about the original plaintext
                      except its approximate size.
                    </li>
                    <li>
                      <strong>Cipher</strong> is an algorithm or method to
                      convert plaintext into ciphertext and back again. A cipher
                      is usually developed by a mathematician.
                    </li>
                    <li>
                      <strong>Key</strong> is a string of bits the cipher uses
                      to encrypt or decrypt data. In general, the used cipher is
                      public knowledge; however, the key must remain secret
                      unless it is the public key in asymmetric encryption. We
                      will visit asymmetric encryption in a later Topic.
                    </li>
                    <li>
                      <strong>Encryption</strong> is the process of converting
                      plaintext into ciphertext using a cipher and a key. Unlike
                      the key, the choice of the cipher is disclosed.
                    </li>
                    <li>
                      <strong>Decryption</strong> is the reverse process of
                      encryption, converting ciphertext back into plaintext
                      using a cipher and a key. Although the cipher would be
                      public knowledge, recovering the plaintext without
                      knowledge of the key should be impossible (infeasible).
                    </li>
                  </ol>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> step 5</span> Historical Ciphers{' '}
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    <br />
                  </p>
                  <p>
                    Cryptography’s history is long and dates back to ancient
                    Egypt in 1900 BCE. However, one of the simplest historical
                    ciphers is the Caesar Cipher from the first century BCE. The
                    idea is simple: shift each letter by a certain number to
                    encrypt the message.
                  </p>
                  <p>Consider the following example:</p>
                  <ol>
                    <li>
                      Plaintext: <code>cyber lab</code>
                    </li>
                    <li>Key: 3 (Assume it is a right shift of 3.)</li>
                    <li>Cipher: Caesar Cipher</li>
                  </ol>
                  <p>
                    We can easily figure out that c becomes f, y becomes b, b
                    becomes e, and so on. As you noticed, once we reach Z, we
                    start all over, as shown in the figure below. Consequently,
                    we get the ciphertext of <code>fbehu ode</code>.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage5} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>To decrypt, we need the following information:</p>
                  <ol>
                    <li>
                      Ciphertext: <code>fbehu ode</code>
                    </li>
                    <li>Key: 3</li>
                    <li>Cipher: Caesar Cipher</li>
                  </ol>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage6} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    For encryption, we shift to the right by three; for
                    decryption, we shift to the left by three and recover the
                    original plaintext, as illustrated in the image above.
                    However, if someone gives you a ciphertext and tells you
                    that it was encrypted using Caesar Cipher, recovering the
                    original text would be a trivial task as there are only 25
                    possible keys. The English alphabet is 26 letters, and
                    shifting by 26 will keep the letter unchanged; hence, 25
                    valid keys for encryption with Caesar Cipher. The figure
                    below shows how decryption will succeed by attempting all
                    the possible keys; in this case, we recovered the original
                    message with{' '}
                    <span class='math inline'>
                      <em>K</em>
                      <em>e</em>
                      <em>y</em> = 5
                    </span>
                    . Consequently, by today’s standards, where the cipher is
                    publicly known, Caesar Cipher is considered insecure.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage7} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    You would come across many more historical ciphers in movies
                    and cryptography books. Examples include:
                  </p>
                  <ol>
                    <li>The Vigenère cipher from the 16th century</li>
                    <li>The Enigma machine from World War II</li>
                    <li>The one-time pad from the Cold War</li>
                  </ol>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> step 6</span> Types of Encryption{' '}
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    <br />
                  </p>
                  <h3>
                    The two main categories of encryption are{' '}
                    <strong>symmetric</strong> and <strong>asymmetric</strong>.
                  </h3>
                  <br />
                  <h3>Symmetric Encryption : </h3>
                  <br />
                  <p>
                    <strong>Symmetric encryption</strong>, also known as{' '}
                    <strong>symmetric cryptography</strong>, uses the same key
                    to encrypt and decrypt the data, as shown in the figure
                    below. Keeping the key secret is a must; it is also called{' '}
                    <strong>private key cryptography</strong>. Furthermore,
                    communicating the key to the intended parties can be
                    challenging as it requires a secure communication channel.
                    Maintaining the secrecy of the key can be a significant
                    challenge, especially if there are many recipients. The
                    problem becomes more severe in the presence of a powerful
                    adversary; consider the threat of industrial espionage, for
                    instance.
                  </p>
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage8} alt='Example' />
                    </div>
                  </div>
                  <p>
                    Consider the simple case where you created a
                    password-protected document to share it with your colleague.
                    You can easily email the encrypted document to your
                    colleague, but most likely, you cannot email them the
                    password. The reason is that anyone with access to their
                    mailbox would access both the password-protected document
                    and its password. Therefore, you need to think of a
                    different way, i.e., channel, to share the password. Unless
                    you think of a secure, accessible channel, one solution
                    would be to meet in person and communicate the password to
                    them.
                  </p>
                  <p>
                    Examples of symmetric encryption are <strong>DES</strong>{' '}
                    (Data Encryption Standard), 3DES (Triple{' '}
                    <strong>DES</strong>) and <strong>AES</strong> (Advanced
                    Encryption Standard).
                  </p>
                  <br />
                  <ol>
                    <li>
                      <strong>DES</strong> was adopted as a standard in 1977 and
                      uses a 56-bit key. With the advancement in computing
                      power, in 1999, a <strong>DES</strong> key was
                      successfully broken in less than 24 hours, motivating the
                      shift to 3DES.
                    </li>
                    <br />
                    <li>
                      <strong>3DES</strong> is DES applied three times;
                      consequently, the key size is 168 bits, though the
                      effective security is 112 bits. 3DES was more of an{' '}
                      <strong>ad</strong>-hoc solution when <strong>DES</strong>{' '}
                      was no longer considered secure. 3DES was deprecated in
                      2019 and should be replaced by <strong>AES</strong>;
                      however, it may still be found in some legacy systems.
                    </li>
                    <br />
                    <li>
                      <strong>AES</strong> was adopted as a standard in 2001.
                      Its key size can be 128, 192, or 256 bits.
                    </li>
                  </ol>
                  <p>
                    There are many more symmetric encryption ciphers used in
                    various applications; however, they have not been adopted as
                    standards.
                  </p>
                  <br />
                  <h2 className='content__title'>Asymmetric Encryption</h2>
                  <br />
                  <p>
                    Unlike symmetric encryption, which uses the same key for
                    encryption and decryption,{' '}
                    <strong>asymmetric encryption</strong> uses a pair of keys,
                    one to encrypt and the other to decrypt, as shown in the
                    illustration below. To protect confidentiality, asymmetric
                    encryption or <strong>asymmetric cryptography</strong>{' '}
                    encrypts the data using the public key; hence, it is also
                    called <strong>public key cryptography</strong>.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage9} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Examples are RSA , Diffie-Hellman, and Elliptic Curve
                    cryptography (<span>ECC</span>). The two keys involved in
                    the process are referred to as a <b>public key</b> and a{' '}
                    <b>private key</b>. Data encrypted with the public key can
                    be decrypted with the private key. Your private key needs to
                    be kept private, hence the name.
                  </p>
                  <p>
                    Asymmetric encryption tends to be slower, and many
                    asymmetric encryption ciphers use larger keys than symmetric
                    encryption. For example, <span>RSA</span> uses 2048-bit,
                    3072-bit, and 4096-bit keys; 2048-bit is the recommended
                    minimum key size. Diffie-Hellman also has a recommended
                    minimum key size of 2048 bits but uses 3072-bit and 4096-bit
                    keys for enhanced security. On the other hand,{' '}
                    <span>ECC</span> can achieve equivalent security with
                    shorter keys. For example, with a 256-bit key,{' '}
                    <span>ECC</span> provides a level of security comparable to
                    a 3072-bit <span>RSA</span> key.
                  </p>
                  <p>
                    Asymmetric encryption is based on a particular group of
                    mathematical problems that are easy to compute in one
                    direction but extremely difficult to reverse. In this
                    context, extremely difficult means practically infeasible.
                    For example, we can rely on a mathematical problem that
                    would take a very long time, for example, millions of years,
                    to solve using today’s technology.
                  </p>
                  <p>
                    We will visit various asymmetric encryption ciphers in the
                    next room. For now, the important thing to note__new--note
                    is that asymmetric encryption provides you with a public key
                    that you share with everyone and a private key that you keep
                    guarded and secret.
                  </p>
                  <br />
                  <h2 className='content__title'>Summary of New Terms :</h2>
                  <br />
                  <ol>
                    <li>
                      <strong>Alice and Bob</strong> are fictional characters
                      commonly used in cryptography examples to represent two
                      parties trying to communicate securely.
                    </li>
                    <li>
                      <strong>Symmetric encryption</strong> is a method in which
                      the same key is used for both encryption and decryption.
                      Consequently, this key must remain secure and never be
                      disclosed to anyone except the intended party.
                    </li>
                    <li>
                      <strong>Asymmetric encryption</strong> is a method that
                      uses two different keys: a public key for encryption and a
                      private key for decryption.
                    </li>
                  </ol>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/cryptography/cryptography_lab')}
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
