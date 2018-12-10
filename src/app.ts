'use strict';

import { ioC, initializeServices } from './services';
import { VIDEO_STREAM_SOURCE } from './serviceTypes';
import IVideoStreamSource from './IVideoStreamSource';
import PlayerComponent from './playerComponent';

initializeServices();
const videoStreamSource = ioC.resolve(VIDEO_STREAM_SOURCE) as IVideoStreamSource;
const playerComponent = new PlayerComponent(videoStreamSource,
    (buffer: string) => process.stdout.write(buffer));
playerComponent.play();
