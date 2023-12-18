import { Question } from "../Qustion/Question";
import { SubHeading } from "../SubHeading/SubHeading";
import { Button } from "../Button/Button";
import styles from "./Questions.module.scss";

export function Questions() {
  const data = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, autem?",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligua. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet expedita in quaerat praesentium quibusdam cum!",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi officiis fugit explicabo id nam voluptatum illum nihil ut, voluptates dolor inventore, facere soluta cumque, sint praesentium assumenda tempore maxime recusandae.",
    },
  ];

  return (
    <div className={styles.container}>
      <SubHeading
        subheading="Frequently Asked Questions"
        text="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />
      <div className={styles.accordingList}>
        {data.map((item, index) => (
          <Question key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Button primaryColor="blue">More Info</Button>
    </div>
  );
}
