import React, {Fragment} from 'react'
import styled from 'styled-components' 
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const RatingBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;
    input { display: none; }
    label {
        background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 70%;
        cursor: pointer;
        height: 40px;
        width: 40px;
    }
    input:checked ~ label,
    input:checked ~ label ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
    }
    input:not(:checked) ~ label:hover,
    input:not(:checked) ~ label:hover ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
    }
`
const RatingFormInput = (props) => {
    return (
        <RatingBox>
            {props.ratingOptions}
        </RatingBox>
    )
}

export default RatingFormInput
