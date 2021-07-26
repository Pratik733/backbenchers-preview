import React, { useState } from 'react';
import './Features.css'
import alumini from '../assets/images/alumini.gif'
import mentorship from '../assets/images/mentorship.gif'
import eucoins from '../assets/images/eucoins.gif'
import fest from '../assets/images/fest.gif'
import simulators from '../assets/images/simulators.gif'
import army from '../assets/images/army.gif'
import pass from '../assets/images/pass.gif'
import offlineEvents from '../assets/images/offlineEvents.gif'

const Features = () => {

  const [show, setShow] = useState(false);

  const showDisplay = document.querySelector('#showMore');
  const myFunc = () => {
      showDisplay.classList.toggle('showIt');
      setShow(!show);
  }

  return (
    <div className='features-container'>
      <section class="text-gray-600 body-font">
        <div class="features-container px-5 py-24 mx-autow2">
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img src="https://res.cloudinary.com/dbozxizmw/image/upload/v1626534713/classroom_1_ngducw.gif" alt="" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Student Friendly Studyrooms</h2>
              <p class="leading-relaxed text-base">With user-friendly and handy available virtual study room, students are often seen to
                be more interested in studies, Studyroom is the learning management portal where
                the student will have entire access and can check out upcoming lectures/revise
                through recorded lectures/notes and other important study materials</p>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Live, Scheduled & Recorded Classes</h2>
              <p class="leading-relaxed text-base">Practical, up-to-date syllabus and content that rivals the best mentees/tutors across
                the world. Each of these digital skills makes you highly employable and relevant to the
                real world. Taught by entertaining experts and peers who make learning fun again!
              </p>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img src="https://res.cloudinary.com/dbozxizmw/image/upload/v1626534862/classes_as3hzz.gif" alt="" />
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img src="https://res.cloudinary.com/dbozxizmw/image/upload/v1626535139/practical_kx2zep.gif" alt="" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Minimizing The Theoretical & Practical Knowledge</h2>
              <p class="leading-relaxed text-base">After every live/recorded session student needs to attend a detailed test of the
                theoretical-practical-based test, in which the student has to score a minimum of 70%
                to unlock further live/recorded sessions.</p>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Personal Mentors</h2>
              <p class="leading-relaxed text-base">
                Nothing is that easy to achieve unless you have a proper guide/mentor, considering
                this we have come up with mentors who will not only guide you on how to study, what
                to study but also look after your academics and personal development
              </p>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img src="https://res.cloudinary.com/dbozxizmw/image/upload/v1626535345/mentor_1_ccw2xl.gif" alt="" />
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img src="https://res.cloudinary.com/dbozxizmw/image/upload/v1626535594/icons8-copy_viqeqq.gif" alt="" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Uniquely Designed CheatSheets</h2>
              <p class="leading-relaxed text-base">During exams/contest hours no one wishes to spend hours watching those recorded
                sessions, as a superb solution to this we have designed our uniquely designed cheat
                sheets, in which you can definitely revise your entire syllabus content just is a single
                go, this will not only save time but will also help you to retain what you have revised
                with our unique cheat sheets. </p>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Library With No Boundaries</h2>
              <p class="leading-relaxed text-base">
                With no practical boundaries, we have set up a virtual library open for you with all
                kinds of study & reference purpose materials easily available.
              </p>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img src="https://res.cloudinary.com/dbozxizmw/image/upload/v1626508169/icons8-open-book_hifltx.gif" alt="" />
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img src="https://res.cloudinary.com/dbozxizmw/image/upload/v1626535735/project_ttlymd.gif" alt="" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Hands-on Mini/Major projects</h2>
              <p class="leading-relaxed text-base">
                Time to test what you have learned in your entire course, depending on your course
                and the number of students available, the student will be either allowed a MINI[solo] or
                MAJOR [group] or both projects, where students need to showcase what they have
                learned via submitting a solution to the problem assigned to them within the deadline.
                On successful completion of projects, students will be issued certificates
              </p>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Highly interactive Community</h2>
              <p class="leading-relaxed text-base">
                Exchange of thoughts and ideas is very important, more interacting with guides will
                not only help you to come across different problems but will also develop your
                communication skills which are also referred to as soft skills. Monthly Brainheaters
                Covering almost all the topics we assign monthly quizzes, which are backed with
                heavy
                rewards such as coupons/discount vouchers etc.</p>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img src="https://res.cloudinary.com/dbozxizmw/image/upload/v1626851185/community_ra8gk1.gif" alt="" />
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
              <img src={alumini} alt="" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Alumni Network – The Euphoria Army</h2>
              <p class="leading-relaxed text-base">
                The key to a successful online learning community is an environment rich with
                experienced Alumni and students helping each other out.</p>
            </div>
          </div>

          {/* ------ View More  ----- */}

          <div id="showMore" className='hidden' >
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">The Euphoria Army</h2>
                <p class="leading-relaxed text-base">
                  A non-geographically bound community is a game-changer in this regard. Access it to
                  tap into various opportunities such as jobs, networking privileges, funding, and more.
                </p>
              </div>
              <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <img src="https://res.cloudinary.com/dbozxizmw/image/upload/v1626850266/army_cpilwb.gif" alt="" />
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <img src={mentorship} alt="" />
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Euphoria Mentorships</h2>
                <p class="leading-relaxed text-base">
                  BACKBENCHERS EDTECH allows every single learner to be matched with a personal
                  mentor. Mentors guide you along the way and help you overcome hurdles. With
                  enough progress, a learner can become a mentor too, restarting the virtuous cycle.
                </p>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">EU Coins</h2>
                <p class="leading-relaxed text-base">
                  An all-new activity-based GPA system that grades you depending on your activity on
                  the platform. Learn, share and discuss your knowledge on the platform and get
                  rewarded with EU points that increase your likelihood of getting placed.
                  Technology has evolved. Resumes? Not so much. Show the world what you’ve got!
                </p>
              </div>
              <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <img src={eucoins} alt="" />
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <img src={fest} alt="" />
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Eureka - Euphorian Fests, Competitions, and Battlecups (Coming Soon)</h2>
                <p class="leading-relaxed text-base">
                  EUPHORIA has incorporated the concept of fests and Battlecups, where the best
                  students can compete online on a variety of educational tasks.
                </p>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Euphoria Offline Events (Coming Soon)[Post-COVID 19]</h2>
                <p class="leading-relaxed text-base">
                  All our Battlecups end in a year-end, India-wide conference where the leaderboard
                  competes in a variety of competitions live for a grand prize. With top CEOs, industry
                  leaders, VCs, and press under one roof, the only goal is to have fun and get ahead!
                </p>
              </div>
              <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <img src={offlineEvents} alt="" />
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <img src='https://res.cloudinary.com/dbozxizmw/image/upload/v1626850796/airdrop_inventory_tnmfdn.gif' alt="" />
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Euphoria Inventory and Drops (Coming Soon)</h2>
                <p class="leading-relaxed text-base">
                  Earn digital drops, with tiers ranging from common to ultra-rare at the end of
                  fest/events, valuable comment, thread, or Battlecup victory. Trade with others or sell
                  your items on the trading market for real money!
                </p>
              </div>
            </div>

            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Euphoria Pass (Coming Soon)</h2>
                <p class="leading-relaxed text-base">
                  Euphoria Pass is a premium offering that lets anyone be a part of Euphoria with
                  higher stakes. From better item drops, custom skins, unlimited mentorships, and
                  access to the trading store where you can use your hard-earned inventory to make
                  real money in a Blockchain-based auction market.
                  Access content that rivals the syllabi of the best peer experts in the world
                  Learn from real-world peer experts of the day, become highly primed for great career
                  opportunities
                  Build your own team and get matched with a personal mentor for unlimited assistance
                  Stay active on the Euphoria LAB, compete with other Euphoria Teams, score
                  Euphoria Points, and increase your chances of developing your career in one of its
                  best kind that you would have never thought of.
                </p>
              </div>
              <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <img src={pass} alt="" />
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <img src={army} alt="" />
              </div>
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">EUPHORIAN Army</h2>
                <p class="leading-relaxed text-base">
                  Be a part of the EUPHORIAN Army - your direct ticket to experienced mentors, peers,
                  and loads of career growth opportunities.
                  Connect with fellow learners and stay up-to-date on discussions, via bulletin boards &
                  discussion threads Earn digital/Offline drops, win brainteasers, hackathons, and even
                  become a premium Metanite with a EUPHORIA Pass
                </p>
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Euphoria Simulators (Coming Soon)</h2>
                <p class="leading-relaxed text-base">
                  An array of multiplayer custom games and market simulators that help refine your
                  skills while keeping it fun!
                </p>
              </div>
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 flex-shrink-0">
                <img src={simulators} alt="" />
              </div>
            </div>
          </div>
          <button class="flex mx-auto my-10 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg" onClick={myFunc}>
              {show ? 'View Less' : 'View More'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Features;
