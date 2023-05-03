import Feedback from '../Feedback/Feddback';
import Statistics from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Feedback />;
      <Statistics good={this.state.good} />
    </div>
  );
};
