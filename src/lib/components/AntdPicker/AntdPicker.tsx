import React from 'react';
import { ConfigProvider, DatePickerProps } from 'antd';
import * as datePickerUtils from './datePickerUtils';
import { DropdownDatePickerStyles, StyledAntdDatePicker, StyledAntdRangePicker } from '@styles/AntdPicker/StyledAntdPicker';
import defaultTheme, { Theme } from '@utils/theme';
import { Icon } from '@components/Icon';
import { RangePickerProps } from 'antd/lib/date-picker';

type CommonProps = {
    locale?: 'en' | 'bg' | 'br' | 'be' | 'ca' | 'da' | 'de' | 'el' | 'es' | 'fi' | 'fr' | 'it' | 'nl' | 'pl' | 'pt' | 'sl' | 'sv' | 'tr' | 'us' | 'zh';
    dataId?: string;
    'data-testid'?: string;
    theme?: Theme;
};

type AntdDatePickerProps = DatePickerProps & CommonProps;

export const AntdDatePicker = (props: AntdDatePickerProps) => {
    const { locale, theme } = props;
    const th = theme ?? defaultTheme;

    return (
        <ConfigProvider
            locale={datePickerUtils.getLocale(locale ?? 'en')}
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <DropdownDatePickerStyles theme={th} />
            <StyledAntdDatePicker
                {...props}
                data-testid='antd-date-picker'
                nextIcon={<Icon name='chevron_right_l' size={10} color='gray600' />}
                prevIcon={<Icon name='chevron_left_l' size={10} color='gray600' />}
                suffixIcon={<Icon name='calendar_blank' size={18} color='gray600' />}
            />
        </ConfigProvider>
    );
};

AntdDatePicker.defaultProps = {
    theme: defaultTheme,
    dataId: 'datepicker',
    locale: 'en',
};

export type AntdRangePickerProps = RangePickerProps & CommonProps;

export const AntdRangePicker = (props: AntdRangePickerProps) => {
    const { dataId, locale, theme, ...rest } = props; // Antd Props
    const th = theme ?? defaultTheme;

    return (
        <ConfigProvider
            locale={datePickerUtils.getLocale(locale ?? 'en')}
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <DropdownDatePickerStyles theme={th} />
            <StyledAntdRangePicker
                {...rest}
                data-id={dataId}
                data-testid='antd-range-picker'
                separator={<Icon name='arrow_right' size={18} color='gray600' />}
                suffixIcon={<Icon name='calendar_range' size={18} color='gray600' />}
                theme={defaultTheme}
            />
        </ConfigProvider>
    );
};

AntdRangePicker.defaultProps = {
    theme: defaultTheme,
    dataId: 'rangepicker',
    locale: 'en',
};

type DatePicker = { type: 'date' | 'range' } & (AntdDatePickerProps | AntdRangePickerProps);

export const DatePicker = (props: DatePicker) => {
    const { type, ...rest } = props;
    if (type === 'range') {
        return <AntdRangePicker {...(rest as AntdRangePickerProps)} />;
    }
    return <AntdDatePicker {...(rest as AntdDatePickerProps)} />;
};
