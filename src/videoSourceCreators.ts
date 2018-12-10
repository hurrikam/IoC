'use strict';

import { HDVideoStreamSource } from './videoSources/hdVideoStreamSource';
import { SDVideoStreamSource } from './videoSources/sdVideoStreamSource';

export default {
    hd: () => new HDVideoStreamSource(),
    sd: () => new SDVideoStreamSource()
};
