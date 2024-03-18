import { XAxisOptions, YAxisOptions, PlotOptions, PlotSeriesOptions, PlotColumnOptions } from 'highcharts';

type Modify<T, R> = Omit<T, keyof R> & R;

type ChartXAxisOptions = XAxisOptions & { index?: number; isX?: boolean };
type ChartYAxisOptions = YAxisOptions & { index?: number };

export type ChartOptions = Modify<
    Highcharts.Options,
    {
        xAxis?: ChartXAxisOptions | Array<ChartXAxisOptions>;
        yAxis?: ChartYAxisOptions | Array<ChartYAxisOptions>;
        plotOptions?: PlotOptions & {
            series?: PlotSeriesOptions & { grouping?: boolean };
            column?: PlotColumnOptions & { borderRadiusTopLeft?: number; borderRadiusTopRight: number };
        };
    }
>;
