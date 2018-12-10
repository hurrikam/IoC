'use strict';

import VideoChunk from '../videoChunk';
import { MAX_CODE, BLACK_CODE, WHITE_CODE } from './consoleColorCodes';

export default class VideoChunkGenerator {

    constructor(
        private readonly isColor: boolean,
        private readonly width: number,
        private readonly height: number
    ) {
    }

    public generate(): VideoChunk {
        const dataLength = this.width * this.height;
        const data = new Array<number>(dataLength);
        for (let i = 0; i < data.length; i++) {
            if (this.isColor) {
                data[i] = Math.trunc(Math.random() * MAX_CODE);
            } else {
                data[i] = Math.random() > 0.5 ? BLACK_CODE: WHITE_CODE 
            }
        }        
        return {
            width: this.width,
            height: this.height,
            data
        };
    }
}
