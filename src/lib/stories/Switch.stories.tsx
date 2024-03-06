import React from 'react';
import { Grid, Row, Cell, Paragraph, Switch } from '@components';

export default {
    title: 'Switch',
    component: Switch,
    tags: ['autodocs'],
};

export const defaultSwitch = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A simple switch that changes value on click.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Switch defaultChecked />
            </Cell>
        </Row>
    </Grid>
);

export const sizes = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Switch size='small' />
            </Cell>
            <Cell xs={12}>
                <Switch />
            </Cell>
        </Row>
    </Grid>
);

export const disabled = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Switch defaultChecked={false} disabled />
            </Cell>
            <Cell xs={12}>
                <Switch defaultChecked disabled />
            </Cell>
        </Row>
    </Grid>
);
export const playground = (args: any) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Switch.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Switch {...args} />
            </Cell>
        </Row>
    </Grid>
);
