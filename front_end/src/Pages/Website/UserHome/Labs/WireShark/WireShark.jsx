import React from 'react';
import '../../Components/Topics CSS/topics.css';
import Header from '../../Header/Header';
import courseImage from '../../assets/img/wireshark/course_image.png';
import Footer from '../../Footer/Footer';
import exampleImage1 from '../../assets/img/wireshark/course_image.png';
import exampleImage2 from '../../assets/img/wireshark/1.png';
import exampleImage3 from '../../assets/img/wireshark/3.png';
import exampleImage4 from '../../assets/img/wireshark/4.png';
import exampleImage5 from '../../assets/img/wireshark/5.png';
import exampleImage6 from '../../assets/img/wireshark/6.png';
import exampleImage7 from '../../assets/img/wireshark/7.png';
import exampleImage8 from '../../assets/img/wireshark/8.png';
import exampleImage9 from '../../assets/img/wireshark/9.png';
import exampleImage10 from '../../assets/img/wireshark/10.png';
import exampleImage11 from '../../assets/img/wireshark/11.png';
import exampleImage12 from '../../assets/img/wireshark/12.png';
import exampleImage13 from '../../assets/img/wireshark/13.png';
import exampleImage14 from '../../assets/img/wireshark/14.png';
import exampleImage15 from '../../assets/img/wireshark/15.png';
import exampleImage16 from '../../assets/img/wireshark/16.png';
import exampleImage17 from '../../assets/img/wireshark/17.png';
import exampleImage18 from '../../assets/img/wireshark/18.png';
import exampleImage19 from '../../assets/img/wireshark/19.png';
import exampleImage20 from '../../assets/img/wireshark/20.png';
import exampleImage21 from '../../assets/img/wireshark/21.png';
import exampleImage22 from '../../assets/img/wireshark/22.png';
import exampleImage23 from '../../assets/img/wireshark/23.png';
import exampleImage24 from '../../assets/img/wireshark/24.png';
import exampleImage25 from '../../assets/img/wireshark/25.png';
import exampleImage26 from '../../assets/img/wireshark/26.png';
import exampleImage27 from '../../assets/img/wireshark/27.png';
import exampleImage28 from '../../assets/img/wireshark/28.png';
import exampleImage29 from '../../assets/img/wireshark/29.png';
import exampleImage30 from '../../assets/img/wireshark/30.png';
import UseFaqSection from '../../Components/UseFaqSection/UseFaqSection.jsx';
import CourseLanding from '../../Components/Landing/CourseLanding.jsx';

