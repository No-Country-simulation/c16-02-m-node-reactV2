const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

// Crear un thunk asincrónico para obtener los datos de los eventos del backend
export const fetchEventos = createAsyncThunk(
  'eventos/fetchEventos',
  async () => {
    const response = await fetch(
      'https://c16-02-m-node-reactv2.onrender.com/event'
    )
    const data = await response.json()
    return data
  }
)

export const eventSlice = createSlice({
  name: 'event',
  initialState: {
    eventos: [],
    status: 'idle',
    error: 'null',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchEventos.fulfilled, (state, action) => {
        state.status = 'idle'
        state.eventos = action.payload // Aquí actualizas el estado con los datos de los eventos obtenidos del backend
      })
      .addCase(fetchEventos.rejected, (state, action) => {
        state.status = 'idle'
        state.error = action.error.message
      })
  },
})

export default eventSlice.reducer
