
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Grid, Card, Typography, Input, FormLableAT } from '@mui/joy'
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
      <Grid sm={12} sx={{ marginTop: "50px", marginBottom: "10px", marginLeft: "50px", marginRight: "50px" }}>
        <Input onChange={(e) => setSearchKey(e.target.value)} value={searchKey}
          placeholder="Search Movies"
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              fetchMovies()
            }
          }}></Input>
      </Grid>
      <Grid sm={12} sx={{ marginLeft: "50px", marginRight: "50px" }}>
        <Card>
          <Typography startDecorator="Title :" fontWeight="bold">{data?.Title}</Typography>
          <Typography startDecorator="Plot :" fontWeight="bold">{data?.Plot}</Typography>
          <Typography startDecorator="Poster :" fontWeight="bold">

            <img src={data?.Poster}></img>
          </Typography>
          <Typography startDecorator="Actors :" fontWeight="bold">{data?.Actors}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
