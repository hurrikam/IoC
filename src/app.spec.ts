'use strict';

import videoSourceCreators from './videoSourceCreators';
import IVideoStreamSource from './IVideoStreamSource';

describe('app', () => {

    test('plays using a specific video stream source', () => {
        const mockVideoStreamSource: IVideoStreamSource = {
            onChunk: undefined,
            open: jest.fn(),
            close: () => { }
        };
        (videoSourceCreators as any).mockSource = () => mockVideoStreamSource;
        process.argv[2] = 'mockSource';
        require('./app');
        expect(mockVideoStreamSource.open).toHaveBeenCalledTimes(1);
    });
});
