export class App {
  // constructor function runs immediately you initialize the app
  constructor({ figure, wrapper }) {
    this.figure = figure.current;
    this.wrapper = wrapper.current;
    // console.log(this.figure, this.wrapper);
  }
}
