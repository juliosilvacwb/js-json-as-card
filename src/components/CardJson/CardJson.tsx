import React, { FC } from 'react';
import styled from 'styled-components';
import { CardJsonProps } from './CardJson.types';

const formatPropertyName = (propertyName: string) => {
    return propertyName
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const CardContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 16px;
`;

const CardJson: FC<CardJsonProps> = ({ ...props }) => {

    const { json, id, ...rest } = props;

    return (
        <CardContainer data-testid="cardId" id={id} {...rest} >
            {Object.keys(json).map((key) => (
                <div key={key}>
                    <strong>{formatPropertyName(key)}</strong>: {json[key]}
                </div>
            ))}
        </CardContainer>
    );
};

export default CardJson;