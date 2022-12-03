// import React from 'react'
// import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'
// // import { useEffect } from 'react';

// export default function Location() {
//   const center={ lat: 17.366551652855097,lng: 78.42867136001587}
//   const {isLoaded}=useJsApiLoader({
//     googleMapsApiKey: 'AIzaSyCFfoaKpFP1qPgjo3bFvyLyso4NzlZPBvM' })
//     if(!isLoaded){
//       return     <div className='maincontainer'>
//       <div className="spinner-grow text-success" role="status" id='spinner'></div>
//       </div>
//     }
//   return (
//     <div className='pages'>
//       <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%',height:'100%' ,borderRadius:'19px'}}>
//       </GoogleMap >

//       </div>
//   )
// }
import React from 'react'
import {GoogleMap,Marker,useJsApiLoader} from '@react-google-maps/api'
import customMarker from './CustomerMarker.png'
// import Map,{NavigationControl} from '@react-google-maps/api'
// // import { useEffect } from 'react';

// export default function Library() {
//   //we will use when use markers . . . . . . . 
//   // const Marker = (options) => {

//   //   const [marker, setMarker] = React.useState();
  
//   //   React.useEffect(() => {
//   //     if (!marker) {
//   //       setMarker(new google.maps.Marker());
//   //     }
  
//   //     // remove marker from map on unmount
//   //     return () => {
//   //       if (marker) {
//   //         marker.setMap(null);
//   //       }
//   //     };
//   //   }, [marker]);
//   //   React.useEffect(() => {
//   //     if (marker) {
//   //       marker.setOptions(options);
//   //     }
//   //   }, [marker, options]);
//   //   return null;
//   // };
//   const center={ lat: 17.366551652855097,lng: 78.42867136001587}
//   const {isLoaded}=useJsApiLoader({
//     googleMapsApiKey: '' })
//     if(!isLoaded){
//       return     <div className='maincontainer'>
//       <div className="spinner-grow text-success" role="status" id='spinner'></div>
//       </div>
//     }
//   return (
//     <div className='maincontainer'>
//       <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%',height:'100%'}}>
//       </GoogleMap >
//     </div>
//   )
// }
const Map=(props)=>{
     const {isLoaded}=useJsApiLoader({
     googleMapsApiKey: 'AIzaSyCFfoaKpFP1qPgjo3bFvyLyso4NzlZPBvM' })
  // const containerStyle={
  //   width:"90vw",
  //   height:"90vh",
  // };
  const center ={
    lat:17.367781,
    lng:78.432861,
  };
  // const anotherMarker={
  //   lat:7.31,
  //   lng:78.49,
  // };
  const markers=[
    {
      name:"location-1",
      location:{
        lat:17.367,
        lng:78.4326,
      },
    },
    {
      name:"location-2",
      location:{
        lat:17.361,
        lng:78.43,
      },
    },
    {
      name:"location-3",
      location:{
        lat:17.34,
        lng:78.432857,
      },
    },
    {
      name:"location-4",
      location:{
        lat:17.30,
        lng:78.439,
      },
    },
    {
      name:"location-4",
      location:{
        lat:17.21,
        lng:78.431,
      },
    },
    {
      name:"location-4",
      location:{
        lat:17.28,
        lng:78.44,
      },
    },
    {
      name:"location-10",
      location:{
        lat:17.35,
        lng:78.43,
      },
    },
    {
      name:"location-9",
      location:{
        lat:17.38,
        lng:78.39,
      },
    },
    {
      name:"location-8",
      location:{
        lat:17.34,
        lng:78.39,
      },
    },
    {
      name:"location-5",
      location:{
        lat:17.400,
        lng:78.439,
      },
    },
    {
      name:"location-6",
      location:{
        lat:17.30,
        lng:78.439,
      },
    },
    {
      name:"location-6",
      location:{
        lat:17.10,
        lng:78.9,
      },
    },
    {
      name:"location-7",
      location:{
        lat:17.30,
        lng:78.40,
      },
    },
    {
      name:"location-8",
      location:{
        lat:17.21,
        lng:78.01,
      },
    },
  ];
  return(
    isLoaded && (
      <div className='pages'>
      <GoogleMap center={center} zoom={12} mapContainerStyle={{width:'100%',height:'100%'}}>
        {markers.map((marker)=>{
          return (
            <div key={markers.name}>
              <Marker position={marker.location} options={{icons:customMarker}}/>
            </div>
          )
        })}
      </GoogleMap>
      </div>
    )
  )

};
export default Map;

