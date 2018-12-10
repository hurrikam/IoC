'use strict';

import IVideoStreamSource from '../IVideoStreamSource';
import VideoChunk from '../videoChunk';
import VideoChunkGenerator from './videoChunkGenerator';

export class HDVideoStreamSource implements IVideoStreamSource {

    private readonly videoChunkGenerator: VideoChunkGenerator;
    private interval: NodeJS.Timeout;

    constructor() {
        this.videoChunkGenerator = new VideoChunkGenerator(true, 35, 10);
    }
    
    public onChunk: (chunk: VideoChunk) => void;
    
    public open(): void {
        this.interval = setInterval(() => {
            const chunk = this.videoChunkGenerator.generate();
            this.onChunk(chunk);
        }, 500);
    }

    public close(): void {
        clearInterval(this.interval);
    }
}