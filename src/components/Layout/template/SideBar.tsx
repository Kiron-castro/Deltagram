import styled, { css } from 'styled-components'

const SideBarWrapper = styled.div`
display: none;
@media(min-width: 420px) {
    width: 25%;
    display: flex;
    position: relative;
}
border: 1px  #9e9e9e;
flex-direction: column;

position: absolute;
left: 0;
width: 55%;
background-color: #00334d;
z-index: 100;

a {
    display: inline-block;
    padding: 12px 7px;
    text-align:center;
    color: #f0f0f0;
    text-decoration: none;
    margin-bottom: 20px;
    font-family: Helvetica Neue”,Helvetica,Arial,sans-serif;
    font-weight: bolder;
    margin-top: 35px;
}

${(props) =>
    !props.hidden &&
    css`
      display: flex;
    `}
`

const SideBar = ({hidden}:{hidden: boolean})=>{

    return (
        <SideBarWrapper hidden={hidden}>
            <a href="#">Home</a>
            <a href="#">Notification</a>
            <a href="#">Profile</a>
            <a href="#">Configuration</a>


        </SideBarWrapper>
    )
}


export default SideBar;