import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import classNames from 'classnames';

import theme from '@utils/theme';
import { Icon, Paragraph } from '@components';
import { StyledCard, StyledCardLink } from '@styles/Card/StyledCard';

const defaultProps = {
    titleTruncated: false,
    isActive: false,
    isWhite: false,
    isLoading: false,
    isHorizontal: false,
};

const CardHeader = ({ image, icon }: { image?: string; icon?: string }) => {
    if (!image && !icon) return null;
    return (
        <div className='card-header' data-testid='card-header'>
            {image && !icon && <img alt='card-header' src={image} className='card-img card-img-top' data-testid='card-image' />}
            {icon && !image && <Icon name={icon} data-testid='card-icon' />}
        </div>
    );
};

const CardBody = ({ title, subtitle, description }: { title?: string; subtitle?: string; description?: string }) => {
    if (!title && !subtitle && !description) return null;
    return (
        <div className='card-body' data-testid='card-body'>
            {title && <h5 className='card-title'>{title}</h5>}
            {subtitle && <h6 className='card-subtitle'>{subtitle}</h6>}
            {description && <Paragraph>{description}</Paragraph>}
        </div>
    );
};

const CardFooter = ({ footer }: { footer: React.ReactNode }) => {
    if (!footer) return null;
    return (
        <div className='card-footer' data-testid='card-footer'>
            {footer}
        </div>
    );
};

type CardProps = {
    link?: string;
    title?: string;
    titleTruncated?: boolean;
    subtitle?: string;
    description?: string;
    icon?: string;
    image?: string;
    footer?: React.ReactNode;
    isActive?: boolean;
    isWhite?: boolean;
    isLoading?: boolean;
    isHorizontal?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
};

type CardContentProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: string;
    image?: string;
    footer?: React.ReactNode;
    isHorizontal?: boolean;
};

const CardContent = (props: CardContentProps) => (
    <>
        <CardHeader image={props.image} icon={props.icon} />
        {props.isHorizontal ? (
            <div className='horizontal'>
                <CardBody title={props.title} subtitle={props.subtitle} description={props.description} />
                <CardFooter footer={props.footer} />
            </div>
        ) : (
            <>
                <CardBody title={props.title} subtitle={props.subtitle} description={props.description} />
                <CardFooter footer={props.footer} />
            </>
        )}
    </>
);

export const Card = (props: CardProps) => {
    const { link, title, subtitle, description, icon, image, footer, isActive, isHorizontal, onClick, onFocus } = props;
    const th = useContext(ThemeContext) || theme;
    const classes = classNames(isActive && 'active');
    return (
        <>
            {link ? (
                <StyledCardLink href={link} className={classes} theme={th} $hasFooter={footer !== null} data-testid='card' onClick={onClick} onFocus={onFocus}>
                    <CardContent title={title} subtitle={subtitle} description={description} icon={icon} image={image} footer={footer} isHorizontal={isHorizontal} />
                </StyledCardLink>
            ) : (
                <StyledCard className={classes} theme={th} $hasFooter={footer !== null} data-testid='card' onClick={onClick} onFocus={onFocus}>
                    <CardContent title={title} subtitle={subtitle} description={description} icon={icon} image={image} footer={footer} isHorizontal={isHorizontal} />
                </StyledCard>
            )}
        </>
    );
};

Card.defaultProps = defaultProps;

export default Card;
