import { IDevice } from './device.js';

// 遥控器
interface IRemotes {
  power(): void;

  volumeDown(): void;

  volumeUp(): void;

  channelDown(): void;

  channelUp(): void;
}

// 基础遥控器
export class BasicRemote implements IRemotes {
  device: IDevice;
  constructor(device: IDevice) {
    this.device = device;
  }
  power(): void {
    console.log('Remote: power');
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }
  volumeDown(): void {
    console.log('Remote: volume down');
    this.device.setVolume(this.device.getVolume() - 1);
  }
  volumeUp(): void {
    console.log('Remote: volume up');
    this.device.setVolume(this.device.getVolume() + 1);
  }
  channelDown(): void {
    console.log('Remote: channel down');
    this.device.setVolume(this.device.getChannel() - 1);
  }
  channelUp(): void {
    console.log('Remote: channel up');
    this.device.setVolume(this.device.getVolume() + 1);
  }
}

// 高级遥控器
export class AdvancedRemote extends BasicRemote {
  mute(): void {
    console.log('Remote: mute');
    this.device.setVolume(0);
  }
}
