import styled from "styled-components";

export const HeaderWrapper = styled.header`
    height: 75px;
    background-color: #0A192F;
    color: #05CECE;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        display: block;
        padding: 20px 150px;
        :hover{
            opacity: .8;
        }
    }

`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    margin-right: 70px;
    .link{
        padding-right: 40px;
        color: #05CECE;
        font-size: 20px;
        text-decoration: none;
        :hover{
            opacity: .8;
        }
    }
`