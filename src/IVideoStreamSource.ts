'use strict';

export default interface IVideoStreamSource {
    open();
    onChunk: (videoChunk: any) => void;
    close();
}
