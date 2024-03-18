import React, { ForwardedRef, Ref, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';

import Highcharts from 'highcharts';
import HighchartsReact, { HighchartsReactRefObject } from 'highcharts-react-official';
import HighchartsHeatmap from 'highcharts/modules/heatmap';

import addSolidGauge from 'highcharts/modules/solid-gauge';
import addSankeyModule from 'highcharts/modules/sankey';
import addExportingModule from 'highcharts/modules/exporting';
import addOfflineExportingModule from 'highcharts/modules/offline-exporting';
import addExportData from 'highcharts/modules/export-data';
import boost from 'highcharts/modules/boost';
import highchartsMore from 'highcharts/highcharts-more';
import addPatternFill from 'highcharts/modules/pattern-fill';
import accessibility from 'highcharts/modules/accessibility';

import theme from '@utils/theme';
import { withDataId } from '@components/DataId/withDataId';
import { StyledChart, StyledChartError, StyledChartLoading } from '@styles/Chart/StyledChart';

if (import.meta.env.MODE !== 'test') boost(Highcharts);
addSankeyModule(Highcharts);
addExportingModule(Highcharts);
addOfflineExportingModule(Highcharts);
addExportData(Highcharts);
HighchartsHeatmap(Highcharts);
highchartsMore(Highcharts);
addSolidGauge(Highcharts);
addPatternFill(Highcharts);
accessibility(Highcharts);

const defaultProps = {
    decimalPoint: '.',
    thousandsSep: ' ',
    numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    showError: false,
    isLoading: false,
    dataId: 'chart',
};

const ChartLoading = () => (
    <StyledChartLoading data-testid='chart-loading'>
        <svg width='210' height='210' preserveAspectRatio='none' viewBox='0 0 210 210'>
            <rect width='100%' height='100%' fill='url("#fill")' clipPath='url(#clip-path-chart)'></rect>
            <defs>
                <clipPath id='clip-path-chart'>
                    <rect width='1' height='1' x='156' y='89' rx='0' ry='0'></rect>
                    <rect width='9' height='27' x='62' y='103' rx='0' ry='0'></rect>
                    <rect width='9' height='72' x='89' y='60' rx='0' ry='0'></rect>
                    <rect width='9' height='43' x='115' y='87' rx='0' ry='0'></rect>
                    <rect width='9' height='60' x='140' y='71' rx='0' ry='0'></rect>
                    <rect width='140' height='9' x='35' y='153' rx='0' ry='0'></rect>
                    <rect width='184' height='9' x='14' y='30' rx='0' ry='0'></rect>
                    <rect width='9' height='154' x='190' y='30' rx='0' ry='0'></rect>
                    <rect width='184' height='9' x='14' y='174' rx='0' ry='0'></rect>
                    <rect width='9' height='154' x='14' y='30' rx='0' ry='0'></rect>
                </clipPath>
                <linearGradient id='fill'>
                    <stop offset='0.6' stopColor='#f3f3f3'>
                        <animate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-2; -2; 1'></animate>
                    </stop>
                    <stop offset='1.6' stopColor='#ecebeb'>
                        <animate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-1; -1; 2'></animate>
                    </stop>
                    <stop offset='2.6' stopColor='#f3f3f3'>
                        <animate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='0; 0; 3'></animate>
                    </stop>
                </linearGradient>
            </defs>
        </svg>
    </StyledChartLoading>
);

const ChartError = (props: any) => <StyledChartError data-testid='chart-error' {...props} />;

type ChartProps = {
    options?: Highcharts.Options;
    isLoading?: boolean;
    showError?: boolean;
    errorContent?: any;
    dataId?: string;
    'data-testid'?: string;
    decimalPoint?: string;
    thousandsSep?: string;
    numericSymbols?: string[];
    months?: string[];
    shortMonths?: string[];
    weekdays?: string[];
    callback?: () => void;
};

export const Chart = withDataId(
    React.forwardRef((props: ChartProps, ref: ForwardedRef<HTMLDivElement>) => {
        const { options, isLoading, showError, errorContent, dataId, 'data-testid': dataTestId, decimalPoint, thousandsSep, numericSymbols, months, shortMonths, weekdays } = props;
        const th = useContext(ThemeContext) || theme;
        const loading = isLoading && !showError;
        const error = !isLoading && showError && errorContent;
        const showChart = !loading && !error && options;
        const [aggregateOptions, setAggregateOptions] = useState<Highcharts.Options>();
        const { fontFamily, backgroundColor } = useContext(ThemeContext) || theme;
        const highchartsReactProps = omit(props, [
            'isLoading',
            'showError',
            'dataId',
            'data-testid',
            'decimalPoint',
            'thousandsSep',
            'thousandsSeparator',
            'numericSymbols',
            'months',
            'options',
            'shortMonths',
            'weekdays',
            'options',
            'theme',
        ]);

        // NOTE: this setOptions is global to all Charts so everytime it is called these values
        // will be overwritten and the last one will prevail on all rendered charts
        Highcharts.setOptions({
            lang: {
                decimalPoint,
                thousandsSep,
                numericSymbols,
                months,
                shortMonths,
                weekdays,
            },
        });

        useEffect(() => {
            const currentOptions = { ...options };

            if (!currentOptions.chart) {
                currentOptions.chart = { style: {} };
            } else if (!currentOptions.chart.style) {
                currentOptions.chart.style = {};
            }
            if (!currentOptions.legend) {
                currentOptions.legend = {};
            }
            if (!currentOptions.tooltip) {
                currentOptions.tooltip = {};
            }
            if (!currentOptions.title) {
                currentOptions.title = { text: '' };
            } else if (!currentOptions.title.style) {
                currentOptions.title.style = {};
            }

            setAggregateOptions({
                ...options,
                title: {
                    ...currentOptions.title,
                    style: {
                        ...currentOptions.title.style,
                        fontWeight: 'bold',
                    },
                },
                tooltip: {
                    ...currentOptions.tooltip,
                    backgroundColor: backgroundColor,
                    shadow: false,
                },
                legend: {
                    ...currentOptions.legend,
                    backgroundColor: backgroundColor,
                    itemStyle: {},
                },
                credits: {
                    enabled: false,
                },
                exporting: {
                    enabled: false,
                },
                chart: {
                    ...currentOptions.chart,
                    backgroundColor: backgroundColor,
                    style: {
                        ...currentOptions.chart.style,
                        fontFamily: fontFamily,
                    },
                },
            });
        }, [options, fontFamily, backgroundColor]);

        return (
            <StyledChart data-id={dataId} data-testid={dataTestId} theme={th}>
                {(loading || !aggregateOptions) && <ChartLoading />}
                {error && <ChartError>{errorContent}</ChartError>}
                {showChart && aggregateOptions && (
                    <HighchartsReact highcharts={Highcharts} ref={ref as Ref<HighchartsReactRefObject>} {...highchartsReactProps} options={aggregateOptions} />
                )}
            </StyledChart>
        );
    })
);

Chart.defaultProps = defaultProps;
