import "./index.css";

// section -4 card item
import CardItem from "../CardItem";

// imported icons from "react-icons" module
import { FaGrinSquintTears } from "react-icons/fa";
import { FaLaugh } from "react-icons/fa";
import { FaDizzy } from "react-icons/fa";
import { FaSadCry } from "react-icons/fa";
import { TbMoodCry } from "react-icons/tb";
import { GiScreaming } from "react-icons/gi";
import { RiMedalFill } from "react-icons/ri";

// imported Chrono for Timeline
import { Chrono } from "react-chrono";

// imported Hooks and gsap for creating Animation
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

//                                                    ARRAYS FOR DIFFERENT SECTIONS

// workWithUs array for section-8

const workWithUs = [
  {
    id: 1,
    heading: "Power through, even when the going gets tough",
    description:
      "We help you spot and work around whatever stands in the way, be it bad habits, fears,ect...",
  },
  {
    id: 2,
    heading: "Learn more about who you are and where you want to go",
    description:
      "We ask the right questions to help you better understanding why you do things the way you do.",
  },
  {
    id: 3,
    heading: "Play and grow together with others on the same journey",
    description:
      "Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!",
  },
  {
    id: 4,
    heading:
      "Learn about practical skills that you can actually use in real life",
    description:
      "We teach you smart psyschological techniques and habit-forming strategies that are easy to apply",
  },
  {
    id: 5,
    heading: "Master how to make it happen in real life",
    description:
      "We support you towards ninja-level skills with sleek tools such as dry-runs, quizzes, and flashcards.",
  },
  {
    id: 6,
    heading: "Get support that's made for your needs",
    description:
      "We build your personal roadmap of lessons and actions towards your goals",
  },
];

//  details array for section 7
const details = [
  {
    title: "You",
  },
  {
    title: "Anonymonous 1",
  },
  {
    title: "Anonymonous 2",
  },
  {
    title: "Anonymonous 3",
  },
];

// items array for section-5
const items = [
  {
    title: "1",
    cardTitle: "It's not as easy as 1-2-3.",
    cardDetailedText:
      "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and noting else).",
  },
  {
    title: "2",
    cardTitle: "Old habits are hard to break.",
    cardDetailedText:
      "And bad behaviours die hard. Fortunately, we give you great, science-backed techniques to use.",
  },
  {
    title: "3",
    cardTitle: "You and your motivation don't have a long-term relationship.",
    cardDetailedText:
      "Luckily, we can proactively prepare you for the marathan, not just the race. Effective, memorable exercisesWill help you stick to your goals.",
  },
  {
    title: "4",
    cardTitle: "Books just don't offer practical.",
    cardDetailedText:
      "Remember when you learned to ride a bike just by reading? Yeah. we don't either. We help you take concreate steps towards your goals. Learning just a bit, then immediately springing into action.",
  },
  {
    title: "5",
    cardTitle: "Inspiration is great, but then what.",
    cardDetailedText:
      "We make sure your energy from all the content you consume does not fizzle out.",
  },
];

// cardsList array for section-3
const cardsList = [
  {
    id: 1,
    imageLink: <FaGrinSquintTears color="#000" size={50} />,
    heading: "Face with tears of joy",
    description:
      "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or p.",
    bgColor: "#e9b3b3",
  },
  {
    id: 2,
    imageLink: <FaLaugh color="#000" size={50} />,
    heading: "Laughing face",
    description:
      "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard.",
    bgColor: "#b3e9bf",
  },
  {
    id: 3,
    imageLink: <FaDizzy color="#000" size={50} />,
    heading: " Dizzy face",
    description:
      "The Face With Spiral Eyes emoji is used to represent intense dizziness, intoxication, and other forms of disorientation.",
    bgColor: "#d8e9b4",
  },
  {
    id: 4,
    imageLink: <TbMoodCry color="#000" size={50} />,
    heading: "Sad but relieved face",
    description:
      "A yellow face with small, open eyes, a slight frown, and furrowed eyebrows, from which a single bead of sweat drips, as if from concern or anxiety.",
    bgColor: "#b3bce9",
  },
  {
    id: 5,
    imageLink: <FaSadCry color="#000" size={50} />,
    heading: " Crying face",
    description:
      "A yellow face with an open mouth wailing and streams of heavy tears flowing from closed eyes. May convey inconsolable grief but also other intense feelings.",
    bgColor: " #a3f1e3",
  },
  {
    id: 6,
    imageLink: <GiScreaming color="#000" size={50} bg="green" />,
    heading: " Screaming face",
    description:
      "screaming face emoji to show you're afraid, totally surprised or shocked, or screaming with excitement",
    bgColor: "#e9b3d8",
  },
];

