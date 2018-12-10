'use strict';

import { EOL } from 'os';
import IVideoStreamSource from './IVideoStreamSource';
import VideoChunk from './videoChunk';

export default class PlayerComponent {

    constructor(
        private readonly videoStreamSource: IVideoStreamSource,
        private readonly outputStream: (streamData: string) => void
    ) {
        if (!videoStreamSource) {
            throw new Error('videoStreamSource not specified');
        }
        if (!outputStream) {
            throw new Error('outputStream not specified');
        }        
        videoStreamSource.onChunk = this.onChunk.bind(this);
        process.on('exit', () => this.dispose());
        process.on('SIGKILL', () => this.dispose());
    }

    public play(): void {
        this.videoStreamSource.open();
    }

    private resetConsole(): void {
        this.outputStream('\x1B[2J\x1B[0f\u001b[0;0H');
    }

    private onChunk(videoChunk: VideoChunk): void {
        this.resetConsole();
        videoChunk.data.forEach((color, index) => {
            const isNewLine = index % videoChunk.width === 0;
            if (isNewLine) {
                this.outputStream(EOL);
            }
            this.outputStream(`\x1b[${color}m`);
            this.outputStream('█');
        });
    }

    private dispose(): void {
        this.videoStreamSource.close();
        this.resetConsole();
    }
}