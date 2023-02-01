import Chair from './chair.js'

export default class MediumChair extends Chair{
  constructor(){
    super()
    this.height = 60
    this.width = 60
    this.depth = 60
    this.name = 'MediumChair'
  }
}