gsap.registerPlugin(ScrollTrigger);

// MAIN CONTENT of the application
const MainContent = () => {
  const headRef = useRef(null);

  useEffect(() => {
    const el = headRef.current;
    gsap.from(
      el,

      {
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  // this function returns list item (section-9 )
  const workWithUsFunc = (eachItem) => {
    const { id, heading, description } = eachItem;
    return (
      <li key={id}>
        <p className="heading">{heading}</p>
        <p>{description}</p>
      </li>
    );
  };

  return (
    <div className="Main-content">
      {/*section-1 */}
      <section className="app-details-card-section-1">
        <div className="app-details-card-content">
          <p>Ahead app</p>
          <h1>
            Master Your Life <br /> By Mastering <br /> Emotions
          </h1>
          <div className="app-donwload-and-rewiews-container">
            <div className="app-donwload-container">
              <img
                className="apple-logo-img"
                alt="apple logo"
                src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708137225/1685901641apple-icon-png_j81cm0.webp"
              />

              <div>
                <p>Donwload on the</p>
                <p>APP STORE</p>
              </div>
            </div>
            <div className="reviews-container">
              <img
                className="rating-img"
                alt="ratings"
                src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708139650/five-stars-rating-icon-png_ozae6o.webp"
              />
              <p>100+ App Store reviews</p>
            </div>
          </div>
        </div>
        <div className="apple-mobile-image-container">
          <img
            className="apple-mobile-img"
            alt="apple mobile img"
            src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708145406/_44707f57-586c-4cd9-9cd5-47a6ca3a3c96_koxrx4.jpg"
            // src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708215379/Gemini_Generated_Image_hyupnn.jpg"
          />
          <img
            className="yellow-ghost"
            alt="yellow"
            src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708147166/229635030050211_hsieax.png"
          />
          <img
            className="red-ghost"
            alt="red"
            src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708147166/21578-9-pac-man-ghost-clipart_qypnfz.png"
          />
          <img
            className="blue-ghost"
            alt="light blue"
            src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708147166/1a23ca73f33f1a06262bdced6d5d66cb_cgrzes.png"
          />
        </div>
      </section>

      {/*section-2 */}

      <section className="EQ-beats-IQ-container-section-2">
        <h1>EQ beats IQ</h1>
        <p>
          People with high emotional intelligence (EQ) live more fulfilled
          lives. They tend to be happier and have healthier relationships.
        </p>
        <p>
          They are more successful in their pursuits and make for inspiring
          leaders. According to science, they earn $29k a year.
        </p>
      </section>

      {/*section-3 */}

      <section id="section-emotions" className="section-3">
        <div className="Does-this-sound-familiar-heading-container-section-3">
          <h1 ref={headRef} className="section-3-heading">
            Does this sound familiar...
          </h1>
          <img
            className="red-ghost-img"
            alt="red-ghost"
            src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708147166/21578-9-pac-man-ghost-clipart_qypnfz.png"
          />
        </div>
        <ul className="Does-this-sound-familiar-cards-container">
          {cardsList.map((eachItem) => (
            <CardItem key={eachItem.id} eachItemDetails={eachItem} />
          ))}
        </ul>
      </section>

      {/*section-4 */}

      <section className="Meet-The-Ahead-app-container-section-4" id="heading">
        <div className="Meet-The-Ahead-app-container-left">
          <p>Built Out Of Frustration</p>
          <h1>Meet The Ahead app</h1>
          <div className="yellow-ghost-img-container">
            <img
              className="yellow-ghost-img "
              alt="yellow-ghost-img"
              src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708147166/229635030050211_hsieax.png"
            />
          </div>
        </div>
        <div className="Meet-The-Ahead-app-container-right">
          <p>
            A personalized pocket coach that provides bite- sized,
            science-driven tools to boost emotional intelligence.
          </p>
          <p>
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </p>
        </div>
      </section>

      {/*section-5 */}

      <section
        id="section-self-improvement"
        className="time-line-main-container-section-5"
      >
        <p>Wrong with self-improvement & how we're fixing it.</p>
        <div className="Self-improvement">
          <h1>Self-improvement. ugh. </h1>
          <img
            className="red-ghost-img"
            alt="red-ghost"
            src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708147166/21578-9-pac-man-ghost-clipart_qypnfz.png"
          />
        </div>
        <div className="time-line-container">
          <Chrono
            className="time-line"
            items={items}
            cardHeight="100px"
            mode="VERTICAL"
            slideShow="false"
            borderLessCards="true"
            cardWidth="100px"
          />
        </div>
      </section>

      {/*section-6*/}

      <section className="Be-the-best-you-with-EQ-section-6">
        <h1>Be the best you with EQ</h1>
        <p>
          Not having your own emotions under control might be holding you back.
        </p>
        <p>
          Additionally, not understanding those of others stops you from being
          parent, friend you can be.
        </p>
      </section>

      {/*section-7*/}

      <section className="Rate-your-social-skills-container-section-7">
        <p>
          Let your friends, family, and co-workers (anonymously) rate your
          social skills.
        </p>
        <h1>Ever wondered what others think of you?</h1>
        <div className="Rate-your-social-skills-steps-container">
          <div className="Rate-your-social-skills-steps">
            <div className="Rate-your-social-skills-steps-medal-icon">
              <RiMedalFill color="#eeaa52" size={80} />
              <p>1</p>
            </div>
            <p>Answer questions on your social skills</p>
          </div>
          <div className="Rate-your-social-skills-steps">
            <div className="Rate-your-social-skills-steps-medal-icon">
              <RiMedalFill color="#eeaa52" size={80} />
              <p>2</p>
            </div>
            <p>Let others anonymously Answer the same questions about you</p>
          </div>
          <div className="Rate-your-social-skills-steps">
            <div className="Rate-your-social-skills-steps-medal-icon">
              <RiMedalFill color="#eeaa52" size={80} />
              <p>3</p>
            </div>
            <p>
              Find out where you and others see things the same way - and where
              not!
            </p>
          </div>
        </div>
        <div className="Rate-your-social-skills-time-line-desktop">
          <Chrono
            mode="HORIZONTAL"
            items={details}
            cardHeight="100px"
            slideShow="true"
            cardLess="true"
          />
        </div>
        <div className="Rate-your-social-skills-time-line-mobile">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={details}
            cardHeight="100px"
            slideShow="true"
            cardLess="true"
          />
        </div>
      </section>

      {/*section-8*/}

      <section
        id="section-Manifesto"
        className="privacy-instruction-container-section-8"
      >
        <p>We take privacy seriously</p>
        <h1>Before you get started</h1>
        <p>
          "we won't share your answers with anyone (and won't ever tell you
          which friends said what about you)"
        </p>
        <p>
          with love, <span>Team ahead</span>
        </p>
        <button>Start a test</button>
        <p>Take only 5 minutes</p>
      </section>

      {/*section-9*/}

      <section
        id="section-work-with-us"
        className="work-with-us-section-container-section-9"
      >
        <div className=" work-with-us-section-headings">
          <h1>Work with us</h1>
          <h1 className="app-name">ahead</h1>
        </div>
        <div className="work-with-us-section-container-bottom">
          <div className="work-with-us-section-container-bottom-left">
            <div className="about-section">
              <img
                className=" sky-blue-ghost"
                alt="sky-blue-ghost"
                src="https://res.cloudinary.com/dvmkmx7o3/image/upload/v1708147166/1a23ca73f33f1a06262bdced6d5d66cb_cgrzes.png"
              />
              <p className="heading">About</p>
              <p>
                At ahead out goal is to make self-improvement fun and lasting.
                we know there's a way how to make it work. And that's what aHead
                is all about
              </p>
            </div>
            <div className="product-section">
              <p className="heading">Product</p>
              <p>
                sure, you could spend ages reading books or sitting in seminars
                on how to become a better.
              </p>
            </div>
          </div>
          <div className="work-with-us-section-container-bottom-right">
            <ul>{workWithUs.map((eachItem) => workWithUsFunc(eachItem))}</ul>
          </div>
        </div>
      </section>

      {/* section-10*/}

      <section className="open-vacancies-section-container-section-10">
        <h1>Open vacancies</h1>
        <div className="job-details-card-list-container">
          <div className="job-details-card">
            <p>Senior Full-stack Engineer</p>
            <ul>
              <li>Full-time position</li>
              <li>Berlin or Remote</li>
              <li>&euro;65-85k,0.5-1.50% share options</li>
            </ul>
          </div>
          <div className="job-details-card">
            <p>Senior Designer</p>
            <ul>
              <li>Full-time position</li>
              <li>Berlin or Remote</li>
              <li>&euro;65-85k,0.5-1.50% share options</li>
            </ul>
          </div>
          <div className="job-details-card">
            <p>Superstar Intern</p>
            <ul>
              <li>Full-time position</li>
              <li>Berlin or Remote</li>
              <li>&euro;65-85k,0.5-1.50% share options</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
