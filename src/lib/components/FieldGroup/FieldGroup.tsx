import React, { ReactNode, useContext } from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';
import find from 'lodash/find';
import set from 'lodash/set';
import { ThemeContext } from 'styled-components';

import theme from '@utils/theme';
import { withDataId } from '@components/DataId/withDataId';
import { StyledFieldGroup } from '@styles/Fieldgroup/StyledFieldGroup';
import { ButtonSize, Icon, Tooltip } from '@components';

export enum FieldGroupType {
    RADIO = 'radio',
    CHECKBOX = 'checkbox',
}

export enum FieldGroupVariant {
    JOINED = 'joined',
    SPLIT = 'split',
    CUSTOM = 'custom',
}

const defaultProps = {
    variant: FieldGroupVariant.JOINED,
    vertical: false,
    size: 'medium' as ButtonSize,
    dataId: 'field-group',
};

const getSelectedField = <V,>(type: FieldGroupType, selectedValues: V, allValues: FieldGroupItem[], selectedProp: string) => {
    let selectedItem;
    if (type === FieldGroupType.RADIO) {
        const objectToSelect = set({}, selectedProp, selectedValues);
        selectedItem = find(allValues, objectToSelect);
    }
    if (type === FieldGroupType.CHECKBOX) {
        selectedItem = (selectedValues as [string | number]).map((item: string | number) => {
            const objectToSelect = set({}, selectedProp, item);
            return find(allValues, objectToSelect);
        });
    }
    return selectedItem;
};

const isFieldSelected = <T extends FieldGroupType, V>(group: Pick<GenericFieldGroupProps<T, V>, 'type' | 'selectedValues'>, selectedField: any) => {
    let isEqual = false;
    if (group.type === FieldGroupType.RADIO) {
        isEqual = !!(group.selectedValues === selectedField);
    }
    if (group.type === FieldGroupType.CHECKBOX) {
        isEqual = !!find(selectedField, group.selectedValues as []);
    }
    return isEqual;
};

type GenericFieldGroupProps<T extends FieldGroupType, V> = {
    type: T;
} & FieldGroupProps<V>;

type FieldGroupProps<V> = {
    selectedValues: V;
    variant?: FieldGroupVariant;
    values: FieldGroupItem[];
    size?: ButtonSize;
    name?: string;
    vertical?: boolean;
    onChange?: (e: FieldGroupItem) => void;
    onFieldClick?: (e: FieldGroupItem) => void;
    dataId?: string;
};

export type FieldGroupItem = {
    id: string;
    label?: ReactNode;
    icon?: string;
    name: string;
    uniqueId?: string;
    value: string;
    tooltip?: string;
    isDisabled?: boolean;
};

export const RadioFieldGroup = withDataId((props: FieldGroupProps<string | number>) => GenericFieldGroup({ ...props, type: FieldGroupType.RADIO }));
export const CheckboxFieldGroup = withDataId((props: FieldGroupProps<(string | number)[]>) => GenericFieldGroup({ ...props, type: FieldGroupType.CHECKBOX }));

const GenericFieldGroup = <T extends FieldGroupType, V>(props: GenericFieldGroupProps<T, V>) => {
    const { type, variant, values, selectedValues, size, name, vertical, onChange, onFieldClick, dataId } = props;
    const th = useContext(ThemeContext) || theme;
    const uniqueValues =
        values.length > 0
            ? [
                  ...values.map((value: FieldGroupItem) => ({
                      ...value,
                      uniqueId: uniqueId(value.id),
                  })),
              ]
            : [];

    const selectedField = getSelectedField(type, selectedValues, uniqueValues, 'value');
    // TODO REVIEW
    // const fieldGroupProps = omit(props, ['values', 'selectedValues', 'name', 'onChange', 'onFieldClick', 'dataId']);
    const handleOnFieldClick = (item: FieldGroupItem) => {
        const { uniqueId, ...itemRest } = item;
        onFieldClick && onFieldClick(itemRest);
    };

    const handleOnChange = (item: FieldGroupItem) => {
        const { uniqueId, ...itemRest } = item;
        if (onChange) onChange(itemRest);
    };

    return (
        <StyledFieldGroup theme={th} size={size} data-testid='field-group' $vertical={!!vertical} variant={variant} data-id={dataId}>
            {uniqueValues.map((item: FieldGroupItem) => {
                const { uniqueId, value, label, icon, tooltip, isDisabled } = item;
                const isSelected = isFieldSelected({ type, selectedValues: item }, selectedField);
                const classesItem = classNames('item', `item-${label}`, isSelected && 'active', isDisabled && 'disabled');
                const getLabel = () => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <label
                        className={classesItem}
                        data-tooltip={tooltip}
                        htmlFor={`${uniqueId}_${value}`}
                        key={`${uniqueId}_${value}`}
                        onClick={() => handleOnFieldClick(item)}
                        data-testid='field-group-label'
                    >
                        {!icon && label ? label : null}
                        {icon ? <Icon name={icon} size={variant === 'custom' && size === 'large' ? 'xlarge' : size} /> : null}
                        <input
                            id={`${uniqueId}_${value}`}
                            onChange={() => handleOnChange(item)}
                            type={type}
                            name={name}
                            value={value}
                            checked={isSelected}
                            data-testid='field-group-input'
                            disabled={isDisabled}
                        />
                    </label>
                );
                return tooltip ? (
                    <Tooltip title={tooltip} key={`tooltip_${uniqueId}`}>
                        {getLabel()}
                    </Tooltip>
                ) : (
                    getLabel()
                );
            })}
        </StyledFieldGroup>
    );
};

RadioFieldGroup.defaultProps = defaultProps;
CheckboxFieldGroup.defaultProps = defaultProps;
