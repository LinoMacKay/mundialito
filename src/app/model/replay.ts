export class Replay {
  title: String;
  url: String;
  imageUrl: String;
  _id: String;

  constructor(title: String, url: String, imageUrl: String, _id: String) {
    this.title = title;
    this.url = url;
    this._id = _id;
    this.imageUrl = imageUrl;
  }
}
