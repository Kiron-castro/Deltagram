import styled from 'styled-components'

const SideBarWrapper = styled.div`
border: 1px solid green;
width: 25%;
`

const SideBar = ()=>{

    return (
        <SideBarWrapper>
            <h2>SideBar</h2>
        </SideBarWrapper>
    )
}

export default SideBar;