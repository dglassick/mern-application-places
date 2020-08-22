import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'pl',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/118014905_3940256639324811_3789126874151062228_n.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=1FEAXVR4ZiYAX_SSfBc&_nc_ht=scontent-lax3-1.xx&oh=842595d60cef550ef2271d1ee546cdb3&oe=5F66030D',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7464862,
      long: -73.992241
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/118014905_3940256639324811_3789126874151062228_n.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=1FEAXVR4ZiYAX_SSfBc&_nc_ht=scontent-lax3-1.xx&oh=842595d60cef550ef2271d1ee546cdb3&oe=5F66030D',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7464862,
      long: -73.992241
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
