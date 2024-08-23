import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface UsersState {
  first: string;
  last: string;
  email: string;
  mobile: string;
}

// Define the initial state using that type
const initialState: UsersState[] = []

export const usersSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUsers: (_, action: PayloadAction<UsersState[]>) => {
      return action.payload
    }
  }
})

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer