import './App.css';
import { useState } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const getSearchQuery = searchQuery => setSearchQuery(searchQuery);

  return (
    <div className="App">
      <Searchbar getSearchQuery={getSearchQuery} />
      <ImageGallery searchQuery={searchQuery} />
    </div>
  );
}
