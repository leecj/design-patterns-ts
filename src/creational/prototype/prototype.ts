
import Document from "./document.js";
export default interface IProtoType {
  // interface with clone method
  clone(mode: number): Document
  // The clone is deep or shallow.
  // It is up to you how you want to implement
  // the details in your concrete class
}
