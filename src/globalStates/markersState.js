import { create } from "zustand";

export const markersState = create((set, get) => ({
    markersData: [
        {name: "Buenos Aires",
         markers: [{
            position:[-38.459376820272574, -61.67694414939847],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 14,
            provincia: "Buenos Aires"   
        },
        {
            position:[-37.72571594518312, -58.10343083514422],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 15,
            provincia: "Buenos Aires"   
        },
        {
            position:[-37.9220785993058, -62.64023903267091],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 17,
            provincia: "Buenos Aires"   
        }]},
        {name: "Córdoba",
        markers: [{
            position:[-34.35041207411546, -64.3056672315817],
            iconType:1,
            popUp: "Lucas Brasilia",
            numberScouting: 1,
            provincia: "Córdoba"
        },
        {
            position:[-33.2593418893903, -64.26350283282035],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 13,
            provincia: "Córdoba"   
        },
        {
            position:[-32.46653654397585, -63.69675601253739],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 20,
            provincia: "Córdoba"   
        }]
        },

        {name: "Entre Ríos",
        markers: [{
            position:[-31.548290655497517, -59.01025701577411],
            iconType:1,
            popUp: "Lucas Brasilia",
            numberScouting: 2,
            provincia: "Entre Ríos"   
        },
        {
            position:[-32.831311066635166, -58.96631170277985],
            iconType:1,
            popUp: "Lucas Brasilia",
            numberScouting: 3,
            provincia: "Entre Ríos"  
        }]
        },
        {name: "La Rioja", markers:[{
            position:[-29.663269747426238, -67.26044753106967],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 7,
            provincia: "La Rioja"   
        },
        {
            position:[-28.522855215999254, -68.65877882026301],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 10,
            provincia: "La Rioja"
        },]},

        {name: "Mendoza", markers:[{
            position:[-35.3421856281715, -68.39258134004731],
            iconType:1,
            popUp: "Lautaro lima",
            numberScouting: 5,
            provincia: "Mendoza"  
        },
        {
            position:[-34.09433292881647, -69.43562954075307],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 11,
            provincia: "Mendoza"  
        }]},

        {name: "Misiones", markers: [{
            position:[-26.399947517090844, -54.333651534426366],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 8,
            provincia: "Misiones"   
        }]},

        {name: "Río Negro", markers: [{
            position:[-40.80619452947864, -67.04472830701572],
            iconType:1,
            popUp: "Cristian Rinaldi",
            numberScouting: 6,
            provincia: "Río Negro"   
        },
        {
            position:[-39.71353381044671, -68.35786033547772],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 16,
            provincia: "Río Negro"   
        }]},

        {name: "Catamarca", markers: [{
            position:[-27.728128341313628, -67.69548392685533],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 9,
            provincia: "Catamarca"   
        }]},

        {name: "Jujuy", markers:[{
            position:[-22.627160178001187, -66.18714850088656],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 12,
            provincia: "Jujuy"   
        }]},

        {name: "La Pampa", markers:[{
            position:[-36.61147785174006, -67.05275112505444],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 18,
            provincia: "La Pampa"   
        }]},

        {name: "Santa Cruz", markers:[{
            position:[-49.05192083785498, -69.8223654581116],
            iconType:1,
            popUp: "Lucho Mares",
            numberScouting: 19,
            provincia: "Santa Cruz"   
        }]}

    ],


markersNow: [],

setMarkersNow: () => {
    set((state) => ({markersNow: state.markersData.flatMap(marker => marker.markers)}))
},

setMarkersForProvince: (province) => {
    set((state) => ({
        markersNow: state.markersData
            .find(marker => marker.name === province)
            ?.markers || []
    }));
},

listOfScoutings: [],

setListOfScoutings: () => {
    set((state) => ({listOfScoutings: state.markersData.flatMap(marker => marker.markers)}))
},

setMarkerPosition: (numberScouting, newPosition) => {
    set((state) => {
      const updatedMarkers = state.markersData.map((marker) =>
        marker.numberScouting === numberScouting
          ? { ...marker, position: newPosition }
          : marker
      );
      return { markersData: updatedMarkers };
    });
  },
}))