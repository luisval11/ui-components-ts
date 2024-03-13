import React, { useState } from 'react';

import { Grid, Row, Cell, Paragraph, SwitchPeriodComparative, SelectedPeriodType } from '@components';
import { Dayjs } from 'dayjs';
import { startDate, endDate, previousPeriodText, samePeriodLastYearText } from '../../../tests/mock/SwitchPeriodComparative';

export default {
    title: 'SwitchPeriodComparative',
    component: SwitchPeriodComparative,
    tags: ['autodocs'],
};

export const switchPeriodComparative = () => {
    const [stateNoText, setStateNoText] = useState<{
        period: SelectedPeriodType;
        date: {
            startDate: Dayjs;
            endDate: Dayjs;
        } | null;
    }>({
        period: SelectedPeriodType.PREVIOUS_PERIOD,
        date: null,
    });
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        A switch period comparative between two dates start and end, the text its optional so if you dont put nothing its ok
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SwitchPeriodComparative
                        selectedPeriod={stateNoText.period}
                        startDate={startDate}
                        endDate={endDate}
                        onPeriodSelect={({ period, date }) => {
                            setStateNoText({ period: period as SelectedPeriodType, date });
                        }}
                    />
                </Cell>
            </Row>
        </Grid>
    );
};

export const switchPeriodComparativeWitText = () => {
    const [state, setState] = useState<{
        period: SelectedPeriodType;
        date: {
            startDate: Dayjs;
            endDate: Dayjs;
        } | null;
    }>({
        period: SelectedPeriodType.PREVIOUS_PERIOD,
        date: null,
    });
    const { period } = state;
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        A switch period comparative between two dates start and end, the text its optional so if you dont put nothing its ok
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SwitchPeriodComparative
                        selectedPeriod={period}
                        startDate={startDate}
                        endDate={endDate}
                        previousPeriodText={previousPeriodText}
                        samePeriodLastYearText={samePeriodLastYearText}
                        onPeriodSelect={({ period, date }) => setState({ period: period as SelectedPeriodType, date })}
                    />
                </Cell>
            </Row>
        </Grid>
    );
};
