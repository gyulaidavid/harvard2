import './App.css';
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Artwork from './pages/Artwork';
import Layout from './components/Layout';

function App() {
  const apiKey = "ac3cc164-cd23-4a7e-8d4e-7dd367deafb5";
  const baseURL = `https://api.harvardartmuseums.org/image?apikey=${apiKey}&size=126`
  const [url, setUrl] = useState(baseURL);

  function changeUrl(searchTag) {
    setUrl(`${baseURL}${searchTag && '&q=description:(' + searchTag + ')'}`)
  }

  return (
    <Routes>
      <Route path="/" element={<Layout searchTag={changeUrl} />}>
        <Route index element={<Home url={url} />} />
        <Route path=":id" element={<Artwork />} />
      </Route>
    </Routes>
  );
}

export default App;
