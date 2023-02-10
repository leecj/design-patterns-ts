export interface IDevice {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(precent: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
  printStatus(): void;
}

// 收音机
export class Radio implements IDevice {
  private on = false;
  private volume = 30;
  private channel = 1;
  isEnabled(): boolean {
    return this.on;
  }
  enable(): void {
    this.on = true;
  }
  disable(): void {
    this.on = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(volume: number): void {
    if (volume > 100) {
      this.volume = 100;
    } else if (volume < 0) {
      this.volume = 0;
    } else {
      this.volume = volume;
    }
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
  printStatus(): void {
    console.log('------------------------------------');
    console.log("| I'm radio.");
    console.log("| I'm " + (this.on ? 'enabled' : 'disabled'));
    console.log('| Current volume is ' + this.volume + '%');
    console.log('| Current channel is ' + this.channel);
    console.log('------------------------------------\n');
  }
}

export class Tv implements IDevice {
  on = false;
  volume = 30;
  channel = 1;
  isEnabled(): boolean {
    return this.on;
  }
  enable(): void {
    this.on = true;
  }
  disable(): void {
    this.on = false;
  }
  getVolume(): number {
    return this.volume;
  }
  setVolume(volume: number): void {
    if (volume > 100) {
      this.volume = 100;
    } else if (volume < 0) {
      this.volume = 0;
    } else {
      this.volume = volume;
    }
  }
  getChannel(): number {
    return this.channel;
  }
  setChannel(channel: number): void {
    this.channel = channel;
  }
  printStatus(): void {
    console.log('------------------------------------');
    console.log("| I'm tv.");
    console.log("| I'm " + (this.on ? 'enabled' : 'disabled'));
    console.log('| Current volume is ' + this.volume + '%');
    console.log('| Current channel is ' + this.channel);
    console.log('------------------------------------\n');
  }
}
