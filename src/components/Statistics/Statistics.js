import { Mylist, Title } from './Statistics.styled';
import { Note } from '../Note/Note';
export const Statistics = ({
  bad,
  good,
  neutral,
  total,
  positivePercentage,
}) => {
  return total ? (
    <>
      <Title>Statistic</Title>
      <Mylist>
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback:{positivePercentage}%</li>
      </Mylist>
    </>
  ) : (
    <>
      <Note />
    </>
  );
};
