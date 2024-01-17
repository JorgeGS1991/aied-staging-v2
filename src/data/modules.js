const data = [
  {
    id: 1,
    topicName: "Unit 0: Getting Started",
    subTopics: [
      {
        id: 1,
        name: "GS Module 0: Getting to Know You",
        author: "Hollie Rosser",
        creationDate: new Date(2023, 4, 28),
        points: 100,
        contents: [
          {
            id: 1,
            topic: "Main Content",
            type: "content",
            points: 100,
            content:
              "<p>Welcome from all of us at Work-Learn!</p><p>We are interested in helping people like you gain new skills and expanding the opportunities you have entering (or re-entering) careers in computer and information technology. To accomplish this goal, we need to learn about who you are and what your experiences are while you are in the program.</p><p>This will happen in a couple of ways:</p><p>Complete the Qualtrics Survey linked below to provide us with some background information about you and your past education experiences. The answers to this survey are confidential. Your name will not be used so no one will know who you are. All information about you will be kept in locked offices of the research team and information kept on computers will be password protected.</p><p>Schedule a time to meet with a member of our team either in person or online. This will be the first of three meetings you will have with a Work-Learn team member as you move through the program. We will be using the same email address you logged into the Work-Learn Classroom to contact you for scheduling.</p><p>We will be on campus at SFH _________________ and will make every effort to schedule a time to meet with you in person while we're here. If this isn't possible, one of our team members will be contacting you by email to schedule a time to meet virtually using an online communications platform (zoom).</p><p>Finally, we know that your time is valuable, and we truly appreciate all of your efforts as you work your way through the program. For this reason, you will be given $_______ for each of the three meetings you have with us.</p><p>If you have any questions before you get started, please direct those questions by email to <a href='mailto:worklearnproject@gmail.com'>worklearnproject@gmail.com</a>.</p>",
          },
          {
            id: 2,
            topic: "Complete Survey",
            type: "content",
            content:
              "<a style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_8iGZnehHEJ64MCO?authuser=1' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>",
          },
        ],
      },
      {
        id: 2,
        name: "GS Module 1.1: Basic Computer and Digital Literacy Practice",
        author: "Hollie Rosser",
        creationDate: new Date(2023, 4, 28),

        contents: [
          {
            id: 1,
            topic: "Main Content",
            points: 100,
            content: `
                <p>What is Computer Literacy?</p>
                <p>Computer literacy can be defined as the level of experience and comfort someone has using computers to accomplish a goal. Your skill level can range from having no or very basic knowledge of how to use a computer all the way to operating common software programs or being able to write code. It's important to keep in mind that this definition is always changing and evolving depending on the advances made in that technology. It covers the basics of being able to functionally use the physical elements of a computer to achieve some task.</p>
                
                <p>What is Digital Literacy?</p>
                <p>Digital literacy is a little bit different. It refers to a person's ability to use computers and other digital media to find, evaluate, and communicate information. While early digital literacy definitions were more closely related to computer literacy skills, the birth of the internet quickly led to a definition that included the creation, gathering, and sharing of information through the use of a computer. These skills include the ability to use social media platforms (like Facebook or Twitter), search engines (Google), and office productivity suites (Office 365 and GSuite/Google Workplace).</p>
                
                <p>What's Next?</p>
                <p>To learn a little bit more about computer and digital literacy, check out the lesson below from Northstar Online Learning on Basic Computer Skills.</p>
                
                <p>Using a trackpad instead of a mouse can be tricky. The Mousercise! link below will help you practice navigating around your screen using the trackpad. If you're using a mouse, this can be good practice for you too!</p>
                
                <p>Want a little more practice before moving on? Check out the mini-course, Getting Started on a Computer, to work on your computer literacy skills.</p>
                
                <p>To get started on improving your digital literacy skills, check out the lesson on Using a PC. It will take you through the basics of working on a desktop, working with windows, and handling files and folders.</p>
                `,
          },
        ],
      },
      {
        id: 3,
        name: "GS Module 1.2: Assessing Your Computer and Digital Literacy",
        author: "Hollie Rosser",
        creationDate: new Date(2023, 4, 28),
        contents: [
          {
            id: 1,
            topic: "Main Content",
            points: 100,
            content: `
                <p>Before You Proceed to Other Modules</p>
                <p>Before you can move on to the other modules of the Work Learn Classroom, we want to make sure you have the computer and digital literacy skills needed to be successful in the program. So, we are asking that you complete the Basic Computer Skills and Internet Basics assessments from the Northstar Digital Literacy website linked below with a score of 85% or better. If you are not successful the first time, please go back to the Basic Computer and Digital Literacy Practice module to improve your skills.</p>



                <p>When you get to the Northstar website, please click on the green "Take an Assessment" button to get to the menu options you will need to select to complete the assessments. You will find the Basic Computer Skills and Internet Basics under Essential Computer Skills in the left column. An illustrative tutorial of these steps is provided below for you if needed.</p>



                <p>Helpful Hints</p>
                <ul>
                    <li>You can take the assessments multiple times by using the private mode of your web browser. If you do not use the private viewing mode, you will only be able to take the assessments once per day.</li>
                    <li>These assessments have voice-over prompts for each question. Please be mindful of others around you and use headphones, turn on closed captioning, or mute your device. The platform tutorial will also go through how to do this.</li>
                    <li>At the beginning of each assessment, there is a tutorial that goes through how to complete the assessments. This tutorial will show you how to navigate through each screen, record your answers, review and change your answers, submit your answers, and receive your final score.</li>
                    <li>Make sure you are confident in your answers before you submit your assessment for grading. You will not be able to return to the questions after the assessment is graded.</li>
                </ul>



                <p>When you are done with each assessment, please press Print Result and download your results as a PDF file. Upload each of the files to this assignment. Once your scores are verified to be 85% or better, you will be able to move on to the Computational Thinking module.</p>
            `,
          },
        ],
      },
      {
        id: 4,
        name: "GS Module 2: Tutorial on How to Navigate in Work-Learn Application",
        contents: [
          {
            id: 1,
            topic: "Main Content",
            points: 100,
            content: `
            <div style="display: flex; justify-content: center">
               <video controls width="700">
                  <source src="https://work-learn-bucket.s3.amazonaws.com/tutorial.mp4"
                  type="video/mp4">
              </video>
            </div>
            `,
          },
        ],
      },
      {
        id: 5,
        name: "LF Module 1.1: Looking Forward: Your Digital Footprint, Using Tech and Crafting Quality Emails at Work",
        author: "Hollie Rosser",
        creationDate: new Date(2023, 4, 28),
        contents: [
          {
            id: 1,
            topic: "Main Content",
            points: 150,
            content: `
                    <span><b>Your Digital Footprint<br></b><br>Digital footprint refers to the trails, traces, and crumbs that are left behind after someone uses the internet. This information is available for others to find without a lot of effort, and never goes away. Not only is your personal digital footprint affected by what you post and do online, it is also affected by what others might post about you online. Having a negative digital footprint, even if it's from a long time ago, 
                    can have consequences on future employment opportunities, so it's important to understand what contributes to your digital footprint and how it can impact your future. <br><br>Here are just a few examples of online sources that can make up your digital footprint:<ul><li>Social media posts on Facebook, Instagram, Twitter, etc. 
                    <br></li><li>YouTube uploads, channel subscriptions, and public comment history</li><li>Postings on Yelp, Amazon, Google</li><li>Personal websites, blog posts, and digital art portfolios</li><li>Accepted cookies from websites you have visited<br></li></ul>So, here are a couple of recommendations to keep in mind:&nbsp; 1) Always think twice or even three times before you post questionable content or opinions on the internet--including your social media accounts; and 2) Maybe even consider maintaining separate accounts for personal and professional use to mitigate potential bleed through. <br><br><i>**For more information and practice on identifying sources of your digital footprint, check out the video, </i><b><i>Your Digital Footprint</i></b><i>. You'll test your knowledge with a skills assessment on the Northstar Digital Literacy site, </i><b><i>Using Technology in Daily Life--Your Digital Footprint</i></b><i> a little later. </i><br><br><b>Personal Use of Technology at Work</b><br><br>Have you ever checked your socials or email, do some online shopping, or even read up on the daily news while you're on the clock at work? You are not alone and most workers will admit that they either use their work computers for personal use or use their personal devices while at work. Sometimes this is okay. Research has shown that taking a short break from your work will also give your brain a break, and this can improve your productivity. It's also been shown that these brief online breaks can improve your mood while you're working because you tend to visit sites you want to or enjoy going to. <br><br><br>Whether or not this is an okay use of your on-the-clock-time depends on a lot of different variables and has its limits. First of all, be aware of your employer's policy on personal use of technology at work. Many employers will have this policy spelled out in their employee handbook. If they don't, ask before you start scrolling. Second, make sure you are getting your work done, its done well, and you're meeting your deadlines. Ultimately, you are being paid to do work for your employer, and that should be your priority while you're there. 
                    Finally, looking at funny pet videos on YouTube would be appropriate, going to sexually explicit, gambling, or sites selling illegal materials employer is paying you for.&nbsp;<br><br><i>**Take a couple of minutes to watch the video, </i><b><i>Good and Proper Use of Technology in the Workplace</i></b><i>, for more information on this topic.</i><br><br><b>Crafting Professional Emails</b><br><b><br></b>In the video you just watched, you learned a little bit about email etiquette at work. As you enter into a work setting where email is often a primary source of communication, it will become more and more important for you to know how to craft high quality professional emails. Direct messaging (DM)/instant messaging (IM) is also a popular way to communicate with your co-workers, and in a lot of ways is very similar to sending and receiving text messages. However, it's also equally important to remember that there a few more guidelines you need to pay attention to when you're using DMs at work. <br><br>Regardless of whether you are communicating through an email or a direct messaging app, your writing should always be professional and business-friendly. The tutorials and videos below will give you a good idea of how to craft a quality work-ready email and DM. <br><br><br><i>**Check out the tutorials on, </i><b><i>Email Basics, Beyond Email, Communication Skills, </i></b><i>and </i><b><i>Business Communication</i></b><i>. We've also provided you with a video series for the </i><b><i>Business Communication</i></b><i> tutorial that provides several short videos to reinforce your learning.</i></span>                    
                `,
          },
          {
            id: 2,
            topic: "Resources",
            points: 150,
            // type: "upload",
            content: `
                <div class="lf">
                    <ol>
                        <li>
                            <a href="https://www.youtube.com/watch?v=iVEdvp8MWTg&authuser=1">Good and proper use of technology in the workplace</a>
                        </li><li>
                            <a href="https://www.digitalliteracyassessment.org/?authuser=1">Home | Northstar Digital Literacy</a>
                        </li><li>
                            <a href="https://edu.gcfglobal.org/en/email101/?authuser=1">Free Email Basics Tutorial at GCFGlobal</a>
                        </li><li>
                            <a href="https://edu.gcfglobal.org/en/beyondemail/?authuser=1">Free Beyond Email Tutorial at GCFGlobal</a>
                        </li><li>
                            <a href="https://edu.gcfglobal.org/en/communicationskills/?authuser=1">Free Communication Skills Tutorial at GCFGlobal</a>
                        </li><li>
                            <a href="https://youtube.com/playlist?list=PLpQQipWcxwt_vpL6XGO94Lhs-sWLVpurs&authuser=1">Business Communication - YouTube</a>
                        </li><li>
                            <a href="https://www.youtube.com/watch?v=6TUMHplBveo&authuser=1">Your Digital Footprint</a>
                        </li>
                    </ol>
                </div>
                <style>
                .lf a {
                  text-decoration: underline;
                }
                </style>


                `,
          },
        ],
      },
      {
        id: 6,
        name: "LF Module 1.2: Looking Forward: Your Digital Footprint Assessment",
        author: "Hollie Rosser",
        creationDate: new Date(2023, 4, 28),
        contents: [
          {
            id: 1,
            topic: "Main Content",
            points: 100,
            content: `
<span>As part of the Looking Forward module you just completed, you learned a bit about what your digital footprint is and why it's important. <br><br><br><br>When you get to the Northstar website from the link below, please click on the green "<i>Take an Assessment</i>" button to get to the menu options you will need to select to complete the assessments. You will find the<b> Your Digital Footprint</b> under <i>Using Technology in Daily Life</i> in the right column. An illustrative tutorial of these steps is provided below for you if needed.<br><br>Before you get started on this assignment, however, here are a couple of helpful hints:<ul><li>You<br> can take the assessments multiple times by using the private mode of <br>your web browser. If you do not use the private viewing mode, you will <br>only be able to take the assessments once per day. <br></li><li>These <br>assessments have voice-over prompts for each question. Please be mindful<br> of others around you and use headphones, turn on closed captioning, or <br>mute your device. The platform tutorial will also go through how to do <br>this. <br></li><li>At the beginning of each assessment, there is a <br>tutorial that goes through how to complete the assessments. This <br>tutorial will show you how to navigate through each screen, record your <br>answers, review and change your answers, submit your answers and receive<br> your final score. <br></li><li>Make sure you are confident in your <br>answers before you submit your assessment for grading. You will not be <br>able to return to the questions after the assessment is graded. </li></ul>When <br>you are done with each assessment, please press Print Result and <br>download your results as a PDF file. Upload each of the files to this <br>assignment. You will need to achieve an 80% or better to receive your incentive pay of $_____.</span>
                `,
          },
          {
            id: 2,
            topic: "Resources",
            points: 150,
            content: `
                <div class="lf">
                    <ol>
                        <li>
                            <a href="https://drive.google.com/file/d/1lKbPnqPOEBmS4l6sK4S8Zn6OHnYG1cVx/view?usp=drive_web&authuser=1">Northstar Navigation Tutorial-DL.pdf</a>
                        </li>
                        <li>
                            <a href="https://www.digitalliteracyassessment.org/?authuser=1">Home | Northstar Digital Literacy</a>
                        </li>
                    </ol>
                </div>

                <style>
                .lf a {
                  text-decoration: underline;
                }
                </style>

                `,
          },
        ],
      },
      {
        id: 7,
        name: "LF Module 1.3: Looking Forward: Email Basics Quiz",
        author: "Hollie Rosser",
        creationDate: new Date(2023, 4, 28),
        contents: [
          {
            id: 1,
            topic: "Main Content",
            points: 150,
            content: `
                   <span>After you have gone through the Email Basics tutorials in Looking Forward, please take this quiz to test your understanding of the topic. <br><br><br>You'll need to answer 8 of the questions correctly to receive your incentive of $_____.</span>
                    
                    <div><a href="https://docs.google.com/forms/d/e/1FAIpQLSfKEOyl3mU00sibC3nLdWeyDJ1SHvhdQ-27jl9WtnEEkIwQBQ/viewform?authuser=1">Looking Forward: Email Basics Quiz Google Forms</a></div>
                `,
          },
        ],
      },
      {
        id: 8,
        name: "LF Module 1.4: Looking Forward: Beyond Email Quiz",
        author: "Hollie Rosser",
        creationDate: new Date(2023, 4, 28),
        contents: [
          {
            id: 1,
            topic: "Main Content",
            points: 150,
            content: `
                    <span>After you have gone through the Beyond Email tutorials in the Looking Forward module, please take this quiz to test your understanding of the topic. <br><br><br>You'll need to answer 8 of the questions correctly to receive your incentive of $________.</span>
                    
                    <div><a href="https://docs.google.com/forms/d/e/1FAIpQLSegIocNJJi0psb5ljd_1yaWq8NUPbbuWxJrRJs0X1o3fmCK1Q/viewform?authuser=1">Looking Forward: Beyond Email Quiz Google Forms</a></div>
                `,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    topicName: "Unit 1: Computational Thinking",
    subTopics: [
      {
        id: 1,
        name: "CT Module 0: Introduction to Computational Thinking",
        type: "intro",
        contents: [
          {
            id: 1,
            topic: "Computational Thinking: How Computers Think",
            type: "content",
            points: 100,
            content: `
        <div class="how-comp-think">
              <h1>Computational Thinking: How Computers Think</h1>

      <p>
          Computational thinking is a way of solving problems. It is called computational thinking because we are specifically thinking in the same way that we could tell a computer to solve a problem. In computational thinking, we break problems and their solutions into simple steps. We use computational thinking when we write computer programs. We can also use computational thinking in everyday life. Computers are often used to model the real world, so many of the problems we solve with computers are like problems we solve in real life.
      </p>

      <h2>Four Cornerstones to Computational Thinking</h2>

      <p>
          Computational thinking is an approach in which you break down problems into distinct parts, look for similarities, identify the relevant information and opportunities for simplification, and create a plan for a solution. There are four key techniques (cornerstones) to computational thinking: decomposition, pattern recognition, abstraction, algorithms.
      </p>

      <ul>
          <li><strong>Decomposition:</strong> Breaking down a complex problem or system into smaller, more manageable parts;</li>
          <li><strong>Pattern Recognition:</strong> Looking for similarities among and within problems;</li>
          <li><strong>Abstraction:</strong> Focusing on the important information only, ignoring irrelevant detail;</li>
          <li><strong>Algorithms:</strong> Developing a step-by-step solution to the problem, or the rules to follow to solve the problem.</li>
      </ul>

      <h2>What Problems Can Computational Thinking Solve?</h2>

      <p>
          Another element of computational thinking is knowing what kinds of problems can be solved well by a computer and what problems are better for humans to resolve. A computer is really good at recording, processing, and searching for data making them a great tool for keeping track of data and completing complex computational tasks. On the other hand, computers are not very good at completing creative tasks or providing subjective opinions making humans still better at these activities. So, although computers are getting more powerful and sophisticated in what they can do, people are still required to program them!
      </p>

      <h2>Here's an Example</h2>

      <p>
          In real life, you might have to fill out a form while at a government office. That form has stuff on it like your name and address. In computing, we would call your entries on the form data. This data needs to be stored somewhere--like in a folder placed into a filing cabinet--and the people at the office will need to be able to find that folder later.
      </p>

      <p>
          In the computer, the form would be called a file that would be stored in a folder on the hard drive. Then, if a person needs to access the data in the file, they can either go directly to the folder the file is stored in (just like pulling the folder from the cabinet in real life), or they can look for the file using the computer's search function.
      </p>

      <p>
          Computational thinking can help us think about how to store the file and also how to search for it, both in real life and in the computer.
      </p>

      <h2>Final Thoughts</h2>

      <ul>
          <li>Computational Thinking is a way of solving problems;</li>
          <li>Helps us formulate solutions that can be easily carried out by a computer;</li>
          <li>With computational thinking, we solve problems creatively;</li>
          <li>With computational thinking, we get to the root of the problem, which is a crucial step in solving it.</li>
      </ul>
      </div>
        <style> 
    .how-comp-think {
            font-family: Arial, sans-serif;
            // line-height: 1.6;
            // margin: 20px;
        }

        .how-comp-think h1 {
            color: #333;
            padding-bottom: 10px;
            font-weight: 700;
            // border-bottom: 2px solid #333;
        }

        .how-comp-think h2 {
            padding-top: 20px;
            padding-bottom: 10px;
            font-weight: 700;
            // border-bottom: 1px solid #ccc;
        }

        .how-comp-think p {
            margin-bottom: 15px;
        }

        .how-comp-think ul {
            margin-bottom: 15px;
        }

        .how-comp-think li {
            margin-bottom: 5px;
        }
        </style>
              `,
          },
          {
            id: 2,
            topic: "Quiz",
            type: "quiz",
            points: 100,
          },
        ],
      },
      {
        id: 1,
        name: "CT Module 1: Four Pillars of Computational Thinking",
        contents: [
          {
            id: 1,
            topic: "1.1: Decomposition",
            type: "decomposition",
            points: 100,
            contents: [
              {
                id: 1,
                topic: "Introduction",
                type: "content",
                content: `
  <div class="decomp">
  <div style="width: 100%; height: auto">
  <img src="/images/contents/computation.png" style="width: 50%; height: auto; margin:auto"/>
  <p style="text-align: center; padding: 20px;">(Brackman et al., 2016)</p>
  </div>
  <div style="margin-top: 50px;">
  <h3 style="font-weight: 700">Purpose</h3>
  <p>Decomposition is one of the pillars of computational thinking. Decomposition allows us to take a complex problem, break it into smaller, more manageable problems, and solve those problems to arrive at a solution to the original, more complex problem. By the end of this section, you should be able to:</p>
  <ol>
    <li>Identify large problems in your life and in the world</li>
    <li>Break problems into small, meaningful steps</li>
    <li>Articulate the ways that computers can help humans break down problems</li>
  </ol>



  <p>The process of breaking things down is decomposition. We look for small solutions to small problems that can help us create big solutions to bigger problems!</p>
    
<div class="video-intro-section">
  <h2 class="video-intro">Video Introduction</h2>
  <p><a href="https://drive.google.com/file/d/1Gg_FD8TpbU4Q9N1xjD0dGgv9ZiGF-u40/view">View Video Introduction</a></p>
  </div>
</div>
<div style="margin-top: 30px;">
  <h1 style="font-weight: 600">Real life example of Decomposition</h1>
  <p>A problem that could be decomposed is getting to the library. “Going to the library” is a single thing we might say we are doing, but it is really made up of many smaller steps. One possible way to decompose getting to the library is this set of steps:</p>
  <ol style="padding-left: 30px;">
    <li>1. Go outside</li>
    <li>2. Walk to the bus stop</li>
    <li>3. Take the bus to the stop nearest the library</li>
    <li>4. Walk to the library</li>
    <li>5. Go inside the library</li>
  </ol>
<div style="margin-top: 10px;">
  <p>Each of those steps could be decomposed as well - broken into even smaller steps. For example, if you needed to explain to someone who had never taken the bus how to do that, you might break it into steps:</p>
  <ol style="padding-left: 30px;">
    <li>1. At the bus stop, if you don’t have a pass, buy a ticket</li>
    <li>2. Wait for the bus</li>
    <li>3. When the bus arrives, wait for other riders to exit</li>
    <li>4. Enter the bus and scan your ticket or pass</li>
    <li>5. Figure out how many stops until yours, and watch so you know when it is your stop</li>
    <li>6. Right before your stop, press the button to ask for the bus to stop</li>
    <li>7. When the bus stops, get off the bus</li>
  </ol>
  </div>
  </div>



  <div style="margin-top: 20px;">
  <h2 style="font-weight: 600">You try:</h2>
  <p>Think about your morning routine. What are the steps of your morning routine? List them in order:</p>
  <ol>
    <li>1.</li>
    <li>2.</li>
    <li>3.</li>
    <li>4.</li>
    <li>5.</li>
    <li>6.</li>
  </ol>



  <p>Pick one step of your morning routine and break it into smaller steps, like if you were trying to teach someone who had never done that thing before:</p>
  <ol>
    <li>1.</li>
    <li>2.</li>
    <li>3.</li>
    <li>4.</li>
    <li>5.</li>
    <li>6.</li>
  </ol>
  <div>
</div>
<style>

.decomp p {
  color: black;
}
.video-intro-section {
  margin-top: 20px;
}



.video-intro {
  font-weight: 600;
}



a {
  text-decoration: underline;
}
</style>
            `,
              },
              {
                id: 2,
                topic: "Building Background Knowledge",
                points: 100,
                content: `
<html>
<head>
  <title>Building Background Knowledge</title>
</head>
<body>
<div class="decomp">
  <h2 class="title">Building Background Knowledge</h2>
  <p>Before computers can be used to solve a problem, the problem and the ways in which it can be resolved must be understood. Decomposition helps us by breaking down complex programs into more manageable components.</p>
<div class="decomp-defn">
  <h2>What is Decomposition?</h2>
  <p>Decomposition is the process of breaking down a problem into smaller parts or components. These smaller parts can then be examined and solved. They are generally simpler to work with than the larger, more complex problem (like writing a computer program).</p>
</div>
<div class="decomp-why"> 
  <h2>Why is Decomposition Important?</h2>
  <p>If a problem is not decomposed, it is much harder to solve. Dealing with many different stages all at once is much more difficult than breaking a problem down into a number of smaller problems and solving each one, one at a time. Breaking the problem down into smaller parts means that each smaller problem can be examined in greater detail.</p>
  <p>Similarly, trying to understand how a complex system works is easier using decomposition. For example, understanding how a bicycle works is more straightforward if the whole bike is separated into smaller parts (like brakes, gears, wheels, etc.), and each part can be examined to see how it works in more detail.</p>



  <p>When you write a program, you might break it into parts.</p>
</div>
<div class="decomp-example">
  <h3>EXAMPLE:</h3>
  <p>This video is a great example of breaking a program into smaller parts. <a href="https://youtu.be/EADcmeBgW8s">(Watch the video)</a></p>



  <p>This video shows how he started off with a code with no parts and everything was just in one big block of code. He then separated parts of the house by breaking it into smaller sections or pieces (decomposition). After doing that, his code looked a lot more organized and it would be easier for someone else to understand by looking at it.</p>



  <p>Lots of computational tools are huge and very complex. Many programmers work together to create them. The big project gets decomposed into smaller parts, and each programmer gets assigned one part at a time. Then the parts get put together. That’s how the web browser you are using got built!</p>



  <p>For an example of a person decomposing how they built their website, read this: <a href="https://sparkbox.com/foundry/web_design_process_decomposition_exercise">Web Design Process Decomposition Exercise</a></p>
  <div>
</body>
</html>



<style>

.decomp p {
  color: black;
}
.title {
  font-weight: 700;
  font-size: 1.25em;
}



.decomp-defn {
  margin: 20px 0;



}



.decomp-defn h2 {
  font-weight: 700;
  font-size: 1em;
}



.decomp-defn p {
  padding: 10px 0;
}



.decomp-why {
  margin-bottom: 20px;
}



.decomp-why h2 {
  font-weight: 700;
}
.decomp-why p {
  padding: 10px 0;
}



.decomp-example h3 {
  font-weight: 700;
}



.decomp-example a {
  text-decoration: underline;
}
.decomp-example p {
  padding: 10px 0;
}
</style>
            `,
              },
              {
                id: 3,
                topic: "Quiz",
                type: "quiz",
                points: 100,
              },
              {
                id: 4,
                topic: "Decomposition in the Real World",
                points: 100,
                content: `
            <!DOCTYPE html>
<html>
<head>
  <title>Decomposition in the Real World</title>
</head>
<body>
<div class="decomp">
<div class="decomp-title"> 
  <h2>Decomposition in the Real World</h2>
</div>
<div class="decomp-subtitle">
  <p>Use the links below the problem to complete these exercises. They’re also linked in the assignment.</p>
</div>
<div class="decomp-exercise"> 
  <h3>Exercise One:</h3>
  <p>Everyday, we are faced with preparing for the day, whether it’s brushing our teeth, cleaning our space, or even navigating the tasks we have to accomplish. Choose one task you do every day and break that task down into its smallest steps.</p>
  <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSerrjEZ0oU7tcATLgZWyLq-oDC8yamMtAu5Dn6oENVduVsRVQ/viewform?authuser=0">Exercise One Link</a></p>
  </div>
<div class="decomp-exercise">
  <h3>Exercise Two:</h3>
  <p>You are traveling to Chicago and have to figure out how to navigate the train system to get from Midway on the Orange Line to Logan Square on the Blue Line. Look at the map of the city transit and determine what you would do to navigate this system. What are the steps you take to get to your destination?</p>
  <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdExrair1SM7NHSpsT8jQthLOAu5dqguiI_5pIQZLNVOk88Qg/viewform?authuser=0">Exercise Two Link</a></p>
  <img src="/images/contents/railsystemmap.png" />
</div>
</div>
</body>
<style>

.decomp p {
  color: black;
}
.decomp-title {
  font-weight: 700;
  font-size: 1.25em;
}



.decomp-subtitle {
  padding: 10px 0;
}



.decomp-exercise h3 {
  font-weight: 600;
  margin-top: 20px;
}



.decomp-exercise a {
  text-decoration: underline;
}



.decomp-exercise img {
  width: 500px;
  height: auto;
  margin: auto;
  padding: 20px;
}





</style>
</html>



            `,
              },
              {
                id: 5,
                topic: "Decomposition in Computing",
                points: 100,
                content: `
           <!DOCTYPE html>
<html>
<head>
  <title>Decomposition in Computing</title>
</head>
<body>
<div class="decomp">
<div class="decomp-title">
  <h2>How Do We Use Decomposition in Computer Programming?</h2>
  </div>
  <div class="decomp-subtitles"> 
  <p>As a programmer, you will basically face the same problems each and every time you approach a coding assignment--namely, you will need to find out what the program is going to do and then figure out how you will go about building the solution. Decomposition will help you solve this problem.</p>
  <p>It's important to understand that decomposition doesn't stop at identifying the parts of a problem. You need to keep decomposing the problem until you arrive at a series of steps that cannot be broken down any further. Then, once you are done decomposing, you should be able to stick the components back together to make a complete program.</p>
  <p>When you have broken the problem down into a set of clear, easy-to-follow steps, the problem is fully decomposed. Decomposition to this degree also allows for delegation and any other programmer should be able to follow what needs to be done easily.</p>
  </div>



  <div class="decomp-example">



  <h3>Here's an Example</h3>
  <p>An example of this is writing, or creating a program for a piece of artwork made of squares.</p>



  <p>Let’s say you get asked to take this image and code it (using some code language).</p>
  <img src="/images/contents/decomp-computing-1.png" />



  <p>Taking this as it is would take a while to figure out how to code, and could get very confusing. It would be hard to work out and would take a lot of writing. So to make this problem easier we look to see if there are ways we can break it up into smaller parts, so then the code can come easier.</p>



  <p>Looking at that picture you might realize a pattern, and that you can fold it in half and it is the same thing on both sides. So you can break that in half like so.</p>
  <!-- Image decomposing steps could be inserted here -->
  <img src="/images/contents/decomp-computing-2.png" />



  <p>Looking at this it already seems a lot more manageable to code than the first picture, and you can just think of the first picture as two of these pictures side by side. So you can have one code that you have executed twice. However as you look at this you might realize we can decompose(break into smaller parts) it even more.</p>
  <img src="/images/contents/decomp-computing-3.png" />
  <p>This is half of the 2nd, and 1/4th of the original picture, and it is much easier to look at and understand.</p>
  <p>We can then break it down or decompose it even more, until it is just one small square. This one square can be coded and then copied to make the starting picture. </p>
  <img src="/images/contents/decomp-computing-4.png" />



  <p>Decomposing that picture into these smaller parts made it a lot easier to understand and a lot easier to code. You could even take this a step further and break it into the colors.</p>
</div>
<div class="decomp-you-try">
  <h3>You Try:</h3>
  <p>How could this art piece get decomposed/broken into smaller parts?</p>
  <img src="/images/contents/decomp-computing-5.png" />
  <p>Describe it in steps:</p>
  <ol>
    <li>1.</li>
    <li>2.</li>
    <li>3.</li>
    <li>4.</li>
    <li>5.</li>
  </ol>
  </div>

  </div>


</body>
<style>
.decomp p {
  color: black;
}
.decomp-title {
  font-weight: 700;
  font-size: 1.25em;
}
.decomp-subtitles p {
  padding: 10px 0;
}



.decomp-example h3 {
  font-weight: 600;
}



.decomp-example p {
  padding: 10px 0;
}



.decomp-you-try h3 {
  font-weight: 600;
}



.decomp-you-try p {
  padding: 10px 0;
}



.decomp-you-try ol {
  padding: 0 20px; 
}



img {
  width: 300px;
  height: auto;
  margin: auto;
  padding: 10px;
}
</style>
</html>





            `,
              },
            ],
          },
          {
            id: 2,
            topic: "1.2: Pattern Recognition",
            type: "pattern-recognition",
            points: 100,
            contents: [
              {
                id: 1,
                topic: "Introduction",
                points: 100,
                content: `
  <div class="pattern">
  <div style="width: 100%; height: auto">
  <img src="/images/contents/computation.png" style="width: 50%; height: auto; margin:auto"/>
  <p style="text-align: center; padding: 20px;">(Brackman et al., 2016)</p>
  </div>
  <div style="margin-top: 50px;">
  <h3 style="font-weight: 700">Purpose</h3>
  <p>Purpose: Pattern Recognition is another of the pillars of computational thinking. When we decompose a problem, we often come across patterns – similarities or shared characteristics – that can make the complex problem easier to solve. By the end of this section, you should be able to: </p>
  <ol>
    <li>Identify patterns across different problems that make them easier to solve
</li>
    <li>Understand the patterns that occur in your everyday life and how they can make your actions more efficient</li>
    <li>Articulate the ways that computers can help humans solve problems by leveraging patterns in their coding</li>
  </ol>



  <p>You have actually already done a little bit of pattern recognition for this class! The last example problem for decomposition (the art work), you had to be able to recognize patterns to be able to do that. A lot of times you have a lot more practice with recognizing problems then you think you do!</p>
</div>
<style>
.pattern p {
  color: black;
}
.video-intro-section {
  margin-top: 20px;
}



.video-intro {
  font-weight: 600;
}



a {
  text-decoration: underline;
}
</style>
            `,
              },
              {
                id: 2,
                topic: "Warm Up",
                points: 100,
                content: `
<html>
<head>
  <title>Warm Up</title>
</head>
<body>
<div class="pattern">
<div class="warm-up">
  <h2 class="title">Warm Up</h2>
  <p><a href="https://forms.gle/G1VtsGN7a3HYByuSA">Warm Up Form</a></p>
  </div>
<div class="decomp-defn">
  <ul>
  <li>As you were looking for patterns in the seeding ideas activity, what process did you use? How did you go about finding the answer?</li>
  <li>Given what you know right now about computational thinking and decomposition, how do you think computers might use patterns to help solve problems?</li>
  </ul>
  </div>
</div>
</body>
</html>



<style>

.pattern p {
  color: black;
}

.warm-up a {
  text-decoration: underline;
}



.warm-up p {
  padding: 10px 0;
}
.title {
  font-weight: 700;
  font-size: 1.25em;
}



.decomp-defn {
  margin: 20px 0;



}



.decomp-defn h2 {
  font-weight: 700;
  font-size: 1em;
}



.decomp-defn p {
  padding: 10px 0;
}





.decomp-defn ul {
  list-style-type: disc;
}



.decomp-why {
  margin-bottom: 20px;
}



.decomp-why h2 {
  font-weight: 700;
}
.decomp-why p {
  padding: 10px 0;
}



.decomp-example h3 {
  font-weight: 700;
}



.decomp-example a {
  text-decoration: underline;
}
.decomp-example p {
  padding: 10px 0;
}
</style>
            `,
              },
              {
                id: 3,
                topic: "Building Background Knowledge",
                points: 100,
                content: `



            <!DOCTYPE html>
<html>
<head>
  <title>Building Background Knowledge</title>
  <style>
  .pattern p {
  color: black;
}
    /* Your CSS styles here */
    .title-section p {
      padding: 10px 0;
    }



    .title-section a {
      text-decoration: underline;
    }



    .title {
      font-weight: 700;
      font-size: 1.25em;
    }





    .pattern-defn {
      margin: 20px 0;
    }
    .pattern-defn h2 {
      font-weight: 700;
      font-size: 1em;
    }
    .pattern-defn p {
      padding: 10px 0;
    }
    .pattern-why {
      margin-bottom: 20px;
    }
    .pattern-why h2 {
      font-weight: 700;
    }
    .pattern-why p {
      padding: 10px 0;
    }
    .pattern-example h3 {
      font-weight: 700;
    }
    .pattern-example a {
      text-decoration: underline;
    }
    .pattern-example p {
      padding: 10px 0;
    }



    .us-flag-title {
      font-weight: 600;
    }



    .pattern-example img {
      width: 700px;
      height: auto;
      margin: auto;
      padding: 10px 0;
    }

    .youtube iframe {
      border-radius: 8px;
      width: 600px;
      height: 350px;
      margin: auto;
    }
  </style>
</head>
<body>
  <div class="pattern">
  <div class="title-section">
    <h2 class="title">Building Background Knowledge</h2>
    <p class="subtitle">The process of finding similarities across different ideas and problems is called pattern recognition.</p>
    <div class="youtube">
    <iframe width="966" height="543" src="https://www.youtube.com/embed/SixLnIDV1yY" title="Computational Thinking: Pattern Recognition" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <p>Watch until around 7:30 in the video.</p>
    </div>
    <div class="pattern-defn">
      <h2>What is Pattern Recognition?</h2>
      <p>Pattern Recognition is the process of looking across a problem’s parts to find similarities. We search for recurring elements in a problem to help group ideas and find a common solution more easily. Patterns are elements that share one or more similarities. In computer programming, patterns can reduce the complexity of a program and make the program more efficient. Patterns exist both between different problems and within a single problem!</p>
    </div>
    <div class="pattern-example">
      <h3>Example from real life:</h3>
      <p>If you need to go to the grocery store. Many people keep a list of things they have run out of. One way to grocery shop is to go in the order of the list, which means picking items up in the order you wrote them. (E.g., chicken soup, bananas, oregano, milk, apples). However, you might notice that grocery stores have a pattern. The produce is all in the same area, the canned goods are together, etc. So instead of picking up bananas (produce area), then oregano (in the spice aisle), then milk (in the dairy area), then apples (back to the produce area), you could get bananas and apples while you’re in the produce area. Picking up this pattern can shorten the amount of time you are in the store and make the process a lot simpler.</p>
      <p class="us-flag-title">U.S. Flag Example</p>
      <img src="/images/contents/us-flag.png" />
      <p>If we wanted to program a picture of the US Flag, you might notice that there are 50 stars and 13 stripes. We can notice the pattern of stars and stripes, and decompose the problem to create one star and one stripe. </p>
      <p>Then from there we can call the stars and stripes multiple times instead of creating a new code for each one. So instead of writing out a new code for each star and each stripe, we would repeat the code we made as many times as needed. Seeing the pattern of multiple stars and stripes can simplify how much code we have to write. </p>
      <!-- Incorporate the provided real-life example content -->
      <!-- You can add more content based on the provided examples -->
    </div>
    <div class="pattern-why"> 
      <h2>Why is Pattern Recognition Important?</h2>
      <p>Once a problem is decomposed, we still need to come up with solutions. However, if we try to solve every small problem we’ve broken down, we’re setting ourselves up for a lot of work. Finding similarities within and across problems means that we’re making our efforts in problem solving much more efficient. In computational thinking, patterns help you recognize what needs to be done to solve a problem. Patterns can also help you because if you notice a pattern you have seen before, it can be easier to solve again, using a similar solution.</p>
      <p>If we want computers to automate processes, then we also want them to be as efficient as possible. Computer coding is based upon patterns. By understanding the ways that patterns function, and by training ourselves to recognize patterns, we are able to code computers to do a lot of work very efficiently without having to repeat the code we input over and over again.</p>
    </div>
  
  </div>
</body>
</html>



`,
              },
              {
                id: 4,
                topic: "Quiz for Points",
                type: "quiz",
                points: 100,
              },
              {
                id: 5,
                topic: "Applying Idea in the Real World",
                points: 100,
                content: `
            <!DOCTYPE html>
<html>
<head>
  <title>Decomposition in the Real World</title>
</head>
<body>
<div class="pattern">
<div class="decomp-title"> 
  <h2>Applying Idea in the Real World</h2>
</div>
<div class="decomp-subtitle">
  <p>Here are some exercises from the real word we would like you to complete.</p>
</div>
<div class="decomp-exercise"> 
  <h3>Exercise One:</h3>
  <p>Everyday, we are faced with recognizing patterns, for example, whether an animal is a cat or a dog, whether they are friendly or unfriendly, whether or not we should approach and pet them. What are the patterns we notice that help us make these choices? Take a few moments to look at the pictures below. What patterns do you see across the images? Describe the patterns that help you determine which you want to approach and which to stay away from? If you had to draw a cat, what are the key components you would use in your drawing?  (All images open source from pixabay)</p>
  <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSd9lorcPzE-NxqaIH7G7Q_phyixI_RKg1b7h2P2wo00Yb5uTQ/viewform">Exercise One</a></p>
  <div class="img-grid">
  <img src="/images/contents/animal1.png" />
  <img src="/images/contents/animal2.png" />
  <img src="/images/contents/animal3.png" />
  <img src="/images/contents/animal4.png" />
  </div> 
  </div>
<div class="decomp-exercise">
  <h3>Exercise Two:</h3>
  <p>You are working for a company that needs to interpret a large amount of public data. Because you’re an expert in pattern recognition, they ask you to take a look first and help them determine what patterns you see to help them start making sense of the data provided. Take a look at the 
  <a href="https://www.google.com/publicdata/explore?ds=d5bncppjof8f9_&ctype=b&strail=false&nselm=s&met_x=sp_dyn_le00_in&scale_x=lin&ind_x=false&met_y=sp_dyn_tfrt_in&scale_y=lin&ind_y=false&met_s=sp_pop_totl&scale_s=lin&ind_s=false&dimp_c=country:region&ifdim=country&iconSize=0.5&uniSize=0.035#!ctype=b&strail=false&bcs=d&nselm=s&met_x=sp_dyn_le00_in&scale_x=lin&ind_x=false&met_y=sp_dyn_tfrt_in&scale_y=lin&ind_y=false&met_s=sp_pop_totl&scale_s=lin&ind_s=false&dimp_c=country:region&idim=country:AFG&ifdim=country&hl=en_US&dl=en_US&ind=false">Google public data</a> site on World Development Indicators and then answer the following questions.</p>
  <p><a href="https://youtu.be/AM6w_tUlIn4">Tutorial on Google Public Data</a></p>
  <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdPxbN0mSLRbMsbRKMrKiFXXyhRyzKRv3TuziFLQ2BJWiM-jg/viewform">Exercise Two Link</a></p>
  <ul>
  <li>What kinds of information do you think this data can tell you? </li>
  <li>What patterns do you notice? What questions do these patterns raise? </li>
  <li>If you play with the indicators, what, if any patterns, do you notice? </li>
  <li>If you get stuck, what do you notice about the data that stops a pattern from occurring?</li>
  </ul>



  <div class="google-trends">
      <p><strong>Google Trends: </strong><a href="https://trends.google.com/trends/" >https://trends.google.com/trends/</a></p>
  </div>

</div>

</div>
</body>
<style>
.pattern p {
  color: black;
}
.decomp-title {
  font-weight: 700;
  font-size: 1.25em;
}



.decomp-subtitle {
  padding: 10px 0;
}



.decomp-exercise h3 {
  font-weight: 600;
  margin-top: 20px;
}



.decomp-exercise a {
  text-decoration: underline;
}



.decomp-exercise p {
  padding: 10px 0;
}



.decomp-exercise img {
  width: 500px;
  height: auto;
  margin: auto;
  padding: 20px;
}



.img-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}





</style>
</html>



            `,
              },
              {
                id: 6,
                topic: "Pattern Recognition in Computer Programming",
                points: 100,
                content: `
           <!DOCTYPE html>
<html>
<head>
  <title>Pattern Recognition in Computer Programming</title>
</head>
<body>
<div class="pattern">
<div class="decomp-title">
  <h2>Pattern Recognition in Computer Programming</h2>
  </div>
  <div class="decomp-first-section"> 
  <h2>How Do We Use Pattern Recognition in Computer Programming?</h2>
  <p>As you learned before, as a programmer, you will basically face the same problems each and every time you approach a coding assignment--namely, you will need to find out what the program is going to do and then figure out how you will go about building the solution. Pattern Recognition will help you solve this problem by lowering the amount of steps you need to go through to come up with the solution.</p>
  <p>It's important to understand that pattern recognition takes place in two ways when you’re programming. First, patterns can occur within small parts of a problem, helping you to notice similarities within each step. (For example, if you are baking a cake, you might notice that there is a pattern with how you need to measure each ingredient before adding it to the mix.) Next, it can happen across problems. (Every time you bake, it’s important to know that ingredients need to be measured). </p>
  <p>Pattern Recognition within and across problems can make you more efficient as a programmer and it can help you to build the most efficient programs possible. </p>
  </div>



  <div class="decomp-example">



  <h3>Example 1:</h3>
  <p>Social media sites, like Facebook, often use patterns to compress our photos so that they are smaller to store online. Computers use pixels (small units of digital display) to store our images. Data compression for photos entails the computer looking at patterns in pixels and making those patterns smaller by assigning them a symbol (such as a number) rather than trying to store each individual colored pixel. For example:</p>
  <p class="color-p"><span><img src="/images/contents/color1.png" /></span> would become <img src="/images/contents/color2.png" /></p>
  
  <p>While each picture might have a different number of red, yellow, blue, or green pixels, the process of compression is the same for each image. There are two pattern recognition activities in compressing large amounts of data. The computer has to recognize the patterns within each picture, it also has to recognize the pattern of kinds of data in order to perform the same tasks across all of the pictures.</p>
  
  <h3>Example 2:</h3>
  <img src="/images/contents/pattern1.png" />



  <p>Remember this piece of artwork from the decomposition section. In decomposition we broke this picture down into smaller parts. What you might not have realized is that while doing that we were actively doing pattern recognition as well. Realizing that parts of this artwork is just a repetition of other parts is pattern recognition.</p>
  <p>Think about how pattern recognition would help you code this art. </p>
  <p>You might bring up that the more patterns we recognize the less coding we have to do. Coding each of those blocks individually at each location would be terrible. Looking at small part of this art:</p>
  <img src="/images/contents/pattern2.png" />
  <p>We realize that this part of the code is actually just repeated 3 other times in the picture. Meaning we could repeat this shape 4 times in 4 different locations rather than each tiny block individually. That is pattern recognition. Realizing that something is just repeated over again and using that to make the problem seem simpler.</p>
</div>
<div class="decomp-you-try">
  <h3>You Try:</h3>
  <p>Now that you know more about pattern recognition, I want you to try and make your own artwork with patterns in it.</p>
  <p>Go to this website: <a href="https://bricklayer.org/apps/grid_lite/grid.html">https://bricklayer.org/apps/grid_lite/grid.html</a></p>
  <p>Turn in a screenshot of your pattern.</p>
</div>
<div class="decomp-example">
  <h3>Example 3:</h3>
  <p>Here is an example of a code in the coding language python.</p>
  <p>Here is something that you code pretty easily in python.</p>
  <ul>
  <li>*</li>
  <li>**</li>
  <li>***</li>
  <li>****</li>
  <li>*****</li>
  </ul>
  <p>If you look at that shape you can most likely find the pattern in that shape. Each line adds an additional *, on the next line. You might even realize the next line will have 6 asterisks.</p>
  <p>Here is a code without realizing that pattern and just go by each line individually. </p>
  <img src="/images/contents/code1.png" />
  <p>The problem with this is what if we wanted to have 10 of these lines. We would have to write 10 lines of code. If we wanted to go up to 100 asterisks, it would take 100 lines of code. That would be a lot of typing. Realizing the pattern of each line gets 1 more asterisk than the line above is extremely important. We can simplify the code so that it will still output the correct answer but we can pick any number of lines we want. </p>
  <p>Instead, we can create a pattern, where all we need to know is how many asterisks we want, and tell the computer “start with 1 and go up to ___ asterisks” which is way easier than telling it one-by-one! In programming, that’s called a “for loop”. The details aren’t important - you’ll learn about for loops when you learn Python - but you can see how the code is written here. (You might not understand what the code means but you can see how much shorter it is).</p>
  <div class="code23">
  <img src="/images/contents/code2.png" />
  <img src="/images/contents/code3.png" />
  </div>
  <p>This new code gives the exact same output for wanting 5 rows, but we only need 3 lines of code to execute this, and this code also allows us to have any number of rows we want. Recognizing the pattern is what allowed us to make the code simplified.</p>



</div>
</div>



</body>
<style>

.pattern p {
  color: black;
}

.code23 img {
  width: 600px;
  padding: 10px 0;
}
.color-p img {
  width: 200px;
}
.decomp-title {
  font-weight: 700;
  font-size: 1.25em;
}
.decomp-subtitles p {
  padding: 10px 0;
}



.decomp-example h3 {
  font-weight: 600;
}



.decomp-example p {
  padding: 10px 0;
}



.decomp-you-try h3 {
  font-weight: 600;
}



.decomp-you-try p {
  padding: 10px 0;
}



.decomp-you-try ol {
  padding: 0 20px; 
}



img {
  width: 300px;
  height: auto;
  margin: auto;
  padding: 10px;
}
</style>
</html>





            `,
              },
            ],
          },
          {
            id: 3,
            topic: "1.3: Abstraction",
            type: "abstraction",
            points: 100,
            contents: [
              {
                id: 1,
                topic: "Introduction",
                points: 100,
                content: `
  <div class="abstraction">
  <div style="width: 100%; height: auto">
  <img src="/images/contents/computation.png" style="width: 50%; height: auto; margin:auto"/>
  <p style="text-align: center; padding: 20px;">(Brackman et al., 2016)</p>
  </div>
  <div class="purpose" style="margin-top: 50px;">
  <h3 style="font-weight: 700">Purpose</h3>
  <p>Abstraction involves determining what parts of a problem are important and filtering out those that are not. We want to focus on the big idea or unit rather than each individual component. When we engage in abstraction, we take away details. We use abstraction to take algorithms and think of them as whole idea rather than each individual step, so that the code is easier to decipher.</p>
  <p>Abstraction helps us make problems easier to solve. Looking at the main idea of what an algorithm or program does will make it easier to understand than to look at each small step. From there, we can also create a representation or model of the problem we’re trying to solve. This is called data representation. By the end of this section, you should be able to: </p>
  <ul>
    <li>Look at a problem and decide what information is important</li>
    <li>Decide how to represent or name different parts of a problem</li>
    <li>Begin to recognize which steps to take first to solve problems efficiently</li>
  </ul>
  </div>
</div>
<style>
.abstraction p {
  color: black;
}
.purpose * {
  padding: 10px 0;
}
.purpose ul {
  list-style-type: disc;
  padding: 0 20px;
}
.video-intro-section {
  margin-top: 20px;
}



.video-intro {
  font-weight: 600;
}



a {
  text-decoration: underline;
}
</style>
            `,
              },
              {
                id: 2,
                topic: "Thinking about Abstraction",
                points: 100,
                content: `
<html>
<head>
  <title>Thinking about Abstraction</title>
</head>
<body>
<div class="abstraction">
<div>
  <h2 class="title">Thinking about Abstraction</h2>
  <p>One way to make sense of this idea is to think about abstract art. Realistic art, like a photograph, has all of the details (image on the left). But a piece of art that is more abstract does not have all the details (image on the right). </p>
  <p>Look at some of these pieces of artwork and then look at the abstracted version. What are some differences that you notice? What details are removed? What details are kept? For example, in the Mona Lisa, the general shapes are kept - you can see her eyes, nose, mouth, and hair. But the details such as shading are not - for example, in the image on the right, the cheeks are all one color, rather than shaded. </p>
  <div class="monalisa">
  <img src="/images/contents/monalisa1.png" />
  <img src="/images/contents/monalisa2.png" />
  
  </div>
  <p>What details are kept or removed in the following images?</p>
  <div class="vangogh">
  <img src="/images/contents/vangogh1.png" />
  <img src="/images/contents/vangogh2.png" />
  </div>
<div class="decomp-defn">
  <h2>What is Decomposition?</h2>
  <p>Decomposition is the process of breaking down a problem into smaller parts or components. These smaller parts can then be examined and solved. They are generally simpler to work with than the larger, more complex problem (like writing a computer program).</p>
</div>
<div class="decomp-why"> 
  <h2>Why is Decomposition Important?</h2>
  <p>If a problem is not decomposed, it is much harder to solve. Dealing with many different stages all at once is much more difficult than breaking a problem down into a number of smaller problems and solving each one, one at a time. Breaking the problem down into smaller parts means that each smaller problem can be examined in greater detail.</p>
  <p>Similarly, trying to understand how a complex system works is easier using decomposition. For example, understanding how a bicycle works is more straightforward if the whole bike is separated into smaller parts (like brakes, gears, wheels, etc.), and each part can be examined to see how it works in more detail.</p>



  <p>When you write a program, you might break it into parts.</p>
</div>
<div class="decomp-example">
  <h3>EXAMPLE:</h3>
  <p>This video is a great example of breaking a program into smaller parts. <a href="https://youtu.be/EADcmeBgW8s">(Watch the video)</a></p>



  <p>This video shows how he started off with a code with no parts and everything was just in one big block of code. He then separated parts of the house by breaking it into smaller sections or pieces (decomposition). After doing that, his code looked a lot more organized and it would be easier for someone else to understand by looking at it.</p>



  <p>Lots of computational tools are huge and very complex. Many programmers work together to create them. The big project gets decomposed into smaller parts, and each programmer gets assigned one part at a time. Then the parts get put together. That’s how the web browser you are using got built!</p>



  <p>For an example of a person decomposing how they built their website, read this: <a href="https://sparkbox.com/foundry/web_design_process_decomposition_exercise">Web Design Process Decomposition Exercise</a></p>
  </div>

</div>


</body>
</html>



<style>

.abstraction p {
  color: black;
}

.monalisa, .vangogh {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px;
}



.monalisa img {
  width: 300px;
  height: auto;
}



.vangogh {
  grid-gap: 10px;
}



.vangogh img {
  width: 100%;
  height: auto;
}
.title {
  font-weight: 700;
  font-size: 1.25em;
}



.decomp-defn {
  margin: 20px 0;



}



.decomp-defn h2 {
  font-weight: 700;
  font-size: 1em;
}



.decomp-defn p {
  padding: 10px 0;
}



.decomp-why {
  margin-bottom: 20px;
}



.decomp-why h2 {
  font-weight: 700;
}
.decomp-why p {
  padding: 10px 0;
}



.decomp-example h3 {
  font-weight: 700;
}



.decomp-example a {
  text-decoration: underline;
}
.decomp-example p {
  padding: 10px 0;
}
</style>
`,
              },

              {
                id: 3,
                topic: "Video Introduction",
                points: 100,
                content: `
              <!DOCTYPE html>
              <html>
              <head>
              <title>Video Introduction</title>
              </head>
              <body>
              <div class="abstraction">
              <div class="decomp-title"> 
              <h2>Video Introduction</h2>
              </div>
              <div class="youtube">
              <iframe width="966" height="543" src="https://www.youtube.com/embed/jV-7Hy-PF2Q" title="Abstraction - Computational Thinking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              </div>
              </body>
<style>
.abstraction p {
  color: black;
}

.decomp-title {
  font-weight: 700;
  font-size: 1.25em;
}

.youtube iframe {
    border-radius: 8px;
    width: 600px;
    height: 350px;
    margin: 20px auto;
}

p a {
  text-decoration: underline;
}





</style>
</html>
              
              `,
              },
              {
                id: 4,
                topic: "What is Abstraction?",
                points: 100,
                content: `
              <!DOCTYPE html>
              <html>
              <head>
              <title>What is Abstraction?</title>
              </head>
              <body>
              <div class="abstraction">
              <div class="decomp-title">
              <h2>What is Abstraction?</h2>
              </div>
              <div class="decomp-subtitles"> 
              <p>Abstraction is focusing on details that matter and ignoring the unnecessary details while solving a problem. This helps make a program more efficient and effective.</p>
              <p>It's important to understand that decomposition doesn't stop at identifying the parts of a problem. You need to keep decomposing the problem until you arrive at a series of steps that cannot be broken down any further. Then, once you are done decomposing, you should be able to stick the components back together to make a complete program.</p>
              <p>An easier way to think about abstraction is that it is simplification. We are simplifying the problem to make it easier to look at and understand. If you think about the pictures above, the detailed one would be more difficult to copy than the simple one. </p>
              </div>



              <div class="decomp-why">
              <h2>Why is Abstraction Important?</h2>
              <p>Abstraction is important because it helps us to simplify problems by removing unnecessary information. Abstraction is the process of creating an easier to understand representation of a complex system. Abstraction is also important because it lets us think of algorithms as individual units so that we do not have to think of each portion of the algorithm.</p>
              <p>Think back to the decomposition section. In decomposition, we took an algorithm, like your morning routine, and broke it into smaller and smaller parts. Abstraction is the opposite - it’s when we take step-by-step instructions and think about them as a single task or algorithm. For example, we decomposed “take the bus to the library” into a set of instructions (an algorithm). If we had the set of instructions, we could abstract those instructions into a single thing called “take the bus to the library”.</p>
              <p>This is important in programming, because a lot of time we want to split up a bigger program into parts (decomposition) and be able to just think of each of those parts are a single thing. Each “thing” is an abstraction. In the algorithms section, you learned about flowcharts. Each box in a flowchart is an abstraction of a set of instructions.</p>
              </div>
              </div>
            
</body>
<style>
.abstraction p {
  color: black;
}
h2 {
  font-weight: 700;
  font-size: 1.25em;
}
.decomp-subtitles p {
  padding: 10px 0;
}



.decomp-why p {
  padding: 10px 0;
}



img {
  width: 300px;
  height: auto;
  margin: auto;
  padding: 10px;
}
</style>
</html>
            `,
              },
              {
                id: 5,
                topic: "Applying Ideas in the Real World",
                points: 100,
                content: `
              <!DOCTYPE html>
              <html>
              <head>
              <title>Applying Ideas in the Real World</title>
              </head>
              <body>
              <div class="abstraction">
              <div class="decomp-title">
              <h2>Applying Ideas in the Real World</h2>
              </div>
              <div class="decomp-example"> 
              <h3>Exercise One:</h3>
              <p>You are making peanut butter and jelly for lunch. Write an extremely detailed version of making peanut butter and jelly. Think of if you were describing it to a toddler for the first time ever. Then create a simplified/abstracted version that an adult would understand, leaving only key details.</p>
              <p>Detailed Version: ______________________</p>
              <p>Abstraction: ______________________</p>
              </div>   
              
              <div class="decomp-example"> 
              <h3>Exercise Two:</h3>
              <p> In the space below, describe your ideal car. Next, explain how you would describe this car to a mechanic. What would you say about this car to a friend who loves to take long road trips? How would you describe your car to a child? (Each of these descriptions is abstraction. You’re simplifying your description, leaving out some information, because the information that’s important changes depending on the purpose for your description.)</p>
              <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSfn8YdPcn8FAEi7xNuPfuH5ksjtsmWpWHldlajoFg8xueD6qA/viewform?authuser=0">Google Forms</a></p>
              </div>
              
              <div class="decomp-example"> 
              <h3>Exercise Three:</h3>
              <p>In the video you watched about abstraction, the narrator discusses the power of maps because every map is built with a purpose in mind. Think of your daily life. What kinds of maps are useful to you? Design a map that provides an abstraction of your general week day. First, choose the purpose of the map; what information would someone need to complete the kind of day you generally have during the week? Next, decide what data you need to include. Finally, sketch a map either on paper or with a digital tool and upload a screenshot or picture of it below. </p>
              <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeQDoNnpyQEAlb4cRpZV04z0bbfdQtt8U0WUZXSNaq5Y06OvQ/viewform?authuser=0">Google Forms</a></p>
              <ul>
                <li>What was the purpose of your map?</li>
                <li>What data did you choose to include? What do you leave out?</li>
                <li>How does this map act as an abstraction of your typical week day?</li>
                <li>What are the differences between the maps?</li>
                <li>What purpose might these different maps serve?</li>
              </ul>
              <img src="/images/contents/map4.png" />
              </div>
              </div>



</body>
<style>

.abstraction p {
  color: black;
}

.decomp-example a {
  text-decoration: underline;
}



.decomp-example img {
  width: 500px;
  margin: auto;
}



.decomp-example * {
  padding: 10px 0;
}



.decomp-example h3 {
  font-weight: 600;



}
.decomp-example p {
  padding: 10px 0;
}
h2 {
  font-weight: 700;
  font-size: 1.25em;
}
.decomp-subtitles p {
  padding: 10px 0;
}



.decomp-why p {
  padding: 10px 0;
}



img {
  width: 300px;
  height: auto;
  margin: auto;
  padding: 10px;
}
</style>
</html>
            `,
              },
              {
                id: 6,
                topic: "Abstraction in Computer Programming",
                points: 100,
                content: `
              <!DOCTYPE html>
              <html>
              <head>
              <title>Abstraction in Computer Programming</title>
              </head>
              <body>
              <div class="abstraction">
              <div class="decomp-title">
              <h2>Abstraction in Computer Programming</h2>
              <p>Start by watching this video about abstraction (stick with it if it gets confusing!):</p>
              <div class="youtube"> 
              <iframe width="966" height="543" src="https://www.youtube.com/embed/_y-5nZAbgt4" title="What Is Abstraction in Computer Science" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              </div>
              <div class="decomp-how">
              <h2>How Do We Use Abstraction in Computer Programming?</h2>
              <p>As a programmer, you will basically face the same problems each and every time you approach a coding assignment--namely, you will need to find out what the program is going to do and then figure out how you will go about building the solution. Abstraction will help you solve this problem.</p>
              <p>Abstraction allows programmers to hide all but the important data in order to make problems simpler and increase the efficiency of their programs. Abstraction allows us to create a representation or model using only the most important data. The programmer tries to make sure that the models they create are clearly named and include all of the necessary information to solve the problem they were designed to solve. This means that every time the computer runs into a similar problem, it has a program that knows exactly what information to pay attention to.</p>
              </div>



              <div class="decomp-example"> 
              <h3>Exercise One:</h3>
              <p>A good example of abstraction in programming is to look at a database that contains a lot of information. Think about an online bookseller that sells a lot of digital books. People will want to be able to find books using all kinds of different information, they might search for the author, title, ISBN, or genre. They also might want to know the reviews others have given the book or how much the book costs. The online store might also have the size, color of the books, and length of the books, but this information is not as relevant for people searching for a new book to buy, so it would not be included in the model abstracted from the database. </p>
              <p>Remember, when you’re engaging in abstraction to create computer programs, you’ll want to pay attention to these steps: </p>
              <ul>
                <li>Identify the purpose or problem you’re trying to solve</li>
                <li>Collect the most relevant and important data</li>
                <li>Understand the relationships between the data</li>
                <li>Identify patterns within the data</li>
                <li>Finally, build a representation or model of a problem to make a solution more easily recognizable</li>
              </ul>
              </div>
              
              <div class="decomp-example"> 
              <h3>Exercise Two:</h3>
              <p>A second example of abstraction in coding is something that might often not be thought of as abstraction. You are given the task of needing to multiply 2 by 3. That is pretty simple and can easily be done. However to create an abstracted version would be to make a program that can multiply any two numbers. This is so that if you even need to call the code again but with different numbers you have it ready and can just use the code you already created. </p>
              <p>It is getting rid of the unnecessary details of what the numbers themselves are and focusing solely on what the process is. We generalized the problem.</p>
              <h3>Video</h3>
              <p>This video does a great job about talking about abstraction, using a real word example, as well as showing abstraction in a coding language.</p>
              <div class="youtube">
              <iframe width="966" height="543" src="https://www.youtube.com/embed/Ui7Dca5Kbvw" title="Abstraction explained with real-life examples and code! - C++ OOP Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              </div>
              </div>
            



</body>
<style>
.abstraction p {
  color: black;
}

.youtube {
}
.youtube iframe {
  border-radius: 8px;
  width: 600px;
  height: 350px;
  margin: auto;

}



.decomp-title *, .decomp-how * {
  padding: 10px 0;
}
ul  {
  list-style-type: disc;
  margin: 0 20px;
}



.decomp-example a {
  text-decoration: underline;
}



.decomp-example img {
  width: 500px;
  margin: auto;
}



.decomp-example * {
  padding: 10px 0;
}



.decomp-example h3 {
  font-weight: 600;



}
.decomp-example p {
  padding: 10px 0;
}
h2 {
  font-weight: 700;
  font-size: 1.25em;
}
.decomp-subtitles p {
  padding: 10px 0;
}



.decomp-why p {
  padding: 10px 0;
}



img {
  width: 300px;
  height: auto;
  margin: auto;
  padding: 10px;
}
</style>
</html>
            `,
              },
              {
                id: 7,
                topic: "Quiz",
                type: "quiz",
                points: 100,
              },
            ],
          },
          {
            id: 4,
            topic: "1.4: Algorithms",
            type: "algorithms",
            points: 100,
            contents: [
              {
                id: 1,
                topic: "Introduction",
                points: 100,
                content: `
  <div class="algorithm">
  <div style="width: 100%; height: auto">
  <img src="/images/contents/computation.png" style="width: 50%; height: auto; margin:auto"/>
  <p style="text-align: center; padding: 20px;">(Brackman et al., 2016)</p>
  </div>
  <div class="purpose" style="margin-top: 50px;">
  <h3 style="font-weight: 700">Purpose</h3>
  <p>Algorithms and Algorithmic Thinking is the third pillar of our introduction to computational thinking. Algorithms are the starting point for writing computer programs because they help to express step-by-step instructions for how to solve the problem the program is designed to address. Algorithms give the computer directions on how to solve a problem, which include the steps a computer should take, and the order in which those steps should be taken. By the end of this section, you should be able to: </p>
  <ul>
    <li>Express an algorithm in everyday language and flowcharts</li>
    <li>Describe how the order of step-by-step instructions matters to a computer program</li>
    <li>Understand how to translate simple instructions into a flowchart</li>
  </ul>
  </div>
  </div>
<style>
.algorithm p {
  color: black;
}
.purpose * {
  padding: 10px 0;
}



.video-intro-section {
  margin-top: 20px;
}



.video-intro {
  font-weight: 600;
}



a {
  text-decoration: underline;
}



ul {
  list-style-type: disc;
  margin: 0 20px;
}
</style>
            `,
              },
              {
                id: 2,
                topic: "Exploring Algorithms",
                points: 100,
                content: `
<html>
<head>
  <title>Exploring Algorithms</title>
</head>
<body>
<div class="algorithm">
<div class="explore-alg">
  <h2 class="title">Exploring Algorithms</h2>
  <p>In order to explore how algorithms can give a computer step-by-step instructions, let’s start by playing around with LightBot (<a href="https://www.lightbot.lu/">https://www.lightbot.lu/</a>). LightBot is a game that allows you to sequence instructions with blocks of code in order to move a character around the screen. Begin by reading the instructions in the help section, then try playing the first five levels of LightBot (level 0 - level 4). Upload a screenshot of your medals into the Google Form and answer the discussion questions before moving on to the next set of activities. (See below for step-by-step instructions to get started.)
</p>
</div>
<div class="steps"> 
<ul>
<li>1. Go to <a href="https://www.lightbot.lu">https://www.lightbot.lu</a><img src="/images/contents/alg1.png" /></li>
<li>2. Click on the “Help” button in the bottom right hand corner to get instructions on how to play the game. <img src="/images/contents/alg2.png" /> </li>
<li>3. Click on each of the titles and read the instructions to understand how each of the coding buttons functions within the game. <img src="/images/contents/alg3.png" /> </li>
<li>4. When you feel you understand the instructions, click back to the main menu and then click start.</li>
<li>5. Play through level 4, then take a screenshot of your progress and upload it to this <a href="https://forms.gle/zQHMkafs1oCHY5gz5">Google Form</a>. (See a sample screenshot below.) Reflect on the questions in the form before moving onto the next activity. You’ll come back to LightBot in a bit to see if you can continue making progress and improve your score. ***Don’t worry if you’re not yet successful in completing the game, remember, this is just a place to play around with ideas. <img src="/images/contents/alg4.png" />
</li>
</ul>
</div>
</div>



</body>
</html>



<style>
.algorithm p {
  color: black;
}
.explore-alg * {
  padding: 10px 0;
}
a {
  text-decoration: underline;
}
img {
  width: 500px;
  height: auto;
}
.title {
  font-weight: 700;
  font-size: 1.25em;
}

.steps ul li {
  padding: 10px 0;
}

</style>
            `,
              },
              {
                id: 3,
                topic: "Building Background Knowledge",
                points: 100,
                content: `
<html>
<head>
  <title>Building Background Knowledge</title>
</head>
<body>
<div class="algorithm">
<div class="title-section">
  <h2 class="title">Building Background Knowledge</h2>
  <p>As you keep finding out, computational thinking helps us to solve open-ended problems. Algorithms help us to solve these problems by giving us a way to tell the computer what to do and in what order to execute those steps. Algorithms allow computers, smartphones, websites, and even cars to function.</p>
  </div>
<div class="lightbot-list">
<p>In Lightbot, you were building an algorithm in each level. </p>
<ul>
<li>In level 0, the algorithm was to move forward twice then light</li>
<li>In level 1, the algorithm was to move forward 4 times, turn left and then light, and then repeat that process 2 more times</li>
<li>In level 2, the algorithm was to turn to the left or right, move forward, turn in the opposite way, go forward 5 times, turn in the same directions you did before, and then move forward once and light it</li>
<li>In level 3, the algorithm was to walk forward, jump twice, move forward once and then light the block</li>
<li>In level 4, the algorithm was to walk forward, jump twice, walk forward, turn right, walk forward five times and then light the block</li>
</ul>
<p>As you can see in each level you gave the robot specific instructions to move to reach the blue colored blocks. You had to be extremely precise on the directions so that you could complete the level. This was building an algorithm. Congratulations!</p>
  </div>
  </div>
</body>
</html>



<style>
.algorithm p {
  color: black;
}
.title-section *, .lightbot-list * {
  padding: 10px 0;
}



ul {
  list-style-type: disc;
  margin: 0 20px;
}


.title {
  font-weight: 700;
  font-size: 1.25em;
}



.decomp-defn {
  margin: 20px 0;



}



.decomp-defn h2 {
  font-weight: 700;
  font-size: 1em;
}



.decomp-defn p {
  padding: 10px 0;
}



.decomp-why {
  margin-bottom: 20px;
}



.decomp-why h2 {
  font-weight: 700;
}
.decomp-why p {
  padding: 10px 0;
}



.decomp-example h3 {
  font-weight: 700;
}



.decomp-example a {
  text-decoration: underline;
}
.decomp-example p {
  padding: 10px 0;
}
</style>
            `,
              },
              {
                id: 4,
                topic: "Applying Ideas in the Real World",
                points: 100,
                content: `
           <!DOCTYPE html>
<html>
<head>
  <title>Applying Ideas in the Real World</title>
</head>
<body>
<div class="algorithm">
<div class="decomp-title">
  <h2>Applying Ideas in the Real World</h2>
  </div>
  <div class="alg-example">
  <h3>Exercise One:</h3>
  <ul>
  <li>
  1.  In the video you watched about algorithms, the narrator discussed the algorithm for making pasta. Take a look at the choice below and identify which of the instructions are in the correct order for making spaghetti.
  <ul class="sub-ul">
            <li>
            a) 1) Boil water; 2) Put water in the pot; 3) Cook the spaghetti; 4) Add the sauce; 5) Serve; 6) Eat the pasta
          </li>
<li>b) 1) Put water in the pot; 2) Boil the water; 3) Add the noodles; 4) Cook the pasta; 5) drain the water; 6) Serve the pasta
</li>
<li>c) 1) Boil the water; 2) Add the noodles; 3) Add the sauce; 4) Cook the pasta; 5) Eat the pasta; 6) Clean the dishes
</li>
<li>d) 1) Put the water in the pot; 2) Cook the spaghetti; 3) Add the noodles; 4) Add the sauce; 5) Drain the water; 6) Serve the pasta 
</li>
  </ul>
  </li>
  <li>
  2. Using Google Draw or a piece of paper, illustrate the algorithm you chose as a flowchart, then compare your answer to ours. Were you able to accurately represent your algorithm? (Hint: Remember that computers will always need a “start” and “stop” indicator)
  <p> Answer: </p>
  <img src="/images/contents/diagram3.png" />
  </li>
  <li>
  3.  <strong>Reflect</strong>: What do you think might happen if you had two different kinds of noodles? How could you create a flowchart that offered a user multiple options for how to cook different kinds of pasta? 
  </li>
  </ul>
  </div>
  <div class="alg-example">
  <h3>Exercise Two:</h3>
  <p>Now that you’ve had some practice representing your own algorithms, let’s go back to LightBot and try some of the harder levels. As you play levels 5-10, think about the algorithms you’re building to move the bot. When you finish levels 5-9, upload a screenshot of your progress on the home screen, then use the following prompts to push your thinking.</p>
  <ul>
  <li>1. Choose one level that you struggled with in the LightBot game and use the space below to explain your struggle and how you worked around the problem to solve the level.</li>
  <li>2. Choose one level to replay and upload a screenshot of your initial code here. </li>
  <li>3. Next, play the level again and try to solve the problem more efficiently. Take a screenshot of your final attempt to show your progress.</li>
  <li>4. In the space below, explain how decomposition, pattern recognition, and algorithms all work together to help you solve the LightBot challenges. If there are any points you’re continuing to struggle with, see if you can come up with solutions as you write your thoughts here. </li>
  </ul>  
  </div>
  <div class="alg-example">
    <h3>Exercise Three:</h3>
    <p><a href="https://thewordsearch.com/hangman/">https://thewordsearch.com/hangman/</a></p>
    <p>Click on this link and play a game of hangman.</p>
    <p>Hangman is a code that can easily be made once you understand algorithms. Although you have not learned any coding yet, you can still think of how this algorithm might look like in the world of a flow chart. Provided below are a list of all instructions in a randomized order and the flowchart with instructions.</p>
    <p>Match the instructions to the correct place on the flow chart. (Match the number to the letter)</p>
    <div class="diagram-grid">
    <img src="/images/contents/diagram4.png" />
    <ul>
    <li>1) Display number of dashes 1 per letter in word </li>
    <li>2) Select word from dictionary </li>
    <li>3) Is the word complete? </li>
    <li>4) Get input = letter </li>
    <li>5) Yes - put letter in place of dash </li>
    <li>6) Add part to hangman and then go back to step 4 </li>
    <li>7) Count letters in word </li>
    <li>8) Yes: YOU WIN </li>
    <li>9) Is letter in word? </li>
    </ul>
    </div>
    <p><strong>Correct Answers: A2, B7, C1, D4, E9, F6, G5, H3, I8</strong></p>



  </div>

</div>

</body>
<style>
.algorithm p {
  color: black;
}
.sub-ul {
  margin: 10px 20px;
}

.diagram-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}



.diagram-grid ul {
  margin: 50px 0;
}
.decomp-title {
  font-weight: 700;
  font-size: 1.25em;
}
.decomp-subtitles p {
  padding: 10px 0;
}

.alg-example * {
  padding: 10px 0;
}

.alg-example h3 {
  font-weight: 600;
}

.alg-example a {
  text-decoration: underline;
}

img {
  width: 300px;
  height: auto;
  margin: auto;
  padding: 10px;
}
</style>
</html>





            `,
              },

              {
                id: 5,
                topic: "Algorithms in Computer Programming",
                points: 100,
                content: `
           <!DOCTYPE html>
<html>
<head>
  <title>Algorithms in Computer Programming</title>
</head>
<body>
<div class="algorithm">
<div class="decomp-title">
  <h2>Algorithms in Computer Programming</h2>
  </div>
  <div class="alg-example">
  <h3>How Do We Use Algorithms in Computer Programming?</h3>
  <p>Algorithms are the foundation of computer programming because they allow computers to make  decisions. They are like the blueprint that tells a computer what to do when faced with a problem. An algorithm improves the efficiency of a computer program by finding the best possible ways to solve problems. This means that your programs will be accurate and produce the very best results.</p>



<p>Language is extremely important when it comes to computer programming, and that is why having clear and precise algorithms are so important. Computers are fundamentally quite dumb. They will only do exactly what you tell them to, in the language they understand. Also there are many different computer programming languages, but they all still have algorithms in them even if the actual language is different.</p>
<p>Algorithms are also important because they ensure that a program consumes the least amount of memory possible. As you progress through the course, you’ll find that there are many different kinds of algorithms. Choosing the right algorithm can ensure that your program runs exactly the way you envision. </p>
<div class="nestedif">
<p class="example">Example from coding: 
<img src="/images/contents/nested-if.png" />
<p>Algorithms are the foundation of computer programming because they allow computers to make  decisions. They are like the blueprint that tells a computer what to do when faced with a problem. An algorithm improves the efficiency of a computer program by finding the best possible ways to solve problems. This means that your programs will be accurate and produce the very best results.</p>
<p>Language is extremely important when it comes to computer programming, and that is why having clear and precise algorithms are so important. Computers are fundamentally quite dumb. They will only do exactly what you tell them to, in the language they understand. Also there are many different computer programming languages, but they all still have algorithms in them even if the actual language is different.</p>
<p>Algorithms are also important because they ensure that a program consumes the least amount of memory possible. As you progress through the course, you’ll find that there are many different kinds of algorithms. Choosing the right algorithm can ensure that your program runs exactly the way you envision. </p>
<p class="example">Example from coding: </p>
<p>This might look like a lot of random words, but what you are looking at is an algorithm in the coding language of python. This code is an algorithm to output a letter grade based on the input of a percentage. </p>
<p>This code is saying: </p>
<p>1. Give an input score
<ul id="gradeList">
    <li>a. If score is greater than or equal to 90
      <ul>
        <li>i. Print A (letter grade is A)</li>
      </ul>
    </li>
    <li>b. If score is not move on
      <ul>
        <li>i. If score is greater than or equal to 80
          <ul>
            <li>1. Print B</li>
          </ul>
        </li>
        <li>ii. If not move on
          <ul>
            <li>1. If score is greater than or equal to 70 
              <ul>
                <li>a. Print C</li>
              </ul>
            </li>
            <li>2. If not move on
              <ul>
                <li>a. If score is greater than or equal to 60
                  <ul>
                    <li>i. Print D</li>
                  </ul>
                </li>
                <li>b. If not print F</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <p>A flow chart of this might look like (marks = score).</p>
  <img src="/images/contents/nested-diagram.png" />
  <div class="watch-video">
    <h3>Watch this video: </h3>
    <div class="youtube">
      <iframe width="966" height="543" src="https://www.youtube.com/embed/ixIoDYVfKA0" title="The ethical dilemma of self-driving cars - Patrick Lin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <p>As the video illustrates, learning algorithmic thinking is important because it allows you to navigate the very real complications of the ways that computers integrate into our daily lives.</p>
    <p>Remember, all of the pillars of computational thinking go into helping you find the best algorithm possible to solve a problem. As you move through the rest of this course, continue to think about the ways that technology and algorithms play a role in your everyday life. </p>
  </div>



</div>

</div>

</body>
<style>
.algorithm p {
  color: black;
}
.youtube iframe {
  border-radius: 8px;
  width: 600px;
  height: 350px;
  margin: auto;
}


.diagram-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}



.diagram-grid ul {
  margin: 50px 0;
}
.decomp-title {
  font-weight: 700;
  font-size: 1.25em;
}
.decomp-subtitles p {
  padding: 10px 0;
}



.alg-example h3 {
  font-weight: 600;
  margin-top: 20px;
}



.alg-example p {
  padding: 10px 0;
}



.decomp-you-try h3 {
  font-weight: 600;
}



.decomp-you-try p {
  padding: 10px 0;
}



.decomp-you-try ol {
  padding: 0 20px; 
}



img {
  width: 300px;
  height: auto;
  margin: auto;
  padding: 10px;
}



ul, li {
  margin: 0;
  padding: 0;
}



/* Apply indentation for nested lists */
ul#gradeList { 
  margin: 5px 30px;
}
ul {
  list-style-type: none;
}



ul#gradeList ul {
  margin-left: 20px; /* Adjust the indentation as needed */
}

ul#gradeList ul ul {
  margin-left: 40px; /* Nested indentation */
}

/* Optional: Style list items */
ul#gradeList li, ul#gradeList ul li,  ul#gradeList ul ul li  {
  margin-bottom: 5px; /* Adjust spacing between list items */
}

img {
  width: 500px; 
  height: auto;
}

.watch-video *  {
  padding: 10px 0;
}

.watch-video a {
  text-decoration: underline;
}
.watch-video h3 {
  font-weight: 600;
}
</style>
</html>
            `,
              },
              {
                id: 6,
                topic: "Quiz for Points",
                type: "quiz",
                points: 100,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "CT Module 2: Review Your Knowledge",
        type: "intro",
        contents: [
          {
            id: 1,
            topic: "Quiz",
            type: "quiz",
            points: 100,
          },
        ],
      },
    ],
  },
];

export default data;
