import { IDevice, Radio, Tv } from './device.js';
import { AdvancedRemote, BasicRemote } from './remotes.js';

export function show(): void {
  testDevice(new Tv());
  testDevice(new Radio());
}

function testDevice(device: IDevice): void {
  console.log('Test basic remote');
  const basicRemote = new BasicRemote(device);
  basicRemote.power();
  device.printStatus();
  console.log('Test advanced remote');
  const advancedRemote = new AdvancedRemote(device);
  advancedRemote.power();
  advancedRemote.mute();
  device.printStatus();
}
