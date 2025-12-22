import React from 'react';
import '../../Components/Topics CSS/topics.css';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/linux/linux_logo.png';
import background from '../../assets/img/linux/baner_lap.png';
import Footer from '../../Footer/Footer';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/CourseLanding/CourseLanding.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function Linux() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  return (
    <>
      <Header />
      {/* Start Landing  */}
      <CourseLanding
        background={background}
        courseImage={courseImage}
        courseTitle='Linux Fundamentals'
        courseDescription='Build a solid foundation in Linux, the operating system at the
                core of many cybersecurity tools and infrastructures.'
        difficulty='Intermediate'
        duration='30 min'
        onSaveRoom={() => console.log('Room Saved!')}
        onLike={() => console.log('Liked!')}
        onDislike={() => console.log('Disliked!')}
      />
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className='Content'>
        <div className='secure-container' ref={faqSectionRef}>
          <div className='content-row'>
            <div className='content-section'>
              <dl className='topics-text'>
                {/* Single FAQ Area  */}
                <dt className='fadeInUp faq-header'>
                  <span>Topic 1</span>Running Your First few Commands
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h3 className='content__title'>
                    Running Your First few Commands
                  </h3>
                  <ul>
                    <li>
                      <p>
                        As we previously discussed, a large selling point of
                        using OSs such as Ubuntu is how lightweight they can be.
                        This, of course, doesn't come without its disadvantages,
                        where for example, often there is no GUI (Graphical User
                        Interface) or what is also known as a desktop
                        environment that we can use to interact with the machine
                        (unless it has been installed). A large part of
                        interacting with these systems is using the "Terminal".
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            This is what a terminal looks like
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 : ~ $ enter commands here
                            </code>
                          </pre>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p>
                        We need to be able to do basic functions like navigate
                        to files, output their contents and make files! The
                        commands to do so are self-explanatory (once you know
                        what they are of course...)
                      </p>
                      <p className='content__title'>
                        Let's get started with two of the first commands which I
                        have broken down in the table below:
                      </p>
                      <table className='table table-bordered table-striped text-center mx-auto table-striped text-center mx-auto'>
                        <thead class='table-dark'>
                          <tr>
                            <td>Command</td>
                            <td>Description</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>echo</td>
                            <td>Output any text that we provide</td>
                          </tr>
                          <tr>
                            <td>whoami</td>
                            <td>
                              Find out what user we're currently logged in as!
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <br />
                      <h2 className='content__title'>
                        See the snippets below for an example of each command
                        being used...
                      </h2>
                      <br />
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>Using echo</div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ echo "Hello Friend!"{' '}
                            </code>
                          </pre>
                        </div>
                      </div>
                      <br />
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using whoami to find out the username of who we're
                            logged in as
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ whoami{' '}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </li>
                  </ul>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 2</span>Interacting With the Filesystem!
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <ul>
                    <li>
                      <p>
                        So far we've only covered the{' '}
                        <code className='content__code'> echo </code>and
                        <code className='content__code'> whoami </code>
                        commands. Not all that useful when you consider things
                        that we need to do - including navigating the
                        filesystem, read and write to it as well.
                      </p>
                      <p>
                        In this Topic, we're going to be learning the commands
                        so that we can do just that. Just like the previous
                        Topic, I'll display the commands in the table in the
                        next heading & show examples of these commands being
                        used.
                      </p>
                    </li>
                    <li>
                      <h2 className='content__title'>
                        Interacting With the Filesystem
                      </h2>
                      <p>
                        As I previously stated, being able to navigate the
                        machine that you are logged into without relying on a
                        desktop environment is pretty important. After all,
                        what's the point of logging in if we can't go anywhere?
                      </p>
                      <table className='table table-bordered table-striped text-center mx-auto table-striped text-center mx-auto'>
                        <thead class='table-dark'>
                          <tr>
                            <td>Command</td>
                            <td>Full Name</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>ls</td>
                            <td>listing</td>
                          </tr>
                          <tr>
                            <td>cd</td>
                            <td>change directory</td>
                          </tr>
                          <tr>
                            <td>cat</td>
                            <td>concatenate</td>
                          </tr>
                          <tr>
                            <td>pwd</td>
                            <td>print working directory</td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li>
                      <h2 className='content__title'>
                        Listing Files in Our Current Directory (ls)
                      </h2>
                      <p>
                        Before we can do anything such as finding out the
                        contents of any files or folders, we need to know what
                        exists in the first place. This can be done using the
                        "ls" command (short for listing)
                      </p>
                      <p className='content__title'>
                        Using "ls" to to list the contents of the current
                        directory
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using "ls" to to list the contents of the current
                            directory
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ ls 'Important Files' 'My
                              Documents' notes Pictures
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p className='content__title'>
                        In the screenshot above, we can see there are the
                        following directories/folders:
                      </p>
                      <ol>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Important Files
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          My Documents
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          note__new--notes
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Pictures
                        </li>
                      </ol>
                      <p>
                        Great! You can probably take a guess as to what to
                        expect a folder to contain given by its name.
                      </p>
                      <h2 className='note__new--note'>
                        Pro tip: You can list the contents of a directory
                        without having to navigate to it by using ls and the
                        name of the directory. I.e.{' '}
                        <span id='note__new--note-span'>ls Pictures</span>
                      </h2>
                    </li>
                    <li>
                      <h2 className='content__title'>
                        Changing Our Current Directory (cd)
                      </h2>
                      <p>
                        Now that we know what folders exist, we need to use the
                        <code className='content__code'> cd </code>command
                        (short for change directory) to change to that
                        directory. Say if I wanted to open the "Pictures"
                        directory - I'd do{' '}
                        <code className='content__code'>cd Pictures</code>.
                        Where again, we want to find out the contents of this
                        "Pictures" directory and to do so, we'd use{' '}
                        <code className='content__code'>ls</code> again:
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Listing our new directory after we have used "cd"
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 : ~/Pictures $ ls
                              <br /> dog_picture1.jpg dog_picture2.jpg
                              dog_picture3.jpg dog_picture4.jpg
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        In this case, it looks like there are 4 pictures of
                        dogs!
                      </p>
                    </li>
                    <li>
                      <h2 className='content__title'>
                        Outputting the Contents of a File (cat)
                      </h2>
                      <p>
                        Whilst knowing about the existence of files is great —
                        it's not all that useful unless we're able to view the
                        contents of them.
                      </p>
                      <p>
                        We will come on to discuss some of the tools available
                        to us that allows us to transfer files from one machine
                        to another in a later room. But for now, we're going to
                        talk about simply seeing the contents of text files
                        using a command called{' '}
                        <code className='content__code'>cat</code>.
                      </p>
                      <p>
                        <code className='content__code'>Cat</code> is short for
                        concatenating & is a fantastic way for us to output the
                        contents of files (not just text files!).
                      </p>
                      <p>
                        In the screenshot below, you can see how I have combined
                        the use of <code className='content__code'>ls</code> to
                        list the files within a directory called "Documents":
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using "ls" to to list the contents of the current
                            directory
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 : ~/Documents $ ls
                              <br />
                              todo.txt
                              <br /> CyberLabs@linux1 : ~/Documents $ cat
                              todo.txt
                              <br /> Here's something important for me to do
                              later!
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        We've applied some knowledge from earlier in this Topic
                        to do the following:
                      </p>
                      <ol>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Used <code className='content__code'>ls</code> to let
                          us know what files are available in the "Documents"
                          folder of this machine. In this case, it is called{' '}
                          <code className='content__code'>todo.txt</code>.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          We have then used{' '}
                          <code className='content__code'>cat todo.txt</code> to
                          concatenate/output the contents of this "todo.txt"
                          file, where the contents are "Here's something
                          important for me to do later!"
                        </li>
                      </ol>
                      <h2 className='note__new--note'>
                        Pro tip: You can use{' '}
                        <code className='content__code'>cat</code> to output the
                        contents of a file within directories without having to
                        navigate to it by using cat and the name of the
                        directory. I.e. <br />
                        <span
                          id='note__new--note-span'
                          style={{
                            display: 'inline-block',
                            marginTop: '15px',
                          }}>
                          {' '}
                          cat /home/ubuntu/Documents/todo.txt
                        </span>
                      </h2>
                      <p>
                        Sometimes things like usernames, passwords (yes -
                        really...), flags or configuration settings are stored
                        within files where "cat" can be used to retrieve these.
                      </p>
                    </li>
                    <li>
                      <h2 className='content__title'>
                        Finding out the full Path to our Current Working
                        Directory (pwd)
                      </h2>
                      <p>
                        You'll notice as you progress through navigating your
                        Linux machine, the name of the directory that you are
                        currently working in will be listed in your terminal.
                      </p>
                      <p>
                        It's easy to lose track of where we are on the
                        filesystem exactly, which is why I want to introduce{' '}
                        <code className='content__code'>pwd</code>. This stands
                        for print working directory.
                      </p>
                      <p>
                        Using the example machine from before, we are currently
                        in the "Documents" folder — but where is this exactly on
                        the Linux machine's filesystem? We can find this out
                        using this "pwd" command like within the screenshot
                        below:
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using "pwd" to list the full path of the current
                            directory
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 : ~/Documents $ pwd
                              /home/ubuntu/Documents
                              <br />
                              CyberLabs@linux1 : ~/Documents $
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>Let's break this down:</p>
                      <ol>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          We already know we're in "Documents" thanks to our
                          terminal, but at this point in time, we have no idea
                          where "Documents" is stored so that we can get back to
                          it easily in the future.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          I have used the{' '}
                          <code className='content__code'>pwd</code> (print
                          working directory) command to find the full file path
                          of this "Documents" folder.
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          We're helpfully told by Linux that this "Documents"
                          directory is stored at "/home/ubuntu/Documents" on the
                          machine — great to know!
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Now in the future, if we find ourselves in a different
                          location, we can just use
                          <code className='content__code'>
                            {' '}
                            cd /home/ubuntu/Documents
                          </code>{' '}
                          to change our working directory to this "Documents"
                          directory.
                        </li>
                      </ol>
                    </li>
                  </ul>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 3</span>Searching for Files
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <ul>
                    <li>
                      <p>
                        Although it doesn't seem like it so far, one of the
                        redeeming features of Linux is truly how efficient you
                        can be with it. With that said, you can only be as
                        efficient as you are familiar with it of course. As you
                        interact with OSs such as Ubuntu over time, essential
                        commands like those we've already covered will start to
                        become muscle-memory.
                      </p>
                      <p>
                        One fantastic way to show just how efficient you can be
                        with systems like this is using a set of commands to
                        quickly search for files across the entire system that
                        our user has access to. No need to consistently use
                        <code className='content__code'> cd </code>
                        and <code className='content__code'>ls</code> to find
                        out what is where. Instead, we can use commands such as{' '}
                        <code className='content__code'>find </code> to automate
                        things like this for us!
                      </p>
                      <p>
                        This is where Linux starts to become a bit more
                        intimidating to approach -- but we'll break this down
                        and ease you into it.
                      </p>
                    </li>
                    <li>
                      <h2 className='content__title'>Using Find</h2>
                      <p>
                        The find command is fantastic in the sense that it can
                        be used both very simply or rather complex depending
                        upon what it is you want to do exactly. However, let's
                        stick to the fundamentals first.
                      </p>
                      <p>
                        Take the snippet below; we can see a list of directories
                        available to us:
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using "ls" to list the contents of the current
                            directory
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ ls Desktop Documents
                              Pictures folder1
                              <br /> CyberLabs@linux1 :~ $
                            </code>
                          </pre>
                        </div>
                      </div>
                      <h3 className='content__title'>
                        we can see a list of directories available to us:
                      </h3>
                      <ol>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Desktop
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Documents
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          Pictures
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          folder1
                        </li>
                      </ol>
                      <p>
                        Now, of course, directories can contain even more
                        directories within themselves. It becomes a headache
                        when we're having to look through every single one just
                        to try and look for specific files. We can use
                        <code className='content__code'> find</code> to do just
                        this for us!
                      </p>
                      <p>
                        Let's start simple and assume that we already know the
                        name of the file we're looking for — but can't remember
                        where it is exactly! In this case, we're looking for
                        "passwords.txt"
                      </p>
                      <p>
                        If we remember the filename, we can simply use
                        <code className='content__code'>
                          {' '}
                          find -name passwords.txt
                        </code>{' '}
                        where the command will look through every folder in our
                        current directory for that specific file like so:
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using "find" to find a file with the name of
                            "passwords.txt"
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ find -name passwords.txt
                              <br />
                              ./folder1/passwords.txt
                              <br />
                              CyberLabs@linux1 :~ $
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        "Find" has managed to find the file — it turns out it is
                        located in folder1/passwords.txt — sweet. But let's say
                        that we don't know the name of the file, or want to
                        search for every file that has an extension such as
                        ".txt". Find let's us do that too!
                      </p>
                      <p>
                        We can simply use what's known as a wildcard (*) to
                        search for anything that has .txt at the end. In our
                        case, we want to find every .txt file that's in our
                        current directory. We will construct a command such as
                        <code className='content__code'>find -name *.txt </code>
                        . Where "Find" has been able to find every .txt file and
                        has then given us the location of each one:
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using "find" to find any file with the extension of
                            ".txt"
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ find -name *.txt
                              <br /> ./folder1/passwords.txt
                              <br /> ./Documents/todo.txt
                              <br /> CyberLabs@linux1 :~ $
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>Find has managed to find:</p>
                      <ol>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          "passwords.txt" located within "folder1"
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className='me-2 text-warning'
                          />
                          "todo.txt" located within "Documents"
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h2 className='content__title'>Using Grep</h2>
                      <p>
                        Another great utility that is a great one to learn about
                        is the use of{' '}
                        <code className='content__code'>grep</code>. The{' '}
                        <code className='content__code'>grep </code>
                        command allows us to search the contents of files for
                        specific values that we are looking for.
                      </p>
                      <p>
                        Take for example, the access log of a web server. In
                        this case, the access.log of a web server has 244
                        entries.
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using "wc" to count the number of entries in
                            "access.log"
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ wc -l access.log
                              <br />
                              244 access.log
                              <br /> CyberLabs@linux1 :~ $
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        Using a command like{' '}
                        <code className='content__code'>cat</code> isn't going
                        to cut it too well here. Let's say for example if we
                        wanted to search this log file to see the things that a
                        certain user/IP address visited? Looking through 244
                        entries isn't all that efficient considering we want to
                        find a specific value.
                      </p>
                      <p>
                        We can use <code className='content__code'>grep</code>{' '}
                        to search the entire contents of this file for any
                        entries of the value that we are searching for. Going
                        with the example of a web server's access log, we want
                        to see everything that the IP address "81.143.211.90"
                        has visited (note__new--note that this is fictional)
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using "grep" to find any entries with the IP address
                            of "81.143.211.90" in "access.log"
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ grep "81.143.211.90"{' '}
                              access.log
                              <br /> 81.143.211.90 - - [25/Mar/2021:11:17 +
                              0000] "GET / HTTP/1.1" 200 417 "-" "Mozilla/5.0
                              (Linux; Android 7.0; Moto G(4))"
                              <br /> CyberLabs@linux1 :~ $
                            </code>
                          </pre>
                        </div>
                      </div>
                      <p>
                        "Grep" has searched through this file and has shown us
                        any entries of what we've provided and that is contained
                        within this log file for the IP.
                      </p>
                    </li>
                  </ul>
                </dd>
                <dt className='fadeInUp faq-header'>
                  <span>Topic 4</span>An Introduction to Shell Operators
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <ul>
                    <li>
                      <p>
                        Linux operators are a fantastic way to power up your
                        knowledge of working with Linux. There are a few
                        important operators that are worth noting. We'll cover
                        the basics and break them down accordingly to bite-sized
                        chunks.
                      </p>
                      <p>
                        At an overview, I'm going to be showcasing the following
                        operators:
                      </p>
                      <table className='table table-bordered table-striped text-center mx-auto'>
                        <thead class='table-dark'>
                          <tr>
                            <td>Symbol / Operator </td>
                            <td>Description</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>&</td>
                            <td>
                              This operator allows you to run commands in the
                              background of your terminal.
                            </td>
                          </tr>
                          <tr>
                            <td>&&</td>
                            <td>
                              This operator allows you to combine multiple
                              commands together in one line of your terminal.
                            </td>
                          </tr>
                          <tr>
                            <td>&gt;</td>
                            <td>
                              This operator is a redirector - meaning that we
                              can take the output from a command (such as using
                              cat to output a file) and direct it elsewhere.
                            </td>
                          </tr>
                          <tr>
                            <td>&gt;&gt;</td>
                            <td>
                              This operator does the same function of the{' '}
                              <code className='content__code'>&gt;</code>{' '}
                              operator but appends the output rather than
                              replacing (meaning nothing is overwritten).
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>Let's cover these in a bit more detail.</p>
                    </li>
                    <li>
                      <h2 className='content__title'>Operator "&"</h2>
                      <p>
                        This operator allows us to execute commands in the
                        background. For example, let's say we want to copy a
                        large file. This will obviously take quite a long time
                        and will leave us unable to do anything else until the
                        file successfully copies.
                      </p>
                      <p>
                        The "&" shell operator allows us to execute a command
                        and have it run in the background (such as this file
                        copy) allowing us to do other things!
                      </p>
                    </li>
                    <li>
                      <h2 className='content__title'>Operator "&&"</h2>
                      <p>
                        This shell operator is a bit misleading in the sense of
                        how familiar is to its partner "&". Unlike the "&"
                        operator, we can use "&&" to make a list of commands to
                        run for example{' '}
                        <code className='content__code'>
                          command1 && command2
                        </code>
                        . However, it's worth noting that{' '}
                        <code className='content__code'>command2 </code>
                        will only run if{' '}
                        <code className='content__code'>command2</code> was
                        successful.
                      </p>
                    </li>
                    <li>
                      <h2 className='content__title'>Operator "&gt;"</h2>
                      <p>
                        This operator is what's known as an output redirector.
                        What this essentially means is that we take the output
                        from a command we run and send that output to somewhere
                        else.
                      </p>
                      <p>
                        A great example of this is redirecting the output of the
                        <code className='content__code'> echo</code> command
                        that we learned in Topic 4. Of course, running something
                        such as
                        <code className='content__code'> echo howdy </code>will
                        return "howdy" back to our terminal — that isn't super
                        useful. What we can do instead, is redirect "howdy" to
                        something such as a new file!
                      </p>
                      <p>
                        Let's say we wanted to create a file named "welcome"
                        with the message "hey". We can run
                        <code className='content__code'>
                          {' '}
                          echo hey &gt; welcome
                        </code>{' '}
                        where we want the file created with the contents "hey"
                        like so:
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using the &gt; Operator
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ echo hey &gt; welcome
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using cat to output the "welcome" file
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ cat welcome
                              <br />
                              hey
                            </code>
                          </pre>
                        </div>
                      </div>
                      <h2 className='note__new--note'>
                        note__new--note: If the file i.e. "welcome" already
                        exists, the contents will be overwritten!
                      </h2>
                    </li>
                    <li>
                      <h2 className='content__title'>Operator "&gt;&gt;"</h2>
                      <p>
                        This operator is also an output redirector like in the
                        previous operator{' '}
                        <code className='content__code'>&gt;</code> we
                        discussed. However, what makes this operator different
                        is that rather than overwriting any contents within a
                        file, for example, it instead just puts the output at
                        the end.
                      </p>
                      <p>
                        Following on with our previous example where we have the
                        file "welcome" that has the contents of "hey". If were
                        to use echo to add "hello" to the file using the
                        <code className='content__code'> &gt;</code> operator,
                        the file will now only have "hello" and not "hey".
                      </p>
                      <p>
                        The <code className='content__code'>&gt;&gt;</code>{' '}
                        operator allows to append the output to the bottom of
                        the file — rather than replacing the contents like so:
                      </p>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using the &gt;&gt; Operator
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ echo hello &gt;&gt; welcome
                            </code>
                          </pre>
                        </div>
                      </div>
                      <div className='terminal-container'>
                        <div className='terminal-content'>
                          <div className='terminal-top'>
                            Using cat to output the "welcome" file
                          </div>
                          <pre
                            className='terminal-code language-bash'
                            tabIndex='0'>
                            <code className='language-bash'>
                              CyberLabs@linux1 :~ $ cat welcome
                              <br />
                              hey <br /> hello
                            </code>
                          </pre>
                        </div>
                      </div>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>

            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/linux/linux_lab')}
                className='go-to'>
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
