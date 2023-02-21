import FAQList from "../components/FAQList";

import "./index.css";

const FAQPage = () => {
  const configs = [
    {
      title: "Why shouldn't we trust atoms?",
      text: "They make up evertything",
      active: true,
    },
    {
      title: "What do you call someone with no body and no nose?",
      text: "Nodody knows",
    },
    {
      title: "What's the object-oriented way to become weathly?",
      text: "Ibheritance",
    },
    {
      title: "How mane tickles dows it takes to tickle an actopus?",
      text: "Ten-tickels?",
    },
    {
      title: "What is: 1 + 1?",
      text: "Depends on who are you asking",
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <FAQList configs={configs} />
    </div>
  );
};

export default FAQPage;
