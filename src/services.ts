'use strict';

import IoC from './IoC';
import videoSourceCreators from './videoSourceCreators';
import { VIDEO_STREAM_SOURCE } from './serviceTypes';

export const ioC = new IoC();

export function initializeServices(): void {
    const videoStreamSourceType = process.argv[2] || 'hd';
    const videoStreamSource = videoSourceCreators[videoStreamSourceType]();
    ioC.register(VIDEO_STREAM_SOURCE, videoStreamSource);
}
