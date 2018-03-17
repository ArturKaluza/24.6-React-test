import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayerList/PlayersList';

it('renders without crashing', () => {
  shallow(<App />);
});

it("should update player score", () => {
  const appComponent = shallow(<App />);
  const players = [{
    name: 'Kunegunda',
    score: 5
  }]
  //dodoanie players do stanu aplikacji
  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5); // wywoływanie funkcji, dodanie 5 ptk do pierwszego gracza

  const playersAfterUpdate = appComponent.state().players;

  expect(playersAfterUpdate[0].score).toEqual(10);
});