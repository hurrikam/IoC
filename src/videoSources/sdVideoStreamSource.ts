'use strict';

import IVideoStreamSource from '../IVideoStreamSource';
import VideoChunk from '../videoChunk';
import VideoChunkGenerator from './videoChunkGenerator';

export class SDVideoStreamSource implements IVideoStreamSource {

    private readonly videoChunkGenerator: VideoChunkGenerator;
    private interval: NodeJS.Timeout;

    constructor() {
        this.videoChunkGenerator = new VideoChunkGenerator(false, 26, 8);
    }
    
    public onChunk: (chunk: VideoChunk) => void;
    
    public open(): void {
        this.interval = setInterval(() => {
            const chunk = this.videoChunkGenerator.generate();
            this.onChunk(chunk);
        }, 1000);
    }

    public close(): void {
        clearInterval(this.interval);
    }
}