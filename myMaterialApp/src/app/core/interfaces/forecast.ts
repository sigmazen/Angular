//https://blog.logrocket.com/understanding-using-interfaces-typescript/

export interface Forecast {
 conditions: string;
 wind: {
   speed: number;
   direction: string;
 };
 temperature: {
   day: {
     min: number;
     max: number;
   },
   night: {
     min: number;
     max: number;
   }
 };

 // This is a function that returns a number
// myWeather: () => number;
}