import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };

  markers = [];
  infoContent = '';
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

    var tempmarkers = { 
      position:  {
        lat: 13.930406,
        lng: 75.578584
      },
      label: {
        color: 'red',
        text: 'Marker label',
      },
      title: 'Marker title',
      info: 'Marker info',
      options: {
        animation: google.maps.Animation.BOUNCE,
      } 
   };
   this.markers.push(tempmarkers);
   console.log(this.markers);
  }
}
