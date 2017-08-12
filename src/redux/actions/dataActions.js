import ants from '../../../data/ants.json'

const GET_ALL = 'get_all';

const getData = () => (
  {
      type: GET_ALL,
      payload: ants
  }
);

export {
  GET_ALL,
  getData
};
