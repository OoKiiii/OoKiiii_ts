import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
    theme: {
        color: {
            primary: 'blue',
            background: '#2254BA',
        },
    },

    utils: {
        /**
         * @param {string} value
         * */
        m: value => ({
            margin: value,
        }),
        mt: value => ({
            marginTop: value,
        }),
        mb: value => ({
            marginBottom: value,
        }),
        ml: value => ({
            marginLeft: value,
        }),
        mr: value => ({
            marginRight: value,
        }),

        /**
         * @param {string} value
         * */
        p: value => ({
            padding: value,
        }),
        pt: value => ({
            paddingTop: value,
        }),
        pb: value => ({
            paddingBottom: value,
        }),
        pl: value => ({
            paddingLeft: value,
        }),
        pr: value => ({
            paddingRight: value,
        }),

        size: (width, height) => ({
            width: width,
            height: height,
        }),
    },

    media: {
        mobile: `(max-width: 360px)`,
        pc: `(min-width: 361px)`,
    },
});
