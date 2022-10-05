import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
    media: {
        mobile: `(max-width: 360px)`,
        pc: `(min-width: 361px)`,
    },
});
