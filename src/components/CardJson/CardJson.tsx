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
  position: relative;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 16px;
  font-family: Arial, sans-serif;
`;

const CardLabel = styled.div`
`;

const CardText = styled.div`
  margin-left: 0.5rem;
`;

const CardJson: FC<CardJsonProps> = ({ ...props }) => {

    const { json, id, format, styleCard, styleLabel, styleText, complementComponent, exclude, ...rest } = props;

    return (
        <CardContainer data-testid="cardId" id={id} {...rest} style={{...styleCard}} >
            {
                Object.keys(json).map((key) => {

                    if (exclude?.includes(key)) return;
                    
                    return  <div key={key} style={{display: 'flex'}}>
                                <CardLabel style={{...styleLabel}}>
                                <strong>
                                        {
                                            !!format ? formatPropertyName(key) : key
                                        }
                                </strong>:
                                </CardLabel><CardText style={{...styleText}}>{json[key]}</CardText>
                            </div>
                    })
            }
            {
                complementComponent
            }
        </CardContainer>
    );
};

export default CardJson;