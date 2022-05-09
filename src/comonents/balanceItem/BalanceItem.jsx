import styled from "styled-components"

export default function BalanceItem(props){
    const {date, description, value, type} = props.item

    return(
        <Item>
            <DateAndDescription>
                <Label color="#C6C6C6">{date}</Label>
                <Label color="#000000">{description}</Label>
            </DateAndDescription>
            <LabelRight color={type==='credit'? '#03AC00': '#C70000'}>{parseFloat(value).toFixed(2)}</LabelRight>
        </Item>
    )
}

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background: #FFFFFF;
    margin: 15px;
`
const DateAndDescription = styled.div`
    display: flex;
    background: #FFFFFF;
`
const Label = styled.label`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color};
    background: #FFFFFF;
    margin-right: 15px;
`
const LabelRight = styled.label`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color};
    background: #FFFFFF;
`