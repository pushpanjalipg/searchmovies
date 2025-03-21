
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Grid, Card, Typography, Input } from '@mui/joy'
function App() {
  const [data, setData] = useState()
  const [searchKey, setSearchKey] = useState()
  const apiKey = 'b6033e5e'
  const url = "https://www.omdbapi.com"
  const fetchMovies = async () => {
    await fetch(`${url}?t=${searchKey}&apiKey=${apiKey}`).then((res) => {
      if (!res.ok) {
        throw new Error
      }
      return res.json()
    }).then((data) => {
      setData(data)
    })
    // if(searchKey.trim()==='') return
  }
  return (
    <Grid container>
      <Grid sm={12} sx={{ marginTop: "10px" }}>
        <Input onChange={(e) => setSearchKey(e.target.value)} value={searchKey}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              fetchMovies()
            }
          }}></Input>
      </Grid>
      <Grid sm={4}>
        <Card>
          <Typography startDecorator="Title :">{data?.Title}</Typography>
          <Typography startDecorator="Plot :">{data?.Plot}</Typography>
          <Typography startDecorator="Poster :">

            <img src={data?.Poster}></img>
          </Typography>
          <Typography startDecorator="Actors :">{data?.Actors}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
