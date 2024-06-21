/* eslint-disable import/no-cycle */
import React, { ButtonHTMLAttributes, CSSProperties, MouseEventHandler, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { Tooltip, Spinner, Icon, getIconSize } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { StyledButton, StyledButtonGroup } from '@styles/Button/StyledButton';

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'xlarge',
}
export const BUTTON_VARIANT = ['primary', 'secondary', 'outline', 'destructive', 'link', 'icon', 'icon-secondary', 'icon-outline'];

const getButtonIconSize = (size?: string | ButtonSize) => {
    if (size === 'small') return 'small';
    if (size === 'medium') return 'medium';
    if (size === 'large') return 'large';
    if (size === 'xlarge') return 'large';
    return 'small';
};

export const ButtonGroup = (props: any) => {
    return <StyledButtonGroup {...props} />;
};

export type ButtonProps = {
    className?: string;
    text?: string;
    size?: string | ButtonSize;
    variant?: string;
    iconBefore?: string;
    iconAfter?: string;
    iconColor?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: ReactNode;
    dataId?: string;
    onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
    'data-testid'?: string;
    style?: CSSProperties;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = withDataId(
    ({
        className,
        text,
        iconBefore,
        iconAfter,
        isCircle,
        iconColor,
        tooltip,
        onClick,
        onMouseEnter,
        onMouseLeave,
        isDisabled = false,
        isExpanded = false,
        isLoading = false,
        size = 'medium',
        debounceTime,
        children,
        dataId = 'button',
        variant = 'primary',
        style,
        ...props
    }: ButtonProps) => {
        const th = useContext(ThemeContext) || theme;
        const classes = classNames(isExpanded && 'expanded', className);
        const handleClick = debounceTime && debounceTime > 0 && onClick ? debounce(onClick, debounceTime) : onClick;
        const spinnerSize = getIconSize(size);
        const iconSize = getButtonIconSize(size);
        const getStyledButton = () => (
            <StyledButton
                className={classes}
                $isCircle={isCircle || false}
                $isExpanded={isExpanded || false}
                $isLoading={isLoading || false}
                disabled={isDisabled || false}
                $size={size || 'medium'}
                $iconColor={iconColor}
                $iconAfter={iconAfter}
                $variant={variant ?? 'primary'}
                $text={text}
                theme={th}
                onClick={handleClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                data-id={dataId}
                data-testid={props['data-testid'] ?? 'button'}
                style={style}
                {...props}
            >
                {isLoading ? <Spinner size={spinnerSize} data-testid='button-loading' /> : null}
                {!isLoading && iconBefore ? <Icon name={iconBefore} size={iconSize} color={iconColor} data-testid='button-icon-before' /> : null}
                {text || null}
                {children || null}
                {!isLoading && iconAfter ? <Icon name={iconAfter} size={iconSize} color={iconColor} data-testid='button-icon-after' /> : null}
            </StyledButton>
        );
        return tooltip ? <Tooltip title={tooltip}>{getStyledButton()}</Tooltip> : getStyledButton();
    },
    'button'
);
