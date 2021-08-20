import styled from 'styled-components'

const SideBarWrapper = styled.div`
border: 1px solid #404040;
width: 25%;
display: flex;
flex-direction: column;

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
`

const SideBar = ()=>{

    return (
        <SideBarWrapper>
            <a href="#">Home</a>
            <a href="#">Notification</a>
            <a href="#">Profile</a>
            <a href="#">Configuration</a>


        </SideBarWrapper>
    )
}

export default SideBar;