export default function WireShark() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();
  const data = {
    title: {
      en: 'Wireshark',
      ar: 'برنامج واير شارك (Wireshark)',
    },
    description: {
      en: "Learn to capture and analyze network traffic using the world's leading protocol analyzer. Master the art of packet inspection, network troubleshooting, and security analysis.",
      ar: 'تعلم كيفية التقاط وتحليل حركة مرور الشبكة باستخدام المحلل الرائد عالمياً للبروتوكولات. أتقن فن فحص الحزم (Packets)، واستكشاف أخطاء الشبكة، والتحليل الأمني.',
    },
    difficulty: {
      en: 'Intermediate',
      ar: 'متوسط',
    },
    duration: {
      en: '55 min',
      ar: '55 دقيقة',
    },
    courseImage: courseImage,
    instructor: 'CyberLab',
    rating: '4.9',
    students: '3750',
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
                  <span>step 1</span> Introduction
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h2 className='content__title'>Wireshark Fundamentals</h2>
                  <br />
                  <p>
                    Wireshark, a tool used for creating and analyzing PCAPs
                    (network packet capture files), is commonly used as one of
                    the best packet analysis tools. In this room, we will look
                    at the basics of installing Wireshark and using it to
                    perform basic packet analysis and take a deep look at each
                    common networking protocol.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage1} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    PCAPs used in this room have been sourced from the Wireshark
                    Sample Captures Page as well as captures from various
                    members of the TryHackMe community. All credit goes to the
                    respective owners.
                  </p>
                  <br />
                  <h2 className='content__title'>Installation :</h2>
                  <br />
                  <p>
                    The installation for Wireshark is very easy and typically
                    comes with a packaged GUI wizard. Luckily if you're using
                    Kali Linux then it is already installed on your machine.
                    Wireshark can run on Windows, macOS, and Linux. To begin
                    installing Wireshark on a Windows or macOS device you will
                    need to first grab an installer from the Wireshark website.
                    Once you have downloaded an installer, simply run it and
                    follow the GUI wizard.
                  </p>
                  <p>
                    If you are using Linux you can install Wireshark with apt
                    install wireshark or a similar package manager.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage2} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    note__new--note: Wireshark can come with other packages and
                    tools; you can decide whether or not you want to install
                    them along with Wireshark.
                  </p>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span>step 2</span> Wireshark Overview
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <h2 className='content__title'>Wireshark Overview :</h2>
                  <br />
                  <p>
                    The first screen that we are greeted by when opening
                    Wireshark is the main page that will allow us to specify our
                    interface(s) as well as apply filters to narrow down traffic
                    that we are capturing.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage3} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Here you can see that I have multiple interfaces to filter
                    from you may have more or fewer interfaces than I have. From
                    here we can choose whether we want to perform a live capture
                    on our interface(s) or load a PCAP for analysis.
                  </p>
                  <p>
                    It is useful to note__new--note that the graphs next to the
                    interface names show the activity on the interface, if an
                    interface has a flat bar it may be useless to attempt to
                    capture on it (as no data on that interface is being picked
                    up by the Wireshark client).
                  </p>
                  <br />
                  <h4>Live Packet Captures :</h4>
                  <br />
                  <p>
                    If we begin by navigating to the green ribbon in Wireshark
                    and select Manage Capture Filters we can view a list of
                    available filters.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage4} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    You do not have to select a filter, it will only help to
                    bring down the number of packets being brought in and
                    organize the capture. This is only a brief introduction to
                    filters for more information about filters go to Topic 12 or
                    go to the Wireshark Website.
                  </p>
                  <p>
                    Once you have any capture filters you want selected, you can
                    begin a capture on an interface by double-clicking the
                    interface or by right-clicking and navigating to Start
                    Capture.
                  </p>
                  <p>
                    Depending on the network activity you may see no packets
                    coming in or you may see packets streaming in very quickly.
                  </p>
                  <p>
                    Once you're done gathering the packets you need or want, you
                    can click the red square to stop capturing, and then you can
                    begin your analysis.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage5} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Looking at the screenshot above we see a sample capture.
                    This screen is where you will do most of your analysis and
                    dissection of packets. To open a packet capture go to File :
                    Open : and select what PCAP you want to analyze.
                  </p>
                  <p>
                    From this screen, Wireshark gives us some important info
                    about each packet including:
                  </p>
                  <br />
                  <ol>
                    <li>Packet Number</li>
                    <li>Time</li>
                    <li>Source</li>
                    <li>Destination</li>
                    <li>Protocol</li>
                    <li>Length</li>
                    <li>Packet Info</li>
                  </ol>
                  <br />
                  <p>
                    Along with quick packet information, Wireshark also color
                    codes packets in order of danger level as well as protocol
                    to be able to quickly spot anomalies and protocols in
                    captures.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage6} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    This quick glance at packet information can be useful to
                    track down exactly what you're looking for during analysis.
                  </p>
                  <p>
                    Play around with the menus and various features of Wireshark
                    to get a feel for it, some of the features we will be going
                    into further detail within later Topics.
                  </p>
                  <br />
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> step 3</span>Collection Methods
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <p>
                    Before going into detail about how to analyze each protocol
                    in a PCAP we need to understand the ways to gather a PCAP
                    file. The basic steps to gather a PCAP in Wireshark itself
                    can be simple however bringing into traffic can both the
                    hard part as well as the fun part, this can include: taps,
                    port mirroring, MAC floods, ARP Poisoning. This room will
                    not cover how to set up these various strategies of live
                    packet capturing and will only cover the basic theory of
                    each.
                  </p>
                  <br />
                  <h4>Collection Methods Overview :</h4>
                  <p>
                    Some things to think about before going headfirst into
                    attempting to collect and monitor live packet captures.
                  </p>
                  <ol>
                    <li>
                      Begin by starting with a sample capture to ensure that
                      everything is correctly set up and you are successfully
                      capturing traffic.
                    </li>
                    <li>
                      Ensure that you have enough compute power to handle the
                      number of packets based on the size of the network, this
                      will obviously vary network by network.
                    </li>
                    <li>
                      Ensure enough disk space to store all of the packet
                      captures.
                    </li>
                  </ol>
                  <p>
                    Once you meet all these criteria and have a collection
                    method picked out you can begin to actively monitor and
                    collect packets on a network.
                  </p>
                  <br />
                  <h4>Network Taps :</h4>
                  <br />
                  <p>
                    Network taps are a physical implant in which you physically
                    tap between a cable, these techniques are commonly used by
                    Threat Hunting/DFIR teams and red teams in an engagement to
                    sniff and capture packets.
                  </p>
                  <p>
                    There are two primary means of tapping a wire. The first is
                    by using hardware to tap the wire and intercept the traffic
                    as it comes across, an example of this would be a vampire
                    tap as pictured below.
                  </p>
                  <p>
                    Another option for planting a network tap would be an inline
                    network tap, which you would plant between or 'inline' two
                    network devices. The tap will replicate packets as they pass
                    the tap. An example of this tap would be the very common
                    Throwing Star LAN Tap
                  </p>
                  <br />
                  <h4>MAC Floods :</h4>
                  <br />
                  <p>
                    MAC Floods are a tactic commonly used by red teams as a way
                    of actively sniffing packets. MAC Flooding is intended to
                    stress the switch and fill the CAM table. Once the CAM table
                    is filled the switch will no longer accept new MAC addresses
                    and so in order to keep the network alive, the switch will
                    send out packets to all ports of the switch.
                  </p>
                  <p>
                    note__new--note: This technique should be used with extreme
                    caution and with explicit prior consent.
                  </p>
                  <br />
                  <h4>ARP Poisoning :</h4>
                  <br />
                  <p>
                    ARP Poisoning is another technique used by red teams to
                    actively sniff packets. By ARP Poisoning you can redirect
                    the traffic from the host(s) to the machine you're
                    monitoring from. This technique will not stress network
                    equipment like MAC Flooding however should still be used
                    with caution and only if other techniques like network taps
                    are unavailable.
                  </p>
                  <p>
                    Combining these methods with your previous knowledge of
                    capturing traffic from the previous Topic will allow you to
                    proactively monitor and collect live packet captures from
                    scratch.
                  </p>
                  <br />
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> step 4</span> Filtering Captures{' '}
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <h3>Filtering Captures :</h3>
                  <p>
                    Packet Filtering is a very important part of packet analysis
                    especially when you have a very large number of packet
                    sometimes even 100,000 plus. In Topic 3 capture filters were
                    briefly covered however there is a second type of filter
                    that is often thought of as more powerful and easier to use.
                    This second method is known as display captures, you can
                    apply display captures in two ways: through the analyze tab
                    and at the filter bar at the top of the packet capture.
                  </p>
                  <br />
                  <h4>Filtering Operators :</h4>
                  <br />
                  <p>
                    Wireshark's filter syntax can be simple to understand making
                    it easy to get a hold of quickly. To get the most out of
                    these filters you need to have a basic understanding of
                    boolean and logic operators.
                  </p>
                  <p>
                    Wireshark only has a few that you will need to be familiar
                    with :{' '}
                  </p>
                  <ol>
                    <li>and - operator: and / &&</li>
                    <li>or - operator: or / ||</li>
                    <li>equals - operator: eq / ==</li>
                    <li>not equal - operator: ne / !=</li>
                    <li>greater than - operator: gt / &gt;</li>
                    <li>less than - operator: lt / &lt;</li>
                  </ol>
                  <p>
                    Wireshark also has a few other operators that go beyond the
                    power of normal logical operators. These operators are the
                    contains, matches, and bitwise_and operators. These
                    operators can be very useful when you have a large capture
                    and need to pinpoint a single packet. They are out of scope
                    for this room however I recommend doing your own research,
                    the Wireshark Filtering Documentation can be a great
                    starting point.
                  </p>
                  <br />
                  <h4>Basic Filtering</h4>
                  <p>
                    Filtering gives us a very large scope of what we can do with
                    the packets, because of this there can be a lot of different
                    filtering syntax options. We will only be covering the very
                    basics in this room such as filtering by IP, protocol, etc.
                    for more information on filtering check out the Wireshark
                    filtering documentation.
                  </p>
                  <p>
                    There is a general syntax to the filter commands however
                    they can be a little silly at times. The basic syntax of
                    Wireshark filters is some kind of service or protocol like
                    ip or tcp, followed by a dot then whatever is being filtered
                    for example an address, MAC, SRC, protocol, etc.
                  </p>
                  <p>
                    Filtering by IP: The first filter we will look at is
                    ip.addr, this filter will allow you to comb through the
                    traffic and only see packets with a specific IP address
                    contained in those packets, whether it be from the source or
                    destination.
                  </p>
                  <span>Syntax: ip.addr == &lt;IP Address&gt;</span>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage7} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    This filter can be handy in practical applications, say when
                    you are threat hunting, and have identified a potentially
                    suspicious host with other tools, you can use Wireshark to
                    further analyze the packets coming from that device.
                  </p>
                  <p>
                    Filtering by SRC and DST: The second filter will look at is
                    two in one as well as a filter operator: ip.src and ip.dst.
                    These filters allow us to filter the traffic by the source
                    and destination from which the traffic is coming from.
                  </p>
                  <p>
                    Syntax:{' '}
                    <span>
                      ip.src == &lt;SRC IP Address&gt; and ip.dst == &lt;DST IP
                      Address&gt;
                    </span>
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage8} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Similar to the first filter we can see that Wireshark is
                    combing through the packets and filtering based on the
                    source and destination we set.
                  </p>
                  <p>
                    Filtering by TCP Protocols: The last filter that we will be
                    covering is the protocol filter, this allows you to set a
                    port or protocol to filter by and can be handy when trying
                    to keep track of an unusual protocol or port being used.
                  </p>
                  <p>
                    It is worthwhile to mention that Wireshark can filter by
                    both port numbers as well as protocol names.
                  </p>
                  <p>
                    Syntax:{' '}
                    <span>
                      tcp.port eq &lt;Port #&gt; or &lt;Protocol Name&gt;
                    </span>
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage9} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Filtering by UDP Protocols: You can also filter by UDP ports
                    by changing the prefix from tcp to udp
                  </p>
                  <p>
                    Syntax:{' '}
                    <span>
                      udp.port eq &lt;Port #&gt; or &lt;Protocol Name&gt;
                    </span>
                  </p>
                  <p>
                    That is the end of filtering for this Topic however I
                    recommend you play around with other filters and operators
                    on your own. Once you're ready move on to step 5.
                  </p>
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> Step 6 </span> Packet Dissection
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <p>
                    This section covers how Wireshark uses OSI layers to break
                    down packets and how to use these layers for analysis. It is
                    expected that you already have background knowledge of what
                    the OSI model is and how it works.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage10} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h4>Packet Details : </h4>
                  <p>
                    You can double click on a packet in capture to open its
                    details. Packets consist of 5 to 7 layers based on the OSI
                    model. We will go over all of them in an HTTP packet from a
                    sample capture.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage11} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Looking above we can see 7 distinct layers to the packet:
                    frame/packet, source [MAC], source [IP], protocol, protocol
                    errors, application protocol, and application data. Below we
                    will go over the layers in more detail.
                  </p>
                  <br />
                  <ol>
                    <li>
                      Frame (Layer 1) -- This will show you what frame / packet
                      you are looking at as well as details specific to the
                      Physical layer of the OSI model.
                    </li>
                  </ol>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage12} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <ol>
                    <li>
                      Source [MAC] (Layer 2) -- This will show you the source
                      and destination MAC Addresses; from the Data Link layer of
                      the OSI model.
                    </li>
                  </ol>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage13} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <ol>
                    <li>
                      Source [IP] (Layer 3) -- This will show you the source and
                      destination IPv4 Addresses; from the Network layer of the
                      OSI model.
                    </li>
                  </ol>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage14} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <ol>
                    <li>
                      Protocol (Layer 4) -- This will show you details of the
                      protocol used (UDP/TCP) along with source and destination
                      ports; from the Transport layer of the OSI model.
                    </li>
                  </ol>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage15} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <ol>
                    <li>
                      Protocol Errors -- This is a continuation of the 4th layer
                      showing specific segments from TCP that needed to be
                      reassembled.
                    </li>
                  </ol>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage16} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <ol>
                    <li>
                      Application Protocol (Layer 5) -- This will show details
                      specific to the protocol being used such HTTP, FTP, SMB,
                      etc. From the Application layer of the OSI model.
                    </li>
                  </ol>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage17} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <ol>
                    <li>
                      Application Data -- This is an extension of layer 5 that
                      can show the application-specific data.
                    </li>
                  </ol>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage18} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Now that we understand what a general packet is composed of,
                    move on to looking at various application protocols and
                    their specific details.
                  </p>
                  <br />
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> Step 7</span>ARP Traffic
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <h4>ARP Overview </h4>
                  <p>
                    ARP or Address Resolution Protocol is a Layer 2 protocol
                    that is used to connect IP Addresses with MAC Addresses.
                    They will contain REQUEST messages and RESPONSE messages. To
                    identify packets the message header will contain one of two
                    operation codes:
                  </p>
                  <ol>
                    <li>Request (1)</li>
                    <li>Reply (2)</li>
                  </ol>
                  <br />
                  <p>
                    Below you can see a packet capture of multiple ARP requests
                    and replies.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage19} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    It is useful to note__new--note that most devices will
                    identify themselves or Wireshark will identify it such as
                    Intel_78, an example of suspicious traffic would be many
                    requests from an unrecognized source. You need to enable a
                    setting within Wireshark however to resolve physical
                    addresses. To enable this feature, navigate to View &gt;
                    Name Resolution &gt; Ensure that Resolve Physical Addresses
                    is checked
                  </p>
                  <p>
                    Looking at the below screenshot we can see that a Cisco
                    device is sending ARP Requests, meaning that we should be
                    able to trust this device, however you should always stay on
                    the side of caution when analyzing packets.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage20} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h2 className='content__title'>ARP Traffic Overview </h2>
                  <h4>ARP Request Packets : </h4>
                  <p>
                    We can begin analyzing packets by looking at the first ARP
                    Request packet and looking at the packet details.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage21} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Looking at the packet details above, the most important
                    details of the packet are outlined in red. The Opcode is
                    short for operation code and will you tell you whether it is
                    an ARP Request or Reply. The second outlined detail is to
                    where the packet is requesting to, in this case, it is
                    broadcasting the request to all.
                  </p>
                  <br />
                  <h4>ARP Reply Packets:</h4>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage22} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Looking at the above packet details we can see from the
                    Opcode that it is an ARP Reply packet. We can also get other
                    useful information like the MAC and IP Address that was sent
                    along with the reply since this is a reply packet we know
                    that this was the information sent along with the message.
                  </p>
                  <p>
                    ARP is one of the simpler protocols to analyze, all you need
                    to remember is to identify whether it is a request or reply
                    packet and who it is being sent by.
                  </p>
                  <br />
                </dd>

                <dt className='fadeInUp faq-header'>
                  <span> Step 8 </span> ICMP & TCP Traffic{' '}
                </dt>
                <dd className='fadeInUp faq-body' id='border-left'>
                  <br />
                  <h2 className='content__title'>ICMP Overview</h2>
                  <p>
                    ICMP or Internet Control Message Protocol is used to analyze
                    various nodes on a network. This is most commonly used with
                    utilities like ping and traceroute. You should already be
                    familiar with how ICMP works; however, if you need a
                    refresher, read the IETF documentation.
                  </p>
                  <p>
                    Below you can see a sample of what a ping would look like,
                    we can see a request to the server from ICMP, then a reply
                    from the server.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage23} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h4>ICMP Traffic Overview</h4>
                  <br />
                  <p>ICMP request : </p>
                  <br />
                  <p>
                    Below we see packet details for a ping request packet. There
                    are a few important things within the packet details that we
                    can take note__new--note of first being the type and code of
                    the packet. A type that equals 8 means that it is a request
                    packet, if it is equal to 0 it is a reply packet. When these
                    codes are altered or do not seem correct that is typically a
                    sign of suspicious activity.
                  </p>
                  <p>
                    There are two other details within the packet that are
                    useful to analyze: timestamp and data. The timestamp can be
                    useful for identifying the time the ping was requested it
                    can also be useful to identify suspicious activity in some
                    cases. We can also look at the data string which will
                    typically just be a random data string.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage24} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <h4>ICMP Reply:</h4>
                  <br />
                  <p>
                    Below you can see that the reply packet is very similar to
                    the request packet. One of the main difference that
                    distinguishes a reply packet is the code, in this case, you
                    can see it is 0, confirming that it is a reply packet.
                  </p>
                  <p>
                    The same analysis techniques for Request packets apply here
                    as well, again the main difference will be the packet type
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage25} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <br />
                  <h2 className='content__title'>TCP Overview</h2>
                  <br />
                  <p>
                    TCP or Transmission Control Protocol handles the delivery of
                    packets including sequencing and errors. You should already
                    have an understanding of how TCP works, if you need a
                    refresher check out the IETF TCP Documentation.
                  </p>
                  <p>
                    Below you can see a sample of a Nmap scan, scanning port 80
                    and 443. We can tell that the port is closed due to the RST,
                    ACK packet in red.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage26} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    When analyzing TCP packets, Wireshark can be very helpful
                    and color code the packets in order of danger level. If you
                    can't remember the color code go back to Topic 3 and refresh
                    on how Wireshark uses colors to match packets.
                  </p>
                  <p>
                    TCP can give useful insight into a network when analyzing
                    however it can also be hard to analyze due to the number of
                    packets it sends. This is where you may need to use other
                    tools like RSA NetWitness and NetworkMiner to filter out and
                    further analyze the captures.
                  </p>
                  <br />
                  <h4>TCP Traffic Overview : </h4>
                  <br />
                  <p>
                    A common thing that you will see when analyzing TCP packets
                    is known as the TCP handshake, which you should already be
                    familiar with. It includes a series of packets: syn, synack,
                    ack; That allows devices to establish a connection.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage27} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Typically when this handshake is out of order or when it
                    includes other packets like an RST packet, something
                    suspicious or wrong is happening in the network. The Nmap
                    scan in the section above is a perfect example of this.
                  </p>
                  <p>TCP Packet Analysis :</p>
                  <p>
                    For analyzing TCP packets we will not go into the details of
                    each individual detail of the packets; however, look at a
                    few of the behaviors and structures that the packets have.
                  </p>
                  <p>
                    Below we see packet details for an SYN packet. The main
                    thing that we want to look for when looking at a TCP packet
                    is the sequence number and acknowledgment number.
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage28} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    In this case, we see that the port was not open because the
                    acknowledgment number is 0.
                  </p>
                  <p>
                    Within Wireshark, we can also see the original sequence
                    number by navigating to edit &gt; preferences &gt; protocols
                    &gt; TCP &gt; relative sequence numbers (uncheck boxes).
                  </p>
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage29} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className='Content__img--box'>
                    <div className='Content__img__box__over--hidden'>
                      <img src={exampleImage30} alt='Example' />
                    </div>
                  </div>
                  <br />
                  <p>
                    Typically TCP packets need to be looked at as a whole to
                    tell a story rather than one by one at the details.
                  </p>
                  <br />
                </dd>
              </dl>
            </div>
            <div className='go-to-section'>
              <button
                onClick={() => handleGoToLab('/wireshark/wireshark_lab')}
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
