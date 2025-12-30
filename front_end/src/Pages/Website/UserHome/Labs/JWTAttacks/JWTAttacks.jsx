import React from 'react';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/JWT attacks/course_image.png';
import Footer from '../../Footer/Footer';
import '../../Components/Topics CSS/topics.css';
import exampleImage1 from '../../assets/img/JWT attacks/image_1.webp';
import exampleImage2 from '../../assets/img/JWT attacks/image_2.webp';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';
export default function JWTAttacks() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'JWT Attacks',
      ar: 'هجمات رموز الجلسة (JWT)',
    },
    description: {
      en: 'Master the techniques used to exploit JSON Web Tokens. Learn about common flaws like weak secrets, algorithm confusion, and how to prevent session hijacking in modern web apps.',
      ar: 'أتقن التقنيات المستخدمة لاستغلال رموز (JSON Web Tokens). تعرف على العيوب الشائعة مثل الأسرار الضعيفة، وتغيير الخوارزميات، وكيفية منع اختطاف الجلسات في تطبيقات الويب الحديثة.',
    },
    difficulty: {
      en: 'Advanced',
      ar: 'متقدم',
    },
    duration: {
      en: '45 min',
      ar: '45 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.8',
    students: '1940',
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
                  <span>Topic 1</span> Introduction
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h1 className='content__title'>Welcome to JWT Attacks</h1>

                  <h2 className='content__title'>What will you learn?</h2>
                  <ol>
                    <li>What are Obfuscation & Deobfuscation?</li>
                    <li>Why do we use Obfuscation?</li>
                    <li>Javascript Obfuscation </li>
                    <li>JS Deobfuscation Tools</li>
                  </ol>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span> Token-Based Authentication
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <div className=''>
                    <p>
                      <b>APIs</b> — those behind-the-scenes heroes of modern
                      tech — are like your favorite universal remote control.
                      They work across devices, apps, and platforms, saving
                      everyone from the chaos of having 10 different remotes (or
                      in this case, interfaces). Want a web app and a mobile app
                      talking to the same backend? <b>APIs</b> got you covered.
                      Want server-side security neatly wrapped up in one spot?{' '}
                      <b>APIs</b> again. They’re like the Swiss Army knives of
                      the digital world.
                    </p>
                    <p>
                      But wait — <b>cookies</b> weren’t invited to this party.
                      Why? Because
                      <b>APIs</b> aren’t picky eaters like browsers. They don’t
                      naturally gobble <b>cookies</b>, which made developers
                      scratch their heads and invent{' '}
                      <span>token-based session management</span>.
                    </p>
                  </div>
                  <div className=''>
                    <h4>Tokens: The Shiny New Coins of the API Realm</h4>
                    <p>
                      <b>Tokens</b> are like those VIP wristbands you get at
                      exclusive events — proof you’re authenticated and ready to
                      access the cool stuff. Unlike <b>cookies</b>,{' '}
                      <b>tokens</b> don’t depend on browsers to manage them.
                      Instead, they chill in your LocalStorage until it’s time
                      to flash them at the gates (or, you know, the <b>APIs</b>
                      ). One of the fanciest <b>tokens</b> is the{' '}
                      <span>JSON Web Token (JWT)</span>, the Beyoncé of{' '}
                      <span>session management</span>, carried proudly in the{' '}
                      <code>Authorization: Bearer</code>
                      <span>header</span>.
                    </p>
                  </div>
                  <div className=''>
                    <h4>The API Playground</h4>
                    <p>
                      Enter the <b>API</b> room, a sandbox where you’ll exploit{' '}
                      <b>APIs</b>
                      like a pro. No accounts or fancy tools needed — just a
                      <b>Python Flask API</b>, your wits, and a lot of{' '}
                      <b>cURL</b> commands. The mission? Crack open those{' '}
                      <b>API</b> endpoints, swipe some
                      <b>JWTs</b>, escalate privileges, and snatch those Topic
                      flags like a cybersecurity Indiana Jones.
                    </p>
                    <h2 className='content__title'>Here's the Cheat Sheet:</h2>
                    <ol>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              <b>POST to Authenticate:</b>Send your credentials
                              (username: user, password: passwordX) to get a
                              shiny <b>JWT</b>.
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                curl -H 'Content-Type: application/json'
                                <br />
                                -X POST -d{' '}
                                {
                                  '{ "username" : "user", "password" : "passwordX" }'
                                }
                                <br />
                                http://10.10.242.49/api/v1.0/exampleX
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              <b>GET to Verify:</b>Use the<b>JWT</b> to prove
                              your admin chops and grab that flag.
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                curl -H 'Authorization: Bearer [JWT token]'
                                <br />{' '}
                                http://10.10.242.49/api/v1.0/example2?username=Y
                              </code>
                            </pre>
                          </div>
                        </div>
                        <p>
                          The ultimate goal? Level up from regular user to admin
                          superhero and unlock your prize. And yes, you’ll do
                          this for every example, because practice makes perfect
                          (and also gets you more flags).
                        </p>
                      </li>
                      <p className='note__new--note'>
                        <b>Pro Tip:</b>Keep an eye on those permissions, and
                        don’t forget to replace placeholders like passwordX and{' '}
                        <code>[JWT token]</code>. <span>APIs</span> don’t
                        respond well to “close enough.”
                      </p>
                      <p>
                        So gear up, grab your tokens, and get ready to conquer
                        the <span>API</span> universe — one endpoint at a time.
                      </p>
                    </ol>
                  </div>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>JSON Web Tokens
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <div className=''>
                    <div className='Content__img--box'>
                      <div className='Content__img__box__over--hidden'>
                        <img src={exampleImage1} alt='Example' />
                      </div>
                    </div>
                    <p>
                      Imagine you’re at an exclusive party. You flash a fancy
                      wristband at the bouncer, and they immediately know you’re
                      legit. That’s how <b>JSON Web Tokens (JWTs)</b> work in
                      the digital world — they’re self-contained tokens that
                      scream, “I’m authenticated, let me in!”
                    </p>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>What is inside a JWT?</h2>
                    <p>
                      A <b>JWT</b> is like a digital sandwich, neatly split into
                      three layers (and yes, they’re <b>Base64Url</b> encoded
                      for extra nerd flair):
                    </p>
                    <ol>
                      <li>
                        <b>Header:</b> The top bun, where you declare what kind
                        of sandwich (<b>token</b>) this is and how it’s signed.
                        Typical ingredients include “alg”: “HS256” and “typ”:
                        “JWT”.
                      </li>
                      <li>
                        <b>Payload:</b> The meat (or tofu, for our vegans). It’s
                        packed with claims — fancy talk for bits of info like
                        user roles or session details. Some claims are standard,
                        others are custom, and developers can toss in anything
                        they want (though we’re not judging their culinary
                        skills here).
                      </li>
                      <li>
                        <b>Signature:</b> The spicy sauce. This proves the
                        sandwich hasn’t been tampered with. It’s created using
                        the <b>header</b>, <b>payload</b>, and a secret recipe (
                        <b>key</b>).
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>
                      Signing Algorithms: The Sauce Varieties
                    </h2>
                    <p>
                      <b>JWTs</b> get their authenticity from the signature, and
                      there are three main styles:
                    </p>
                    <ol>
                      <li>
                        <b>None:</b> Yup, no sauce at all. It’s basically
                        handing over a plain sandwich and hoping no one notices.
                        Spoiler: this is a terrible idea for security.
                      </li>
                      <li>
                        <b>Symmetric Signing (HS256):</b> The sauce is made with
                        a shared secret key. Both the creator and verifier need
                        to know the secret recipe. Great for cozy, in-house
                        parties.
                      </li>
                      <li>
                        <b>Asymmetric Signing (RS256):</b> Now we’re fancy. The
                        sauce is made with a <b>private key</b> and verified
                        with a matching <b>public key</b>. Perfect for big,
                        exclusive events where you can’t trust everyone with the
                        recipe.
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>Why JWTs Are Awesome</h2>
                    <p>
                      The real power of <b>JWTs</b> lies in their signature.
                      Once signed, they can travel around freely — like a VIP
                      pass that works across apps. A central authentication
                      server can issue these <b>tokens</b>, and every app in the
                      network can independently verify them. No phone calls, no
                      awkward questions, just seamless trust.
                    </p>
                    <p>
                      Oh, and if you’re feeling extra secure, you can encrypt
                      <b>JWTs</b> (called <b>JWEs</b>). But usually, the
                      signature alone does the job of keeping everything
                      trustworthy and efficient.
                    </p>
                    <p>
                      So, the next time you interact with a sleek <b>API</b> or
                      login flow, just remember — you’re holding the ultimate
                      tech wristband: the <b>JWT</b>. 🎟️
                    </p>
                  </div>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>Sensitive Information Disclosure
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <div className=''>
                    <p>
                      JWTs are great for securely transmitting information, but
                      when developers get careless, these tokens can turn into a
                      treasure map for sensitive data. Let’s dive into the world
                      of “oops, did I just expose a password in the token?”
                    </p>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>
                      The Problem: JWTs Aren’t Diaries
                    </h2>
                    <p>
                      In traditional <span>cookie-based</span> sessions, data
                      stays server-side, tucked away from prying eyes. But{' '}
                      <b>JWTs</b> send everything client-side, like a loud
                      friend who can’t keep secrets. If developers cram
                      sensitive data into the token’s payload, it’s like mailing
                      someone your diary —<span>Base64-encoded</span>, sure, but
                      still readable if someone looks hard enough.
                    </p>
                    <p>
                      Here are some classic examples of <b>JWT</b> oversharing:
                    </p>
                    <ol>
                      <li>
                        <b>Passwords:</b> Including hashed passwords — or worse,
                        plain-text ones. (Yes, this happens.)
                      </li>
                      <li>
                        <b>Internal Network Details:</b> Exposing private IPs or
                        hostnames.
                      </li>
                      <li>
                        <b>Flags or Secrets:</b> Embedding sensitive app details
                        directly in the token.
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>
                      Practical Oops Moment: An Example
                    </h2>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          Imagine this <b>cURL</b> request to authenticate a
                          user:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            curl -H 'Content-Type: application/json' -X POST -d{' '}
                            {
                              '{ "username" : "user", "password" : "password1" }'
                            }{' '}
                            http://MACHINE_IP/api/v1.0/example1
                          </code>
                        </pre>
                      </div>
                    </div>
                    <p>
                      You get a JWT token in return. Great, right? Until you
                      decode it on{' '}
                      <a
                        href='https://jwt.io/'
                        rel='noreferrer'
                        target='_blank'>
                        JWT.io
                      </a>{' '}
                      and see something like this:
                    </p>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          Imagine this <b>cURL</b> request to authenticate a
                          user:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            {'{'}
                            <br />
                            "username": "user" ,
                            <br /> "password": "password1" ,
                            <br /> "admin": 0,
                            <br /> "flag": "secret_flag" ,
                            <br />
                            {'}'}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <p>
                      Oops! Now anyone who gets their hands on this token knows
                      your password and the system’s internal workings.
                    </p>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>
                      Why This Happens: Developer Shortcut Syndrome
                    </h2>
                    <p>
                      Instead of securely storing sensitive information
                      server-side, some developers toss it all into the token
                      payload, thinking, “Eh, it’s encoded; no one will look.”
                      Bad move. <b>JWTs</b> are encoded, not encrypted, and
                      decoding them is as easy as pie (or{' '}
                      <span>Base64 decoding</span>).
                    </p>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>
                      The Fix: Keep Secrets, Well, Secret
                    </h2>
                    <p>
                      To fix this, sensitive data like passwords or flags should
                      never leave the server. Here’s the right way to handle it:
                    </p>
                    <ol>
                      <li>
                        <b>JWT Payload: </b>Only include non-sensitive
                        identifiers, like a username or user ID.
                      </li>
                      <li>
                        <b>Server-Side Storage: </b>Store the sensitive info
                        (e.g., passwords, flags) securely in the backend.
                      </li>
                      <li>
                        <b>Look It Up: </b>When you need that data, verify the
                        JWT and use the included identifiers to fetch the
                        sensitive information server-side.
                      </li>
                    </ol>
                    <p>Here’s a cleaner, safer implementation:</p>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          Imagine this <b>cURL</b> request to authenticate a
                          user:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            payload = jwt.decode(token, self.secret, algorithms=
                            "HS256" )
                            <br /> username = payload[ 'username' ]
                            <br /> flag = self.db_lookup(username, "flag" ) #
                            Fetch sensitive data server-side
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>Takeaway</h2>
                    <p>
                      <b>JWTs</b> are powerful, but with great power comes great
                      responsibility. Treat them like postcards everyone can
                      read. Keep sensitive data locked up server-side, and only
                      let <b>JWTs</b> carry what’s absolutely necessary. Because
                      no one wants their passwords and secrets turned into
                      public spectacle — especially not <span>Base64 ones</span>
                      !
                    </p>
                  </div>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 5</span>Signature Validation Mistakes
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <div className=''>
                    <h4> Not Verifying the Signature</h4>
                    <h2 className='content__title'>Problem</h2>
                    <p>
                      When a server skips signature validation, claims within a
                      <b>JWT</b> can be modified arbitrarily. Attackers can
                      strip the signature or tamper with the payload, and the
                      server won’t notice.
                    </p>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>Practical Example</h2>
                    <ol>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              <b>Authenticate using::</b>
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                curl -H 'Content-Type: application/json' -X POST
                                -d{' '}
                                {
                                  '{ "username" : "user", "password" : "password2" }'
                                }
                                <br />
                                http://10.10.94.61/api/v1.0/example2
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        <p>
                          obtain <b>JWT</b> Token.
                        </p>
                      </li>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              Remove the signature portion (everything after the
                              second dot .).
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                curl -H 'Authorization: Bearer [JWT Token]'
                                <br />
                                http://10.10.94.61/api/v1.0/example2?username=user
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        The request succeeds, proving the server isn’t
                        validating the signature.
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>Fix</h2>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          Always validate the<b>JWT</b> signature before
                          trusting claims:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            payload = jwt.decode(token, self.secret,
                            algorithms="HS256")
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h4>Algorithm Downgrade to None</h4>
                    <h2 className='content__title'>Problem</h2>
                    <p>
                      <b>JWTs</b>signed using weak symmetric keys can be cracked
                      offline, allowing attackers to forge valid tokens.
                    </p>
                    <h2 className='content__title'>Pratical Example</h2>
                    <ol>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              Edit the JWT header:
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                {'{'}
                                <br />
                                "alg": "None" ,
                                <br /> "typ": "JWT"
                                <br /> {'}'}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>Re-sign the token with no signature.</li>
                      <li>
                        Send the modified token to the server, which accepts it
                        if signature verification is improperly configured.
                      </li>
                    </ol>
                    <h2 className='content__title'>Fix</h2>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          Explicitly deny the None algorithm and restrict
                          supported algorithms:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            payload = jwt.decode(token, self.secret,
                            algorithms=["HS256", "HS384", "HS512"])
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h4>Weak Symmetric Secrets</h4>
                    <h2 className='content__title'>Problem</h2>
                    <p>
                      <b>JWTs</b> support the None algorithm, which skips
                      signature verification. Attackers can change the alg claim
                      in the <b>JWT</b> header to None, bypassing signature
                      checks entirely if developers haven’t restricted
                      algorithms.
                    </p>
                    <h2 className='content__title'>Pratical Example</h2>
                    <ol>
                      <li>
                        Save the <b>JWT</b> in a file (jwt.txt).
                      </li>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              Use a tool like Hashcat to brute-force the secret
                              key:
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                hashcat -m 16500 -a 0 jwt.txt jwt.secrets.list
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        Once cracked, use the secret to create a new token with
                        altered claims.
                      </li>
                    </ol>
                    <h2 className='content__title'>Fix</h2>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          Use a secure, randomly generated secret with high
                          entropy:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            secret = secrets.token_urlsafe(64)
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h4>Signature Algorithm Confusion</h4>
                    <h2 className='content__title'>Problem</h2>
                    <p>
                      When mixing <b>symmetric</b> (e.g., <span>HS256</span>)
                      and <b>asymmetric</b> (e.g.,
                      <span>RS256</span>) algorithms, some libraries mistakenly
                      treat the
                      <b>public key</b> of an <b>asymmetric</b> algorithm as the
                      secret for a<b>symmetric</b> algorithm, enabling token
                      forgery.
                    </p>
                    <h2 className='content__title'>Pratical Example</h2>
                    <ol>
                      <li>
                        Use the <b>public key</b> to sign a JWT with the{' '}
                        <span>HS256</span> algorithm instead of{' '}
                        <span>RS256</span>.
                      </li>
                      <li>
                        Submit the <b>token</b> to the server, which
                        misinterprets the <b>public key</b> as the{' '}
                        <b>symmetric </b> secret.
                      </li>
                    </ol>
                    <h2 className='content__title'>Fix</h2>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          Ensure the algorithm is explicitly validated and
                          process keys appropriately:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            header = jwt.get_unverified_header(token)
                            <br />
                            algorithm = header[
                            <span className='token class-name'>'alg'</span>
                            ]
                            <br />
                            if "RS" in algorithm:
                            <br /> payload = jwt.decode(token, self.public_key,
                            algorithms=[ "RS256" , "RS384" , "RS512" ])
                            <br />
                            if "HS" in algorithm:
                            <br /> payload = jwt.decode(token, self.secret,
                            algorithms=[ "HS256" , "HS384" , "HS512" ])
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h4>
                      Omitting Additional Authentication Layers for
                      Server-to-Server APIs
                    </h4>
                    <h2 className='content__title'>Problem</h2>
                    <p>
                      Server-to-server <b>APIs</b> may not properly verify{' '}
                      <b>JWTs</b> under the assumption that upstream systems
                      have already authenticated the token. This assumption is
                      risky in complex distributed systems.
                    </p>
                    <h2 className='content__title'>Fix</h2>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          Use certificates for added authentication and verify
                          JWTs explicitly:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            payload = jwt.decode(token, self.public_key,
                            algorithms=[ "RS256" ])
                          </code>
                        </pre>
                      </div>
                    </div>
                    <h2 className='content__title'>
                      Key Takeaways for Developers
                    </h2>
                    <ol>
                      <li>
                        Always validate <b>JWT</b> signatures.
                      </li>
                      <li>Deny insecure algorithms like None.</li>
                      <li>
                        Use secure, random secrets for <b>symmetric</b> signing.
                      </li>
                      <li>
                        Avoid mixing <b>symmetric</b> and <b>asymmetric</b>{' '}
                        algorithms carelessly.
                      </li>
                      <li>
                        Implement additional authentication for sensitive
                        server-to-server communications.
                      </li>
                    </ol>
                    <p>
                      Properly implemented <b>JWT</b> validation is your first
                      line of defense against forgery and exploitation. Ensure
                      your applications follow these practices to keep attackers
                      at bay!
                    </p>
                  </div>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 6</span>JWT Lifetimes
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <div className=''>
                    <p>
                      The lifetime of a <b>JWT</b> is a critical security
                      consideration. Proper management of the exp (expiration)
                      claim is essential to ensure that tokens cannot be abused
                      indefinitely. Below, we explore the key issues and
                      solutions regarding token expiration.
                    </p>
                    <h2 className='content__title'>
                      The Problem: Tokens Without Expiry
                    </h2>
                    <p>
                      <b>Issue</b>
                    </p>
                    <p>
                      If the exp claim is omitted or set too far into the
                      future, the JWT becomes persistently valid. Unlike
                      <b>cookies, JWTs</b> lack server-side expiration
                      mechanisms, making them vulnerable to misuse if they are
                      stolen or compromised.
                    </p>
                    <h2 className='content__title'>Practical Example</h2>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          The <b>JWT</b> below does not contain an exp claim,
                          making it permanently valid:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJhZG1pbiI6MX0.ko7EQiATQQzrQPwRO8ZTY37pQWGLPZWEvdWH0tVDNPU
                          </code>
                        </pre>
                      </div>
                    </div>
                    <p>
                      An attacker can use this token indefinitely unless
                      external mechanisms like token blocklists are in place to
                      revoke it.
                    </p>
                    <h2 className='content__title'>
                      The Fix: Setting an exp Claim
                    </h2>
                    <p>
                      <b>Set an Expiry Time</b>
                    </p>
                    <ol>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              Ensure that every <b>JWT</b> contains an
                              <b> exp</b> claim to define its expiration time.
                              For example:
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                import datetime
                                <br /> import jwt
                                <br /> lifetime = datetime.datetime.now() +
                                datetime.timedelta(minutes=5)
                                <br /> payload = {'{'}
                                <br /> 'username' : 'user' ,
                                <br />
                                'admin' : 0 ,
                                <br /> 'exp' : lifetime
                                <br />
                                {'}'}
                                <br />
                                access_token = jwt.encode(payload, self.secret,
                                algorithm= "HS256" )
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        This ensures that the token expires after 5 minutes.
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>
                      Enforce Expiration Checks
                    </h2>
                    <ol>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              <b>
                                Most <b>JWT</b> libraries automatically validate
                                the exp claim. If a token is expired, they will
                                raise an exception during decoding:
                              </b>
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                try:
                                <br />
                                payload = jwt.decode(token, self.secret,
                                algorithms=[ "HS256" ])
                                <br /> except jwt.ExpiredSignatureError:
                                <br /> print( "Token has expired" )
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>
                      Challenges with Token Expiry
                    </h2>
                    <p>
                      <b>Revoking Tokens Before Expiry</b>
                    </p>
                    <p>
                      To revoke a <b>token</b> before its <b>exp</b> time, you
                      need to maintain a blocklist of <b>invalidated tokens</b>.
                      This approach, while effective, partially negates the
                      decentralized nature of <b>JWTs</b>.
                    </p>
                    <p>
                      <b>Setting Appropriate Expiry Times</b>
                    </p>
                    <p>
                      The <b>exp</b> value should align with the application’s
                      security requirements:
                    </p>
                    <ol>
                      <li>
                        <b>Short Expiry: </b>Banking or sensitive applications
                        where token misuse can lead to significant consequences.
                        “JWT”.
                      </li>
                      <li>
                        <b>Long Expiry: </b> Non-sensitive applications or when
                        user convenience is prioritized, e.g., email
                        applications.
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>Refresh Tokens</h2>
                    <p>
                      Use refresh <b>tokens</b> to renew short-lived <b>JWTs</b>
                      . This involves issuing two tokens:
                    </p>
                    <ol>
                      <li>
                        <b>Access Token: </b>Short-lived and used for <b>API</b>{' '}
                        requests.
                      </li>
                      <li>
                        <b>Refresh Token: </b>Long-lived and stored securely to
                        obtain new access tokens when needed.
                      </li>
                    </ol>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          <b>Example of issuing both tokens:</b>
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            access_lifetime = datetime.datetime.now() +
                            datetime.timedelta(minutes= 5)
                            <br /> refresh_lifetime = datetime.datetime.now() +
                            datetime.timedelta(days= 30)
                            <br />
                            access_payload = {'{'}
                            <br /> 'username' : 'user' ,
                            <br /> 'admin': 0 ,
                            <br />
                            'exp' : access_lifetime
                            <br />
                            {'}'}
                            <br /> refresh_payload = {'{'}
                            <br /> 'username' : 'user' ,
                            <br /> 'exp' : refresh_lifetime
                            <br /> {'}'}
                            <br /> access_token = jwt.encode(access_payload,
                            self.secret, algorithm= "HS256" )
                            <br /> refresh_token = jwt.encode(refresh_payload,
                            self.secret, algorithm= "HS256" )
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>Key Takeaways</h2>
                    <p>
                      <b>Always Set exp</b>
                    </p>
                    <ol>
                      <li>
                        Ensure all <b>JWTs</b> have a reasonable expiration time
                        to limit the window of opportunity for misuse.
                      </li>
                    </ol>
                    <p>
                      <b>Use Refresh Tokens for Longevity</b>
                    </p>
                    <ol>
                      <li>
                        Implement a refresh token system to allow secure,
                        long-term user sessions.
                      </li>
                    </ol>
                    <p>
                      <b>Consider Token Blocklists</b>
                    </p>
                    <ol>
                      <li>
                        While it breaks the decentralized nature of
                        <b> JWTs, blocklists</b> are necessary for critical
                        applications to allow <b>token</b> revocation.
                      </li>
                    </ol>
                    <p>
                      By setting appropriate expiration times and incorporating
                      additional mechanisms like refresh <b>tokens</b> or
                      <b> blocklists</b>, you can significantly enhance the
                      security of your <b>JWT</b>
                      implementation.
                    </p>
                  </div>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 7</span>Cross-Service Relay Attacks
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <div className=''>
                    <div className='Content__img--box'>
                      <div className='Content__img__box__over--hidden'>
                        <img src={exampleImage2} alt='Example' />
                      </div>
                    </div>
                    <p>
                      <b>JWT</b> misconfigurations can lead to serious
                      vulnerabilities when used in systems where a centralized
                      authentication server serves multiple applications. The
                      <b> audience</b> (aud)<b> claim</b> is critical in these
                      scenarios to prevent <b>Cross-Service Relay attacks</b>, a
                      form of privilege escalation.
                    </p>
                  </div>

                  <div className=''>
                    <h2 className='content__title'>
                      The Problem: Cross-Service Misconfiguration
                    </h2>
                    <p>
                      <b>Cross-Service Relay Attack</b>
                    </p>
                    <ol>
                      <li>
                        When an authentication server generates <b>JWTs</b> for
                        multiple applications, the aud claim specifies which
                        application the token is intended for. If this claim is
                        not verified by the application, a token valid for one
                        service could be used on another, potentially allowing
                        unauthorized access.
                      </li>
                      <li>
                        Example: A user is an admin on <b>appB</b> but not on{' '}
                        <b>appA</b>. If appA does not verify the aud claim, the{' '}
                        <b>JWT</b> for appB could be used to gain admin
                        privileges on appA.
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>Practical Example</h2>
                    <p>
                      <b>Steps:</b>
                    </p>
                    <p>
                      <b>Authenticate to appA</b>
                    </p>
                    <ol>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              Send a login request to the centralized
                              authentication server for <b>appA:</b>
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                {'{'}
                                <br />
                                'username' : 'user' ,
                                <br /> 'password' : "password7" ,
                                <br /> 'application' : "appA"
                                <br />
                                {'}'}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        <p>
                          The server generates a <b>JWT</b> with “aud”: “appA”.
                        </p>
                        <p>Use This Token:</p>
                        <ol>
                          <li>
                            On <b>appA:</b> The request is accepted, but you’re
                            not an admin.
                          </li>
                          <li>
                            On <b>appB:</b> The token is rejected because the
                            audience is incorrect.
                          </li>
                        </ol>
                      </li>
                    </ol>
                    <p>
                      <b>Authenticate to appB</b>
                    </p>
                    <ol>
                      <li>
                        <div className='terminal-container'>
                          <div className='terminal-content'>
                            <div className='terminal-top'>
                              Send a login request for <b>appB:</b>
                            </div>
                            <pre
                              className='terminal-codelanguage-bash'
                              tabIndex='0'>
                              <code className='language-bash'>
                                {'{'}
                                <br />
                                'username' : 'user' ,
                                <br /> 'password' : "password7" ,
                                <br /> 'application' : "appB"
                                <br />
                                {'}'}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        <p>
                          The server generates a <b>JWT</b> with “aud”: “appB”.
                        </p>
                        <p>Use This Token:</p>
                        <ol>
                          <li>
                            On <b>appB:</b> The request is accepted, and you’re
                            recognized as an admin.
                          </li>
                          <li>
                            On <b>appA:</b> The request is accepted
                            <b> without verifying the</b> aud <b>claim</b>,
                            resulting in unintended admin privileges.
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>The Development Mistake</h2>
                    <p>
                      <b>Missing Audience Verification</b>
                    </p>
                    <ol>
                      <li>
                        AppA does not verify the aud claim of the <b>JWT</b>.
                      </li>
                      <li>
                        As a result, it incorrectly accepts tokens intended for
                        other services.
                      </li>
                    </ol>
                    <p>
                      <b>Overly Broad Audience Scope</b>
                    </p>
                    <ol>
                      <li>
                        If an authentication server generates <b>tokens</b> with
                        a broad aud claim (e.g., “aud”: [“appA”, “appB”]), all
                        applications might accept the <b>token</b> regardless of
                        the intended purpose.
                      </li>
                    </ol>
                    <h2 className='content__title'>The Fix</h2>
                    <p>
                      <b>Enforce Audience Claim Verification</b>
                    </p>
                    <p>
                      The application must validate the aud claim during{' '}
                      <b>token</b>
                      decoding to ensure the <b>JWT</b> is intended for that
                      specific application. Here’s an example in Python using
                      the <b>PyJWT</b>
                      library:
                    </p>
                    <div className='terminal-container'>
                      <div className='terminal-content'>
                        <div className='terminal-top'>
                          Ensure that every <b>JWT</b> contains an
                          <b> exp</b> claim to define its expiration time. For
                          example:
                        </div>
                        <pre
                          className='terminal-codelanguage-bash'
                          tabIndex='0'>
                          <code className='language-bash'>
                            import jwt
                            <br /> # Secret key and audience list
                            <br /> secret = "your_secret_key"
                            <br /> audience = [ "appA" ] # Define the expected
                            audience for this application
                            <br /> # Decode and verify the token
                            <br /> try:
                            <br /> payload = jwt.decode(token, secret,
                            audience=audience, algorithms=[ "HS256" ])
                            <br /> print( "Token is valid for this application."
                            )
                            <br /> except jwt.InvalidAudienceError:
                            <br /> print( "Invalid audience claim. Token not
                            accepted." )
                            <br /> except Exception as e:
                            <br /> print( f"Token verification failed: {'{e}'})
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>
                      Best Practices for Fixing Audience Issues
                    </h2>
                    <p>
                      <b>Set Specific Audience Claims</b>
                    </p>
                    <ol>
                      <li>
                        Ensure the authentication server includes an aud claim
                        that specifies the target application(s).
                      </li>
                    </ol>
                    <p>
                      <b>Application-Specific Enforcement</b>
                    </p>
                    <ol>
                      <li>
                        Each application must enforce strict audience
                        verification.
                      </li>
                    </ol>
                    <p>
                      <b>Minimize Audience Scope</b>
                    </p>
                    <ol>
                      <li>
                        Avoid <b>tokens</b> with broad aud claims (e.g., “aud”:
                        [“appA”, “appB”]). Assign <b>tokens</b> to single
                        audiences whenever possible.
                      </li>
                    </ol>
                  </div>
                  <div className=''>
                    <h2 className='content__title'>Key Takeaways</h2>
                    <ol>
                      <li>
                        <p>
                          <b>Always Verify the aud Claim: </b>Applications must
                          validate that a JWT is intended for them. Without
                          this, tokens can be misused across services.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Limit Audience Scope: </b>Avoid using tokens valid
                          for multiple applications unless absolutely
                          necessary..
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Implement Proper Token Validation: </b>Use robust
                          libraries to ensure the aud claim is part of the{' '}
                          <b>token</b>
                          verification processes.
                        </p>
                      </li>
                    </ol>
                    <p>
                      By addressing audience misconfigurations, you can protect
                      your systems from{' '}
                      <b>
                        Cross-Service Relay attacks and privilege escalation.
                      </b>
                    </p>
                  </div>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 8</span>Conclusion: JWTs — Not Just a Fancy
                  Acronym for “Just Wait, Trouble!”
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <div className=''>
                    <p>
                      This room was a rollercoaster ride through the world of
                      <b>JWT (JSON Web Token)</b> misconfigurations and
                      vulnerabilities. Before you leap into the wild with your
                      <b>JWTs</b>, here’s the cheat sheet to keep them behaving
                      like good little tokens:
                    </p>
                    <ol>
                      <li>
                        <p>
                          <b>Don’t Spill Secrets in JWT Claims.</b>
                        </p>
                        <p>
                          Sure, <b>JWTs</b> are encoded, but encoding ≠
                          encryption. Think of it like writing your diary in pig
                          Latin — it’s not exactly Fort Knox. Keep sensitive
                          info out of those claims.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Your Signature = Your Safety Net.</b>
                        </p>
                        <p>
                          a <b>JWT</b> is only as strong as its signature game.
                          Weak secrets or sloppy verification practices are
                          basically a welcome mat for attackers. Double-check
                          your cryptographic chops.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Expiration Dates Are a Must.</b>
                        </p>
                        <p>
                          Nobody wants a clingy token. Set expiration dates to
                          ensure no one’s carrying around ancient <b>JWTs </b>
                          like they’re trading cards.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Audience Claim: The Gatekeeper of SSO.</b>
                        </p>
                        <p>
                          In SSO environments, the audience claim is like a
                          bouncer at an exclusive club — only the right app gets
                          in. No exceptions.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b> Cryptographic Attacks: A Token’s Nightmare.</b>
                        </p>
                        <p>
                          <b>JWTs</b> rely on cryptography, so if someone cracks
                          your crypto, they’ve cracked your <b>JWT</b>. Stay
                          sharp; we’ll tackle this more in our cryptography
                          module.
                        </p>
                      </li>
                    </ol>
                    <p>
                      Oh, and we didn’t dive into <b>JWKs</b> spoofing attacks
                      in this room, but if you’re curious, there’s a whole other
                      room waiting to teach you how to channel your inner
                      cryptography ninja. 🥷
                    </p>
                    <p>
                      In short, treat your <b>JWTs</b> with care, or they’ll
                      transform from trusted tokens to Just Why, Though? tokens.
                    </p>
                  </div>
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/jwtattacks/jwtattacks_lab')}
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
