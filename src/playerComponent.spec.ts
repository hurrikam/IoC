'use strict';

import { EOL } from 'os';
import IVideoStreamSource from './IVideoStreamSource';
import VideoChunk from './videoChunk';
import PlayerComponent from './playerComponent';

describe('PlayerComponent', () => {

    describe('play', () => {

        test('outputs video chunks from the video source stream', () => {
            let streamOutput = '';
            const testVideoChunk: VideoChunk = {
                width: 2,
                height: 2,
                data: [1, 2, 3, 4]
            };
            const mockVideoStreamSource: IVideoStreamSource = {
                onChunk: undefined,
                open: () => mockVideoStreamSource.onChunk(testVideoChunk),
                close: () => { }
            };
            const outputStream = (streamData: string) => streamOutput += streamData;
            const playerComponent = new PlayerComponent(mockVideoStreamSource, outputStream);
            playerComponent.play();
            expect(streamOutput).toBe(
                '\x1B[2J\x1B[0f\u001b[0;0H' +
                `${EOL}` +
                '\x1b[1m' +
                '█' +
                '\x1b[2m' +
                '█' +
                `${EOL}` +
                '\x1b[3m' +
                '█' +
                '\x1b[4m' +
                '█'                
            );
        });
    });
});
