import React from 'react';

import { Divider, Grid, Row, Cell, Paragraph } from '@components';

export default {
    title: 'Divider',
    component: Divider,
    tags: ['autodocs'],
};

export const divider = (args: any) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color.
                </Paragraph>
            </Cell>
            <Cell xs={12} style={{ height: '50px' }}>
                <Divider {...args} />
            </Cell>
        </Row>
    </Grid>
);
