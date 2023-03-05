import { Title, DivforButton, ButtonMy, mySpan } from './Feedback.styled';

export const FeedbackOptions = ({ buttons }) => {
  return (
    <>
      <Title>Please leave feedback!!!</Title>
      <DivforButton>
        <ButtonMy name="good" onClick={buttons}>
          Good
        </ButtonMy>
        <ButtonMy name="neutral" onClick={buttons}>
          Neutral
        </ButtonMy>
        <ButtonMy name="bad" onClick={buttons}>
          Bad
        </ButtonMy>
      </DivforButton>
    </>
  );
};
