import { ADD_PERSON } from './types';

const addPerson = (person, state) => {
  console.log('person', person)
  console.log('state.people', [...state.people])
  const newPeople = [...state.people, person];
  console.log('newPeople', newPeople)

  return {
    ...state,
    people: newPeople
  };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return addPerson(action.payload, state);
    default:
      return state;
  }
};
