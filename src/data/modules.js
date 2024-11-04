

const data = [
    {
      id: 1,
      topicName: "Unit 0: Getting Started",
      subTopics: [
        {
          id: 1,
          name: "Link to Slack Channel",
          content: `
              <p>This is the link to the Slack Channel:</p>
              <a style="margin-top: 20px; text-decoration: underline;" target="_blank" href="https://join.slack.com/t/worklearn-workspace/shared_invite/zt-2hdhnx202-e3e_Ms3tsaroo7uyBOA_7Q">Slack Channel</a>
              `,
        },
        {
          id: 2,
          name: "Payment",
          content: `
              <div class="payment">
                 <p>For participating in the WorkLearn class, you can earn up to $1000. WorkLearn follows the Siena Francis House bi-weekly payment schedule. Successfully achieved tasks will be paid out in your bi-weekly checks.</p>
                 <p>Here is an overview of the units to understand how they align to the payments.</p>
                 <ul>
                 <li>Introductory Interview: $15</li>
                 <li>Getting Started: $5</li>
                 <li>Computational Thinking: $100</li>
                 <li>Professional Skills: $25</li>
                 <li>Python: $170</li>
                 <li>COBOL: $170</li>
                 <li>WebDev Challenges: $250</li>
                 <li>Mainframe Challenges: $250</li>
                 <li>Exit Interview: $15</li>
                 </ul>
                 <p>There are two types of payments: Complete/Incomplete and Content Mastery.</p>
                 <p>We will use Complete/Incomplete-type payments when we ask you to complete a task that is not linked to learning new materials. For example, if there are surveys or interviews, we need you to complete the task but we do not need you to prepare any new materials first.</p>
                 <p>We will use Content Mastery-type payments when we ask you to complete a task that is linked to your having studied the materials or using knowledge that you have gained in previous units. For Content Mastery-type payments, we require that you achieve at least 80% correctness on the tasks.</p>
                 <p>Content Mastery payments will have different tasks associated with them. Sometimes, you will be asked to take a quiz or write short answers to show content mastery; sometimes you will need to write code to create small programs or correct bugs. Learning materials and Challenges are Content Mastery-type payments.</p>
              </div>
              <style>
              .payment p, .payment ul {
                margin-top: 20px;
              }
              .payment ul {
                list-style-type: disc;
                margin-left: 20px;
              }
              </style> 
              `,
        },
        {
          id: 3,
          name: "Tutorial on How to Navigate in Work-Learn Application",
          content: `
              <div style="display: flex; justify-content: center">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/tutorial.mp4"
                    type="video/mp4">
                </video>
              </div>
              `,
        },
        {
          id: 4,
          name: "Troubleshooting",
          content: `
              <div class="troubleshooting">
              <p>This is where we will post about known errors (called bugs) on the page.</p>
              <h3 style="font-weight: 700">Date: 8 Feb 2024</h3>
              <p>Problem/bug: Quiz scores are incorrect in most of accounts.</p>
              <p>Status: Resolved</p>
              <p>Problem/bug: The site is down for some computers/laptops.</p>
              <p>Status: Resolved</p>
              <hr/>
              <h3 style="font-weight: 700">Date: 6 Feb 2024</h3>
              <p>Problem/bug: Some accounts are unable to login, and the site is down for some computers/laptops.</p>
              <hr/>
              <h3 style="font-weight: 700">Date: 4 Feb 2024</h3>
              <p>No known bugs</p>
              </div>
              <style>
              .troubleshooting p, .troubleshooting h3 {
                margin-top: 20px;
              }
              </style>
              `,
        },
        {
          id: 5,
          name: "Getting to Know You",
          author: "Hollie Rosser",
          creationDate: new Date(2023, 4, 28),
          points: 100,
          content: `
          <div class="gtk">
          <p>Welcome from all of us at Work-Learn!</p>
          <p>We are interested in helping people like you gain new skills and expanding the opportunities you have entering (or re-entering) careers in computer and information technology. To accomplish this goal, we need to learn about who you are and what your experiences are while you are in the program.</p>
          <p>This will happen in a couple of ways:</p>
          <p>We will be on campus at SFH weekly and will make every effort to schedule a time to meet with you in person while we're here. If this isn't possible, one of our team members will be available on the Slack Channel that is set up for you.</p>
          <p>Complete the Qualtrics Survey linked on the next page to provide us with some background information about you and your past education experiences. The answers to this survey are confidential. Your name will not be used so no one will know who you are. All information about you will be kept in locked offices of the research team and information kept on computers will be password protected.</p>
          <p>We will also interview you several times. You have already completed the first of the interviews. We will be using the same email address you logged into the Work-Learn Classroom to contact you for scheduling.</p>
          <p>Finally, we know that your time is valuable, and we truly appreciate all of your efforts as you work your way through the program. For this reason, you will be given $15 for each of the interviews you have with us.</p>
          <p>If you have any questions before you get started, please direct those questions by email to <a style="text-decoration: underline;" target="_blank" href='mailto:worklearnprojects@gmail.com'>worklearnprojects@gmail.com</a>.
          </p>
          </div>
          <style>
          .gtk p {
            margin-top: 20px;
          }
          </style>
          `,
        },
        {
          id: 6,
          name: "Qualtrics Survey",
          author: "Hollie Rosser",
          creationDate: new Date(2023, 4, 28),
          points: 100,
          content: `
                <p style="margin-top:20px;">Completing this survey is worth $5.</p>
                <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_6l2Xy1csb3HF422' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
                `,
        },
        //       {
        //         id: 3,
        //         name: "Basic Computer and Digital Literacy",
        //         author: "Hollie Rosser",
        //         creationDate: new Date(2023, 4, 28),
  
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 100,
        //             content: `
        //                 <p>What is Computer Literacy?</p>
        //                 <p>Computer literacy can be defined as the level of experience and comfort someone has using computers to accomplish a goal. Your skill level can range from having no or very basic knowledge of how to use a computer all the way to operating common software programs or being able to write code. It's important to keep in mind that this definition is always changing and evolving depending on the advances made in that technology. It covers the basics of being able to functionally use the physical elements of a computer to achieve some task.</p>
  
        //                 <p>What is Digital Literacy?</p>
        //                 <p>Digital literacy is a little bit different. It refers to a person's ability to use computers and other digital media to find, evaluate, and communicate information. While early digital literacy definitions were more closely related to computer literacy skills, the birth of the internet quickly led to a definition that included the creation, gathering, and sharing of information through the use of a computer. These skills include the ability to use social media platforms (like Facebook or Twitter), search engines (Google), and office productivity suites (Office 365 and GSuite/Google Workplace).</p>
  
        //                 <p>What's Next?</p>
        //                 <p>To learn a little bit more about computer and digital literacy, check out the lesson below from Northstar Online Learning on Basic Computer Skills.</p>
  
        //                 <p>Using a trackpad instead of a mouse can be tricky. The Mousercise! link below will help you practice navigating around your screen using the trackpad. If you're using a mouse, this can be good practice for you too!</p>
  
        //                 <p>Want a little more practice before moving on? Check out the mini-course, Getting Started on a Computer, to work on your computer literacy skills.</p>
  
        //                 <p>To get started on improving your digital literacy skills, check out the lesson on Using a PC. It will take you through the basics of working on a desktop, working with windows, and handling files and folders.</p>
        //                 `,
        //           },
        //           {
        //             id: 2,
        //             topic: "Resources",
        //             content: `
        //               <ul class="resources">
        //               <li>
        //               <a href="https://assessment.digitalliteracyassessment.org/basic-computer-skills/practice/getting-started-with-computers?authuser=3">Northstar Digital Literacy</a>
        //               </li>
        //               <li>
        //               <a href="https://www.digitallearn.org/courses/getting-started-on-a-computer-new?authuser=3">Getting Started on a Computer</a>
        //               </li>
        //               <li>
        //               <a href="https://www.digitallearn.org/courses/using-a-pc-windows-10-new?authuser=3">Using a PC (Windows 10)</a>
        //               </li>
        //               <li>
        //               <a href="http://www.pbclibrary.org/mousing/mousercise.htm?authuser=3">Palm Beach County Library System Mousing Tutorial</a>
        //               </li>
        //               </ul>
        //               <style>
        //               .resources li a {
        //                 text-decoration: underline;
        //               }
        //               </style>
  
        //             `,
        //           },
        //         ],
        //       },
        //       {
        //         id: 4,
        //         name: "Assessing Your Computer and Digital Literacy",
        //         author: "Hollie Rosser",
        //         creationDate: new Date(2023, 4, 28),
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 100,
        //             content: `
        //                 <p>Before You Proceed to Other Modules</p>
        //                 <p>Before you can move on to the other modules of the Work Learn Classroom, we want to make sure you have the computer and digital literacy skills needed to be successful in the program. So, we are asking that you complete the Basic Computer Skills and Internet Basics assessments from the Northstar Digital Literacy website linked below with a score of 85% or better. If you are not successful the first time, please go back to the Basic Computer and Digital Literacy Practice module to improve your skills.</p>
  
        //                 <p>When you get to the Northstar website, please click on the green "Take an Assessment" button to get to the menu options you will need to select to complete the assessments. You will find the Basic Computer Skills and Internet Basics under Essential Computer Skills in the left column. An illustrative tutorial of these steps is provided below for you if needed.</p>
  
        //                 <p>Helpful Hints</p>
        //                 <ul>
        //                     <li>You can take the assessments multiple times by using the private mode of your web browser. If you do not use the private viewing mode, you will only be able to take the assessments once per day.</li>
        //                     <li>These assessments have voice-over prompts for each question. Please be mindful of others around you and use headphones, turn on closed captioning, or mute your device. The platform tutorial will also go through how to do this.</li>
        //                     <li>At the beginning of each assessment, there is a tutorial that goes through how to complete the assessments. This tutorial will show you how to navigate through each screen, record your answers, review and change your answers, submit your answers, and receive your final score.</li>
        //                     <li>Make sure you are confident in your answers before you submit your assessment for grading. You will not be able to return to the questions after the assessment is graded.</li>
        //                 </ul>
  
        //                 <p>When you are done with each assessment, please press Print Result and download your results as a PDF file. Upload each of the files to this assignment. Once your scores are verified to be 85% or better, you will be able to move on to the Computational Thinking module.</p>
        //             `,
        //           },
        //         ],
        //       },
        //       {
        //         id: 5,
        //         name: "Your Digital Footprint",
        //         author: "Hollie Rosser",
        //         creationDate: new Date(2023, 4, 28),
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 150,
        //             content: `
        //                     <span><b>Your Digital Footprint<br></b><br>Digital footprint refers to the trails, traces, and crumbs that are left behind after someone uses the internet. This information is available for others to find without a lot of effort, and never goes away. Not only is your personal digital footprint affected by what you post and do online, it is also affected by what others might post about you online. Having a negative digital footprint, even if it's from a long time ago,
        //                     can have consequences on future employment opportunities, so it's important to understand what contributes to your digital footprint and how it can impact your future. <br><br>Here are just a few examples of online sources that can make up your digital footprint:<ul><li>Social media posts on Facebook, Instagram, Twitter, etc.
        //                     <br></li><li>YouTube uploads, channel subscriptions, and public comment history</li><li>Postings on Yelp, Amazon, Google</li><li>Personal websites, blog posts, and digital art portfolios</li><li>Accepted cookies from websites you have visited<br></li></ul>So, here are a couple of recommendations to keep in mind:&nbsp; 1) Always think twice or even three times before you post questionable content or opinions on the internet--including your social media accounts; and 2) Maybe even consider maintaining separate accounts for personal and professional use to mitigate potential bleed through. <br><br><i>**For more information and practice on identifying sources of your digital footprint, check out the video, </i><b><i>Your Digital Footprint</i></b><i>. You'll test your knowledge with a skills assessment on the Northstar Digital Literacy site, </i><b><i>Using Technology in Daily Life--Your Digital Footprint</i></b><i> a little later. </i><br><br><b>Personal Use of Technology at Work</b><br><br>Have you ever checked your socials or email, do some online shopping, or even read up on the daily news while you're on the clock at work? You are not alone and most workers will admit that they either use their work computers for personal use or use their personal devices while at work. Sometimes this is okay. Research has shown that taking a short break from your work will also give your brain a break, and this can improve your productivity. It's also been shown that these brief online breaks can improve your mood while you're working because you tend to visit sites you want to or enjoy going to. <br><br><br>Whether or not this is an okay use of your on-the-clock-time depends on a lot of different variables and has its limits. First of all, be aware of your employer's policy on personal use of technology at work. Many employers will have this policy spelled out in their employee handbook. If they don't, ask before you start scrolling. Second, make sure you are getting your work done, its done well, and you're meeting your deadlines. Ultimately, you are being paid to do work for your employer, and that should be your priority while you're there.
        //                     Finally, looking at funny pet videos on YouTube would be appropriate, going to sexually explicit, gambling, or sites selling illegal materials employer is paying you for.&nbsp;<br><br><i>**Take a couple of minutes to watch the video, </i><b><i>Good and Proper Use of Technology in the Workplace</i></b><i>, for more information on this topic.</i><br><br><b>Crafting Professional Emails</b><br><b><br></b>In the video you just watched, you learned a little bit about email etiquette at work. As you enter into a work setting where email is often a primary source of communication, it will become more and more important for you to know how to craft high quality professional emails. Direct messaging (DM)/instant messaging (IM) is also a popular way to communicate with your co-workers, and in a lot of ways is very similar to sending and receiving text messages. However, it's also equally important to remember that there a few more guidelines you need to pay attention to when you're using DMs at work. <br><br>Regardless of whether you are communicating through an email or a direct messaging app, your writing should always be professional and business-friendly. The tutorials and videos below will give you a good idea of how to craft a quality work-ready email and DM. <br><br><br><i>**Check out the tutorials on, </i><b><i>Email Basics, Beyond Email, Communication Skills, </i></b><i>and </i><b><i>Business Communication</i></b><i>. We've also provided you with a video series for the </i><b><i>Business Communication</i></b><i> tutorial that provides several short videos to reinforce your learning.</i></span>
        //                 `,
        //           },
        //           {
        //             id: 2,
        //             topic: "Resources",
        //             points: 150,
        //             // type: "upload",
        //             content: `
        //                 <div class="lf">
        //                     <ol>
        //                         <li>
        //                             <a href="https://www.youtube.com/watch?v=iVEdvp8MWTg&authuser=1">Good and proper use of technology in the workplace</a>
        //                         </li><li>
        //                             <a href="https://www.digitalliteracyassessment.org/?authuser=1">Home | Northstar Digital Literacy</a>
        //                         </li><li>
        //                             <a href="https://edu.gcfglobal.org/en/email101/?authuser=1">Free Email Basics Tutorial at GCFGlobal</a>
        //                         </li><li>
        //                             <a href="https://edu.gcfglobal.org/en/beyondemail/?authuser=1">Free Beyond Email Tutorial at GCFGlobal</a>
        //                         </li><li>
        //                             <a href="https://edu.gcfglobal.org/en/communicationskills/?authuser=1">Free Communication Skills Tutorial at GCFGlobal</a>
        //                         </li><li>
        //                             <a href="https://youtube.com/playlist?list=PLpQQipWcxwt_vpL6XGO94Lhs-sWLVpurs&authuser=1">Business Communication - YouTube</a>
        //                         </li><li>
        //                             <a href="https://www.youtube.com/watch?v=6TUMHplBveo&authuser=1">Your Digital Footprint</a>
        //                         </li>
        //                     </ol>
        //                 </div>
        //                 <style>
        //                 .lf a {
        //                   text-decoration: underline;
        //                 }
        //                 </style>
  
        //                 `,
        //           },
        //           {
        //             id: 3,
        //             topic: "Assessment",
        //             content: `
        //             <div class="assessment">
        //             <p>
        //             As part of the Looking Forward module you just completed, you learned a bit about what your digital footprint is and why it's important.
        //             </p>
        //             <p>
        //             When you get to the Northstar website from the link below, please click on the green "Take an Assessment" button to get to the menu options you will need to select to complete the assessments. You will find the Your Digital Footprint under Using Technology in Daily Life in the right column. An illustrative tutorial of these steps is provided below for you if needed.
        //             </p>
        //             <p>
        //             Before you get started on this assignment, however, here are a couple of helpful hints:
        //             </p>
        //             <ul class='list'>
        //             <li>
        //             You
        // can take the assessments multiple times by using the private mode of
        // your web browser. If you do not use the private viewing mode, you will
        // only be able to take the assessments once per day.
        //             </li>
        //             <li>
        //             These
        // assessments have voice-over prompts for each question. Please be mindful
        // of others around you and use headphones, turn on closed captioning, or
        // mute your device. The platform tutorial will also go through how to do
        // this.
        //             </li>
        //             <li>
        //             At the beginning of each assessment, there is a
        // tutorial that goes through how to complete the assessments. This
        // tutorial will show you how to navigate through each screen, record your
        // answers, review and change your answers, submit your answers and receive
        // your final score.</li>
        //             <li>Make sure you are confident in your
        // answers before you submit your assessment for grading. You will not be
        // able to return to the questions after the assessment is graded.</li>
  
        //             </ul>
        //             <p>
        //             When
        // you are done with each assessment, please press Print Result and
        // download your results as a PDF file. Upload each of the files to this
        // assignment. You will need to achieve an 80% or better to receive your incentive pay of $_____.
        //             </p>
        //             <div class="resources">
        //             <h3>Resources</h3>
        //             <ul>
        //             <li>
        //             <a href="https://work-learn-bucket.s3.amazonaws.com/northstar-tutorial.pdf">Northstar Navigation Tutorial-DL.pdf</a>
        //             </li>
        //             <li>
        //             <a href="https://www.digitalliteracyassessment.org/?authuser=0">Home | Northstar Digital Literacy</a>
        //             </li>
  
        //             </ul>
        //             </div>
        //             </div>
  
        //             <style>
        //             .assessment p, assessment ul.list {
        //               margin-top: 20px;
        //             }
  
        //             .list {
        //               list-style-type: disc;
        //               padding: 30px;
        //             }
        //             .resources h3 {
        //               font-weight: 700;
        //               margin-top: 20px;
        //             }
        //             .resources a {
        //               text-decoration: underline;
        //             }
        //             </style>
        //             `,
        //           },
        //           //           {
        //           //             id: 3,
        //           //             topic: "Looking Forward: Your Digital Footprint Assessment",
        //           //             author: "Hollie Rosser",
        //           //             creationDate: new Date(2023, 4, 28),
        //           //             contents: [
        //           //               {
        //           //                 id: 1,
        //           //                 topic: "Main Content",
        //           //                 points: 100,
        //           //                 content: `
        //           // <span>As part of the Looking Forward module you just completed, you learned a bit about what your digital footprint is and why it's important. <br><br><br><br>When you get to the Northstar website from the link below, please click on the green "<i>Take an Assessment</i>" button to get to the menu options you will need to select to complete the assessments. You will find the<b> Your Digital Footprint</b> under <i>Using Technology in Daily Life</i> in the right column. An illustrative tutorial of these steps is provided below for you if needed.<br><br>Before you get started on this assignment, however, here are a couple of helpful hints:<ul><li>You<br> can take the assessments multiple times by using the private mode of <br>your web browser. If you do not use the private viewing mode, you will <br>only be able to take the assessments once per day. <br></li><li>These <br>assessments have voice-over prompts for each question. Please be mindful<br> of others around you and use headphones, turn on closed captioning, or <br>mute your device. The platform tutorial will also go through how to do <br>this. <br></li><li>At the beginning of each assessment, there is a <br>tutorial that goes through how to complete the assessments. This <br>tutorial will show you how to navigate through each screen, record your <br>answers, review and change your answers, submit your answers and receive<br> your final score. <br></li><li>Make sure you are confident in your <br>answers before you submit your assessment for grading. You will not be <br>able to return to the questions after the assessment is graded. </li></ul>When <br>you are done with each assessment, please press Print Result and <br>download your results as a PDF file. Upload each of the files to this <br>assignment. You will need to achieve an 80% or better to receive your incentive pay of $_____.</span>
        //           //                 `,
        //           //               },
        //           //               {
        //           //                 id: 2,
        //           //                 topic: "Resources",
        //           //                 points: 150,
        //           //                 content: `
        //           //                 <div class="lf">
        //           //                     <ol>
        //           //                         <li>
        //           //                             <a href="https://drive.google.com/file/d/1lKbPnqPOEBmS4l6sK4S8Zn6OHnYG1cVx/view?usp=drive_web&authuser=1">Northstar Navigation Tutorial-DL.pdf</a>
        //           //                         </li>
        //           //                         <li>
        //           //                             <a href="https://www.digitalliteracyassessment.org/?authuser=1">Home | Northstar Digital Literacy</a>
        //           //                         </li>
        //           //                     </ol>
        //           //                 </div>
  
        //           //                 <style>
        //           //                 .lf a {
        //           //                   text-decoration: underline;
        //           //                 }
        //           //                 </style>
  
        //           //                 `,
        //           //               },
        //           //             ],
        //           //           },
        //         ],
        //       },
  
        //       {
        //         id: 6,
        //         name: "Writing Professional E-mail",
        //         author: "Hollie Rosser",
        //         type: "email",
        //         creationDate: new Date(2023, 4, 28),
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 150,
        //             content: `
        //                    <span>After you have gone through the Email Basics tutorials in Looking Forward, please take this quiz to test your understanding of the topic. <br><br><br>You'll need to answer 8 of the questions correctly to receive your incentive of $_____.</span>
        //                 `,
        //           },
        //           {
        //             id: 2,
        //             topic: "Assessment",
        //             type: "quiz",
        //           },
        //         ],
        //       },
        //       {
        //         id: 7,
        //         name: "Looking Forward: Beyond Email Quiz",
        //         author: "Hollie Rosser",
        //         type: "beyond",
        //         creationDate: new Date(2023, 4, 28),
        //         contents: [
        //           {
        //             id: 1,
        //             topic: "Main Content",
        //             points: 150,
        //             content: `
        //                     <span>After you have gone through the Beyond Email tutorials in the Looking Forward module, please take this quiz to test your understanding of the topic. <br><br><br>You'll need to answer 8 of the questions correctly to receive your incentive of $________.</span>
        //                 `,
        //           },
        //           {
        //             id: 2,
        //             topic: "Assessment",
        //             type: "quiz",
        //           },
        //         ],
        //       },
      ],
    },
    {
      id: 2,
      topicName: "Unit 1: How to write a CV",
      subTopics: [
        {
          id: 1,
          name: "How to write a Cover Letter",
          type: "intro",
          contents: [
            {
              id: 1,
              topic: "Introduction to Write a Cover Letter for a Job or Career Change",
              type: "content",         
              content:`<body>
              <h2>Introduction to Write a Cover Letter for a Job or Career Change</h2>
              <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Introduction+to+Write+a+Cover+Letter+for+a+Job+or+Career+Change.mp4"
                    type="video/mp4">
                </video>
                </body>`
                
            },
            {
              id: 2,
              topic: "Research the Job and Company",
              type: "content",         
              content:`<body>
              <h2>Research the Job and Company</h2>
              <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Research+job+and+company.mp4"
                    type="video/mp4">
                </video>
                </body>`
                
            },
            {
              id: 3,

              topic: "Start Your Letter",
              type: "content",         
              content:`<body>
              <h2>Start Your Letter</h2>
              <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Start+Your+Letter.mp4"
                    type="video/mp4">
                </video>
                </body>`
                
            },
            {
              id:4,
              topic: "Write Your First Paragraph",
              content: `<body>
                  <h2>Write Your First Paragraph</h2>
                  <video controls width="700">
                        <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Write+Your+First+Paragraph.mp4"
                        type="video/mp4">
                    </video>
                    </body>`
            },
            {
              id:5,
              topic: "Write Your Second Paragraph",
              content: `<body>
                  <h2>Write Your Second Paragraph</h2>
                  <video controls width="700">
                        <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Write+Your+Second+Paragraph.mp4"
                        type="video/mp4">
                    </video>
                    </body>`
            },
            {
              id:6,
              topic: "Finish Your Letter and Sign Off",
              content: `<body>
                  <h2>Finish Your Letter and Sign Off</h2>
                  <video controls width="700">
                        <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Finish+Your+Letter+and+Sign+Off.mp4"
                        type="video/mp4">
                    </video>
                    </body>`
            },
            {
              id:7,
              topic: "Write a Cover Letter for a Job or Career Change Wrap-Up",
              content: `<body>
                  <h2>Write a Cover Letter for a Job or Career Change Wrap-Up</h2>
                  <video controls width="700">
                        <source src="https://work-learn-bucket.s3.amazonaws.com/Unit%3A6-How+to+Write+a+Cover+Letter/Write+a+Cover+Letter+for+a+Job+or+Career+Change+Wrap-Up.mp4"
                        type="video/mp4">
                    </video>
                    </body>`
            },
          ],
        },
      ]
    },
    {
      id: 3,
      topicName: "Unit 2: Professional Skills",
      subTopics: [
        {
          id: 1,
          name: "Professional Skills",
          content: `
          <div class="prof-skills">
          <p>Please go through this professional skills units provided by Dr. Magie Hall from this links: <a target="_blank" style="text-decoration: underline;" href="https://classroom.google.com/u/3/c/NjQ4MTU1MTIwMTYz">Professional Skills Units</a></p>
          <h3 style="font-weight: 600; margin-top: 20px;">Class Code: 3gtbaty</h3>
          </div>
          `,
        },
        {
          id: 2,
          name: "Qualtrics Survey",
          author: "Hollie Rosser",
          creationDate: new Date(2023, 4, 28),
          points: 100,
          content: `
                <p style="margin-top:20px;">Completing this survey is worth $5.</p>
                <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_6iomnRh5EwVwHn8' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
                `,
        },
      ],
    },
    {
      id: 4,
      topicName: "Unit 3: Python",
      subTopics: [
        {
          id: 1,
          name: "Getting Started in VS Code",
          contents: [
            
            {
              id: 1,
              topic: "Open a folder in VS Code",
              content: `
              <div class='VS Code'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Background</strong></p>
              <p>We will be using a powerful code editor called <strong>Visual Studio Code (VS Code)</strong> for this course. Using VS Code will allow you to write and run code seamlessly across different systems, including Windows, Mac, and Linux. VS Code also provides various extensions that support Python and collaborative programming.</p><br>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Install VS Code</strong></p>
              <p>To get started, download and install VS Code from the official website: <a style='text-decoration: underline' href='https://code.visualstudio.com/download' target='_blank'>https://code.visualstudio.com/</a>.</p>  
              <br>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 1: Open a folder in VS Code</strong></p>
              In VS Code, you can work with individual files seamlessly, for example for quick edits or to view a file. Alternatively, by opening a folder, also known as a workspace, you unlock more features, such as folder-specific configuration settings, restoring the UI state for that folder, debug configurations, and more. 
              Let's start by creating a folder and opening it in VS Code.
              <p>1. Create a new folder vscode101 on your computer.</p>
              <p>2. Open Visual Studio Code.</p>
              When you first open VS Code, you should see the Welcome page with different actions to get started.
              <p>3. On the Welcome page, select Open Folder..., and then select the folder you created.</p> 
               The VS Code window reloads and you should see the folder name at the top of the Explorer view. You'll use the Explorer view to view and manage the files and folders in your workspace.
              <img src='/images/open-folder.png' style="width: 100%;height: 100%;" alt="Open-folder"/>
              </div>
              <style>
              .VS Code p {
                margin: 10px 0;
              }
              .VS Code img {
                width: 50%;
                height: auto;
                text-align: center;
                margin: 20px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                border-radius: 5px;
              }
  
              .vscode .lg-img {
                width: 70%;
              }
  
              .vscode .xl-img {
                width: 100%;
              }
  
              .vscode .sub-topic {
                margin-top: 30px;
              }
  
              </style>
  
              `,
            },
            {
              id: 2,
              topic: "Explore the user interface",
              content: `
              <div class='Explore the user interface'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 2: Explore the user interface</strong></p><br>
              <p> <strong>Switch between views with the Activity Bar</strong></p>
              The Activity Bar is located on the side of the window and gives you quick access to different views, such as the Explorer, Search, Source Control, and Run and Debug views.
              <p>1. Use the Activity Bar to explore the different views.</P>
              <p>As you hover over the Activity Bar, you can see the name of each view and the keyboard shortcut to open each view. You'll find that many of the features in VS Code have keyboard shortcuts already assigned to them, and you can also customize these shortcuts to your liking.</p>
              <image src='/images/activity-bar.png' style="width: 100%;height: 100%;" alt="Activity-bar"/>
              <p>2. Notice the Primary Side Bar that opens when you select a view in the Activity Bar.</p>
              <p>The Primary Side Bar shows view-specific information. For example, the Source Control view shows the changes in your Git repository, and the Run and Debug view enables you to configure and start debugging sessions.</P>
              <image src='/images/activity-bar-and-side-bar.png' style="width: 100%;height: 100%;" alt="activity-bar-and-side-bar"/>  
              <p><strong>View and edit files with the Editor</strong></p>
              <p>The Editor is located in the main area of the window and is where you view and edit files in your workspace.</p>
              <p>1.Select the Explorer view in the Activity Bar, and then select the New File... button to create a new file in your workspace.</p>
              <image src='/images/explorer-new-file.png' style="width: 100%;height: 100%;" alt="explorer-view"/>
              <p>2.Enter the name index.html and press Enter.</p>
              <p>A file is added to your workspace and an Editor opens in the main area of the window, where you can start typing and editing the file.</p>
              <image src='/images/new-file-editor.png' style='width:100%;height:100%' alt='newfile.png'/>
              <p>3.Add more files to your workspace and notice that each file opens in a new Editor tab.</p>
              <p>You can open as many editors as you like and view them side by side vertically or horizontally. Learn more about side by side editing.</p>
              <image src='/images/multiple-editors.png' style='width:100%;height:100%' alt='multiple-editors.png'/>
              <p><strong>Access the terminal from the Panel area</strong></p>
              <p>The Panel area is located below the Editor and contains different views, such as the output and debug information, and also gives you access to the integrated terminal.
              <p>1. Open the Panel area by selecting View > Appearance > Panel from the menu.</p>
              <p>Notice the different view in the Panel area. As you use different features in VS Code, such as debugging your code, you'll use the information and functionality in these views.</p>
              <image src='/images/vscode-panel.png' style='width:100%;height:100%' alt='vscode-panel.png'/>
              <p>2. Open the integrated terminal by selecting Terminal in the Panel area > New Terminal, and try running some shell commands.</p>
              The terminal enables you to run shell commands directly in VS Code, without switching to another terminal application. For example, you can use the terminal to install dependencies for your project, or run a development server. Notice that the terminal working directory is the root of your workspace.
              <image src='/images/vscode-terminal.png' style='width:100%;height:100%;' alt='vscode-terminal'/>
              <p><strong>Access commands with the Command Palette</strong></p>
              Many of the commands in VS Code are available through the Command Palette. For example, enter Create new file in the Command Palette to create a file in your workspace, or enter Git to view the list of Git actions you can trigger.
              <p>1. Select View > Command Palette to open the Command Palette.</p>
              <img src ='/images/command-palette.png' style='width:100%;height:100%' alt='command-palette'/>
              <p> <strong>View status information with the Status Bar</strong></p>
              The Status Bar is located at the bottom of the window and shows information about the file you are editing, and the workspace you have open. For example, if the folder you opened is a Git repository, the Status Bar shows the Git status and current branch.
              <p>1. Open a file by selecting it in the Explorer view.</p>
              The Status Bar shows the language mode, indentation, and the line ending of the current editor.
              <img src='/images/status-bar.png' style='width:100%;height:100%' alt='status-bar'/>
              <p>2. Select the indentation field (shown as Spaces: 4 in the screenshot) in the Status Bar to modify the indentation of the current file. For example, to use tabs instead of spaces.</p>
              <p>If you've opened a Git repository, you can select the branch name in the Status Bar to create a new branch.</p>
              </div>
              <style>
              .Explore the user interface-submit p {
                margin: 10px 0;
              }
              .Explore the user interface-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Customize the user interface",
              content: `
              <div class='Customize the user interface'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 3: Customize the user interface</strong></p>
              <p>Each developer has their own preferences for how their coding environment should look. VS Code enables you to change the layout, colors, keyboard shortcuts, and nearly every other aspect of the editor through various settings.</p>
              <p>Let's start by using Color Themes to customize the colors in VS Code. A Color Theme affects both the VS Code user interface elements and the editor highlighting colors.</P>
              To select a different Color Theme:
              <p>1. Select the Manage button (gear icon) in the Activity Bar, and then select Themes > Color Theme to display the Color Theme picker.</p>
              <image src='/images/change-color-theme.png' style='width:100%;height:100%' alt='color-theme.png'/>
              <p>2. Use the Up and Down keys to navigate through the list and preview the colors of the theme.</p>
              VS Code comes with a list of built-in themes that you can choose from. As you move through the list, the active theme is previewed in VS Code.
              <image src='/images/themes_hero.gif' style='width:100%;height:100%' alt='color-theme-preview'/>
              Let's use the Settings Editor to modify the font size in the editor:
              <p>1.Select Code > Settings > Settings to open the Settings Editor.</p>
              <image src='/images/settings-editor.png' style='width:100%;height:100%' alt='settings.png'/>
              <p>2. Modify the value of the Editor: Font Size setting to 36.</p>
              When you switch to the index.html editor tab, notice how the font size change is immediately applied in the editor. You can select the gear icon next to the setting and select Reset Setting to reset the value back to its default value.

              
              </div>
              <style>
              .Customize the user interface-submit p {
                margin: 10px 0;
              }
              .Customize the user interface-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Write some code",
              content: `
              <div class='Write some code'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 4: Write some code</strong></p>
              <body>VS Code is first and foremost a code editor, so let's start by writing some code! VS Code has built-in support for JavaScript, TypeScript, HTML, CSS, and more. In this tutorial, you create a sample JavaScript file and use some of the code editing features that VS Code offers.
              <p>VS Code supports many programming languages and in a next step, you'll install a language extension to add support for a different language, namely Python</p>
              <p>1. In the Explorer view, create a new file app.js, and start typing the following JavaScript code:</p>
              <img src='/images/Myfirstcode.png' style='width:100%;height:100%' alt='new-file'/>
              As you type, you should see suggestions popping up that help you complete your code (IntelliSense). You can use the Up and Down keys to navigate the suggestions, and Tab to insert the selected suggestion.
              Notice also the formatting of the code (syntax highlighting), to help you distinguish between different parts of the code.
              <img src='https://code.visualstudio.com/assets/docs/getstarted/getting-started/javascript-intellisense.gif' style="width: 100%;height: 100%;" alt="Activity-bar"/>
              <p>2.Put the cursor on the Hello, string, select the lightbulb icon, and then select Convert to template string.</p>
              The lightbulb indicates that there are Code Actions available, which are suggestions that help you apply quick fixes to your code. 
              <p>In this case, the Code Action converts ""Hello, " + name into a template string "Hello,$name ", which is a special JavaScript construct to embed expressions in strings.
              <img src ='/images/code-action-template-string.png' style='width:100%;height:100%' alt='code-action-template-string'/>
              Toggle the File > Auto Save menu item to automatically save files whenever you make changes.
              </body>

            
              


  
              </div>
              <style>
              .Write some code-submit p {
                margin: 10px 0;
              }
              .Write some code-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 5,
              topic: "Use source control",
              content: `
              <div class='Use source control'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 5: Use source control</strong></p>
              <p>As you're writing code, you'll want to save your work in a source control system to track changes or collaborate with others.</p>
              <p>Let's use the built-in Git support to commit the changes you've made previously.</p>
              <p>1. Make sure you have Git installed on your computer. You can check if Git is installed by opening the terminal and entering <strong>git --version</strong>.</p>
              <p>2. Select the Source Control view in the Activity Bar, and select Initialize Repository to create a new Git repository for your workspace.</p>
              <p>You also have the option to directly publish your changes to a GitHub repository by selecting Publish to GitHub.</p>
              <img src='/images/source-control-initialize.png' style='width:100%;height:100%' alt='initialize-repository'/>

              <p>3. After you initialize a repository, the Source Control view shows the changes you've made in your workspace.
              Notice the letter indicating the type of change alongside each file. For example, U indicates an untracked/new file.
              When you hover over a change, you can choose to discard or stage the change. Staging a change means that you've marked it as ready to be committed.</p>
              <img src='/images/source-control-changes.png' style='width:100%;height:100%' alt='source-control-view'/>
              <p>4. Select + next to Changes to stage all changes at once.</p>
              <p>5. Enter a commit message, for example Add hello function, and then select the Commit to commit the changes to your Git repository.</p>
              
              <img src='/images/source-control-commit.png' style='width:100%;height:100%' alt='source-control-commit'/>
              <p>6.The Source Control Graph shows a visual representation of the commit history of your Git repository. You can use the graph to explore the commit history, compare changes, and more.</p>
              <img src='/images/source-control-graph.png' style='width:100%;height:100%' alt='source-control-graph'/>
              </div>
              <style>
              .Use source control-submit p {
                margin: 10px 0;
              }
              .Use source control-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 6,
              topic: "Install a language extension",
              content: `
              <div class='Install a language extension'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 5: Install a language extension</strong></p>
              <p>The features that VS Code includes out-of-the-box are just the start. VS Code has a rich ecosystem of extensions that let you add languages, debuggers, and tools to your installation to support your specific development workflow.</p>
              <p>Let's install a language extension to add support for Python, or any other programming language you are interested in.</p>
              <p>1. Select the Extensions view in the Activity Bar.</p>
              The Extensions view enables you to browse and install extensions from within VS Code.
              <img src='/images/extensions-view.png' style='width:100%;height:100%' alt='extension-view'/>
              
              <p>2. Enter Python in the Extension view search box to browse for Python-related extensions. Select the Python extension published by Microsoft, and then select the Install button.</p>
              <img src='/images/extensions-search-python.png' style='width:100%;height:100%' alt='python-extension'/>
              
              <p>3 Now, create a new Python file hello.py in your workspace, and start typing the following Python code:</p>
              <img src='/images/Firstcode.png' style='width:100%;height:100%' alt='hello-world'/>
              </div>
              <style>
              .Install a language extension-submit p {
                margin: 10px 0;
              }
              .Install a language extension-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
            {
              id: 7,
              topic: "Run and debug your code",
              content: `
              <div class='Run and debug your code'>
              <p class='sub-topic' style='font-size: 1.35em'><strong>Step 5: Run and debug your code</strong></p>
              <p>One of the key features in VS Code is its great support for running and debugging code. VS Code has built-in support for running and debugging Node.js applications. In this tutorial, you use the Python extension you installed in the previous step to debug a Python program.</p>
              Let's debug the <strong>hello.py</strong> program that you created in the previous step.<br>
              <p>1. Make sure that  <a style='text-decoration: underline' href='https://www.python.org/downloads/' target='_blank'> Python 3</a> is installed on your computer.</p>
              To run and debug programs in VS Code, you need to have the necessary runtime installed on your computer. For example, to run and debug a Node.js program, you need to have the Node.js runtime installed.
              <p>2. In the hello.py file, place the cursor on the print line and press F9 to set a breakpoint</p>
              A red dot appears in the left margin of the editor, indicating that a breakpoint is set. With a breakpoint, you can pause the execution of your program at a specific line of code.
              <img src='/images/python-set-breakpoint.png' style='width:100%;height:100%' alt='first-breakpoint'/>
              <p>3. Press F5 to start a debugging session. Select Python Debugger in the Quick Pick menu, and then select Python File to debug the current Python file.</p>
              Select the Python debugger:
              <img src='/images/python-select-debugger.png' style='width:100%;height:100%' alt='python-debugger'/>
              Choose to run the current Python file:
              <img src='/images/python-debug-configuration.png' style='width:100%;height:100%' alt='python-debug-configuration'/>
              <p>4. Notice that the program starts and that the execution stops at the breakpoint you set.</p>
              VS Code uses the Python Debugger you installed via the extension to run and debug the program.
              <img src='/images/vscode-debugging.png' style='width:100%;height:100%' alt='python-debug'/>
              <p>5. Press the Continue button in the Debug toolbar or press F5 to continue the execution.</p>
              <img src='/images/debug-toolbar-play.png' style='width:100%;height:100%' alt='python-continue'/>
              </div>
              <style>
              .Run and debug your code p {
                margin: 10px 0;
              }
              .Run and debug your code pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
          ],
        },
  
        {
          id: 2,
          name: "Introduction to Programming in Python",
          type: "python1",
          contents: [
            {
              id: 1,
              topic: "Data Representation",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Data Representation</h2>
                <p>
                Before we get started with writing programs, it is helpful to understand a little bit about the computer and how it understands the programs we write. Computers use a lot of abstraction! At their core, they are machines, with various parts that do different tasks, including computation, storing data, and output (such as showing things on the screen).  Computers store data in binary, which is a system of numbering that uses only two digits: 0 and 1. When we use computers, we are interacting with an abstraction – rather than having to interact with the 0s and 1s, we can type letters, click images, and generally have a much better time! Images on the screen are an abstraction of the 1s and 0s stored in the computer.  
                </p>
                <p>This video will introduce you to computer hardware and binary numbers. This is NOT the most important thing you should know, so if you’re kind of confused, that’s okay. It is a thing that is not actually useful but is the kind of background knowledge that many computer scientists have. </p>
                <p>The speaker uses a paper tool called the “Flippy Do” An online version of the Flippy Do is available here:</p>
                <a target='_blank' href='https://studio.code.org/projects/applab/z6iQr137KHDvkIaz5UNCviWLVkkRnhyteDqWhWBJ56o'>Flippy Do Game</a>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+1+-+Binary+Numbers.mp4"
                    type="video/mp4">
                </video>
              </div>
                <p>You can practice your understanding of binary numbers with this game:</p>
                <a target='_blank' href='https://learningcontent.cisco.com/games/binary/index.html'>Binary Numbers Game</a>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Scripting vs. Compiled Languages",
              content: `
              <div class='script-compiled'>
                  <h2 style='font-weight: 700; font-size: 1.25em'>Scripting vs. Compiled Languages</h2>
                  <p>There are a LOT of different programming languages. There are some differences in how the computer executes (that is, runs) programs run in different languages. One of the differences is between languages known as scripting languages and languages known as compiled languages. This video will explain the difference:</p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+1+-+Scripted+Languages.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Compiled Languages </h3>
              <ul class='list'>
              <li>Written with strict syntax in high-level language</li>
              <li>Converted to machine code by the compiler
                <ul class='sublist'>
                  <li>All lines are evaluated </li>
                  <li>Syntax errors are flagged by compiler</li>
                </ul>
              </li>
              <li>Compiled program is what actually runs </li>
              <li>Used for major applications </li>
              <li>Source code is not needed for execution </li>
              </ul>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Scripting Languages </h3>
              <ul class='list'>
              <li>Written with strict syntax in high-level language </li>
              <li>Each line is converted to machine code as it runs 
                <ul class='sublist'>
                  <li>Syntax errors are not flagged until the individual line is executed  </li>
                  <li>Conversion as you go is slower than converting ahead of time </li>
                </ul>
              </li>
              <li>Easier to begin a program  </li>
              <li>Used for automation and simple tasks </li>
              <li>Source code is needed to run </li>
              </ul>
              </div>
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Writing Python Code & Debugging",
              content: `
              <div class='debug'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Writing Python Code & Debugging </h2>
                <p>Programming is just a process of telling the computer what to do. – creating an algorithm. The algorithms are called programs or code, and they are written in programming languages. Python is one programming language, and you will be learning to write Python programs.  </p>
                <p>Most programmers use something called an “I.D.E.” which stands for Integrated Development Environment. Basically, an IDE is like a word processor (like Google Docs or Microsoft Word) but for programming. Programs have a lot of weird characters and their own syntax (the rules of grammar for the programming language), and IDEs are made to help with that, just like a word processor has tools like spell-check.  </p>
                <p>This video has two parts. In the first part, you will learn how to write a little python code. The thing is, no one is perfect, and the computer is SUPER picky about what it understands. At some point you will write some code that the computer doesn’t understand and it will give you an error. This is known as having a bug in your code. You will have to debug your code – find the problem and fix it. The second half of the video has you write some code that is wrong, and learn about why, and what it looks like when you get an error. One thing to remember is that <span style='text-decoration: underline;'>the computer does not judge you</span>. It has no opinion, so you can just keep trying to fix it as many times as it takes. The error message is trying to help you know where it got confused so you can fix it. (Error messages are often confusing and unhelpful, but they’re trying.) Debugging is the most frustrating part of programming! In addition to learning technical skills for finding and fixing bugs, it is good to find emotional skills that work for you too, like taking a break if you get overly frustrated, or asking someone else for help if you’ve already tried to fix it and searched for help online. </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+1+-+Intro+to+Python.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
            <h3 style='font-weight: 700; font-size: 1.25em'>Debugging Python</h3>
            <p>We will use a IDE (Integrated Development Environment) in this class. However, with python, you can type commands directly into a command line and they will execute. This is useful if you have a small script that you want to run or a bit of code you want to test outside of a larger program. </p>
            <p>In VS Code, start a new Python Project. This is only for experimentation so the name of the project does not matter. </p>
            <p>In the VS Code main.py file, try typing and running each of the following commands. </p>
            <div class='code'>
            <pre>print("Hello Python") </pre>
            <pre>print(2 + 3) </pre>
            <pre>print("Hello" + "world") </pre>
            <pre>print("Hello" + 5)</pre>
            </div>
  
              </div>
               <div class='notes'>
            <h3 style='font-weight: 700; font-size: 1.25em'>Practice Debugging</h3>
            <p>Type the following commands into a Python program. Debug the errors to see how Python responds if it cannot run a command as typed.  </p>
            <div class='code'>
            <pre>Print("Hello world")  </pre>
            <pre>print "Hello world" </pre>
            <pre>print("Hello world)  </pre>
            <pre>print("Hello world" </pre>
            <pre>print(Hello world) </pre>
            </div>
  
              </div>
              <div class='notes'>
            <h3 style='font-weight: 700; font-size: 1.25em'>Documentation For Help</h3>
            <p>There are many internet resources, your peers, texts, and your instructor you can get help from in this class. Python also has built-in help documentation if you need it. When you are using a command, a window will pop up with information about the command you are typing. Hover on the command to get additional information and usage examples. </p>
            <div class='code'>
            <pre>abs(5)  </pre>
            <pre>chr(65)   </pre>
            <pre>eval()</pre>
            </div>
  
              </div>
              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },
            {
              id: 4,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 5,
              topic: "Lab 1 - MadLib",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab 1 - MadLib</h2>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lab+1+-+Madlib.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Create a new python project in VS Code. Name the project Lab 1.</p>
              <p>Create a <a style='text-decoration: underline;' href='https://en.wikipedia.org/wiki/Mad_Libs' target='_blank'>Mad Lib</a> where the user supplies key adjectives, nouns, verbs, adverbs, or other types of speech then constructs a full story with those words.</p>
              <p>Your Mad Lib must:</p>
              <ul class='list'>
              <li>Ask for at least 6 words</li>
              <li>Consider usability in design (be clear)</li>
              <li>Create a story with the user supplied words.</li>
              </ul>
              <p>There are a few ways to join words in python:</p>
              <div class='code'>
              <pre>noun1 = "Bicycle"</pre>
              <pre>print("I like to ride my " + noun1)</pre>
              <pre>print("I like to ride my", noun1)</pre>
              </div>
              <p>Test which works best for you, note where the spaces fall using the different methods.</p>
              <p>You will also need to get input from the user. This is done by using the input function and saving the response to a variable.</p>
                 <div class='code'>
              <pre>noun1 = input("Enter a noun: ")</pre>
              <pre>print("You said", noun1)</pre>
              </div>
              <p>Note that the variable is on the left side of the equal sign. Whatever you put in the quotes of the input function will display on screen.</p>
              
              </div>
              <style>
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 3,
          name: "Data Types",
          type: "python2",
          contents: [
            {
              id: 1,
              topic: "Introduction to Data Types",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Data Types </h2>
                <p>
  You learned about variables in the last lab. Variables contain data. In the Mad Lib lab, the data was words like nouns, adjectives, and verbs. Sometimes the data is numbers, like a year or a quantity, like the number of learners who are participating in the Work-Learn project.                 
  </p>
                <p>Unfortunately, computers are <span style='text-decoration: underline'>super</span> picky, so they care about what data type a variable is. Believe it or not, if you tried to get a computer to add “five” and “three,” it wouldn’t be able to, because to the computer, “five” and “three” are both words (which is known as a string data type). Instead, you would have to ask it to add 5 + 3 to get the right answer.   </p>
                <p>In many ways, having to know about data types is the kind of thing that seems boring and like you shouldn’t have to worry about it. However, programming languages (often) can’t abstract away the details of data types to just figure it out. Knowing data types will help you write good code and debug code if you or another programmer makes a mistake. </p>
                <p>In this video, you will learn about different data types, and about arithmetic operators, which is just the fancy programming way to say “how to tell the computer to do math.” You can follow along with the video by typing into your own python program.  </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+2+-+Data+Types.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <p>Discuss and demonstrate: </p>
              <ul class='list'>
              <li>The concept of data types </li>
              <li>variables, assignments </li>
              <li>numerical types  </li>
              <li>arithmetic operators and expressions </li>
              <li>comments in the program  </li>
              <li>understanding error messages   </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Arithmetic Operators  </h3>
              <p>Discuss and demonstrate: </p>
              <table class='table'>
                  <tr>
                    <th>Operator</th>
                    <th>Description </th>
                    <th>Notes</th>
                  </tr>
                  <tr>
                    <td>+</td>
                    <td>addition</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>-</td>
                    <td>subtraction</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>*</td>
                    <td>multiplication</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>/</td>
                    <td>division (float)</td>
                    <td>5 / 2 -> 2.5 </td>
                  </tr>
                  <tr>
                    <td>//</td>
                    <td>division (floor)</td>
                    <td>5 / 2 -> 2</td>
                  </tr>
                  <tr>
                    <td>%</td>
                    <td>modulus</td>
                    <td>5 % 2 -> 1 </td>
                  </tr> 
                  <tr>
                    <td>**</td>
                    <td>exponent</td>
                    <td>2 ** 5 -> 32</td>
                  </tr>
                </table>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Data Types </h3>
              <p>There are many different data types in python. You can always test what python a data type is using the following function: </p>
              <pre style='font-size: 0.85em'>x = 5</pre>
              <pre style='font-size: 0.85em'>type(x)</pre>
              <pre style='font-size: 0.85em'>&lt;class 'int'&gt;</pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Integers  </h3>
              <p>Integers are whole numbers without decimal values. In many languages, there is a "biggest" value that an integer can be. </p>
              <p>In Python 3, there is effectively no limit to how long an integer value can be. Of course, it is constrained by the amount of memory your system has but beyond that you can represent a very large number.  </p>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Floating-Point Numbers  </h3>
              <p>The float type in Python designates a floating-point number. float values are specified with a decimal point. Optionally, the character e or E followed by a positive or negative integer may be appended to specify scientific notation: </p>
              <pre style='font-size: 0.85em'>x = 5.2</pre>
              <pre style='font-size: 0.85em'>type(x)</pre>
              <pre style='font-size: 0.85em'>&lt;class 'float'&gt;</pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Characters  </h3>
              <p>Single letters are called characters or char. Characters align to the <span><a href='http://www.asciitable.com/' target='_blank'>ASCII standard</a></span> where every letter has a unique number. </p>
              <ul class='list'>
              <li>The concept of data types </li>
              <li>variables, assignments </li>
              </ul>
              <p>These are examples of Characters, you can also convert a character from the letter representation to the numerical representation" </p>
              <pre style='font-size: 0.85em'>ord('a')</pre>
              <pre style='font-size: 0.85em'>97</pre>
              <pre style='font-size: 0.85em'>ord('a')</pre>
              <pre style='font-size: 0.85em'>65</pre>
  
              <p>This conversion can go the other way too.  </p>
              <pre style='font-size: 0.85em'>chr(65) </pre>
              <pre style='font-size: 0.85em'>A</pre>
              <pre style='font-size: 0.85em'>chr(66) </pre>
              <pre style='font-size: 0.85em'>B</pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Special Characters  </h3>
              <p>To represent keyboard actions that are difficult to type, several special characters are used. Here are a few common special characters. </p>
              <table class='table'>
                  <tr>
                    <th>Character</th>
                    <th>Meaning </th>
                  </tr>
                  <tr>
                    <td>&#92;n</td>
                    <td>New Line (Enter) </td>
                  </tr>
                  <tr>
                    <td>&#92;t</td>
                    <td>Tab</td>
                  </tr>
                  <tr>
                    <td>&#92;"</td>
                    <td>Displays a quote </td>
                  </tr>
                  <tr>
                    <td>&#92;&#92;</td>
                    <td>Displays a backslash  </td>
                  </tr>
                  
                </table>
              </div>
  
               <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Strings  </h3>
              <p>Strings are one or more characters in a row, we show the beginning and end of a string by using quotations. Strings can be denoted in several methods: </p>
              <ul class='list'>
              <li>"I am a string"  </li>
              <li>'I am also a string' </li>
              <li>'''This is also a string'''  </li>
  
              </ul>
              <p>The key is to have the same beginning and ending quotation to show the matched pair. We will usually use double quotes ("") for strings since that is the standard in other programming languages. </p>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Boolean   </h3>
              <p>Boolean types have two possible states: </p>
              <ul class='list'>
              <li>True  </li>
              <li>False </li>
  
              </ul>
              <p>We use booleans to make decisions or evaluate a criteria. Anything that can be answered as a yes or no can be stored as a boolean value. </p>
              </div>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Converting Types",
              content: `
              <div class='script-compiled'>
                  <h2 style='font-weight: 700; font-size: 1.25em'>Converting types </h2>
                  <p>Since the computer is super picky about what type of data is in each variable, sometimes we will have to tell the computer, “no, don’t treat it like that, make it be something else!” For example, the number 5 is usually a number. But if you put it into quotes, the computer will treat it as a string – just like it would treat anything else in quotes.  </p>
                  <p>In this video, you’ll see some errors that happen when you try to do something the computer can’t do because the data is the “wrong” type, and how to convert data to different types. You’ll also learn how to use some data types together. You can follow along in your own vscode editor if you’d like to practice. </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+2+-+Type+Conversion.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Converting types   </h3>
              <p>Often when we get input, we accept whatever they type as a string. If the value they gave us was actually a number, we will have to convert the data type to do mathematical manipulation. </p>
              <pre style='font-size: 0.85em'>
            \nx = "5" \ny = x + 10 \n\nTraceback (most recent call last):\n File "<stdin>", line 1, in <module> \nTypeError: can only concatenate str (not "int") to str
              </pre>
              <p>To avoid this error we must first convert one of the data types to match. In this case, we want to convert the string "5" to the integer 5. </p>
              <pre style='font-size: 0.85em'>
            \nx = "5" \ny = int(x) + 10 \nprint(y) \n15 
              </pre>
  
               <p>You cannot convert a string to a number if the letters of the string are not actually numbers. You will get an error. </p>
              <pre style='font-size: 0.85em'>
            \nint("Hello")  \n\nTraceback (most recent call last):\nFile "<stdin>", line 1, in <module>  \nValueError: invalid literal for int() with base 10: 'Hello' 
              </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Combining Types - Numbers </h3>
              <p>Data Types can sometimes be combined without a type change involved. If we do this, what would the resulting type be? </p>
              <pre style='font-size: 0.85em'>
              \nx = 5 \ny = 7.2 \nz = x + y  \nprint(z)\n12.2\n\ntype(z)\n&lt;class 'float'&gt;
              </pre>
              <p>Here we can see that an integer and a floating-point number are added. The result is a float. If we had converted the result to an integer, data would have been lost. An integer cannot hold the decimal portion of the floating-point number and that data would have been dropped. </p>
              <p>Sometimes, it is okay to lose the decimal portion of a floating point number. </p>
              <pre style='font-size: 0.85em'>
              \nx = 7.2 \ny = int(x) \nprint(y)\n7
              </pre>
              <p>Note: the decimal portion is not rounded, it is just dropped. </p>
              <pre style='font-size: 0.85em'>
              \nprint( int(8.8) ) \n8
              </pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Combining Types - Letters </h3>
              <p>Two strings can be joined with the + operator. </p>
              <pre style='font-size: 0.85em'>
              \nprint("Hello " + "world")  \nHello world
              </pre>
              
              <p>We can also join a string and a character with the same method. </p>
              <pre style='font-size: 0.85em'>
              \nprint("Hello " + '!') \nHello!
              </pre>
              
              <p>You cannot join a number with a string, you will get an error.  </p>
              <pre style='font-size: 0.85em'>
              \nprint("Hello " + 1) \nTraceback (most recent call last):\n File "<stdin>", line 1, in <module> \nTypeError: can only concatenate str (not "int") to str 
              </pre>
              <p>If you want to do this, you can convert the number to become a string. This works with both literal numbers and with variables that are numbers. It also works with both integers and floating-point numbers. </p>
              <pre style='font-size: 0.85em'>
              \nprint("Hello" + str(1)) \nHello1
              </pre>
              
              <pre style='font-size: 0.85em'>
              \nx = 5 \nprint("Hello" + str(x)) \nHello5
              </pre>
              
              <pre style='font-size: 0.85em'>
              \ny = 2.8 \nprint("Hello" + str(y))\nHello2.8
              </pre>
              </div>
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 4,
              topic: "Lab 2 - Magic 8 Ball",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab 2 - Magic 8 Ball </h2>
              <p>
              In this module you learned about simple data types. There are some more complicated data types, such as when you want to store data in a list. In this lab, you’ll learn how to create and use a list, to make a program that is a model of the Magic 8 Ball. If you don’t know or remember about the Magic 8 Ball – a plastic sphere that would answer questions – you can read the Wikipedia page about it <span><a href='https://en.wikipedia.org/wiki/Magic_8_Ball' target='_blank'>https://en.wikipedia.org/wiki/Magic_8_Ball</a></span> or play someone else’s computer model <span><a href='https://www.horoscope.com/us/games/divination/game-magic-8-ball.aspx' target='_blank'>https://www.horoscope.com/us/games/divination/game-magic-8-ball.aspx</a></span>  </p>
              <p>This video will get you started on the lab:</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lab+2+-+Magic+8+Ball.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>Create a program that will allow the user to ask a question, then provide a random response like a Magic 8 Ball. </p>
              <p>A traditional Magic 8 Ball has 20 possible answers: </p>
              <ul class='list'>
              <li>As I see it, yes.</li>
              <li>Ask again later.</li>
              <li>Better not tell you now.</li>
              <li>Cannot predict now.</li>
              <li>Concentrate and ask again.</li>
              <li>Don’t count on it.</li>
              <li>It is certain.</li>
              <li>It is decidedly so.</li>
              <li>Most likely.</li>
              <li>My reply is no.</li>
              <li>My sources say no.</li>
              <li>Outlook not so good.</li>
              <li>Outlook good.</li>
              <li>Reply hazy, try again.</li>
              <li>Signs point to yes.</li>
              <li>Very doubtful.</li>
              <li>Without a doubt.</li>
              <li>Yes.</li>
              <li>Yes – definitely.</li>
              <li>You may rely on it.</li>
              </ul>
              <p>You may select to use these or answers you have created. They key is that they are given a random answer to the question they ask. </p>
              <p>How to create a list of possible answers: </p>
              <pre style='font-size:0.85em'>answers = ["thing 1", "thing 2"] # Each item must be in quotes, separated by a comma.</pre>
              <p>At the top of your code, you need to include the following line to get access to the random utilities. </p>
              <pre style='font-size:0.85em'>import random </pre>
              <p>Since we imported random at the top of our file, we can use the following code to select a random item from the list. </p>
              <pre style='font-size:0.85em'>randomNum = random.randint(0, 2)\nresponse = answers[randomNum]   </pre>
              <p>Your program should do the following: </p>
              <ul class='list'>
              <li>Ask the user a question</li>
              <li>Randomly select an answer from your list of possible answers</li>
              <li>Respond to the asked question with the random answer</li>
              </ul>
              <p>When you are done, submit the “join link” to your  project. </p>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 4,
          name: "Control Structures",
          type: "python3",
          contents: [
            {
              id: 1,
              topic: "Introduction to Control Structures",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Control Structures </h2>
                <p>
  So far, all of the programs you’ve written have just run each line of code in order. However, we often want more control over how a program runs. For example, when you log in to the Work-Learn website, it checks your username against the list of users and gives you the permission of a student, rather than the permissions of a teacher. In order to do this, we use something called Boolean Logic. In this video, you will learn how to get the computer to evaluate a variable (that is, look at the value of the variable) to tell you if a condition is true or false.  </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Control+Structures/Lesson+3+-+Control+Structures.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <p>Discuss and demonstrate: </p>
              <ul class='list'>
              <li>Conditions, boolean logic, logical operators  </li>
              <li>Ranges  </li>
              <li>numerical types  </li>
              <li>Control statements
                <ul>
                  <li>if-else </li>
                  <li>for loops </li>
                  <li>while loops </li>
                </ul>
              </li>
  
              <li>Short-circuit evaluation  </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Boolean Logic </h3>
              <p>Boolean values can only be one of two states:  </p>
              <ul>
              <li>True</li>
              <li>False</li>
              </ul>
              <p>Boolean values are used to make decisions in various control structures. The most common way to create a boolean value is through a comparison. </p>
              <pre>10 < 15 </pre>
              <pre>True</pre>
              <pre style='margin-top: 20px'>10 < 15 </pre>
              <pre>False</pre>
              <pre style='margin-top: 20px'>age = 19 </pre>
              <pre>age >= 21 </pre>
              <pre>False </pre>
  
              <p>Here are some common boolean comparison operators </p>
  
              <table class='table'>
                  <tr>
                    <th>Operator</th>
                    <th>Description </th>
                  </tr>
                  <tr>
                    <td>&lt;</td>
                    <td>Strict less than </td>
                  </tr>
                  <tr>
                    <td>&gt;</td>
                    <td>Strict greater than </td>
                  </tr>
                  <tr>
                    <td>&lt;=</td>
                    <td>Less than OR equal </td>
                  </tr>
                  <tr>
                    <td>&gt;=</td>
                    <td>Greater than OR equal </td>
                  </tr>
                  <tr>
                    <td>==</td>
                    <td>Equal </td>
                  </tr>
                  <tr>
                    <td>!=</td>
                    <td>NOT equal</td>
                  </tr> 
                </table>
  
                <p>We also join two or more boolean expressions together with and and or operators. </p>
  
  
                <table class='table'>
                  <tr>
                    <th>Statement 1 </th>
                    <th>Statement 2  </th>
                    <th>AND </th>
                    <th>OR  </th>
                  </tr>
                  <tr>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                    <td>True</td>
                  </tr>
                  
                  <tr>
                    <td>True</td>
                    <td>False</td>
                    <td>False</td>
                    <td>True</td>
                  </tr>
                  
                  <tr>
                    <td>False</td>
                    <td>True</td>
                    <td>False</td>
                    <td>True</td>
                  </tr>
  
                  <tr>
                    <td>False</td>
                    <td>False</td>
                    <td>False</td>
                    <td>False</td>
                  </tr>
                </table>
  
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Examples </h3>
              <pre>x = 5  </pre>
              <pre>y = 10 </pre>
              <pre>x &lt; 10 and y &gt; 5 </pre>
              <pre>True  </pre>
              <pre style='margin-top: 20px'>x &lt; 10 or y &lt; 0  </pre>
              <pre>True </pre>
              <pre style='margin-top: 20px'>x &lt; 10 and y &lt; 0  </pre>
              <pre>age &gt;= 21 </pre>
              <pre>False </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Short-circuit evaluation   </h3>
              <p>Since the result of an <strong>and</strong> statement is only True if both the first and second elements are True, for the sake of efficiency the second part of the statement is only evaluated if the first part is True. </p>
              <pre style='font-size: 0.85em'>age = 19 </pre>
              <pre style='font-size: 0.85em'>hour = 23 </pre>
              <pre style='font-size: 0.85em'>age &lt; 18 and hour &gt; 22 </pre>
              <pre style='font-size: 0.85em'>False </pre>
              <p>The hour is not evaluated since the first statement is False. This is often used to avoid potential errors. </p>
              <pre>import math </pre>
              <pre>x = -20  </pre>
              <pre>math.sqrt(x)  </pre>
              <pre style='margin-top:20px'>Traceback (most recent call last):   </pre>
              <pre>  File "<stdin>", line 1, in <module>   </pre>
              <pre>ValueError: math domain error    </pre>
              <pre style='margin-top:20px'>x &gt;= 0 and math.sqrt(x) &lt; 5    </pre>
              <pre>False    </pre>
              <pre style='margin-top:20px'>x = 16   </pre>
              <pre style='margin-top:20px'>x &gt;= 0 and math.sqrt(x) &lt; 5    </pre>
              <pre>True</pre>
              <p>The same is true with <strong>or</strong> statements. This time, a True statement in the first position will result in a True result. As a result, the second expression is not evaluated if the first expression is True. </p>
              <p>There are many reasons we may want to short circuit an operation, especially if it is a difficult or costly operation. </p>
              </div>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Conditional Statements",
              content: `
              <div class='script-compiled'>
                  <h2 style='font-weight: 700; font-size: 1.25em'>Conditional Statements</h2>
                  <p>Now you have learned how to evaluate one or more variables, but the reason to do that is so you can control whether or not a piece of code runs. In this video, you’ll learn one way to tell the computer to run or skip a piece of code, using something called a conditional (also known as if statements or if-else statements) </p>
                  <p>Video:</p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Control+Structures/Lesson+3+-+If+Statements.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>if-else statements   </h3>
              <p>Note: Indentation matters </p>
              <pre style='font-size: 0.85em'>if <condition>: </pre>
              <pre style='font-size: 0.85em'>  statement1 </pre>
              <pre style='font-size: 0.85em'>  statement2 </pre>
              <pre style='font-size: 0.85em'>  etc... </pre>
  
              <p>The indented statements will only execute if the condition is true. </p>
              <pre style='font-size: 0.85em'>x = 5 </pre>
              <pre style='font-size: 0.85em'>if x > 2: </pre>
              <pre style='font-size: 0.85em'>  print ("The statement x > 2 is TRUE!") </pre>
              <pre style='font-size: 0.85em'>print("This line happens either way.")  </pre>
  
               <p>What do you do if the if condition is not true? </p>
  
              <pre style='font-size: 0.85em'>
  grade = input("Enter your grade: ") 
  
  grade = int(grade) #convert from string to integer 
  
  
  if(grade >= 70): 
    print("You passed!") 
  
  else: 
    print("You need to study more.") 
  
  
  What if there are multiple options? 
  
  if(grade >= 90): 
    print("You got an A") 
  
  elif(grade > 80): 
    print("You got a B") 
  
  elif(grade > 70): 
    print("You got a C") 
  
  elif(grade > 60): 
    print("You got a D") 
  
  else: 
    print("You got a F") 
              </pre>
              </div>
              
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Loops",
              content: `
              <div class='script-compiled'>
                  <h2 style='font-weight: 700; font-size: 1.25em'>Loops</h2>
                  <p>If statements are not the only control structure. Another way to control the program is by writing a loop where something happens over and over. In this video you will learn about two kinds of loops. You use a for loop when you need to run a piece of code some specific number of times. You use a while loop when you need the code to run while a condition is true. You will also hear about infinite loops, which never end (and are a problem – you always want your code to have an ending condition!) </p>
                  <p>Video:</p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Control+Structures/Lesson+3+-+Loops.mp4"
                    type="video/mp4">
                </video>
              </div>
              <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>for loops </h3>
              <p>For loops in Python will iterate across a list. The variable you create for the loop will be each of the items in the list in order. </p>
              <pre font-style='0.85em'>
  for i in ages: 
      print(i) 
  
  19 
  18 
  22 
  20 
              </pre>
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Ranges </h3>
              <p>The range function is an easy way to create a list for our loop to iterate over. </p>
              <pre font-style='0.85em'>
  range(10) -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
  
  for i in range(10): 
      print(i) 
  </pre> 
              <p>You can also give the range function a start, stop, and increment amount. </p>
              <pre font-style='0.85em'>
  #range(start, end, increment) 
  #Example 
  for i in range(10, 20, 2): 
      print(i) 
              </pre>
  
              </div>
              
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>while loops  </h3>
              <p>A while loop works like an if statement where a boolean expression will determine if the loop continues. Every loop should have 3 important things. </p>
              <ul class='list'>
              <li>Initialize a variable </li>
              <li>Check the variable </li>
              <li>Change the variable... in a way that will eventually end. </li>
              </ul>
              <pre font-style='0.85em'>
  x = 10 #initialize 
  
  while (x > 0):  #check the variable 
      print(x) 
      x = x - 1   #change the variable 
  </pre> 
              <p>Loops do not need to be determined by the value of a number, it could be a state that we are waiting to change.  </p>
  
              <pre font-style='0.85em'>
  play = "Yes" # initialize 
  
  while (play == "Yes"): # check the variable 
    <some game goes here> 
    play = input("Play again? (Yes/No): ") #change the variable 
  
  print("End of the game.") 
              </pre>
  
              </div>
              
  
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 5,
              topic: "Lab 3a - Temperature Conversion",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab 3a - Temperature Conversion </h2>
              <p>
              In this module, you learned about “control of flow” or how to control the way your program runs (that is, flows). Thinking back to the computational thinking module, you could create a flowchart to show how your program runs, with a diamond for each loop or conditional statement – that’s why it’s called control of flow. </p>
              <p>In this lab, the first of two for this module,  you will create a program that asks the user for a temperature in Fahrenheit and converts it to Celsius. This will also give you practice thinking about number precision, that is, how to control how many decimal places a number has.  </p>
              <p>The video will also show you how to comment your program – adding notes that a person can read and the computer will ignore. You will also see a function – a chunk of code with a name. You’ll learn more about functions in a future module, in this lab you will modify the starter code and just use the function that is already there.  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Control+Structures/Lab+3a+-+Temp+Convert.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>Precision</p>
              <p>When dealing with decimal values, it is often useful to round data to make it more presentable to the user. Python has several methods to round, here are a few </p>
              <pre style='font-size: 0.85em'>
  num = 3.1415926  
  num = num * 100 #Multiply by 100  
  num = int(num) #drop the decimal part  
  num = num / 100.0 #divide by 100 to get 2 decimal points back  
  print(num)
              </pre>
              <p>What are the problems with this method?</p>
              <pre style='font-size: 0.85em'>
  num = 3.1415926  
  num = round(num, 2) # rounds to two places  
  print(num) 
              </pre>
              <p>Are there any issues with this method?</p>
              <h3 style='font-weight: 700'>Lab Assignment</h3>
              <p>Create a Python project that asks the user for a temperature in Fahrenheit, convert to Celsius. 
  Copy/Paste the starter code linked: </p>
              <a href='https://github.com/phuclinh9802/aied-staging-v2/blob/main/TempConvert.py' target='_blank'>https://github.com/phuclinh9802/aied-staging-v2/blob/main/TempConvert.py</a>
              <p>You will need to look up the conversion factor online.</p>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
            {
              id: 6,
              topic: "Lab 3b: Rock – Paper – Scissors",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab 3b: Rock – Paper – Scissors </h2>
              <p>
              You may have played Rock-Paper-Scissors when you needed to settle an argument with another person, such as children fighting over the last piece of cake. If you’ve never encountered this game before, there are instructions at WikiHow: <a href='https://www.wikihow.com/Play-Rock,-Paper,-Scissors' target='_blank'>https://www.wikihow.com/Play-Rock,-Paper,-Scissors</a> or you can play against the computer by clicking on the rock, paper, or scissors at this online version: <a href='https://www.rock-paper-scissors-game.com' target='_blank'>https://www.rock-paper-scissors-game.com</a>.  </p>
              <p>To create this game, you’ll use your new knowledge of conditionals and loops.  </p>
              <p>The video will also show you how to comment your program – adding notes that a person can read and the computer will ignore. You will also see a function – a chunk of code with a name. You’ll learn more about functions in a future module, in this lab you will modify the starter code and just use the function that is already there.  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Control+Structures/Lab+3b+-+RPS.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>We will be creating the class game of Rock, Paper, Scissors. </p>
              <p>Copy/Paste the starter code (Github link attached) into a new Python project in VSCode.  </p>
              <p>Example Game: </p>
              <pre style='font-size: 0.85em'>
  Select Rock, Paper, or Scissors (R, P, S): R  
  Player chose: Rock  
  Computer chose: Scissors  
  You win!  
  Would you like to play again? (Y/N): Y  
  Select Rock, Paper, or Scissors (R, P, S): R 
   
  Player chose: Rock  
  Computer chose: Paper  
  You lose.  
  Would you like to play again? (Y/N): N  
   
   
  Final Stats: 
   
  Wins Ties Losses  
  ---- ---- ------  
   1    0     1 
              </pre>
              <p>Starter Code: </p>
              <a href='https://github.com/phuclinh9802/aied-staging-v2/blob/main/RPS.py' target='_blank'>https://github.com/phuclinh9802/aied-staging-v2/blob/main/RPS.py</a>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 5,
          name: "Graphics & Functions",
          type: "python3",
          contents: [
            {
              id: 1,
              topic: "Graphics and Functions",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Graphics and Functions </h2>
                <p>
  In this video you will learn about something called turtle graphics, that is, how to program the computer to draw pictures. One way to think of this is thinking of the cursor as a tiny little turtle holding a pen. You tell the turtle where to go and it draws as it goes. You will see how to “import” the turtle package – a program someone else wrote that makes the turtle for you. You’ll also learn about how to create functions and practice loops. You should definitely read through the notes, because the video focuses on how to write the code but the notes also explain what these things (like functions) even are.</p>
                 <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Graphics/Lesson+4+-+Turtle+Graphics.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <ul class='list'>
              <li>Demonstrate Turtle Graphics </li>
              <li>Create algorithms with Turtle </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Turtle Graphics  </h3>
              <p>Drawing with a "turtle" is a popular way to visualize algorithms. It was part of the original Logo programming language developed in the 1960s by Wally Feruzig and Seymour Papert. Originally, a turtle was a robot that used a marker to make lines on a sheet of paper.   </p>
  <pre>import turtle 
  bob = turtle.Turtle() #bob is a Turtle 
  bob.forward(100) 
  </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Turtle Graphics  </h3>
              <p>What can you do with a turtle? Any of these methods work: </p>
  
              <table class='table'>
          <tr>
              <th>Method</th>
              <th>Parameter</th>
              <th>Description</th>
          </tr>
          <tr>
              <td>Turtle()</td>
              <td>None</td>
              <td>Creates and returns a new turtle object</td>
          </tr>
          <tr>
              <td>forward()</td>
              <td>amount</td>
              <td>Moves the turtle forward by the specified amount</td>
          </tr>
          <tr>
              <td>backward()</td>
              <td>amount</td>
              <td>Moves the turtle backward by the specified amount</td>
          </tr>
          <tr>
              <td>right()</td>
              <td>angle</td>
              <td>Turns the turtle clockwise</td>
          </tr>
          <tr>
              <td>left()</td>
              <td>angle</td>
              <td>Turns the turtle counter clockwise</td>
          </tr>
          <tr>
              <td>penup()</td>
              <td>None</td>
              <td>Picks up the turtle’s Pen</td>
          </tr>
          <tr>
              <td>pendown()</td>
              <td>None</td>
              <td>Puts down the turtle’s Pen</td>
          </tr>
          <tr>
              <td>up()</td>
              <td>None</td>
              <td>Picks up the turtle’s Pen</td>
          </tr>
          <tr>
              <td>down()</td>
              <td>None</td>
              <td>Puts down the turtle’s Pen</td>
          </tr>
          <tr>
              <td>color()</td>
              <td>Color name</td>
              <td>Changes the color of the turtle’s pen</td>
          </tr>
          <tr>
              <td>fillcolor()</td>
              <td>Color name</td>
              <td>Changes the color of the turtle will use to fill a polygon</td>
          </tr>
          <tr>
              <td>heading()</td>
              <td>None</td>
              <td>Returns the current heading</td>
          </tr>
          <tr>
              <td>position()</td>
              <td>None</td>
              <td>Returns the current position</td>
          </tr>
          <tr>
              <td>goto()</td>
              <td>x, y</td>
              <td>Move the turtle to position x,y</td>
          </tr>
          <tr>
              <td>begin_fill()</td>
              <td>None</td>
              <td>Remember the starting point for a filled polygon</td>
          </tr>
          <tr>
              <td>end_fill()</td>
              <td>None</td>
              <td>Close the polygon and fill with the current fill color</td>
          </tr>
          <tr>
              <td>dot()</td>
              <td>None</td>
              <td>Leave the dot at the current position</td>
          </tr>
          <tr>
              <td>stamp()</td>
              <td>None</td>
              <td>Leaves an impression of a turtle shape at the current location</td>
          </tr>
          <tr>
              <td>shape()</td>
              <td>shapename</td>
              <td>Should be ‘arrow’, ‘classic’, ‘turtle’ or ‘circle’</td>
          </tr>
      </table>
  
    
  
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Algorithms with Turtles  </h3>
              <p>How can we use these commands to make shapes? </p>
              <p>An Algorithm is a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer. </p>
  
              <pre>bob = turtle.Turtle() 
  
  for i in range(4): 
    bob.forward(100) 
    bob.right(90) </pre>
  <img src='/images/graphic1.png' alt='graphic' />
  <p>How could we make the following shape: </p>
  <img src='/images/graphic2.png' style='width: 350px' alt='graphic' />
  
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Functions  </h3>
              <p>In python, we can define functions. This can be useful in removing code that is repeated in multiple places in your program and placing it in a function. Functions can be used multiple times throughout your code. </p>
              <pre style='font-size: 0.85em'>def drawSquare(myTurtle): 
    for i in range(4): 
      myTurtle.forward(100) 
      myTurtle.right(90)</pre>
              <p>Notice in this function that the myTurtle is in the parenthesis. This is an argument, you will have to put the name of your turtle in the parenthesis when you call this function. </p>
              <pre>bob = turtle.Turtle() 
  drawSquare(bob) </pre>
              <p>Finally, we can add parameters to make the drawSquare function more general. In this case, we will add a second parameter for the size of the sides. </p>
              <pre>def drawSquare(myTurtle, size): 
    for i in range(4): 
      myTurtle.forward(size) 
      myTurtle.right(90)</pre>
              </div>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Lab: Turtle Graphics",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab: Turtle Graphics</h2>
              <p>
              In this assignment, you will use turtle graphics to write a function and use it to draw a generalized polygon. A polygon is a closed shape with at least three sides. For example, a triangle is a polygon with exactly three sides and a rectangle is a polygon with four sides. Your goal is to write the function with a parameter that is a number, and draw a polygon with that many sides. This will involve a little bit of math, and you are welcome to use the internet to figure out how to calculate the angles between the lines. </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Graphics/Lab+4+-+Turtle+Graphics.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>Turtle Graphics</p>
              <p>Create a new Python project (with Turtle graphics) in VS Code.</p>
              <p>Create a function that will draw a shape with a given turtle (needed to draw) as well as the number of sides. You'll need to calculate the amount to turn based on the number of sides</p>
              <p>Copy/Paste the code below to get started. You may need to adjust spacing to ensure that it works. </p>
              <pre style='font-size: 0.85em'>
  import turtle 
   
  def drawSquare(myTurtle, size): 
    for i in range(4): 
      myTurtle.forward(size) 
      myTurtle.right(90) 
   
   
  def drawPolygon(turtle, sides): 
    #TODO - Implement function 
   
  def main(): 
    myTurtle = turtle.Turtle() 
    drawPolygon(myTurtle, 5) #draws a pentagon 
    drawPolygon(myTurtle, 8) #draws an octogon 
              </pre>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 6,
          name: "Strings",
          type: "python5",
          contents: [
            {
              id: 1,
              topic: "Introduction to Strings",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Strings</h2>
                <p>
  In the lesson on data types, you were briefly introduced to strings. There are special things you can do with a string that you can’t do with other variables. In this video, you will learn several ways to work with strings. you will learn how to access single letters by using the index position. That’s the place in the word where the letter is. The numbering starts from 0, so the first letter in a word is letter number 0, the second letter is number 1, and so on. You will also learn how to access several letters, by slicing a string into parts.               
                </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Strings/Lesson+5+-+Strings.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <ul class='list'>
              <li>Discuss & demonstrate string manipulations:  
                <ul class='sublist>
                <li>subscript operator </li>
                <li>indexing </li>
                <li>slicing a string </li>
                </ul>
              
              </li>
              <li>Converting strings to numbers </li>
              <li>Converting numbers to strings </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Strings   </h3>
              <p>In Python, Strings are lists of bytes representing Unicode characters. However, Python does not have a character data type, a single character is simply a string with a length of 1.</p>
  <pre>
  print("Hello") 
  word = "Hello" 
  print(word) 
  </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Indexing </h3>
              <p>Square brackets can be used to access elements of the string. Since a string is a list of individual letters, we can look at a spot in the list using the index position in a square bracket. This list is zero-indexed, meaning that the first spot is str[0].  </p>
  <pre>
  word = "hello" 
  print(word[1]) 
  print("hello"[1]) 
  </pre>
  </div><div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Slicing  </h3>
              <p>Beyond looking at a single letter of a string, we can look at a selected range of the string. This range is denoted by a square bracket with the starting index (inclusive) and the ending index (exclusive). </p>
  <pre>
  word = "strawberry" 
  print(word[2:5]) 
  </pre>
    
  
              </div>
             
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Looping in Strings",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Looping in Strings</h2>
              <p>
              You already learned about loops in the lesson about control structures. In this lesson you will learn how to loop through a string. This is a nice reminder about how loops work. It is also useful because sometimes we need to work with each character in a string. It also will prepare you for the next unit on lists, because a string is a list of characters.</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Strings/Lesson+5+-+Looping+in+Strings.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Looping in Strings    </h3>
              <p>Since a string is a list of characters, we can iterate across this list. One method is to use the index positions from zero to the length of the string. </p>
  <pre>
  word = "Hello" 
  index = 0 
  while(index < len(word)): 
      print(word[index]) 
  </pre>
  <p>In python, the for-loop iterates across a list, we can use the string as a list. </p>
  <pre>
  sentence = "This is a test" 
  for ch in sentence: 
      print(ch)
  </pre>
  <p>We can use the index position to test elements of the word... in this case we are trying to determine if a word is a palindrome. A palindrome is a word (or phrase) that is the same forward and backward. </p>
  <pre>
  def isPalendrome(word): 
    # check that the first letter is the same as the last 
    # continue checking 2nd letter to 2nd from end, etc. 
  
    return False 
  
  def main(): 
    word = input("Enter a word: ") 
  
    if isPalendrome(word): 
      print("It is a palindrome") 
    else: 
      print("It is not a palindrome") 
  
  main() 
  </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>String Methods  </h3>
              <table class='table'>
          <tr>
              <th>Function </th>
              <th>Meaning </th>
          </tr>
          <tr>
              <td>str.capitalize() </td>
              <td>Copy of str with only the first character capitalized </td>
          </tr>
          <tr>
              <td>str.capwords() </td>
              <td>Copy of str; first character of each word capitalized </td>
          </tr>
          <tr>
              <td>str.center(width) </td>
              <td>Center str in a field of given width </td>
          </tr>
          <tr>
              <td>str.count(sub) </td>
              <td>Count the number of occurrences of sub in str </td>
          </tr>
          <tr>
              <td>str.find(sub) </td>
              <td>Find the first position where sub occurs in str </td>
          </tr>
          <tr>
              <td>str.join(list) </td>
              <td>Concatenate list of strings into one large string </td>
          </tr>
          <tr>
              <td>str.ljust(width) </td>
              <td>Like center, but str is left-justified </td>
          </tr>
          <tr>
              <td>str.lower() </td>
              <td>Copy of str in all lowercase characters </td>
          </tr>
          <tr>
              <td>str.lstrip() </td>
              <td>Copy of str with leading whitespace removed </td>
          </tr>
          <tr>
              <td>str.replace(oldsub, newsub) </td>
              <td>Replace occurrences of oldsub in str with newsub </td>
          </tr>
          <tr>
              <td>str.rfind(sub) </td>
              <td>Like find, but returns the rightmost position </td>
          </tr>
          <tr>
              <td>str.rjust(width) </td>
              <td>Like center, but str is right-justified </td>
          </tr>
          <tr>
              <td>str.rstrip() </td>
              <td>Copy of str with trailing whitespace removed </td>
          </tr>
          <tr>
              <td>str.split() </td>
              <td>Split str into a list of substrings </td>
          </tr>
          <tr>
              <td>str.upper() </td>
              <td>Copy of str - all characters converted to uppercase </td>
          </tr>
      </table>
    
  
              </div>
             
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Formatting output: controlling the print statement ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Formatting output: controlling the print statement </h2>
              <p>
              Often we want to combine multiple kinds of data when we display it on the screen. For example, we might want to print someone’s name and age – a string and a number. The print function only prints strings, but in this video you’ll learn some ways to control the output so you can print all kinds of data. You’ll also see how to convert between different kinds of data.</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Strings/Lesson+5+-+Formatted+Print.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Formatted Print   </h3>
              <p>Formatted print statements are often useful, especially when you want to have a mix of numbers with decimals that need to be inserted in a larger string.  </p>
  <pre>
  name = "Jen" 
  temp = 22 
  print("Hello %s. The temperature today is %d degrees." %(name, temp)) 
  </pre>
  <p>Placeholder types: </p>
              <table class='table'>
          <tr>
              <th>Symbol  </th>
              <th>Type  </th>
          </tr>
          <tr>
              <td>%s </td>
              <td>string </td>
          </tr>
          <tr>
              <td>%d </td>
              <td>integer  </td>
          </tr>
          <tr>
              <td>%f  </td>
              <td>float  </td>
          </tr>
          <tr>
              <td>%x  </td>
              <td>hexadecimal </td>
          </tr>
          <tr>
              <td>%c </td>
              <td>character </td>
          </tr>
      </table>
      <p>With numeric values, padding can be used to ensure that the values have uniform size. </p>
      <pre>
  for i in range(10): 
      num = random.random() * 100 
      print("%2.2f" %(num)) 
      </pre>
          </div>
           <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Converting types    </h3>
              <p>In programming languages, numbers and words are different data types. The number 5 is not the same as the string "5". To use math, we need to make sure that the values are numeric. To print, we need to make sure that values are strings. </p>
  <pre>
  age_str = input("Enter your age: ") 
  age_int = int(age_str) 
  age_in_five = age_int + 5 
  print("In five years you will be " + str(age_in_five))
  </pre>
              </div>
          
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 5,
              topic: "Lab: Word Game",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab: Word Game  </h2>
              <p>
              In this lab, you will program your own version of a popular word game. In the game, the player guesses 5-letter words and gets feedback on each guess. You can play a version of this game here: <span><a href='https://www.nytimes.com/games/wordle/index.html  ' target='_blank'>https://www.nytimes.com/games/wordle/index.html</a></span>  </p>
              <p>This video will get you started on the lab:</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Strings/Lab+5+-+Word+Game.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>The word list can be found here: <span><a href='https://github.com/UNO-Babb/Lab5/blob/master/words.txt?authuser=1  ' target='_blank'>https://github.com/UNO-Babb/Lab5/blob/master/words.txt?authuser=1</a></span>  </p>
              <p>The starter code is here: <span><a href='https://github.com/UNO-Babb/Lab5/blob/master/WordGame.py?authuser=1' target='_blank'>https://github.com/UNO-Babb/Lab5/blob/master/WordGame.py?authuser=1</a></span>  </p>
              <p>Here are the notes as shown in the video: </p>
              <p>Word Game (not a NYT property) </p>
              <p>We will be re-creating a (currently) popular word game where a user guesses 5-letter words and gets feedback on their guess. <p>
  <p>You will finish the word game in a few important ways. There are three helper functions we will look at completing. </p>
  <pre>inWord(letter, word) </pre>
  <p>This function returns True or False depending on the state of the given letter being anywhere in the word. </p>
  <pre>inSpot(letter, word, spot) </pre>
  <p>This function returns True or False if the letter is in the word at the given spot. </p>
  <pre>rateGuess(myGuess, word) </pre>
  <p>Rates your guess and returns a word with the following features.  </p>
              <ul class='list'>
              <li>Capital letter if the letter is in the right spot </li>
              <li>Lower case letter if the letter is in the word but in the wrong spot </li>
              <li>if the letter is not in the word at all </li>
              </ul>
  <pre>main()</pre>
              <p>Your main function should randomly select a word from the list of all possible words. You will give the user 6 tries to get the correct word If they get it early, end the loop and congratulate. Use the helper methods to determine if the user got any letters correct. </p>
              <p>Copy/Paste the word game from the starter code (linked) in your Git repository. </p>
              <p>You will also need to create a new file in your VS Code project called <strong>words.txt</strong> that contains all of the possible 5-letter word. You can copy the one provided (link) or create your own.  </p>
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 7,
          name: "Lists & Dictionaries",
          type: "python6",
          contents: [
            {
              id: 1,
              topic: "Introduction to Lists",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Strings</h2>
                <p>
  A list is a set of consecutive items. You saw lists in the strings lesson, since a string is just a list of letters. This lesson focuses on lists more generally, including lists with any kind of data not just letters.              
  </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lists/Lesson+6+-+Lists.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <ul class='list'>
              <li>Lists, tuples, and dictionaries </li>
              <li>Basic list operators, replacing, inserting, removing an element;  </li>
              <li>Dictionary literals
              <ul class='sublist'>
              <li>adding and removing keys </li>
              <li>accessing and replacing values </li>
              </ul>
              
              </li>
              <li>Traversing dictionaries. </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Lists</h3>
              <p>A list is a sequence of values. In a string, the values are all characters; in a list, they can be any type. The values in a list are called elements or items. There are several ways to create a list but the easiest is to create values, separated by a comma, inside of square braces [] </p>
  <pre>
  list1 = [2, 3, 5, 6] 
  print(list1[2]) 
  list2 = ["Alice", "Bob", "Catherine", "Doug"] 
  print(list2[2]) 
  </pre>
  <p>Unlike other languages, the elements of a list do not need to be the same type. </p>
  <pre>
  list3 = ["apple", 5, "grapes", 23.7] 
  for element in list3: 
    print(element) 
  </pre>
  <p>Lists can also be changed, we can update the value at a position. </p>
  <pre>
  print(list1) 
  list1[2] = 17 
  print(list1)
  </pre>
              </div>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Traversing a List  </h3>
              <p>There are multiple ways to use loops with a list. Similar to the way strings can be traversed, we will look at visiting each element in a list by its numerical position and by iterating using a for loop. </p>
  <pre>
  list1 = [3, 1, 4, 1, 5, 9, 2, 6] 
  position = 0 
  while position < len(list1): 
    print(list1[position]) 
    position = position + 1 
  </pre>
  <p>This method is the best option if you need to know where you are in a list. For example, if your goal is to remove elements, or search for the location of an item in a list. </p>
  <p>Using a for loop, we can iterate across each element of a list. This is useful if we want to print the contents of a list, find the sum of a list, or determine if an element exists in a list (but not where). </p>
  <pre>
  for item in list1: 
    print(item) 
  </pre>
  <p>This allows us to easily traverse a list without ever knowing how long the list is, or keep track of our position in the list. </p>
  </div>
             
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "List Operations ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>List Operations </h2>
              <p>
              There are many more actions you may want to take with lists. Some of these, like slicing (cutting out a part of a list), you’ve already seen in the Strings list. Others, such as adding or deleting an item from the list, are new. In this video, you’ll see several operations (actions) you can use with lists.</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lists/Lesson+6+-+List+Operations.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>List operations  </h3>
              <p>There are several operations you can do to a list. The first operation is joining two lists with the + operator. </p>
  <pre>
  a = [1, 2, 3] 
  b = [7, 8, 9] 
  c = a + b 
  print (c) 
  </pre>
  <p>In this operation, the two lists are appended to each other and the result is saved to the variable c. The * operator repeats a list a number of times. </p>
  <pre>
  [0] * 5 
  [1, 2, 3] * 3 
  </pre>
  <p>Another useful operation is to add a new element to a list. This can be done in a few ways. </p>
  <div class='list-method'>
  <p>append (element) </p>
  <pre>
  t = ['a', 'b', 'c'] 
  t.append('d') 
  print(t)  
  </pre>
  </div>
  <div class='list-method'>
  <p>delete (position)  </p>
  <pre>
  t = ['a', 'b', 'c'] 
  del t[1] 
  print(t) 
  </pre>
  </div>
  <div class='list-method'>
  <p>delete (value)  </p>
  <pre>
  t = ['a', 'b', 'c'] 
  t.remove('a') 
  print(t)
  </pre>
  </div>
  <div class='list-method'>
  <p>slicing[start: end]  </p>
  <p>Slicing a list is very similar to slicing a string, this is because python treats strings as a list of characters. </p>
  <pre>
  t = ['a', 'b', 'c', 'd', 'e', 'f'] 
  t[1:3] 
  t[:4] 
  t[3:] 
  </pre>
  </div>
  <div class='list-method'>
  <p>Strings -> Lists   </p>
  <p>While a string is a list of characters, it is possible to make a list of individual words or even a list of individual sentences.  </p>
  <pre>
  s = "This is a sentence." 
  words = s.split() 
  print(words) 
  </pre>
  </div>
              </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
  
              .list-method {
                padding: 15px 0;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Dictionaries ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Dictionaries</h2>
              <p>
              This video begins by showing you how to convert a string into a regular list. It then continues by introducing you to a special kind of list called a dictionary. In a dictionary, you can define what the index is, rather than using the numbered position like lists do.  
  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lists/Lesson+6+-+Dictionaries.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <p>Strings -> Lists   </p>
  <p>While a string is a list of characters, it is possible to make a list of individual words or even a list of individual sentences.  </p>
  <pre>
  s = "This is a sentence." 
  words = s.split() 
  print(words) 
  </pre>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Dictionaries    </h3>
              <p>Dictionaries are similar to lists but the index is not necessarily an integer. Dictionaries are denoted with braces { } rather than brackets [ ] like a list. The position is still in the brackets.  </p>
  <pre>
  colors = {'red' : 'rojo', 'green' : 'verde', 'blue' : 'azul', 'yellow': 'amarillo'} 
  colors['blue'] 
  colors['rojo'] 
  colors[3] 
  </pre>
           <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Traversing Dictionaries   </h3>
              <p>What do we get if we wanted to print all the elements in a dictionary? </p>
  <pre>
  for c in colors: 
    print(c) 
  </pre>
  <p>How could we use that to get all the elements? </p>
              </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 5,
              topic: "Lab: Word Count ",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab: Word Count  </h2>
              <p>
              Sometimes it is useful to find out how many words, lines, or characters are in a file, such as if you have a word limit on a form. You may have seen the “word count” tool in a word processor. In this lab, you will create a small program that counts the words, lines, and characters in a file.  </p>
              <p>This video will get you started on the lab:</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
              <video controls width="700">
              <source src="https://work-learn-bucket.s3.amazonaws.com/Lists/Lab+6+-+Word+Count.mp4"
              type="video/mp4">
              </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
                          <h3 style='font-weight: 700; font-size: 1.25em'>Word Count    </h3>
              <p>A common utility on Unix/Linux systems is a small program called "wc". This program analyzes a file to determine the number of lines, words, and characters contained therein. Write your own version of wc. The program should accept a file name as input and then print three numbers showing the count of lines, words, and characters in the file. 
  </p>
  <p>SAMPLE OUTPUT </p>
  <pre>
  Enter a File Name: text.txt  
  Lines: 12  
  Words: 48  
  Characters:249 
  </pre>
  <p>Copy/Paste the linked starter code and create a new document in your VS Code editor for the <strong>gettysberg.txt</strong> or create your own text file. </p>
              <p>The starter code is here: <span><a href='https://github.com/UNO-Babb/Lab6/blob/master/WordCount.py  ' target='_blank'>https://github.com/UNO-Babb/Lab6/blob/master/WordCount.py</a></span>  </p>
              <p>The gettysberg.txt file is here: <span><a href='https://github.com/UNO-Babb/Lab6/blob/master/gettysberg.txt' target='_blank'>https://github.com/UNO-Babb/Lab6/blob/master/gettysberg.txt</a></span>  </p>
  
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 8,
          name: "Functions",
          type: "python7",
          contents: [
            {
              id: 1,
              topic: "Introduction to Functions",
              content: `
              <div class='data-rep'>
                <h2 style='font-weight: 700; font-size: 1.25em'>Introduction to Functions</h2>
                <p>
                The final topic in the Python unit is about functions. You have already used functions in your programs, but now you will learn how to write your own functions.  
                A function is an abstraction, where you can use one word to mean something more complex. That is, you call the function using just the function name, 
                and then it does whatever it has been programmed to do. Rather than having to write the same code over and over again, you can just use the function name! 
                In this video, you will learn how to define a function.
                </p>
                <p>Video: </p>
                 <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Functions.mp4"
                    type="video/mp4">
                </video>
              </div>
                <div class='notes'>
              <p>Notes as shown in the video: </p>
              <h3 style='font-weight: 700; font-size: 1.25em'>Objectives </h3>
              <ul class='list'>
              <li>Design with functions: 
              <ul class='sublist'>
              <li>hiding redundancy, complexity </li>
              <li>arguments and return values  </li>
              <li>formal vs actual arguments, named arguments.  </li>
              </ul>
              
              </li>
              <li>Program structure and design. </li>
              </ul>
              </div>
  
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Functions </h3>
              <p>In Python, a function is a named sequence of statements that belong together. Their primary purpose is to help us organize programs into chunks that match how we think about the solution to the problem. </p>
              <p>The syntax for a function definition is: </p>
  <pre>
  def name( parameters ): 
      statements 
  </pre>
  <p>The parameters we give to a function are values that are passed into the function when it is called. For example, when we had a turtle, we made a function called drawSquare() that took two parameters, a turtle and a size. </p>
  <pre>
  def drawSquare(myTurtle, size): 
    myTurtle.penDown() 
  
    for i in range(4): 
      myTurtle.forward(size) 
      myTurtle.right(90) 
  
    myTurtle.penUp() 
  </pre>
  <p>In this case, a turtle and a number are passed to the function as parameters. These values can now be used by the function. </p>
  <p>Note: any changes made to a parameter passed to a function, will not change the original value that called it. </p>
  </div>
  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Docstrings: Documenting your function ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Docstrings: Documenting your function </h2>
              <p>
              In this video, you’ll learn about something called docstrings. A docstring is a string used to document Python code. You first learned about documentation in the Introduction to Programming in Python unit. Documentation is the explanation of how things work. Documentation is a specific kind of comments. Comments are notes that the computer ignores, that are there for people reading the code. They are often an explanation of what the code does or should do. In this case, you will learn to write a docstring to explain your function.  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Docstrings.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>docstrings </h3>
              <p>If the first thing after the function header is a string (some tools insist that it must be a triple-quoted string), it is called a docstring and gets special treatment in Python and in some of the programming tools. </p>
              <p>Another way to retrieve this information is to use the interactive interpreter, and enter the expression <function_name>.doc, which will retrieve the docstring for the function. So the string you write as documentation at the start of a function is retrievable by python tools at runtime. This is different from comments in your code, which are completely eliminated when the program is parsed. </p>
              <p>By convention, Python programmers use docstrings for the key documentation of their functions. </p>
  <pre>
  def checkPrime(num): 
    """Check to see if the given number is prime. Returns True or False""" 
    statements 
  </pre>
              </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
  
              .list-method {
                padding: 15px 0;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Return values  ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Return values </h2>
              <p>
              You now know how to call a function in your program (such as telling the computer to draw a square), and how to give the function information, called parameters (such as telling the computer the string to manipulate). Sometimes you also want to have a function give you some information back after it is done – returning the answer to you (such as telling you the answer to a math problem). The information returned from a function is called a return value. In this video, you will learn how to write a function that returns a value when it is done running. 
  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Return+Values.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Return Values     </h3>
              <p>A function can send a value back to the code that called it. We have been using this type of function in python for a while. </p>
              <p>Example:</p>
  <pre>
  abs(10) 
  abs(-15) 
  
  import math 
  
  math.pow(2, 5) 
  </pre>
  <p>When you are defining your own functions, the return statement will be the last thing that happens in your function. As soon as a return statement is reached, the function ends and any lines that happen after the return statement will not be executed. </p>
  <pre>
  def hasValue(myList, value): 
    for e in myList: 
      if e == value: 
        return True 
  
    return False 
  
  nums = [5, 10, 15, 20] 
  
  print( hasValue(nums, 8) ) 
  </pre>
  </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 4,
              topic: "Problem deconstruction and abstraction ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Problem deconstruction and abstraction </h2>
              <p>
              In the unit on computational thinking, you learned about decomposition (breaking problems into parts) and abstraction (taking details away). Both of these ways of thinking about problems make the problems simpler, and therefore easier to solve. In programming, functions are a way to decompose problems. That is, each function can do a small thing, and then you can put them together to solve the whole problem. This video will show you how to decompose a problem into smaller functions. It will also explain how to make sure you’re in the right file when you call a function.  
  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Abstraction.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Problem deconstruction (abstraction)   </h3>
              <p>One of the big ideas in computer science is taking a large problem and breaking it down into smaller, more manageable parts. For example, imagine that we have the problem of finding the sum of many squares. We can begin by breaking this down into the smallest possible problem. </p>
  <pre>
  def square(x): 
    y = x * x 
    return y 
  </pre>
  <p>Then, we can use this small solution as part of the larger solution. </p>
  <pre>
  def sumOfSquares(start, end): 
    total = 0 
    for num in range(start, end + 1): 
      total = total + square(num) 
  
    return total 
  </pre>
  <p>Then finally, we could call this in the context of our program. Perhaps after we have some data or user input. </p>
  <pre>
  def main(): 
    tot = sumOfSquares(4, 7) 
    print(tot) 
  
  main() 
  </pre>
  </div>
  
  <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Using a Main Function   </h3>
              <p>Most of the work we have done so far involves code that has a main() function. This function is the one we tend to call as a first step. Sometimes, your code will be imported by another python file so automatically calling a main function becomes unnecessary or undesired. </p>
              <p>Before the Python interpreter executes your program, it defines a few special variables. One of those variables is called name and it is automatically set to the string value "main" when the program is being executed by itself in a standalone fashion. On the other hand, if the program is being imported by another program, then the name variable is set to the name of that module. This means that we can know whether the program is being run by itself or whether it is being used by another program and based on that observation, we may or may not choose to execute some of the code that we have written. </p>
              <p>For example, assume that we have written a collection of functions to do some simple math. We can include a main function to invoke these math functions. It is much more likely, however, that these functions will be imported by another program for some other purpose. In that case, we would not want to execute our main function. </p>
  <pre>
  def squareit(n): 
    return n * n 
  
   
  def cubeit(n): 
    return n*n*n 
  
   
  def main(): 
    anum = int(input("Please enter a number")) 
    print(squareit(anum)) 
    print(cubeit(anum)) 
  
  if __name__ == "__main__": 
    main() 
  </pre>
  </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 5,
              topic: "Composition ",
              content: `
              <div class='notes'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Composition </h2>
              <p>
              The opposite of decomposition is composition – putting things together. You can compose the solution to a complex problem by creating one function which uses other functions. This video shows you how to create a complex function step by step, testing your work at each step.  
  </p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
                 <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lesson+7+-+Composition.mp4"
                    type="video/mp4">
                </video>
              </div>
              <p>Here are the notes as shown in the video: </p>
              <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Program Development </h3>
              <p>At this point, you should be able to look at complete functions and tell what they do. Also, if you have been doing the exercises, you have written some small functions. As you write larger functions, you might start to have more difficulty, especially with runtime and semantic errors. </p>
              <p>To deal with increasingly complex programs, we are going to suggest a technique called incremental development. The goal of incremental development is to avoid long debugging sessions by adding and testing only a small amount of code at a time. 
  
  As an example, suppose you want to find the distance between two points, given by the coordinates (x1, y1) and (x2, y2). By the Pythagorean theorem, the distance is: </p>
  
  <pre>
  <span style="white-space: nowrap; display: flex; justify-content:center; margin: 10px;">
  &radic;<span style="text-decoration:overline;">&nbsp;(x2 - x1)^2 + (y2 - y1)^2&nbsp;</span>
  </span>
  </pre>
  <p>The first step is to consider what a distance function should look like in Python. In other words, what are the inputs (parameters) and what is the output (return value)? 
  
  In this case, the two points are the inputs, which we can represent using four parameters. The return value is the distance, which is a floating-point value. 
  
  Already we can write an outline of the function that captures our thinking so far. </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    return 0.0 
  </pre>
  <p>Obviously, this version of the function doesn’t compute distances; it always returns zero. But it is syntactically correct, and it will run, which means that we can test it before we make it more complicated.  </p>
  <p>For the second test the horizontal distance equals 3 and the vertical distance equals 4; that way, the result is 5 (the hypotenuse of a 3-4-5 triangle). For the third test, we have a 1-1-sqrt(2) triangle.  </p>
  <p>At this point we have confirmed that the function is syntactically correct, and we can start adding lines of code. After each incremental change, we test the function again. If an error occurs at any point, we know where it must be — in the last line we added.  </p>
  <p>A logical first step in the computation is to find the differences x2- x1 and y2- y1. We will store those values in temporary variables named dx and dy.   </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    dx = x2 - x1 
    dy = y2 - y1 
  
    return 0.0  
  </pre>
  <p>Next we compute the sum of squares of dx and dy. </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    dx = x2 - x1 
    dy = y2 - y1 
    dsquared = dx**2 + dy**2 
    return 0.0 
  </pre>
  <p>Finally, we have our working function we can test. </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    dx = x2 - x1 
    dy = y2 - y1 
    dsquared = dx**2 + dy**2 
    result = dsquared**0.5 
    return result  
  </pre>
  
  </div>
  
  <div class='notes'>
              <h3 style='font-weight: 700; font-size: 1.25em'>Composition   </h3>
              <p>As we have already seen, you can call one function from within another. This ability to build functions by using other functions is called composition. </p>
              <p>As an example, we’ll write a function that takes two points, the center of the circle and a point on the perimeter, and computes the area of the circle. </p>
              <p>Assume that the center point is stored in the variables xc and yc, and the perimeter point is in xp and yp. The first step is to find the radius of the circle, which is the distance between the two points. Fortunately, we’ve just written a function, distance, that does just that, so now all we have to do is use it: </p>
  <pre>
  radius = distance(xc, yc, xp, yp) 
  </pre>
  <p>The second step is to find the area of a circle with that radius and return it. Again we will use one of our earlier functions: </p>
  <pre>
  result = area(radius) 
  return result 
  </pre>
  <p>Wrapping that up in a function, we get: </p>
  <pre>
  def distance(x1, y1, x2, y2): 
    dx = x2 - x1 
    dy = y2 - y1 
    dsquared = dx**2 + dy**2 
    result = dsquared**0.5 
    return result 
  
  def area(radius): 
    b = 3.14159 * radius**2 
    return b 
  
  def area2(xc, yc, xp, yp): 
    radius = distance(xc, yc, xp, yp) 
    result = area(radius) 
    return result 
  
  print(area2(0,0,1,1)) 
  </pre>
  <p>We called this function area2 to distinguish it from the area function defined earlier. There can only be one function with a given name within a module. 
  
  Note that we could have written the composition without storing the intermediate results. </p>
  <pre>
  def area2(xc, yc, xp, yp): 
    return area(distance(xc, yc, xp, yp)) 
  </pre>
  </div>
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .sublist {
                padding: 10px 20px;
              }
              .notes .list ul {
                list-style-type: circle;
                padding: 10px 20px;
              }
  
              .notes pre {
                font-size: 0.85em;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 6,
              topic: "Quiz",
              type: "quiz",
            },
            {
              id: 7,
              topic: "Lab: Coding Bat ",
              content: `
              <div class='madlib'>
              <h2 style='font-weight: 700; font-size: 1.25em'>Lab: Coding Bat </h2>
              <p>
              Coding Bat (<a href='https://codingbat.com/python' target='_blank'>https://codingbat.com/python</a>) is a website that prompts with a problem to solve, then tests several cases to see if your solution actually solves all cases. Each problem uses value-returning functions, where a function takes in some parameters (input), and returns some result (output).   </p>
              <p>Here is a video that shows you how to use coding bat:</p>
              <div style="display: flex; justify-content: center;margin: 20px 0">
              <video controls width="700">
              <source src="https://work-learn-bucket.s3.amazonaws.com/Functions/Lab+7+-+Codingbat.mp4"
              type="video/mp4">
              </video>
              </div>
              <p>To begin, create an account on <a href='https://codingbat.com/python' target='_blank'>CodingBat</a>. Make sure you're in the Python section. Solve the problems for Warmup-1 and Warmup-2. </p>
  <p>When completed, you can click the "done" tab in the top-right portion of the screen. Screenshot this page and submit that as your "proof of completion". Feel free to continue on to the other problems not assigned as part of your python journey. </p>
  
              </div>
              <style>
  
              .madlib a {
                text-decoration: underline;
              }
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
  
              .list {
                list-style-type: disc;
                padding: 0 20px;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 8,
          name: "Qualtrics Survey",
          contents: [
            {
              id: 1,
              topic: "Qualtrics Survey",
              content: `
              <p style="margin-top:20px;">Completing this survey is worth $5.</p>
              <a target="_blank"  style='text-decoration: underline' href='https://unomaha.az1.qualtrics.com/jfe/form/SV_6iomnRh5EwVwHn8' alt='qualtrics survey'>Please complete this Qualtrics Survey</a>
              `,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      topicName: "Unit 4: COBOL",
      subTopics: [
        {
          id: 1,
          name: "Introduction to Mainframes",
          contents: [
            {
              id: 1,
              topic: "Introduction to Mainframes",
              content: `
              <div class='cobol1'>
              
  <body>
  
      <h2 style="font-weight: bold;"> Introduction to Mainframe Systems </h2>
  
      <p> 
          
      The presentation begins with an introduction to Chapter 1, "The New Mainframe," emphasizing the modern landscape of mainframe computing. The chapter's objectives include challenging traditional views on centralized versus distributed computing, explaining the business applications of mainframes, describing workloads best suited for mainframes, identifying related jobs, and listing mainframe operating systems. Key terms are introduced, such as application programmer, batch processing, e-Business, and scalability. <br />
  
      The IBM System/360 was announced on April 7, 1964, marking a significant shift in computer design and application. The Mainframe Charter outlines goals for innovation, enhancing the value proposition, and supporting the mainframe community. The evolution of IBM mainframes over five decades is highlighted, showcasing various models and technological advancements. <br />
      
      Mainframes, although prevalent, are often unnoticed due to their stability and reliability. They present numerous career opportunities in the technical field. A mainframe is described as a central data hub capable of supporting thousands of users and applications, emphasizing its role in secure, high-availability environments. The balanced system design of mainframes is optimized for high input/output operations and robust data processing. <br />
      
      Mainframes are widely used by Fortune 1000 companies, with 60% of all internet data stored on them. They handle large-scale transaction processing and extensive databases. The presentation briefly overviews Business Class and Enterprise Class mainframe models, providing a detailed look into the components and functionalities of an Enterprise Class mainframe. <br />
      
      Factors contributing to mainframe use include reliability, security, scalability, centralized control, workload management, and cost-effectiveness. Typical workloads for mainframes involve large-scale transaction processing and extensive data management. Batch processing tasks such as data updates, backups, and report generation are common, as are online processing tasks including real-time transactions and database queries. <br />
      
      Various roles in the mainframe world are discussed, including operators, system administrators, system programmers, application developers, and end-users. The evolution of mainframe operating systems is traced from OS/360 to z/OS and others like z/VSE and z/VM. The summary emphasizes the central role of mainframes in large organizations, their reliability, security, processing capabilities, and the skilled support staff required to manage them, as well as the variety of operating systems they run. <br />
  
  
      </p>
  
  <br /> 
  
      <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Lesson+1_+The+New+Mainframe+Video.mp4"
                    type="video/mp4">
                </video>
  
  
  </body>
              </div>
              <style>
              .cobol1 p {
                margin: 10px 0;
              }
              .cobol1 img {
                width: 50%;
                height: auto;
                text-align: center;
                margin: 20px;
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                border-radius: 5px;
              }
  
              .cobol1 .lg-img {
                width: 70%;
              }
  
              .cobol1 .xl-img {
                width: 100%;
              }
  
              .cobol1 .sub-topic {
                margin-top: 30px;
              }
  
              </style>
  
              `,
            },
            {
              id: 2,
              topic: "Lab - Getting on the System",
              content: `
              <div class='Getting on the System-submit'>
  
       
  
  <body>
      
  
  <p>
  
      Welcome to the Mainframes Lab! In this lab, you'll embark on an exciting journey into the world of COBOL mainframes, a crucial technology that underpins many of today's enterprise systems. Whether you're a beginner or looking to deepen your expertise, our lab provides hands-on experience with real-world mainframe environments. You'll learn how to navigate the mainframe system, understand COBOL syntax and structure, and develop essential skills for maintaining and enhancing mainframe applications. Get ready to unlock the potential of one of the most enduring and powerful computing platforms in the industry.
  
  
  </p>
  
  
  <h2 style="font-weight: bold;"> HERE'S Part One </h2>
  
  
  <video controls width="700">
      <source src="https://work-learn-bucket.s3.amazonaws.com/Mainframe/Getting+on+the+system+pt+1.mp4"
      type="video/mp4">
  </video>
  
  
  
  <br /> 
  
  
  <h2 style="font-weight: bold;"> Here's Part Two </h2>
  
  
  
  <video controls width="700">
      <source src="https://work-learn-bucket.s3.amazonaws.com/Mainframe/Getting+on+the+system+pt+2.mp4"
      type="video/mp4">
  </video>
  
  
  
  </body>
       
              </div>
              <style>
              .Getting on the System-submit p {
                margin: 10px 0;
              }
              .Getting on the System-submit pre {
                font-size: 0.85em;
              }
              </style>
              `,
        },
              {
              id: 3,
              topic: "Quiz",
              content: `
              <div class='debug'>

                <p> Please Take the Quiz  <a target="_blank" href=" https://docs.google.com/forms/d/e/1FAIpQLSfi4DmSSqeAfRj4v_1zgmgg9H6gpAOjxQ30XE7lRsKPjLscDA/viewform?usp=sf_link  " style="color: red;"> Here! </a></p>


              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },

              {
              id: 4,
              topic: "Hardware Systems and LPARS",
              content: `
              <div class='debug'>

                <body>
  <h1 style="font-weight: bold;">Introduction to Hardware Systems and LPARs</h1>
  <p>
      This presentation provides an in-depth overview of hardware systems, with a particular emphasis on mainframe technologies and their evolution. It begins by examining the design and terminology associated with the S/360 and zSeries hardware, explaining the intricacies of mainframe componentry, including processing units and disk hardware.
  </p>
  <p>
      The presentation highlights how mainframes differ from personal computers in terms of data encoding and explores various typical hardware configurations. It delves into the complexity and modular architecture of modern Central Electronic Complex (CEC) designs, comparing historical and current systems, and discusses the sophisticated partitioning of resources enabled by Logical Partitions (LPARs).
  </p>
  <h2 style="font-weight: bold;">Key elements include:</h2>
  <ul>
      <li>Historical context and evolution of mainframe hardware, starting from the S/360 systems of the 1960s.</li>
      <li>Detailed explanation of channels, control units, and I/O connectivity, focusing on technologies like ESCON and FICON.</li>
      <li>The logical and physical structure of contemporary mainframes, including innovations in the System z10 series.</li>
      <li>The concept of channel spanning and its role in enhancing connectivity and resource sharing across logical partitions.</li>
  </ul>
  <p>
      By the end of the presentation, learners will have a comprehensive understanding of mainframe hardware systems, their unique characteristics, and their operational advantages over standard PC systems.
  </p>
  
  <br />
       <video controls width="700">
                    <source src="https://work-learn-bucket.s3.amazonaws.com/Mainframe/Lesson+2_+Hardware+Systems+and+LPARS+Video.mp4"
                    type="video/mp4">
                </video>
  
  </body>




               
              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },
              
            {  
  
          
              id: 5,
              topic: "z/OS Overview",
              content: `
              <div class='script-compiled'>

                <body>
    <h1 style="font-weight: bold;" >Comprehensive Overview of z/OS</h1>
    <p>
        The slides provide a comprehensive overview of z/OS, a widely used mainframe operating system renowned for its ability to handle large workloads and support numerous concurrent users. Key distinctions from single-user operating systems include advanced virtual storage management and robust multiprocessing capabilities. z/OS is designed to serve critical applications with high reliability and security, processing large and varied workloads efficiently.
    </p>
    <p>
        z/OS manages multiple types of storage, including real, auxiliary, and virtual storage. Virtual storage, a fundamental concept, allows the system to use more memory than physically available by managing data between real and auxiliary storage, ensuring efficient use of resources. Address spaces are a critical feature, providing isolated environments for each user and application, thus ensuring data integrity and security.
    </p>
    <p>
        The system employs advanced techniques such as dynamic address translation, page stealing, and swapping to manage memory efficiently. Storage protection is implemented through multiple mechanisms, including private address spaces and storage protection keys, ensuring data security and integrity.
    </p>
    <p>
        Workload Management (WLM) is a crucial component, optimizing the use of system resources to achieve business goals by balancing throughput and response times. It dynamically adjusts resources based on the workload and system demands.
    </p>
    <p>
        z/OS supports a vast array of middleware and additional software products, making it versatile and capable of integrating various applications and services. Its ability to manage large I/O configurations and support multiple communications subsystems highlights its robustness.
    </p>
    <p>
        The system is also designed for scalability and flexibility, capable of managing mixed workloads and ensuring high availability and reliability, making it suitable for mission-critical applications. Comparisons with UNIX systems reveal commonalities and differences, emphasizing z/OS's unique capabilities in managing extensive and complex computing environments.
    </p>
    <p>
        Overall, z/OS is a powerful, flexible, and secure operating system, ideally suited for environments requiring high performance, reliability, and the ability to handle large-scale, diverse workloads.
    </p>


    <br />
    <video controls width="700">
                 <source src="https://work-learn-bucket.s3.amazonaws.com/Mainframe/Lesson+3_+z_OS+Overview+Video.mp4"
                 type="video/mp4">
             </video>



</body>



                 
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
          .script-compiled img {
               width: 50%
                 height: auto;
           text-align: center;
             margins: 20px;
               box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                 border-radius: 5px; 
       }
         .script-compiled .lg-img {
              window: 70%; 
            }
  
         .script-compiled .xl-img {
                 windth: 100%; 
       }
        .script-compiled .sub-topic {
             margin-top: 30px;
  
       </style>
       `
  
  
            
  
  
  
            
            },
          ],
        },
  
        {
          id: 2,
          name: "Introduction to COBOL",
          type: "python1",
          contents: [
            {
              id: 1,
              topic: "Setting up COBOL Libraries",
              content: `
              <div class='data-rep'>
  
            <head>
      <title>Mainframe Basics</title>
  </head>
  
  
  
  <body>


          

<h1 style="font-weight: bold;"> Setting Up COBOL Libraries</h1>
    <p>Welcome to the module on Setting Up COBOL Libraries. This module is designed to help you get started with COBOL libraries, understand how to use multiple screens effectively, and troubleshoot common issues that may arise. The module is divided into three key sections, each presented through a separate video. Let’s take a closer look at what each video covers:</p>


    <h2 style="font-weight: bold;">1. Setting Up COBOL Libraries</h2>
    <p>This video will guide you through the initial steps of setting up your COBOL libraries. You'll learn how to install and configure the necessary tools, as well as how to organize your libraries for optimal performance and ease of use.</p>

    
<div style="display: flex; justify-content: center">
    <video controls width="700">
       <source src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/3150+Setting+up+Our+COBOL+Libraries.mp4"
       type="video/mp4">
   </video>
 </div>



 <h2 style="font-weight: bold;">2. Using Multiple Screens</h2>
    <p>In this video, we’ll explore the benefits of using multiple screens when working with COBOL. You’ll learn techniques for managing multiple windows, navigating between screens efficiently, and enhancing your productivity through effective screen management.</p>
 
    <div style="display: flex; justify-content: center">
    <video controls width="700">
       <source src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/Using+multiple+screens.mp4"
       type="video/mp4">
   </video>
 </div>




 <h2 style="font-weight: bold;">3. Troubleshooting COBOL</h2>
 <p>The final video focuses on troubleshooting common issues that you might encounter while working with COBOL. We'll cover error diagnosis, debugging strategies, and solutions to typical problems, ensuring you have the skills to resolve issues quickly and effectively.</p>
 <div style="display: flex; justify-content: center">
    <video controls width="700">
       <source src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/Troubleshooting+COBOL.mp4"
       type="video/mp4">
   </video>
 </div>



 <p>By the end of this module, you will have a solid understanding of how to set up and manage COBOL libraries, utilize multiple screens to enhance your workflow, and troubleshoot common COBOL issues with confidence.</p>




    <p>Feel free to ask any questions or seek further assistance as you progress through the module. Happy learning!</p>






</body>











  
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Lab - Getting on the system",
              content: `
              <div class='script-compiled'>
                


             <body>
            <h1 style="font-weight: bold;" >Getting on the System</h1>
            <br />
    <embed src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/COBOL-Lab1_ICTN_3210_getting_on_the_system_V2.pdf" type="application/pdf" width="100%" height="800">
    </body>

              

  
  
    
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
            {
              id: 3,
              topic: "Mocha, FileZilla, and ISPF Tour",
              content: `
              <div class='debug'>

                <body>

    <h1 style="font-weight: bold;">Explore the Essentials: Mocha, FileZilla, and ISPF Tour</h1>

    <p>Welcome to our comprehensive tutorial series where we dive into three essential tools for developers and IT professionals. Explore our detailed videos to learn everything you need to know about Mocha, FileZilla, and ISPF Tour.</p>



    <h2 style="font-weight: bold;">Introduction to Mocha</h2>
    <p>Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Our video will guide you through the basics and help you get started.</p>

<br />
    
    <div style="display: flex; justify-content: center">
        <video controls width="700">
           <source src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/Mocha+installation.mp4"
           type="video/mp4">
       </video>
     </div>
<br />

    <h2 style="font-weight: bold;">Getting Started with FileZilla</h2>
    <p>FileZilla is a powerful, free FTP solution. Whether you are a web developer or just need to transfer files, our tutorial will help you understand how to use FileZilla efficiently.</p>

<br />
     <div style="display: flex; justify-content: center">
        <video controls width="700">
           <source src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/FileZilla.mp4"
           type="video/mp4">
       </video>
     </div>


<br />
     <h2 style="font-weight: bold;">ISPF Tour Overview</h2>
            <p>ISPF (Interactive System Productivity Facility) is a mainframe development environment. This video will introduce you to its capabilities and show you how to navigate and use ISPF effectively.</p>

<br />
     <div style="display: flex; justify-content: center">
        <video controls width="700">
           <source src="https://work-learn-bucket.s3.amazonaws.com/Cobol_2/ISPF+tour.mp4"
           type="video/mp4">
       </video>
     </div>


<br />

<div class="resources">
    <h2 style="font-weight: bold;">Additional Resources</h2>
    <p>For more information and additional learning materials, visit the following websites:</p>
    <p><a href="https://filezilla-project.org/" style="color: red;"> FileZilla</a></p>
    <p><a href="https://mochasoft.dk/download.htm" style="color: red;"> Downlad the Software Here</a></p>
</div>

<br />



</body>






               
              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },
            {
              id: 4,
              topic: "Compile Lab",
              content: `
              <div class='debug'>
               Coming Soon...
              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },
            {
              id: 5,
              topic: "Sort Lab",
              content: `
              <div class='debug'>
               Coming Soon...
              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },

            {
              id: 6,
              topic: "DB2 Lab, Parts 1 & 2",
              content: `
              <div class='debug'>
               Coming Soon...
              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },

            {
              id: 7,
              topic: "Lab 1: Getting on the System",
              content: `
              <div class='debug'>
               Coming Soon...
              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },

            {
              id: 8,
              topic: "Lab 2: TSO Pratice",
              content: `
              <div class='debug'>
               Coming Soon...
              </div>
              <style>
              .debug p {
                margin: 10px 0;
              }
              .notes pre {
                font-size: 0.85em;
                padding-left: 20px;
                margin: 10px 0;
              }
  
              </style>
              `,
            },

           

              
            {
              id: 9,
              topic: "Lab 3: Move/Copy (Libraries)",
              content: `
              <div class='madlib'>
              Coming Soon...
              </div>
              <style>
              .madlib p {
                margin: 20px 0;
              }
              .code pre {
                font-size: 0.85em;
              }
              </style>
              `,
            },
          ],
        },
        {
          id: 3,
          name: "Lesson 3",
          type: "python2",
          contents: [
            {
              id: 1,
              topic: "Coming Soon!...",
              content: `
              <div class='data-rep'>
                Coming Soon...
              </div>
              <style>
              .data-rep a {
                text-decoration: underline;
              }
              .data-rep p {
                margin: 10px 0;
              }
  
  
              .notes {
                margin-top: 20px;
              }
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .table {
                display: flex;
                justify-content: center;
                padding: 20px;
              }
  
              .table th, .table td {
                border: 1px solid;
              }
  
              .table th, .table td {
                padding: 20px;
              }
              </style>
              `,
            },
            {
              id: 2,
              topic: "Coming Soon!...",
              content: `
              <div class='script-compiled'>
                 Coming Soon...
              </div>
              <style>
              .script-compiled p {
                margin: 10px 0;
              }
  
  
  
              .notes .list {
                list-style-type: disc;
                padding: 10px 20px;
              }
  
              .notes .sublist {
                list-style-type: circle;
                padding-left: 22px;
              }
              </style>
              `,
            },
          ],
        },
      ],
    },
    ]
   
  
  
  export default data;
  
