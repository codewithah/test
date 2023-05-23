import './api-key';

$(document).ready(function () {
  var app = new Mapp({
    element: '#app',
    presets: {
      latlng: {
        lat: 35.732823,
        lng: 51.414299,
      },
      zoom: 12,
    },
    i18n: {
      fa: {
        'polygon-title': 'عنوان',
        'polygon-description': 'توضیح',
      },
      en: {
        'polygon-title': 'Title',
        'polygon-description': 'Description',
      },
    },
    locale: 'en',
    apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhlY2Y0YWVhZWVlZTI0ODFlNGU4NDBiNTllYTM1MjI4MmI1NmI1MmIzNWMyNWQzYzY1NTUwNGRhNDEzZjNjMGU2ZTFmNDAzZjQzZTE3Njc3In0.eyJhdWQiOiIyMjM2MSIsImp0aSI6IjhlY2Y0YWVhZWVlZTI0ODFlNGU4NDBiNTllYTM1MjI4MmI1NmI1MmIzNWMyNWQzYzY1NTUwNGRhNDEzZjNjMGU2ZTFmNDAzZjQzZTE3Njc3IiwiaWF0IjoxNjg0NjE0MDEyLCJuYmYiOjE2ODQ2MTQwMTIsImV4cCI6MTY4NzIwNjAxMiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.SYydfLaVf1Qz2ob648bvDtrsNFAruyitZPYx4QHU0EjqYOF4_BbMqZc8cOqImtHMgpaCMwwGWmqzNXh1XI-anBD3AYbptUrrNwFCDzJimxuhj8NNRIfDaQk464Q43AgdtmqwJOchtkMSuKULvdEpNTkrrBimocVxqmaBpcVP9FNBU-R_iwx83GePxYdqfVdXgLhIP07iaP5cwgqCawKF3m4ZVPVo5o-aqyFPbucxtI0xNZCB-J_9XwHqPefU8_Vo7O6lgIRaPk70FlbhA57i_26DFxxEJEJ_M79XTTNYtWmZqsONHjjvngNe23cxzRYWcdHv9O073s3qwraua1lo4w',
  });
  app.addLayers();
  const data = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [51.43627166748047, 35.74212349555748],
              [51.3833999633789, 35.742402154456435],
              [51.374216079711914, 35.706586496936254],
              [51.423654556274414, 35.694737308347264],
              [51.446571350097656, 35.70714406242706],
              [51.43627166748047, 35.74212349555748],
            ],
          ],
        },
      },
    ],
  };

  L.geoJSON(data, {
    style: function () {
      return { color: 'blue' };
    },
  })
    .bindPopup(function (layer) {
      return layer.feature.properties.name;
    })
    .addTo(app.map);
});
