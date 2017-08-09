import SessionsReducer from '../reducers/session_reducer';
import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {
  describe('SessionsReducer', () => {
    it('exports a function', () => {
      expect(typeof SessionsReducer).toEqual('function');
    });

    it('should initialize with an object with null currentUser and empty array errors as the default state', () => {
      expect(SessionsReducer(undefined, {})).toEqual({currentUser: null, errors: []});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { jarno: 'trashstate' };
      const newState = SessionsReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_CURRENT_USER action', () => {
      let action,
          user;

      beforeEach(() => {
        user = { id: 1, name: 'User', url: 'www.picture.com' };
        action = {
          type: 'RECEIVE_CURRENT_USER',
          user: user
        };
      });

      it('should replace currentUser in the state with the action\'s user', () => {
        const state = SessionsReducer(undefined, action);
        expect(state).toEqual({currentUser: action.user, errors: []});
      });

      it('should not modify the errors', () => {
        let oldState = { currentUser: {}, errors: 'whatever' };
        let state = SessionsReducer(oldState, action);
        expect(state.errors).toEqual('whatever');
      });
    });

    describe('handling the RECEIVE_ERRORS action', () => {
      let action,
          errors;

      beforeEach(() => {
        errors = ["error1", "error2", "error3"];
        action = {
          type: 'RECEIVE_ERRORS',
          errors: errors
        };
      });

      it('replace the errors array with a new array of errors', () => {
        let state = SessionsReducer({currentUser: null, errors: ["fake error"]}, action);

        expect(state.errors).toEqual(action.errors);
      });

      it('should not affect the currentUser', () => {
        let oldState = { currentUser: "fake user", errors: [] };
        let state = SessionsReducer(oldState, action);
        expect(state.currentUser).toEqual("fake user");
      });
    });

    describe('handling the LOGOUT action', () => {
      let action

      beforeEach(() => {
        action = {
          type: 'LOGOUT'
        };
      });

      it('should set the current user to null', () => {
        let state = SessionsReducer({ currentUser: "farpo", errors: [] }, action);
        expect(state.currentUser).toEqual(null);
      });

      it('should set the errors to an empty array', () => {
        let state = SessionsReducer({ currentUser: "farpo", errors: ["error2"] }, action);
        expect(state.errors).toEqual([]);
      });
    });

    describe('handling the CLEAR_ERRORS action', () => {
      let action

      beforeEach(() => {
        action = {
          type: 'CLEAR_ERRORS'
        };
      });

      it('should set the errors to an empty array', () => {
        let state = SessionsReducer({ currentUser: "farpo", errors: ["1", "2", "3"] }, action);
        expect(state.errors).toEqual([]);
      });

      it('should not affect the currentUser', () => {
        let state = SessionsReducer({ currentUser: "farpo", errors: ["error2"] }, action);
        expect(state.currentUser).toEqual("farpo");
      });
    });

    describe('handling the RECEIVE_CURRENT_USER_VOTES action', () => {
      let action,
          votes,
          oldState

      beforeEach(() => {
        oldState = {currentUser: {name: "user", id: 1, url: "www.picture.com"}, errors: []}
        votes = {1: "good", 2: "bad", 3: "maybe"}
        action = {
          type: 'RECEIVE_CURRENT_USER_VOTES',
          votes: votes
        };
      });

      it('should add a votes object to the current user', () => {
        let state = SessionsReducer(oldState, action);
        expect(state.currentUser.votes).toEqual(action.votes);
      });

      it('should not affect the errors', () => {
        let state = SessionsReducer(oldState, action);
        expect(state.errors).toEqual([]);
      });
    });

  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('exports a function', () => {
      expect(typeof RootReducer).toEqual('function');
    });

    it('includes the SessionsReducer under the key `sessions`', () => {
      const user = { id: 1, name: 'User', url: 'www.picture.com' };
      const action = { type: 'RECEIVE_CURRENT_USER', user: user };
      testStore.dispatch(action);

      expect(testStore.getState().sessions).toEqual(SessionsReducer({ currentUser: user, errors: [] }, action));
    });
  });
});
