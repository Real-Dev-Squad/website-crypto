import React from 'react'
import { ArrowUpward } from '@material-ui/icons'
import styled from 'styled-components'
import { featuredData } from '../dummyData'

const FeaturedContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const FeaturedItem = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`
const FeaturedTitle = styled.span`
    font-size: 20px;
`
const FeaturedMoneyContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
    .featuredMoney{
        font-size: 30px;
        font-weight: 600;
    }
    .featuredMoneyRate{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
.featuredIcon{
        font-size: 14px;
        margin-left: 5px;
        color: green;
    }
`
const FeaturedSub = styled.span`
    font-size: 15px;
    color: gray;
`

const Featured = () => {
    return (
        <FeaturedContainer>
            {featuredData && featuredData.map((item, index) => (
                <FeaturedItem key={index}>
                    <FeaturedTitle>{item.title}</FeaturedTitle>
                    <FeaturedMoneyContainer>
                        <span className="featuredMoney">{item.money}</span>
                        <span className="featuredMoneyRate">
                            {item.moneyRate} <ArrowUpward className="featuredIcon" />
                        </span>
                    </FeaturedMoneyContainer>
                    <FeaturedSub>Compared to Previous month</FeaturedSub>
                </FeaturedItem>
            ))}
        </FeaturedContainer>
    )
}

export default Featured