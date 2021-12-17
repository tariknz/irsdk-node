import {
  BroadcastMessages, CameraState, ChatCommand, FFBCommand, PitCommand, ReloadTexturesCommand, ReplayPositionCommand, ReplaySearchCommand, ReplayStateCommand, TelemetryCommand, VideoCaptureCommand,
} from './constants';

export class NativeSDK {
  constructor();

  public defaultTimeout: number;

  startSDK(): boolean;

  stopSDK(): void;

  isRunning(): boolean;

  waitForData(timeout?: number): boolean;

  getHeader(): boolean;

  getSessionData(): string;

  getTelemetryData(): boolean;

  // Broadcast command overloads
  // This is handled in the cpp side so no need to mess with it in js
  broadcast(message: BroadcastMessages.CameraSwitchPos, pos: number, group: number, camera: number): void;

  broadcast(message: BroadcastMessages.CameraSwitchNum, driver: number, group: number, camera: number): void;

  broadcast(message: BroadcastMessages.CameraSetState, state: CameraState): void;

  broadcast(message: BroadcastMessages.ReplaySetPlaySpeed, speed: number, slowMotion: number): void;

  broadcast(message: BroadcastMessages.ReplaySetPlayPosition, pos: ReplayPositionCommand, frame: number): void;

  broadcast(message: BroadcastMessages.ReplaySearch, mode: ReplaySearchCommand): void;

  broadcast(message: BroadcastMessages.ReplaySetState, state: ReplayStateCommand): void;

  broadcast(message: BroadcastMessages.ReloadTextures, command: ReloadTexturesCommand, carIndex?: number): void;

  broadcast(message: BroadcastMessages.ChatCommand, command: ChatCommand, macro?: number): void;

  broadcast(message: BroadcastMessages.PitCommand, command: PitCommand, param?: number): void;

  broadcast(message: BroadcastMessages.TelemCommand, command: TelemetryCommand): void;

  broadcast(message: BroadcastMessages.FFBCommand, command: FFBCommand, value: number): void;

  broadcast(message: BroadcastMessages.ReplaySearchSessionTime, session: number, time: number): void;

  broadcast(message: BroadcastMessages.VideoCapture, command: VideoCaptureCommand): void;
}
